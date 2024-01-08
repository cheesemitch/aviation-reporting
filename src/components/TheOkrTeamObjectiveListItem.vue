<script>
import TheKeyresultStatusBadge from './TheKeyresultStatusBadge.vue'
export default {
  props: {
    objective: {type: Object},
    keyresults: {type: Object}
  },
  computed: {
    objectiveAchievement() {
      if (this.keyresults.length == 0) {
          return 0
      } else {
        let sum = 0;
        this.keyresults.forEach(function(element) {
            if (element.type === 'Increase') {
              sum +=  (element.actual / element.target)
            } else {
              sum +=  (1/(element.actual / element.target))
            }                
        });            
        return (sum/this.keyresults.length*100).toFixed(0);
      };
    },
    objectiveExpectedAchievement() {
      if (this.keyresults.length == 0) {
          return 0;
      } else {
        let sum = 0;
        this.keyresults.forEach(function(element) {
            if (element.type === 'Increase') {
              sum +=  (element.expected / element.target)
            } else {
              sum +=  (1/(element.expected / element.target))
            }
        });            
        return (sum/this.keyresults.length*100).toFixed(2);
      }            
    },
    objectiveSlug() {
      return this.objective.name.split(/[\s]+/).join("-").toLowerCase();        
    },        
  },
  components: {
    TheKeyresultStatusBadge
  }
}
</script>
<template>
  <div class="px-2">
    <router-link :to="{name: 'company.objectives.detail', params:{id: objective.id, slug: objectiveSlug }}">
      <div class="px-4 py-4 hover:bg-gray-50 dark:hover:bg-gray-900 rounded-lg">
        <div class="flex items-start space-x-2">
          <div class="flex-shrink-0">
            <span :class="['bg-'+objective.color+'', 'dark:bg-gray-700 inline-flex items-center justify-center h-11 w-11 rounded-full']">
              <div :class="['radial-progress text-white dark:text-'+objective.color+' font-bold']" :style="['--value:'+objectiveAchievement+'; --size:2.4rem; --thickness:3px; font-size:0.7rem;']">{{objectiveAchievement}}%</div>
            </span>
          </div>
          <div class="min-w-0 flex-1 mt-0.5">
            <div class="flex justify-between">
              <div>
                <div class="text-sm font-medium text-gray-900 flex">
                  <span class="text-gray-900 dark:text-gray-200">{{ objective.name }}</span>
                </div>
                <p class="text-sm text-gray-500 dark:text-gray-400/80">{{ objective.description }}</p>
              </div>
              <div class="ml-4 pr-4 sm:pr-0">
                <TheKeyresultStatusBadge :deviation="objectiveAchievement - objectiveExpectedAchievement"></TheKeyresultStatusBadge>
              </div>
            </div>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>