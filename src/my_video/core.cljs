(ns my-video.core
  (:require ["remotion" :refer [registerRoot Composition]]
            [reagent.core :as r]

            ["react" :as react]
            ["react-dom" :as dom]

            ))

(defn my-video-content []
  [:div {:style {:color "white" :font-size "100px"}}
   "IF YOU CAN SEE THIS, IT WORKS!"])

(defn ^:export get_root []
  ;; Return a PLAIN function that returns a Reagent element
  (fn []
    (r/as-element
     [:<>
      [:> Composition
       {:id "MyVideo"
        :component (fn [] (r/as-element [my-video-content])) ;; Nesting here is key
        :durationInFrames 60
        :fps 30
        :width 1920
        :height 1080}]])))

(defn init []
  (js/console.log "CLJS ESM Module Loaded"))

