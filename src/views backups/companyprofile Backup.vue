
<script setup>

import { ref } from 'vue'

let activeId = "1"

const tabs = [
  { id: '1', name: 'Strategisches Profil', route: '/app/companyprofile', current: true },
  { id: '2', name: 'Risikoprofil', route: '/app/companyprofile/riskprofile', current: false },
]

function setActiveId(selectedDiv){
  activeId = selectedDiv;
  tabs.forEach (function setCurrent(element) {
      if (element.id == activeId) {
        element.current = true;
      }
      else {
        element.current = false;
      }
      return;
    }
  )
}

</script>


<template>
  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl font-semibold text-gray-900">Unternehmensprofil</h1>
    <div class="py-8">
      <!-- Main area -->
        <!-- Organization header -->
        <div class="md:flex md:items-center md:justify-between md:space-x-5">
          <div class="flex-1">
            <div class="flex items-start space-x-5">
              <div class="flex-shrink-0">
                <div class="relative">
                  <img class="h-20 w-20 rounded-full" src="../assets/bremen-airport.svg" alt="">
                  <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"></span>
                </div>
              </div>
              <div class="w-full">
                <h1 class="text-2xl font-semibold text-gray-900">Bremen Airport</h1>
                <p class="text-sm font-medium text-gray-500 mt-1">Unternehmen Flughafen - Wir schaffen Verbindungen.</p>
                <div class="flex">
                  <div class="mt-1 flex flex-wrap">
                    <a href="https://www.bremen-airport.com/" class="flex flex-shrink-0 text-sm mr-5 font-medium text-gray-500 hover:underline hover:text-gray-700">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      bremen-airport.com
                    </a>
                    <a href="https://twitter.com/BremenAirport" class="flex text-sm font-medium text-gray-500 hover:underline hover:text-gray-700">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
                        </svg>
                      </span>
                      twitter.com/BremenAirport
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div class="pb-5 border-b border-gray-300 sm:pb-0 mt-8 sm:mt-10">
          <div class="sm:hidden">
            <label for="current-tab" class="sr-only">Select a tab</label>
            <select id="current-tab" name="current-tab" class="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-sky-500 sm:text-sm rounded-md">
              <option v-for="tab in tabs" :key="tab.id" :selected="tab.current">{{ tab.name }}</option>
            </select>
          </div>
          <div class="hidden sm:block">
            <nav class="-mb-px flex space-x-8">
              <router-link v-for="tab in tabs" :id="tab.id" :key="tab.id" :to="tab.route" @click="setActiveId(tab.id)" active-class="" exact-active-class=""
              :class="[tab.current ? 'border-sky-400 text-sky-500' : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300', 'whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm']" :aria-current="tab.current ? 'page' : undefined">
                {{ tab.name }}
              </router-link>
            </nav>
          </div>
        </div>

        <!-- Router view -->
              <router-view v-slot="{Component}" class="mt-10"> 
                <transition mode="out-in"
                    enter-active-class="transition ease-out duration-300" 
                    enter-from-class="transform opacity-0 scale-95" 
                    enter-to-class="transform opacity-100 scale-100" 
                    leave-active-class="transition ease-in duration-150" 
                    leave-from-class="transform opacity-100 scale-100" 
                    leave-to-class="transform opacity-0 scale-95"
                    >
                      <component :is="Component"></component>
                  </transition>
              </router-view>
            <!-- /End replace -->
    
    </div>
  </div>
</template>
