---
layout: post
title: "HTM protocols"
description: ""
tags: [comportex]
---
{% include JB/setup %}

_In which I explain two of the central abstractions in Comportex (my
HTM project). Firstly the decomposition of a time step into
activation, learning, and depolarisation phases across an HTM network.
Secondly the interface for working with synapse connection graphs. I
need to know if my abstractions have problems, before I go further
down the road of building on them. Also, they may help others to think
about HTM in software._

In Clojure, [protocols](http://clojure.org/protocols) make
abstractions. They are minimalist. Elegant weapons, for a more...
civilized age <sup>[[1]](http://xkcd.com/297/)</sup>. Defining a
protocol simply creates the named functions, but leaves their
implementations to be supplied separately as needed.

Comportex's protocols cover networks, regions, layers, synapses,
sensory inputs, encoders and topologies in about 150 lines (er, thanks
in part to the paucity of documentation), and can be read in full at
[protocols.cljc](https://github.com/nupic-community/comportex/blob/master/src/org/nfrac/comportex/protocols.cljc).

I would like to focus on two protocols.

## Activate, Learn, Depolarise

I try to follow [Rich Hickey's design
philosophy](http://thechangelog.com/rich-hickeys-greatest-hits/):
design is about "taking things apart so you can put them back
together". He talks about making sure each component is just doing one
thing, "decomplecting" concerns to make something simple.

In my early work on Comportex I had a `step` function for regions
which activated cells, performed learning by updating synapses, and
calculated depolarised cells. These concerns were complected.

Eventually I started thinking about networks of regions, where there
are feed-forward inputs to regions from below, but also feedback
connections from above, motor signal connections from below and maybe
other connections. As I imagine it the feed-forward inputs should
propagate through the whole network first, then feedback, motor, and
other signals to distal synapses propagate afterwards. So the feedback
passed down would reflect the state of higher regions _after_ they
received feed-forward input from the same time step.

This idea is behind the `PHTM` protocol (the prefix `P` is
conventional). To satisfy the protocol, an object must implement its
functions: `htm-sense`, `htm-activate`, `htm-learn`, `htm-depolarise`.
Such an implementation is given in
[core.cljc](https://github.com/nupic-community/comportex/blob/master/src/org/nfrac/comportex/core.cljc)

> **UPDATE 2014-11-25:** Originally I had sensory input on each time
> step arriving via input sources/channels embedded in an HTM model.
> [Marcus Lewis](https://twitter.com/mrcslws) helped me to realise the
> path of functional purity (and clojurescript compatibility) lies in
> passing the input value as an argument to the step function. Exactly
> the kind of feedback I needed.

> **UPDATE 2015-08-28:** The activation step has been further
> decomposed into `htm-sense` to encode input senses and
> `htm-activate` to do the feed-forward pass through the network,
> activating cells and columns. See
> [issue #19](https://github.com/nupic-community/comportex/issues/19#issuecomment-133713863).

{% highlight clojure %}
(defprotocol PHTM
  "A network of regions, forming Hierarchical Temporal Memory."
  (htm-sense [this in-value]
  (htm-activate [this])
  (htm-learn [this])
  (htm-depolarise [this]))

(defn htm-step
  [this in-value]
  (-> this
      (htm-sense in-value)
      (htm-activate)
      (htm-learn)
      (htm-depolarise)))
{% endhighlight %}

I define a function here too, `htm-step`, which takes an object
satisfying the `PHTM` protocol and applies to it the functions in
canonical order. This function returns the HTM network advanced one
time step and is the centrepiece of the API.

Depolarisation comes after activation because we often want to use
depolarised cells to make predictions of the next time step. One
consequence of this design is that motor signals, which act to
depolarise cells, should appear the timestep _before_ a corresponding
sensory (feed-forward) signal in order to be useful. I think that is
reasonable.

Learning comes before depolarisation because it needs to know the
previously depolarised cells (when "punishing" unfulfilled
predictions); if learning was the last phase we would need to store
the values for an extra step---not a big deal but slightly less
elegant.

Of course for all this to work it needs to call corresponding
functions on individual regions, and within regions on layers of
cells.

{% highlight clojure %}
(defprotocol PRegion
  "Cortical regions need to extend this together with PTopological,
   PFeedForward, PTemporal, PParameterised."
  (region-activate [this ff-bits stable-ff-bits])
  (region-learn [this ff-bits])
  (region-depolarise [this distal-ff-bits distal-fb-bits]))
{% endhighlight %}

Here the `ff-bits` argument is the set of active bits coming in
through a feed-forward pathway, and `fb-bits` is the set of bits
coming in through a feed-back pathway. In the depolarise function
there is the odd "`distal-ff-bits`" argument: this will be motor
commands from below and maybe sensory too. I separate ff from fb in
the depolarise function because we might want to selectively enable or
disable feedback.

And similarly within a region there are `layer-activate`,
`layer-learn`, `layer-depolarise` functions.


## Synapse Graphs

The information content and computational load of HTMs is in the
synapse connections. Usually, proximal synapses are represented and
used very differently to distal synapses (e.g. in Numenta's CLA White
Paper). Potential proximal synapses are represented as a fixed
explicit list, whereas distal synapses start empty and grow and die
over time. I wanted to try the latter implicit approach for proximal
synapses too. This led to a protocol encompassing both cases.

Synapse graphs as presented here represent the connections from a set
of sources to a set of targets. In the case of proximal synapses the
sources will be input bits and the targets will be columns. In the
case of distal synapses the sources will be cells (typically in the
same layer but not necessarily) and the targets will be distal
dendrite segments.

The choice of how to represent the set of potential synapses,
explicitly or implicitly, can be made separately.

> **UPDATE 2015-08-28:** Originally I had defined functions here that
> operated on a single synaptic target at a time, reinforcing its
> synapses or adding or removing synapses. So the learning algorithms
> involved looping over a lot of targets to update each
> one. Essentially, procedural programming.
>
> I realised a better way is to build a list representing the updates,
> before applying those updates in one go: `bulk-learn`. Like the way
> Datomic works, you build up transaction data structures before
> submitting them. This is faster because it allows transient mutation
> to be used (we don't need intermediate states); allows the updates
> to be inspected easily; and is just cleaner.
>
> Also, I moved `excitations`, the function calculating activity in a
> whole layer of cells given its input bits, into the protocol. As
> with `bulk-learn`, abstracting the process improved performance by
> allowing internal use of transients.

{% highlight clojure %}
(defprotocol PSynapseGraph
  "The synaptic connections from a set of sources to a set of targets.
   Synapses have an associated permanence value between 0 and 1; above
   some permanence level they are defined to be connected."
  (in-synapses [this target-id]
    "All synapses to the target. A map from source ids to permanences.")
  (sources-connected-to [this target-id]
    "The collection of source ids actually connected to target id.")
  (targets-connected-from [this source-id]
    "The collection of target ids actually connected from source id.")
  (excitations [this active-sources stimulus-threshold]
    "Computes a map of target ids to their degree of excitation -- the
    number of sources in `active-sources` they are connected to -- excluding
    any below `stimulus-threshold`.")
  (bulk-learn [this seg-updates active-sources pinc pdec pinit]
    "Applies learning updates to a batch of targets. `seg-updates` is
    a sequence of SegUpdate records, one for each target dendrite
    segment."))
{% endhighlight %}

A question arises of how to look up the target dendrite segments by
cell in this model (since target ids refer to segments, not cells).
This can be solved with another protocol which is extended only to
distal synapse graphs:

{% highlight clojure %}
(defprotocol PSegments
  (cell-segments [this cell-id]
    "A vector of segments on the cell, each being a synapse map."))
{% endhighlight %}


## Alternative backends

Protocols leave their implementation open, so as long as we program to
protocols we can write and use alternative backends. This will be
important. The demos I run in Comportex today are at a tiny toy scale.
But Fergal Byrne has been designing a scalable architecture for
running HTMs in Clojure, in
[Clortex](https://github.com/nupic-community/clortex). I hope that
with the right protocols our efforts can be made to work together.


As always, I value your thoughts.

*--Felix*
