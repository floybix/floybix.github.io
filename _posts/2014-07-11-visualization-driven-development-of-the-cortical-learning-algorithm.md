---
layout: post
title: "Visualization Driven Development of the Cortical Learning Algorithm"
description: ""
tags: [comportex, comportexviz]
---
{% include JB/setup %}

I've spent the last few months trying to build the Cortical Learning
Algorithm, the core of [HTM](https://numenta.com/technology/), from
scratch. Partly to understand it deeply myself, and partly to help
others understand it. My building material is Clojure. I have
something that looks reasonable now, but it has certainly exposed a
lot of intricacies in the algorithm that are not clear, and some which
are probably open research questions.

To understand an algorithm, one must of course grasp the idea of it,
and also follow the procedure in code. (I don't like pseudo-code as it
often skips important details or even turns out to be incorrect.) But
that will not be enough to know what the algorithm will do when played
out over time. To get there, interactive graphic displays are your
friend. They help gain an intuitive understanding as well as answer
specific questions, and to diagnose problems quickly. This is known as
[Visualization Driven Development](
https://github.com/Element84/vdd-core/wiki/What-is-Visualization-Driven-Development%3F).

In my case I was able to run the algorithm directly in a web browser
(since pure Clojure can be compiled to Javascript), which makes it
easier to build an accessible interactive visualization.

I have started with a one-dimensional input array and a
one-dimensional region of mini-columns. This allows the states to be
lined up over time on the horizontal axis. Color is fundamental to the
display:

* __red__ represents active states (of input bits, columns, cells,
    segments)
* __blue__ represents predicted states (of input bits, columns, cells)
* accordingly, __purple__ represents simultaneously active and
  predicted states.

The simulation can be run and paused for detailed investigation. A
typical example would be to notice some feature of the model, say a
bursting (unpredicted) column where one hoped the input had already
been learned; at this point stop the simulation and click on the
column to reveal its constituent cells and their dendrite
segments. Use the arrow keys to step forwards and backwards in time,
and check which cells, segments and synapses are involved and how they
are being modified. Full details are given in a text box.

The algorithm parameters are shown and can be changed either during a
run, or after a reset. Please refer to the [annotated source
code](http://floybix.github.io/comportex/) of the algorithm for
descriptions of each of the parameters.

Here it is with four different input streams, presented on separate
pages.

* [Simple Steps](/assets/2014-07-11/simple_steps.html)
* [Signal Steps](/assets/2014-07-11/signal_steps.html)
* [Mixed Fixed](/assets/2014-07-11/mixed_fixed_1d.html)
* [Block Steps](/assets/2014-07-11/block_steps.html)

> __Note:__ Maximise browser window before loading page. Google Chrome
> browser recommended.


## The code

The demos here are compiled from
[Comportex](https://github.com/floybix/comportex/) 0.0.1 with
[ComportexViz](https://github.com/floybix/comportexviz/) 0.0.1.


## Unresolved questions

I should emphasise that I am not sure what I have implemented here is
true to Numenta's algorithm. And it does not include temporal pooling
yet in any form. My reference was primarily the Numenta CLA White
Paper but ignoring the temporal pooling aspects (since theory has
moved on since it was written). But it leaves some details
unclear.[*](#note1)  Some specific questions:

1. How frequently does boosting in the spatial pooler apply? If
we apply it continuously over a rolling 1000-timestep window, the same
set of columns may be repeatedly boosted hundreds of times before the
long-term average is affected and boosting turns off. On the other
hand if we only apply boosting once every 1000 timesteps (as currently
implemented) this generates a sharp change where all active columns
switch off, and inactive columns switch on, every 1000 steps.

2. How do lateral synapses (on dendrite segments) refine their
predictions? The White Paper implies -- if I understand correctly -- that
if a cell stops predicting, without first becoming active, then the
last active dendrite segments are punished (their active synapses have
their permanence reduced). I have tried to implement this. But I
couldn't find code for it in NuPIC.

3. How exactly is the learning cell and segment chosen from a bursting
column? And from a predicted column with multiple active segments? Do
we choose segments based on their activation level from "learning"
cells? If there are too few, do we fall back to activation from all
active cells? How should we break ties?

4. Can multiple cells per column be in a predictive state? If so, can
there be multiple learning cells per column? Otherwise, how are they
resolved? If one active cell is chosen to be reinforced, should other
active cells be reinforced too, or punished to differentiate them, or
ignored?

5. Should we reinforce active synapses only to learning cells, or to
all active cells?

6. Should a cell learn only when it changes state, or every time step?

_UPDATE: Chetan very helpfully answered my questions on the mailing
list
[here](http://lists.numenta.org/pipermail/nupic-theory_lists.numenta.org/2014-July/000899.html).
My implementation matches his description except for point 6 (I had
learning every time step even on continuing cells)._

## Pressing ahead

The most obvious major features to do next are:

* add noise to the inputs, with interactive controls;
* two-dimensional input fields and column arrangements;
* hierarchy -- regions feeding forward into other regions;
* temporal pooling (the new theory).

I want to get some more interesting examples going to motivate further
development.

Looking forward to hearing your thoughts on the [Numenta mailing
lists](http://numenta.org/lists/) or by direct email.


*--Felix*


<a name="note1">*</a><span style="font-size: 80%"> _I also looked
through the NuPIC source code but could not find answers to all my
questions. It has a mix of different methods, many targeting
classifier accuracy rather than general learning._ </span>
