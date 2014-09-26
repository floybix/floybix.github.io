(ns floybix.temporal-pooling-experiments
  "Testing for temporal pooling.
   Look for cells that correspond to specific patterns."
  (:require [org.nfrac.comportex.core :as core]
            [org.nfrac.comportex.encoders :as enc]
            [org.nfrac.comportex.util :as util
             :refer [count-filter round]]
            [org.nfrac.comportex.demos.mixed-gaps-1d :as demo]
            [clojure.string :as str]
            [clojure.pprint :refer [pprint print-table]]))

(def spec
  {:ncol 1000
   :potential-radius-frac 0.1
   :activation-level 0.02
   :global-inhibition false
   :stimulus-threshold 3
   :sp-perm-inc 0.05
   :sp-perm-dec 0.01
   :sp-perm-signal-inc 0.05
   :sp-perm-connected 0.20
   :duty-cycle-period 100000
   :max-boost 2.0
   ;; sequence memory:
   :depth 8
   :max-segments 5
   :max-synapse-count 18
   :new-synapse-count 12
   :activation-threshold 9
   :min-threshold 7
   :connected-perm 0.20
   :initial-perm 0.16
   :permanence-inc 0.05
   :permanence-dec 0.01
   })

;; see mixed-gaps-1d.cljx
(defn pattern-starting?
  [patt]
  (when-let [i (:index patt)] (zero? i)))

(defn in-body-of-pattern?
  [patt]
  (when-let [i (:index patt)] (pos? i)))
  
(defn out-of-pattern?
  [patt]
  (nil? (:index patt)))

(defn ac-series
  "Runs the model for the given timesteps and keeps just the input
   values and the set of active cells from each region."
  [model & {:keys [warmup simlength stop-learning?]
            :or {stop-learning? false}}]
  (util/set-seed! 1)
  (let [freeze-at (if stop-learning?
                    warmup
                    (+ warmup simlength))]
    (->> model
         (iterate #(core/feed-forward-step
                    % (< (:timestep (:region %) 0) freeze-at)))
         (drop-while #(< (:timestep (:region %) 0) warmup))
         (map (fn [state]
                (let [rs (core/region-seq state)]
                  {:input (core/domain-value (first (core/inputs-seq state)))
                                        ;:column-freqs (map core/column-state-freqs rs)
                   :ac (map core/active-cells rs)
                   :tpc (map :temporal-pooling-cells rs)
                   :timestep (:timestep (:region state))})))
         (take simlength))))
  
(defn tp-candidate-stats
  "Filters the series based on occurence of the given pattern key k.
   Returns a sequence of maps, one for each candidate TP cell."
  [ts k & {:keys [region-id n-candidates]
            :or {region-id 1, n-candidates 3}}]
  (let [in-steps (filter #(in-body-of-pattern? (k (:input %))) ts)
        out-steps (filter #(out-of-pattern? (k (:input %))) ts)]
    (->>
     in-steps
     (map :tpc)
     (mapcat #(nth % region-id))
     (frequencies)
     (sort-by val >)
     (take n-candidates)
     (map-indexed
      (fn [i [cell-id n]]
        (let [cell-active? #(-> % :ac (nth region-id) (get cell-id))
              hits (map (juxt :timestep (comp boolean cell-active?))
                        in-steps)
              active-in (count-filter cell-active? in-steps)
              active-out (count-filter cell-active? out-steps)]
          {:pattern k
           :region region-id
           :total-steps (count ts)
           :in-steps (count in-steps)
           :out-steps (count out-steps)
           ;; specific to this candidate:
           :candidate i
           :cell-id cell-id
           :hits hits
           :active-in-tp n
           :active-in active-in
           :active-out active-out
           :sensitivity (-> (/ active-in
                               (count in-steps))
                            (round 2))
           :specificity (-> (- 1.0 (/ active-out
                                      (count out-steps)))
                            (round 2))
           :precision (-> (/ active-in
                             (+ active-in active-out))
                          (round 2))}))))))

(def pattern-keys
  [:run-0-5 :rev-5-1 :run-6-10 :jump-6-12 :twos :saw-10-15])

(defn all-tp-stats
  "Returns a sequence of info maps, concatenated from each candidate
   over each of the pattern keys `ks`."
  [ts ks & {:keys [region-id n-candidates]
            :or {region-id 1, n-candidates 3}}]
  (mapcat (fn [k]
            (tp-candidate-stats ts k
                                :region-id region-id
                                :n-candidates n-candidates))
          ks))


(def tab-fields
  [:pattern :candidate :in-steps :out-steps :active-in :active-out
   :sensitivity :specificity :precision])

(defn print-csv
  [tab-fields tab]
  (println (str/join "," (map name tab-fields)))
  (doseq [row tab]
    (println (str/join "," (map row tab-fields)))))

(defn tab-vs-tab
  "Divides each value of key `k` in `t-new` by the same in `t-base`."
  [t-base t-new k]
  (for [[p0 p1] (map vector t-base t-new)]
    (if (not= (:pattern p0) (:pattern p1))
      (println "MISMATCH")
      [(:pattern p0)
       (/ (k p1) (k p0))])))

(defn runs
  "Takes only the timesteps when a pattern is showing, as a sequence
   of [timestep cell-active?]. Returns a sequence of runs, i.e. the
   contiguous blocks of time where a pattern is showing."
  [hits]
  (->> hits
       (partition 2 1)
       (reduce (fn [xs [[t1 v1] [t2 v2]]]
                 (let [end (dec (count xs))]
                   (cond->
                    (update-in xs [end 1] conj v1)
                    (> (- t2 t1) 1) (conj [t2 []]))))
               [[(ffirst hits) []]])))

(defn run []

  (comment
    (in-ns 'floybix.temporal-pooling-experiments)
    (use 'clojure.repl)
    (require :reload-all 'org.nfrac.comportex.demos.mixed-gaps-1d)
    )
  
  (println "## baseline")

  (def runs-keys [:rev-5-1 :run-6-10 :twos])
  
  (util/set-seed! 1)
  (time
   (def baseline-tab
     (-> (demo/n-region-model 2 spec)
         (ac-series :warmup 2000 :simlength 2000)
         (all-tp-stats runs-keys :region-id 1 :n-candidates 25))))

  (print-table tab-fields baseline-tab)
  (print-csv tab-fields baseline-tab)

  (println "## check consistency between runs (pattern instances)")
  (defn runtab
    [tab k]
    (for [info tab
          :when (= k (:pattern info))
          :let [my-runs (runs (:hits info))]
          [run-i [t run]] (map-indexed vector my-runs)
          [i active?] (map-indexed vector run)
          :when active?]
      {:candidate (:candidate info)
       :instance run-i
       :step i
       ;; form x coordinate by dividing up integer instance id
       :x (+ run-i
             (round (/ (inc i) (inc (count run)))
                    2))}))

  ;(map println (runs (:hits (first baseline-tab))))

  (->>
   (print-csv [:candidate :instance :step :x]
              (runtab baseline-tab :rev-5-1))
   (with-out-str) (spit "~/rev-5-2-consistency.csv"))

  (->>
   (print-csv [:candidate :instance :step :x]
              (runtab baseline-tab :run-6-10))
   (with-out-str) (spit "run-6-10-consistency.csv"))

  (->>
   (print-csv [:candidate :instance :step :x]
              (runtab baseline-tab :twos))
   (with-out-str) (spit "twos-consistency.csv"))

  (doseq [x (range 0 50 2)]
    (println (str "<range literal-x-extent=\"" x " " (+ x 1) "\"></range>")))
  
  (println "## third region")
  
  (util/set-seed! 1)
  (def thirdrgn-tab
    (-> (demo/n-region-model 3 spec)
        (ac-series :warmup 5000 :simlength 2000)
        (all-tp-stats pattern-keys :region-id 2)))
  (time
   (print-table tab-fields thirdrgn-tab))

  (println "divided by baseline")

  (pprint (tab-vs-tab baseline-tab thirdrgn-tab :sensitivity))
  
  (println "## signal ff-synapses increment")
  
  (util/set-seed! 1)


  )
