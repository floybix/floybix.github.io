(ns floybix.temporal-pooling-experiments
  "Testing for temporal pooling.
   Look for cells that correspond to specific patterns."
  (:require [org.nfrac.comportex.core :as core]
            [org.nfrac.comportex.encoders :as enc]
            [org.nfrac.comportex.util :as util
             :refer [count-filter round]]
            [org.nfrac.comportex.demos.mixed-gaps-1d :as demo]
            [org.nfrac.comportex.demos.isolated-1d :as idemo]
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

(defn some-pattern?
  [input]
  (some (comp :index input) demo/pattern-order))

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
         (iterate #(do
                     (let [t (:timestep (:region %) 0)]
                       (when (zero? (mod t 1000)) (println ";; t =" t)))
                     (core/feed-forward-step
                      % (< (:timestep (:region %) 0) freeze-at))))
         (drop-while #(< (:timestep (:region %) 0) warmup))
         (map (fn [state]
                (let [rs (core/region-seq state)]
                  {:input (core/domain-value (first (core/inputs-seq state)))
                   :column-freqs (map core/column-state-freqs rs)
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
        out-steps (filter #(and (out-of-pattern? (k (:input %)))
                                (some-pattern? (:input %))) ts)]
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
                               (max 1 (count in-steps)))
                            (round 2))
           :specificity (-> (- 1.0 (/ active-out
                                      (max 1 (count out-steps))))
                            (round 2))
           :precision (-> (/ active-in
                             (max 1 (+ active-in active-out)))
                          (round 2))}))))))

(def pattern-keys
  [:run-0-5 :rev-5-1 :run-6-10 :jump-6-12 :twos :saw-10-15])

(defn all-tp-stats
  "Returns a sequence of info maps, concatenated from each candidate
   over each of the pattern keys `ks`."
  [ts ks & {:keys [region-id n-candidates]
            :or {region-id 1, n-candidates 3}}]
  (mapcat (fn [k]
            (println ";; all-tp-stats:" k "region-id" region-id)
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

(defn pred-burst-avg-ts
  [ts rid window]
  (->> ts
       ;; ignore the unpredictable head.
       (remove #(some pattern-starting? (:input %)))
       (map :column-freqs)
       (map #(nth % rid))
       (partition window window)
       (mapv (fn [fqs]
               (let [t (:timestep (nth fqs (quot window 2)))
                     totm (reduce (partial merge-with +) fqs)
                     total-on (max 1 (+ (:active totm)
                                        (:active-predicted totm)))
                     n-non-empty (count (filter #(pos? (+ (:active %)
                                                          (:active-predicted %)))
                                                fqs))]
                 {:timestep t
                  :n-non-empty n-non-empty
                  :active-ncol (round (/ (:active totm) n-non-empty) 2)
                  :active-predicted-ncol (round (/ (:active-predicted totm) n-non-empty) 2)
                  :predicted-ncol (round (/ (:predicted totm) n-non-empty) 2)
                  :bursting (round (/ (:active totm) total-on) 3)
                  :correct (round (/ (:active-predicted totm) total-on) 3)
                  :predicted (round (/ (:predicted totm) total-on) 3)})))))

(def freqs-fields [:timestep :bursting :correct :predicted
                   :active-ncol :active-predicted-ncol :predicted-ncol
                   :n-non-empty])

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

(defn runtab-all
  [tab k]
  (for [info tab
        :when (= k (:pattern info))
        :let [my-runs (runs (:hits info))]
        [run-i [t run]] (map-indexed vector my-runs)
        [i active?] (map-indexed vector run)]
    {:candidate (:candidate info)
     :instance run-i
     :step i
     :active (if active? 1 0)
     ;; form x coordinate by dividing up integer instance id
     :x (+ run-i
           (round (/ (inc i) (inc (count run)))
                  2))}))

(defn run []

  (comment
    (in-ns 'floybix.temporal-pooling-experiments)
    (use 'clojure.repl)
    (require :reload-all '[org.nfrac.comportex.demos.mixed-gaps-1d :as demo])
    )

  (println "## generate input data and save to data file")

  (->> (demo/input-gen)
       (iterate core/feed-forward-step)
       (map core/domain-value)
       (map (fn [input] (util/remap demo/current-value input)))
       (take 10000)
       (print-csv demo/pattern-order)
       (with-out-str) (spit "mixed_fixed_1d_10k.csv"))

  (println "## check that number of predicted columns is high and bursting is low")

  (util/set-seed! 1)
  (time
   (def freqs-avgs-original
     (-> (demo/n-region-model 1 spec)
         (ac-series :warmup 0 :simlength 10000)
         (pred-burst-avg-ts 0 500))))
  (println "original")
  (->> freqs-avgs-original
       (print-csv freqs-fields)
       (with-out-str) (spit "freqs-avgs-original.csv"))
  (print-table freqs-fields freqs-avgs-original)
  
  (println "## TP stats baseline")

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

  ;(map println (runs (:hits (first baseline-tab))))

  (->>
   (print-csv [:candidate :instance :step :x]
              (runtab baseline-tab :rev-5-1))
   (with-out-str) (spit "rev-5-2-consistency.csv"))

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


  ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
  ;; on Rob Freeman's suggestion - sequences in isolation

  (require :reload-all '[org.nfrac.comportex.demos.isolated-1d :as idemo])
  (in-ns 'floybix.temporal-pooling-experiments)
  (use 'clojure.repl)

  (util/set-seed! 1)
  (time
     (def freqs-avgs-isolated
       (-> (idemo/n-region-model 1 spec)
         (ac-series :warmup 0 :simlength 10000)
         (pred-burst-avg-ts 0 500))))
  (println "isolated original")
  (->> freqs-avgs-isolated
       (print-csv freqs-fields)
       (with-out-str) (spit "freqs-avgs-isolated-original.csv"))
  (print-table freqs-fields freqs-avgs-isolated)



  (println "## TP stats baseline")

  (defn dostuffblah
    []
    
    (def runs-keys [:rev-5-1 :twos :saw-10-15])

    (util/set-seed! 1)
    (time
     (def ibaseline-ts3
       (-> (idemo/n-region-model 3 spec)
           (ac-series :warmup 4000 :simlength 2000))))

    (def ibaseline-tab
      (-> ibaseline-ts3
          (all-tp-stats pattern-keys :region-id 1 :n-candidates 15)))
    (def ibaseline-tab-top3 (filter #(< (:candidate %) 3) ibaseline-tab))
    
    (println "region 2 candidate stats")
    (print-table tab-fields ibaseline-tab-top3)
    (println "region 2 candidate stats")
    (print-table tab-fields ibaseline-tab)
    (->>
     (print-csv tab-fields ibaseline-tab-top3)
     (with-out-str) (spit "isolated-candidates-stats.csv"))

    (def ibaseline-tab
      (-> (take 600 ibaseline-ts3)
          (all-tp-stats pattern-keys :region-id 1 :n-candidates 15)))

    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab :rev-5-1))
     (with-out-str) (spit "isolated-rev-5-1-consistency.csv"))

    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab :run-6-10))
     (with-out-str) (spit "isolated-run-6-10-consistency.csv"))

    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab :jump-6-12))
     (with-out-str) (spit "isolated-jump-6-12-consistency.csv"))
    
    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab :twos))
     (with-out-str) (spit "isolated-twos-consistency.csv"))

    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab :saw-10-15))
     (with-out-str) (spit "isolated-saw-10-15-consistency.csv"))

    ;; level 3 region pooling

    (time
     (def ibaseline-tab-r3
       (-> ibaseline-ts3
           (all-tp-stats pattern-keys :region-id 2 :n-candidates 25))))
    (def ibaseline-tab-r3-top3 (filter #(< (:candidate %) 3) ibaseline-tab-r3))

    (println "region 3 candidate stats")
    (print-table tab-fields ibaseline-tab-r3-top3)
    (print-table tab-fields ibaseline-tab-r3)
    (->>
     (print-csv tab-fields ibaseline-tab-r3-top3)
     (with-out-str) (spit "isolated-candidates-stats-r3.csv"))

    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab-r3 :rev-5-1))
     (with-out-str) (spit "isolated-rev-5-1-consistency-r3.csv"))

    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab-r3 :run-6-10))
     (with-out-str) (spit "isolated-run-6-10-consistency-r3.csv"))

    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab-r3 :jump-6-12))
     (with-out-str) (spit "isolated-jump-6-12-consistency-r3.csv"))

    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab-r3 :twos))
     (with-out-str) (spit "isolated-twos-consistency-r3.csv"))

    (->>
     (print-csv [:candidate :instance :step :x :active]
                (runtab-all ibaseline-tab-r3 :saw-10-15))
     (with-out-str) (spit "isolated-saw-10-15-consistency-r3.csv"))

    )

  
  
  

(defn run-variants
  []
  
  (util/set-seed! 1)
  (time
   (def freqs-avgs-punish-once
     (-> (demo/n-region-model 1 spec)
         (ac-series :warmup 0 :simlength 10000)
         (pred-burst-avg-ts 0 500))))
  (println "punish-once")
  (->> freqs-avgs-punish-once
       (print-csv freqs-fields)
       (with-out-str) (spit "freqs-avgs-punish-once.csv"))
  (print-table freqs-fields freqs-avgs-punish-once)

  (util/set-seed! 1)
  (time
   (def freqs-avgs-global-inh
     (-> (demo/n-region-model 1 (assoc spec :global-inhibition true))
         (ac-series :warmup 0 :simlength 10000)
         (pred-burst-avg-ts 0 500))))
  (println "global inh")
  (->> freqs-avgs-global-inh
       (print-csv freqs-fields)
       (with-out-str) (spit "freqs-avgs-global-inh.csv"))
  (print-table freqs-fields freqs-avgs-global-inh)


  (util/set-seed! 1)
  (time
   (def freqs-avgs-perm-inc-10
     (-> (demo/n-region-model 1 (assoc spec :permanence-inc 0.10))
         (ac-series :warmup 0 :simlength 10000)
         (pred-burst-avg-ts 0 500))))
  (println "perm-inc-10")
  (->> freqs-avgs-perm-inc-10
       (print-csv freqs-fields)
       (with-out-str) (spit "freqs-avgs-perm-inc-10.csv"))
  (print-table freqs-fields freqs-avgs-perm-inc-10)


  (util/set-seed! 1)
  (time
   (def freqs-avgs-radius-50
     (-> (demo/n-region-model 1 (assoc spec :potential-radius-frac 0.5
                                       :potential-frac 0.25))
         (ac-series :warmup 0 :simlength 10000)
         (pred-burst-avg-ts 0 500))))
  (println "radius-50")
  (->> freqs-avgs-radius-50
       (print-csv freqs-fields)
       (with-out-str) (spit "freqs-avgs-radius-50.csv"))
  (print-table freqs-fields freqs-avgs-radius-50)

  
  (util/set-seed! 1)
  (time
   (def freqs-avgs-ncol-2000
     (-> (demo/n-region-model 1 (assoc spec :ncol 2000
                                       :max-synapse-count 22
                                       :new-synapse-count 15
                                       :activation-threshold 12
                                       :min-threshold 8))
         (ac-series :warmup 0 :simlength 10000)
         (pred-burst-avg-ts 0 500))))
  (println "ncol-2000")
  (->> freqs-avgs-ncol-2000
       (print-csv freqs-fields)
       (with-out-str) (spit "freqs-avgs-ncol-2000.csv"))
  (print-table freqs-fields freqs-avgs-ncol-2000)

)


  )
