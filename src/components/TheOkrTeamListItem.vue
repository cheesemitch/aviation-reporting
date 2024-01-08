<script>
import OkrTeamObjectiveListItem from './TheOkrTeamObjectiveListItem.vue'; 
export default {
  data () {
    return {
      showObjectives: false
    }
  },
  props: {
    team: {type: Object}
  },
  methods: {
    calculateObjectiveAmount() {
      if (this.team.objectives == undefined) {
        return 0;
      } else {
        return this.team.objectives.length;
      }
    }
  },
  components: {
    OkrTeamObjectiveListItem
  } 
}
</script>
<template>
  <div class="rounded-lg bg-white dark:bg-gray-800 shadow-sm border border-transparent hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500">
    <div :class="[showObjectives? 'border-b dark:border-gray-700' : '' , 'flex items-center space-x-3 px-6 py-5']">
      <div class="flex-shrink-0">
        <img class="h-10 w-10 rounded object-cover" :src="team.image" :alt="team.name">
      </div>
      <div class="flex-1 min-w-0">
        <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
          {{team.name}}
        </p>
        <div class="flex">
          <div class="mr-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 text-gray-400 dark:text-gray-400/80 mr-2">
              <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400/80">{{team.members}}</span>
            <span class="text-sm text-gray-500 font ml-1 dark:text-gray-400/80">Members</span>
          </div>
          <div v-show="calculateObjectiveAmount() !== 0" class="mr-4 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-3 h-3 text-gray-400/80 dark:text-gray-400/70 mr-2">
              <path fill-rule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z" clip-rule="evenodd" />
              <path fill-rule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
            </svg>
            <span class="text-sm text-gray-500 dark:text-gray-400/80">{{calculateObjectiveAmount()}}</span>
            <span class="text-sm text-gray-500 font ml-1 dark:text-gray-400/80">Objectives</span>
          </div>
        </div>
      </div>
      <div class="flex-shrink-0">
        <button @click="showObjectives = !showObjectives" type="button" class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
          <svg xmlns="http://www.w3.org/2000/svg"
            :class="[showObjectives ? 'rotate-180 transform' : '','h-5 w-5 text-gray-400 transition ease-in-out duration-200 group-hover:text-gray-600']" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
    <!-- Objectives -->
    <transition
      enter-active-class="transition duration-150 ease-out"
      enter-from-class="transform -translate-y-8 opacity-0 scale-100"
      enter-to-class="transform translate-y-0 opacity-100 scale-100"
      leave-active-class="transition duration-100 ease-out"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform -translate-y-8 opacity-0 scale-100"
      >
      <div v-show="showObjectives" class="origin-top">
        <div v-if="calculateObjectiveAmount() !== 0">
          <div class="px-6 py-4">
            <h2 class="text-md font-medium text-gray-900 dark:text-gray-200">Team Objectives</h2>
            <p class="text-sm text-gray-500">Current objectives assigned to this team.</p> 
          </div>
          <div>
            <OkrTeamObjectiveListItem v-for="objective in team.objectives" :key="objective.id" :id="objective.id" :objective="objective" :keyresults="objective.keyresults">
            </OkrTeamObjectiveListItem>
          </div>
          <div class="px-6 py-5 flex">
            <a href="#" class="text-sm font-medium text-cyan-400 hover:text-cyan-500">
              Assign new objective
              <span aria-hidden="true"> &rarr;</span>
            </a>
          </div>
        </div>
        <div v-else>
          <div class="text-center py-6">
            <svg class="mx-auto h-12 w-12 text-gray-400 dark:text-gray-400/80" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.6" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900 dark:text-gray-200">No objectives</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400/80">Get started by creating a new objective.</p>
            <div class="mt-6">
              <button type="button" class="inline-flex items-center rounded-md text-sm font-medium text-white shadow-sm bg-gradient-to-r from-agnoscis-200 to-agnoscis-150
                dark:bg-gradient-to-r dark:from-agnoscis-100 dark:to-agnoscis-300 dark:text-gray-900 dark:focus:ring-offset-gray-800
                hover:from-agnoscis-400 hover:to-agnoscis-200 dark:hover:to-agnoscis-400 focus:bg-agnoscis-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-agnoscis-200 px-4 py-2">
                <svg class="-ml-1 mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                </svg>
                New Objective
              </button>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <!-- Keyresults end -->
  </div>
</template>