(ns my-video.core
  (:require ["remotion" :refer [registerRoot Composition]]
            [reagent.core :as r]))

(defn my-scene []
  [:div "Hello from CLJS!"])

(defn root []
  [:> Composition
   {:id "MyVideo"
    :component (r/reactify-component my-scene)
    :durationInFrames 120
    :fps 30
    :width 1920
    :height 1080}])

(defn get-root []
  (r/reactify-component root))

(defn init []
  (js/console.log "CLJS ESM Module Loaded"))
