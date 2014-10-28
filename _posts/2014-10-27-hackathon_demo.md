---
layout: post
title: "Hackathon demo: cortical.io encoder"
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
including _system designer and Clojurist_ Fergal Byrne, _Clojurist /
Clojurescripter_ Marcus Lewis, _Racketeer_ Rian Shams and _Lisper_
Eric McCarthy.

My hack was a [cortical.io](cortical.io) encoder, for semantic
representation of words as input to HTM. In Comportex. The approach
was to make requests to the [cortical.io REST
API](http://www.cortical.io/developers_apidocumentation.html) and
store the results in a cache used by the encoder itself. I did this in
both Clojure (JVM) and Clojurescript (Javascript) implementations.
Since `cortical.io` produces two dimensional bit arrays, I also
implemented two dimensional field visualisations in ComportexViz.

**Here it is:** [interactive demo of cortical.io
encoder](/assets/2014-10-27/cortical_io.html).

> __But__ until cortical.io change their server configuration to allow
> [CORS requests](http://www.html5rocks.com/en/tutorials/cors/) this
> does not work; a workaround is to start Google Chrome like this:<br/>
> `google-chrome --disable-web-security`

> __Note:__ will load ~800k of Javascript and may take up to a minute
> to initialise. Maximise browser window before loading page. Google
> Chrome browser recommended.

Er, there is also [a video](http://www.youtube.com/watch?v=hE6alw_HHrk)
of me presenting this... but I didn't present it well. I was so
focused on getting something working that I put zero minutes of
preparation into the talk. I did not even try to address *why* I use
Clojure. But Rian Shams did give [a nice introduction to the joys of
functional programming](http://www.youtube.com/watch?v=Zz5fFAEYKHc).
Good on him.


## The code

The demo here was compiled from
[Comportex](https://github.com/nupic-community/comportex/) 0.0.5 with
[ComportexViz](https://github.com/nupic-community/comportexviz/) 0.0.5.

The Clojure version of the encoder is just this:

{% highlight clojure %}
(ns org.nfrac.comportex.cortical-io
  (:require [org.nfrac.comportex.protocols :as p]
            [org.nfrac.comportex.topology :as topology]
            [org.nfrac.comportex.util :as util]
            [clojure.string :as str]
            [clj-http.client :as http]))

(def base-uri "http://api.cortical.io/rest")

(def retina-size [128 128])

(def query-params {:retina_name "en_associative"})

(defn get-fingerprint
  [api-key term]
  (http/post (str base-uri "/expressions")
             {:query-params query-params
              :content-type :json
              :as :json
              :form-params {:term term}
              :with-credentials? false
              :throw-exceptions false
              :headers {"api-key" api-key}}))

(defn get-similar-terms
  [api-key bits max-n]
  (http/post (str base-uri "/expressions/similar_terms")
             {:query-params (assoc query-params
                              :get_fingerprint true
                              :max_results max-n)
              :content-type :json
              :as :json
              :form-params {:positions bits}
              :with-credentials? false
              :throw-exceptions false
              :headers {"api-key" api-key}}))

(defn apply-offset
  [xs offset]
  (->> xs
       (map #(+ % offset))
       (into (empty xs))))

(defn random-sdr
  []
  (let [size (apply * retina-size)]
   (set (repeatedly (* size 0.02)
                    #(util/rand-int 0 (dec size))))))

(defn look-up-fingerprint
  "Returns a fingerprint for the term, being a set of active indices.
   If the term is not found in the cache, makes a synchronous call to
   cortical.io REST API and stores the result in the cache (an atom).
   If the request to cortical.io fails, the term is assigned a new
   random SDR."
  [api-key cache term]
  (let [term (str/lower-case term)]
    (or (get @cache term)
        (get (swap! cache assoc term
                    (let [result (get-fingerprint api-key term)]
                      (if (http/success? result)
                        (set (get-in result [:body :positions]))
                        (do (println "cortical.io lookup of term failed:" term)
                            (println result)
                            (random-sdr)))))
             term))))

(defn cortical-io-encoder
  [api-key cache min-votes]
  (let [topo (topology/make-topology retina-size)]
    (reify
      p/PTopological
      (topology [_]
        topo)
      p/PEncodable
      (encode
        [_ offset term]
        (if (seq term)
          (cond->
           (look-up-fingerprint api-key cache term)
           (not (zero? offset)) (apply-offset offset))
          #{}))
      (decode
        [_ bit-votes n]
        (let [bits (keep (fn [[i votes]]
                           (when (>= votes min-votes) i))
                         bit-votes)]
          (if (empty? bits)
            []
            (let [result (get-similar-terms api-key bits n)]
              (if (http/success? result)
                (->> (:body result)
                     (map (fn [item]
                            {:value (get item :term)})))))))))))
{% endhighlight %}

If used directly, the encoder above makes synchronous calls to the
REST API, which will slow things down. A better way is to run a
separate thread to do the API calls while the main thread takes care
of the HTM algorithm. Code for that is given in
[cortical_io_channel.clj](https://github.com/nupic-community/comportex/blob/master/src/cljx/org/nfrac/comportex/demos/cortical_io_channel.clj#L65).


## Results?

Not really.

Just as the hackathon was wrapping up I fed in some of [these
children's
stories](https://github.com/numenta/nupic.nlp-examples/tree/master/resources/text)
repeated a couple of times. I ended up just feeding them in as a
continuous stream of words without sentence breaks. Then I fed in the
start of a sentence and looked up the top prediction of the next word.
I fed that in as actual input, then asked for the next word, etc. I
call this a stream of associations. It was not scientific at all but
here are a couple of the more interesting samples:

{% highlight clojure %}
> (submit "the poor little")
> (stream-of-associations 20)
red
riding
hood
said
it
is
little
hoops
arranged
gone
left-handed
and

> (submit "what a good")
> (stream-of-associations 20)
time
at
mother
duck
said
he
sure
{% endhighlight %}


## Issues

As Jeff mentioned during Francisco Webber's talk at the hackathon, the
spatial clustering in cortical.io fingerprints may actually be
undesirable for use in HTM. Because there is local inhibition of
column activation, if there are only a few small clusters of input
bits, this may produce a too-sparse activation pattern, losing
information.

Also, the lookup of similar terms usually seems to produce unlikely
suggestions. This may be resolved by refining the proximal synapse
fields after long training. But for quick usage it seems we get more
reasonable results by comparing the predicted bits directly against
the words we have seen before.

And of course performance. In particular, my Clojurescript
implementation is very very slow.


*--Felix*

