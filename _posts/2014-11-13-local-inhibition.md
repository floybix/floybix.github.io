---
layout: post
title: "Local inhibition algorithm"
description: ""
tags: [comportex]
---
{% include JB/setup %}

A crucial step in HTM is the selection of neural columns to become
active, given their feed-forward inputs. Essentially, only those with
most excitation will be activated, forming a sparse representation.
But the details could be important. Real neural columns, [I am
told](http://lists.numenta.org/pipermail/nupic-theory_lists.numenta.org/2014-September/001304.html),
on firing trigger a wave of inhibition in the surrounding area.


## Inhibition algorithms in NuPIC

In NuPIC the seemingly universal choice is [global
inhibition](https://github.com/numenta/nupic/blob/df37f7853775efd771d2822a671bafc2c18286b8/nupic/research/spatial_pooler.py#L1352)
of columns. The top few columns with highest excitation are selected
to become active, ignoring any spatial relationships between them. The
justification for this is computational performance; a comment in the
code warns of a 60x performance difference between the global vs local
algorithms.

The [local inhibition algorithm in
NuPIC](https://github.com/numenta/nupic/blob/df37f7853775efd771d2822a671bafc2c18286b8/nupic/research/spatial_pooler.py#L1378)
works as follows. Taking the target activation density---typically 2%
(as with the global algorithm)---it keeps just that number of the
most active columns in each sliding window over the column space. So
inhibition is applied in local spatial areas, but within each area the
spatial relationships between columns are still ignored.

The local window size is not a parameter but is
[calculated](https://github.com/numenta/nupic/blob/df37f7853775efd771d2822a671bafc2c18286b8/nupic/research/spatial_pooler.py#L831)
as the average receptive field size, mapped back from the input space
to the column space.


## Proposed algorithm

I have tried to model the inhibitory waves around active columns, and
their relative timing to some extent. Keep in mind that my
neuroscience knowledge is poor.

In a nutshell, starting with the most excited columns and working
down, each becomes active and inhibits all neighbours within a _base
distance_; it may also inhibit further neighbours within an outer
_radius_ if their excitation is sufficiently low. Specifically, if the
neighbour's excitation level is below a linear ramp from the original
column's level down to zero at the outer radius. That radius is
defined by the average receptive field size. As soon as any column is
inhibited in this process it is removed from consideration.

That is the inhibition algorithm itself, but notice that it does not
enforce any particular activation density. Also it may be overly
sensitive to noise in areas lacking any real signal (a criticism that
probably applies to any local algorithm). So, in addition, I have made
the _stimulus threshold_ an adaptive parameter, changing slightly each
time step according to the actual vs target activation density.
Columns with excitation below the stimulus threshold can not become
active. This is a global mechanism, but operates at a longer time
scale; perhaps there is some neurochemical process like this?


## Interactive demonstration

The plot below shows 200 columns along the x axis with some generated
excitation levels on the y axis. Red columns are active. Hit the
**Step** button a few times to see the actual activation level
converge on the target activation level, and to contrast this kind of
local inhibition with global inhibition (mirrored below the axis):

{% raw %}
<iframe src="/assets/2014-11-13/local_inhibition/inhibition_viz.html" width="620" height="500">
Your browser does not support iframes.
</iframe>
{% endraw %}

And a similar demonstration in 2D:

{% raw %}
<iframe src="/assets/2014-11-13/local_inhibition/inhibition_2d_viz.html" width="620" height="550">
Your browser does not support iframes.
</iframe>
{% endraw %}

Finally here is a basic example of the algorithm running in HTM:

<a href="/assets/2014-11-13/demos/isolated_2d.html">Isolated fixed sequences 2D</a>.


## Perf

Of course local inhibition is slower to compute than the simple global
approach, which scales approximately linearly by the number of
columns. But it is not as bad as _(number of columns) X (inhibition
radius)_, because as columns are inhibited they are removed and
ignored. The performance depends on distributional properties of the
input. Also the stimulus threshold works to reduce the problem size.
In one test I ran on Comportex, the local algorithm was about 30X
slower than a simple sort. However, usually the inhibition step is not
the slowest part of a time step in Comportex; rather, learning on
proximal synapses takes longer.


## The code

The demonstrations here were compiled from ComportexViz 0.0.6
([local-inhibition-1d.cljs](https://github.com/nupic-community/comportexviz/blob/master/examples/local_inhibition/comportexviz/local-inhibition-1d.cljs),
[local-inhibition-2d.cljs](https://github.com/nupic-community/comportexviz/blob/master/examples/local_inhibition/comportexviz/local-inhibition-2d.cljs)).
with Comportex 0.0.6
(inhibition code is in
[inhibition.cljx](https://github.com/nupic-community/comportex/blob/9af5dd11ad1b9971eaee81e2190288c1576d7878/src/cljx/org/nfrac/comportex/inhibition.cljx#L64)
and tuning the stimulus threshold is in
[cells.cljx](https://github.com/nupic-community/comportex/blob/9af5dd11ad1b9971eaee81e2190288c1576d7878/src/cljx/org/nfrac/comportex/cells.cljx#L494)).


As always, I value your advice.

*--Felix*
