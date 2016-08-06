---
layout: post
title: "Temporal Pooling of Isolated Sequences"
description: ""
tags: [comportex, comportexviz, temporal-pooling]
---
{% include JB/setup %}

_In which I fall back to testing temporal pooling on the simplest
possible problem, that of fixed sequences presented in isolation from
each other. I find that simple sequences do get a temporal pooling
representation that is both sensitive and specific. Longer sequences
are not fully covered due to the decay rate in temporal pooling
scores; this needs rethinking. Sequences which start the same and
later diverge give rise to pooled representations over them both
together, as well as each unique sub-sequence._

In my recent post I tested a temporal pooling algorithm on an input
stream consisting of fixed sequences randomly mixed together, with
poor results. On [Rob Freeman's
suggestion](http://lists.numenta.org/pipermail/nupic-theory_lists.numenta.org/2014-September/001377.html)
I went on to test it with the simpler problem of fixed sequences in
isolation. I should have done that first, of course...

## See it run

The problem uses the same fixed sequences as last time but presented
randomly in series, separated by a small gap. As before this problem
comes with an interactive demo.

[Sequences in isolation](/assets/2014-09-29/isolated_1d.html)

_Note: Maximise browser window before loading page. Google Chrome
browser recommended.

The sequence are well predicted after a few hundred time steps, and
consequently temporal pooling emerges in the higher-level region.

As before, let's try to measure this.

## Measurement

So I "warmed up" the system for 4000 time steps, keeping the following
2000 time steps. I filtered them down to where the given pattern
occurs (excluding the first step it appears on, which is
unpredictable), and selected the top 3 most frequently active temporal
pooling cells. These are my candidates.

It is then a simple matter to compute sensitivity, specificity and
precision for each candidate cell. The results are shown in the
following table.

{% raw %}
<style>
td, th { white-space: nowrap; }
</style>
{% endraw %}

|   pattern |  candidate |  in-steps |  out-steps |  active-in |  active-out |  sensitivity |  specificity |  precision |
|-----------+------------+-----------+------------+------------+-------------+--------------+--------------+------------|
|    run-0-5 |          0 |       154 |        925 |        154 |           0 |         1.00 |         1.00 |       1.00 |
|    run-0-5 |          1 |       154 |        925 |        154 |           0 |         1.00 |         1.00 |       1.00 |
|    run-0-5 |          2 |       154 |        925 |        154 |           0 |         1.00 |         1.00 |       1.00 |
|    rev-5-1 |          0 |        96 |        990 |         96 |           0 |         1.00 |         1.00 |       1.00 |
|    rev-5-1 |          1 |        96 |        990 |         96 |           0 |         1.00 |         1.00 |       1.00 |
|    rev-5-1 |          2 |        96 |        990 |         96 |           0 |         1.00 |         1.00 |       1.00 |
|   run-6-10 |          0 |       132 |        945 |        132 |         104 |         1.00 |         0.89 |       0.56 |
|   run-6-10 |          1 |       132 |        945 |        132 |         116 |         1.00 |         0.88 |       0.53 |
|   run-6-10 |          2 |       132 |        945 |        132 |         116 |         1.00 |         0.88 |       0.53 |
|  jump-6-12 |          0 |       116 |        965 |        116 |         132 |         1.00 |         0.86 |       0.47 |
|  jump-6-12 |          1 |       116 |        965 |        116 |         132 |         1.00 |         0.86 |       0.47 |
|  jump-6-12 |          2 |       116 |        965 |        116 |         128 |         1.00 |         0.87 |       0.48 |
|       twos |          0 |       231 |        846 |        198 |           0 |         0.86 |         1.00 |       1.00 |
|       twos |          1 |       231 |        846 |        198 |           0 |         0.86 |         1.00 |       1.00 |
|       twos |          2 |       231 |        846 |        198 |           0 |         0.86 |         1.00 |       1.00 |
|  saw-10-15 |          0 |       203 |        879 |        203 |           0 |         1.00 |         1.00 |       1.00 |
|  saw-10-15 |          1 |       203 |        879 |        174 |           0 |         0.86 |         1.00 |       1.00 |
|  saw-10-15 |          2 |       203 |        879 |        174 |           0 |         0.86 |         1.00 |       1.00 |

The results are encouraging. The first two patterns are pooled over
perfectly by several candidate cells. The next two---`run-6-10` and
`jump-6-12`---show good sensitivity but lower specificity (precision
only 50%). The last two patterns---`twos` and `saw-10-15`---show good
specificity but reduced sensitivity at 86% (although one cell managed
to cover `saw-10-15` completely).

## ad-lib hypotheses

* Patterns `run-6-10` and `jump-6-12` share their first few elements
so are probably pooled over by the same cells (thus 50%-50%
precision). I hope there will be other cells which distinguish them by
pooling over the parts which make them unique.

* The last two patterns are the longest sequences. The temporal
pooling scores decay over time and so towards the end of the sequence
they may start to be dominated by current feed-forward activation,
even in the absence of bursting.

## Sensitivity over long sequences

Let's look over the same plot as last time, showing candidate cell
activations over each pattern instance. This display helps to diagnose
problems with sensitivity (coverage of the target sequence) so it only
makes sense to look at those with imperfect sensitivity, `twos` and
`saw-10-15`. Here we show cells in red for active and in black for
inactive.

{% raw %}
<script src="http://variancecharts.com/cdn/variance-noncommercial-standalone-6d26aa2.min.js"
        charset="UTF-8"></script>
<style>
#runs-plot {
  width: 800px;
  height: 300px;
  margin-left: -60px;
  padding: 40px 20px 40px 60px;
  color: #444444;
  font-family: Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 14px;
}
#runs-plot chart {
  width: 100%;
  height: 45%;
  margin-bottom: 40px;
  background-color: rgba(0,0,0,0.05);
}
#runs-plot .legend-y {
  position: absolute;
  left: -80px;
  top: 50%;
  transform: rotate(-90deg);
}
#runs-plot .legend-x {
  position: absolute;
  width: 100%;
  text-align: center;
  bottom: -30px;
}
#runs-plot .chart-title {
  position: absolute;
  width: 100%;
  text-align: left;
  top: -20px;
}
#runs-plot point {
  width: 6px;
  height: 6px;
  margin-left: -3px;
  margin-top: -3px;
}
#runs-plot .active1 point {
  background-color: rgba(255,0,0,0.5);
}
#runs-plot .active0 point {
  background-color: rgba(0,0,0,0.5);
}
#runs-plot range {
  background-color: rgba(0,0,0,0.10);
  border: 1px solid rgba(0,0,0,0.15);
  border-width: 0px 1px;
}
</style>
<div id="runs-plot">

  <link id="twos-consistency"
      rel="variance-data"
      href="/assets/2014-09-29/isolated-twos-consistency.csv" />
  <chart data="#twos-consistency"
         map-xy="x candidate"
         scale-x-linear="0 11"
         scale-y-linear="14.5 -0.5">
    <span class="chart-title">Pattern "<tt>twos</tt>"</span>
    <span class="legend-y">15 candidate cells</span>
    <groups by="active">
    <div class="active{{active}}">
      <points></points>
    </div>
    </groups>
<div class="ranges">
<range literal-x-extent="0 1"></range>
<range literal-x-extent="2 3"></range>
<range literal-x-extent="4 5"></range>
<range literal-x-extent="6 7"></range>
</div>
  </chart>

  <link id="saw-10-15-consistency"
      rel="variance-data"
      href="/assets/2014-09-29/isolated-saw-10-15-consistency.csv" />
  <chart data="#saw-10-15-consistency"
         map-xy="x candidate"
         scale-x-linear="0 11"
         scale-y-linear="14.5 -0.5">
    <span class="chart-title">Pattern "<tt>saw-10-15</tt>"</span>
    <span class="legend-y">15 candidate cells</span>
    <span class="legend-x">Pattern instance</span>
    <groups by="active">
    <div class="active{{active}}">
      <points></points>
    </div>
    </groups>
<div class="ranges">
<range literal-x-extent="0 1"></range>
<range literal-x-extent="2 3"></range>
<range literal-x-extent="4 5"></range>
<range literal-x-extent="6 7"></range>
<range literal-x-extent="8 9"></range>
</div>
  </chart>
</div>
{% endraw %}

The plot shows that indeed that some cells falter at the end of the
sequence, while others start later, missing the first part but
reaching to the end. The logical OR of these cells would be enough to
fully cover the sequence.

I ran a simulation with another even higher-level region, and the
statistics are essentially the same. The decay rate of temporal
pooling scores is the same in the higher region so the same thing is
happening. I think the mechanism needs reworking here.


## Specificity to distinct subsequences

Two patterns had problems with specificity, `run-6-10` and
`jump-6-12`. Their values are as follows

| `run-6-10`  | `[6 7 8 9 10]             ` |
| `jump-6-12` | `[6 7 8 11 12]            ` |

Since the first step of all sequences is unpredictable it is ignored
for pooling. The remainder consists of 2 shared values and 2 unique
values each. If we look down the list of candidate cells there are in
fact some cells which cover 50% (2 steps) of each pattern with 100%
specificity:

|    pattern |  candidate |  in-steps |  out-steps |  active-in |  active-out |  sensitivity |  specificity |  precision |
|------------+------------+-----------+------------+------------+-------------+--------------+--------------+------------|
|   run-6-10 |          0 |       132 |        945 |        132 |         104 |         1.00 |         0.89 |       0.56 |
|   run-6-10 |          1 |       132 |        945 |        132 |         116 |         1.00 |         0.88 |       0.53 |
|   run-6-10 |        ... |       ... |        ... |        ... |         ... |          ... |          ... |        ... |
|   run-6-10 |         13 |       132 |        945 |         66 |           0 |     **0.50** |     **1.00** |       1.00 |
|   run-6-10 |         14 |       132 |        945 |         66 |           0 |         0.50 |         1.00 |       1.00 |
|            |            |           |            |            |             |              |              |            |
|  jump-6-12 |          0 |       116 |        965 |        116 |         132 |         1.00 |         0.86 |       0.47 |
|  jump-6-12 |          1 |       116 |        965 |        116 |         132 |         1.00 |         0.86 |       0.47 |
|  jump-6-12 |        ... |       ... |        ... |        ... |         ... |          ... |          ... |        ... |
|  jump-6-12 |         16 |       116 |        965 |         58 |           0 |     **0.50** |     **1.00** |       1.00 |
|  jump-6-12 |         17 |       116 |        965 |         58 |           0 |         0.50 |         1.00 |       1.00 |

So that's good---we have some cells representing "something starting
with `[6 7 8]`" and other cells specific to each which appear at their
point of divergence.

## Thoughts

The mechanism I am using (which, by the way, was first [articulated by
Jake
Bruce](http://lists.numenta.org/pipermail/nupic-theory_lists.numenta.org/2014-August/001112.html))
produces a stream of temporal pooling cells over the life of a
sequence. That has some nice-seeming properties and some potential
problems.

If we see a sequence starting from the second element, it will
activate some of these pooling cells but not the ones which are
normally activated on the first element. It seems to me that these
original pooling cells should be reactivated somehow from observing
later parts of the sequence. [I have raised this question
before](http://lists.numenta.org/pipermail/nupic-theory_lists.numenta.org/2014-August/001138.html).
One way this could work is by lateral activation between temporal
pooling cells; as they stay active they continue to learn lateral
connections to each other. Then any subset of them could complete the
missing ones _if enough lateral activation were enough to activate
cells even without feed-forward input_.


As always, I value your advice.

*--Felix*


## The code

The demo here was compiled from
[Comportex](https://github.com/floybix/comportex/) 0.0.3-SNAPSHOT with
[ComportexViz](https://github.com/floybix/comportexviz/) 0.0.3-SNAPSHOT.

The extra analysis code is here:
[temporal_pooling_experiments.clj](/assets/2014-09-26/temporal_pooling_experiments.clj).
