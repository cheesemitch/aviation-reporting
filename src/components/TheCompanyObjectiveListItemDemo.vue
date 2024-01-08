<script>
import { 
    LightningBoltIcon,
    ArrowSmDownIcon, 
    ArrowSmUpIcon 
} from '@heroicons/vue/solid'

import { 
    ChartBarIcon
} from '@heroicons/vue/outline'

import TheObjectiveMenuButton from '/src/components/TheObjectiveMenuButton.vue'
import TheObjectiveColorButton from '/src/components/TheObjectiveColorButton.vue'
import TheKeyresultStatusBadge from '/src/components/TheKeyresultStatusBadge.vue'

import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel
  } from '@headlessui/vue'

export default {
    data() {
        return {
					showKeyresults: false
        }
    },
    props: {
				objective: {type: Object}
    },
    computed: {
        objectiveAchievement() {
            if (this.objective.keyresults.length == 0) {
                return 0
            } else {
                let sum = 0;
                this.objective.keyresults.forEach(function(element) {
                    if (element.type === 'Increase') {
                        sum +=  (element.actual / element.target)
                    } else {
                        sum +=  (1/(element.actual / element.target))
                    }                
                });            
                return (sum/this.objective.keyresults.length*100).toFixed(0);
                };
        },
        objectiveExpectedAchievement() {
            if (this.objective.keyresults.length == 0) {
                return 0;
            } else {
                let sum = 0;
                this.objective.keyresults.forEach(function(element) {
                    if (element.type === 'Increase') {
                        sum +=  (element.expected / element.target)
                    } else {
                        sum +=  (1/(element.expected / element.target))
                    }
                });            
                return (sum/this.objective.keyresults.length*100).toFixed(2);
            }            
        },
				objectiveSlug() {
        return this.objective.name.split(/[\s]+/).join("-").toLowerCase();        
      }        
    },
    methods: {
        setColor(a) {
            this.$emit(a+'ColorClick');
        },
        calculateKeyresultDeviation(type, actual, expected) {
            if (type === 'Increase') {
                return (actual - expected)/expected*100
            } else {
                return (actual - expected)*-1/expected*100
            };
        },
				calculateKeyresultAchievement(type, actual, target) {
					if (target == 0 || target == null) {
						return 0
					} else {
						if (type === 'Increase') {
                return (actual/target*100).toFixed(0)
            } else {
                return (((actual/target)**-1)*100).toFixed(0)
            };
					};
        },
    },
    components: {
        ChartBarIcon, 
        LightningBoltIcon,
        ArrowSmDownIcon, 
        ArrowSmUpIcon,
        TheObjectiveMenuButton,
        TheObjectiveColorButton,
        TheKeyresultStatusBadge,
        Disclosure,
        DisclosureButton,
        DisclosurePanel
    }
}
</script>

<template>
	<div>
    <div class="transform transition-all w-full">
			<div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-transparent cursor-pointer">
				<div :class="[showKeyresults ? 'border-b dark:border-gray-700 px-3.5' : 'px-3.5']">
					<div class="flex items-start py-4">
						<div class="flex-shrink-0">
							<span :class="['bg-'+objective.color+'', 'dark:bg-gray-700 inline-flex items-center justify-center h-10 w-10 rounded-full']">
								<div :class="['radial-progress text-white dark:text-'+objective.color+' font-bold']" :style="['--value:'+objectiveAchievement+'; font-size:0.65rem; --size:2.1rem; --thickness:3px;']">{{objectiveAchievement}}%</div>
							</span>
						</div>
						<div class="min-w-0 ml-3 w-full">
							<div class="flex justify-between">
								<div class="text-sm font-medium flex-1">
									<span class="text-gray-900 dark:text-gray-200">{{ objective.name }}</span>
								</div>
								<div class="">
									<TheKeyresultStatusBadge :deviation="objectiveAchievement - objectiveExpectedAchievement"></TheKeyresultStatusBadge>
								</div>
							</div>
							<div class="flex flex-col-reverse gap-2 mt-1">
								<button @click="showKeyresults = !showKeyresults" type="button" :class="['flex items-center group rounded-full']">
									<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
										class="w-3.5 h-3.5 flex-shrink-0 text-gray-400/80 dark:text-gray-400/80 -mt-0.5 mr-1 group-hover:text-gray-600 dark:group-hover:text-gray-600 transition ease-in-out duration-200">
										<path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
									</svg>
									<span class="text-xs text-gray-500/80 dark:text-gray-400/80 group-hover:text-gray-800 dark:group-hover:text-gray-600 transition ease-in-out duration-200">{{objective.keyresults.length}}</span>
									<span class="flex flex-shrink-0 text-xs text-gray-500/80 dark:text-gray-400/80 dark:group-hover:text-gray-600 ml-1 group-hover:text-gray-800 transition ease-in-out duration-200">Key Results</span>
									<svg xmlns="http://www.w3.org/2000/svg"
										:class="[showKeyresults ? 'rotate-180 transform' : '','h-5 w-5 ml-1 flex-shrink-0 text-gray-400/80 dark:text-gray-400/80 transition ease-in-out duration-200 group-hover:text-gray-600']" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<!-- Keyresults -->
				<transition
					enter-active-class="transition duration-150 ease-out"
					enter-from-class="transform -translate-y-8 opacity-0 scale-100"
					enter-to-class="transform translate-y-0 opacity-100 scale-100"
					leave-active-class="transition duration-100 ease-out"
					leave-from-class="transform opacity-100 scale-100"
					leave-to-class="transform -translate-y-8 opacity-0 scale-100"
					>
					<div v-show="showKeyresults" class="origin-top px-3.5 pb-6 bg-white dark:bg-gray-800">
						<ul role="list" class="mt-5 space-y-4">              
							<li v-for="keyresult in objective.keyresults" :key="keyresult.id" :id="keyresult.id">
								<div class="relative group">
									<div class="flex w-full space-x-2 items-start">
										<div class="flex-shrink-0 absolute inset-0">
											<div class="radial-progress text-gray-200 dark:text-gray-700 text-xs font-semibold" :style="['--value:'+100+'; --size:2.5rem; --thickness:4px;']" ></div>
										</div>
										<div class="flex-shrink-0 absolute -left-2">
											<div :class="['radial-progress text-'+objective.color+' text-xs font-semibold']" :style="['--value:'+calculateKeyresultAchievement(keyresult.type, keyresult.actual, keyresult.target)+'; --size:2.5rem; --thickness:4px;']" >{{calculateKeyresultAchievement(keyresult.type, keyresult.actual, keyresult.target)}}%</div>
										</div>
										<div class="min-w-0 flex-1 pl-11">
											<div class="flex">
												<div class="flex-1 text-sm font-medium text-gray-900 dark:text-gray-300">
													<span class=""/>
													{{ keyresult.name }}
												</div>
												<div class="flex flex-col items-end">
													<TheKeyresultStatusBadge :deviation="calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected)"></TheKeyresultStatusBadge>      
												</div>
											</div>
											<div class="mt-2 pr-2">
												<div class="space-y-1">
													<div class="flex justify-between">
														<span class="text-gray-500 text-sm">Target value</span>
														<span :class="'text-gray-900 font-semibold text-sm'">{{ keyresult.target.toLocaleString('de-DE') }} 
															<span class="text-gray-900 text-sm">{{keyresult.unit}}</span>
														</span>
													</div>
													<div class="flex justify-between">																
														<span class="text-gray-500 text-sm">Actual value</span>
														<div class="flex">
															<div class="mr-2">
																<span v-if="calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected) >= 0" class="text-green-500" aria-hidden="true">
																	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
																		<path fill-rule="evenodd" d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z" clip-rule="evenodd" />
																	</svg>
																</span>
																<span v-else class="text-red-500" aria-hidden="true">
																	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5">
																		<path d="M6.28 5.22a.75.75 0 00-1.06 1.06l7.22 7.22H6.75a.75.75 0 000 1.5h7.5a.747.747 0 00.75-.75v-7.5a.75.75 0 00-1.5 0v5.69L6.28 5.22z" />
																	</svg>
																</span>
															</div>
															<span :class="'text-gray-900 text-sm font-semibold'">{{ keyresult.actual.toLocaleString('de-DE') }} 
																<span class="text-gray-900 text-sm">{{keyresult.unit}}</span>
															</span>
															
														</div>
														

													</div>
													
													
													
												</div>
											</div>
										</div>
									</div>
								</div>              
							</li>
						</ul>
					</div>
				</transition>
				<!-- Keyresults end -->
			</div>      
    </div>
	</div>
</template>