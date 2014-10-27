---
layout: post
title: "Hackathon demo: cortical.io words"
description: ""
tags: comportexviz, language
---
{% include JB/setup %}


Last weekend I joined [Numenta's Fall 2014
Hackathon](http://www.meetup.com/numenta/events/202402962/). A
fantastic event. It underscores Numenta's approach of being totally
open with their work and supportive of the community.

It feels like we are at the cusp of a revolution, where a few more
good ideas will really make this thing fly. So it was inspiring to
hear from Jeff Hawkins and others about the current challenges. 

I was particularly glad to meet fellow functional programmers
including Fergal Byrne (system designer and Clojurist), Marcus Lewis
(Clojurist / Clojurescripter), Rian Shams (Racketeer) and Eric
McCarthy (Lisper).

My hack was a [cortical.io](cortical.io) encoder, to give a semantic
representation of words for input to HTM. In Comportex. The approach
was to make requests to the [cortical.io REST
API](http://www.cortical.io/developers_apidocumentation.html) and
store the results in a cache used by the encoder itself. I did this in
both Clojure (JVM) and Clojurescript (Javascript) implementations.
Since `cortical.io` produces two dimensional bit arrays, I also
implemented two dimensional field visualisations in ComportexViz.

Here it is: [interactive demo of cortical.io
encoder](/assets/2014-10-27/cortical_io.html).

> __Note:__ will load ~800k of Javascript. Maximise browser window
> before loading page. Google Chrome browser recommended.

Er there is also [a video](http://www.youtube.com/watch?v=hE6alw_HHrk)
of me presenting this... but I didn't present it well. I was so
focused on getting something working that I put zero minutes of
preparation into the talk. I did not even try to address *why* I use
Clojure. But Rian Shams did give [a nice introduction to the joys of
functional programming](http://www.youtube.com/watch?v=Zz5fFAEYKHc).
Good on him.


*--Felix*


## The code

The demo here was compiled from
[Comportex](https://github.com/nupic-community/comportex/) 0.0.5 with
[ComportexViz](https://github.com/nupic-community/comportexviz/) 0.0.5.
