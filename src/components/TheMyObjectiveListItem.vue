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
				slug: {type: String},
        id: {type: String, required: true},
        name: {type: String},
        description: {type: String},
        type: {type: String},
        color: {type: String},
				goalName: {type: String},
				goalId: {type: String},
        keyresults: {type: Array},
        initiatives: {type: Array},
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
        return this.name.split(/[\s]+/).join("-").toLowerCase();        
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
			<div class="bg-white rounded-xl overflow-hidden border border-transparent hover:border-gray-400 cursor-pointer">
				<div :class="[showKeyresults ? 'border-b px-4' : 'px-4']">
					<div class="flex items-start space-x-3 py-4">
							<div class="flex-shrink-0">
								<span :class="['bg-'+color+'', 'inline-flex items-center justify-center h-12 w-12 rounded-full']">
									<div class="radial-progress text-xs text-white font-semibold" :style="['--value:'+objectiveAchievement+'; --size:2.5rem; --thickness:4px;']">{{objectiveAchievement}}%</div>
								</span>
							</div>
							<div class="min-w-0 flex-1">
								<div class="flex justify-between">
									<div>
										<router-link  :to="{name: 'my.objective.details', params:{id: id, slug: objectiveSlug, goalId: goalId, goalName: goalName, color: color }}" class="text-sm font-medium text-gray-900 group flex">
											<span class="text-gray-900 group-hover:text-black">{{ name }}</span>
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="transition ease-in-out duration-200 w-4 h-4 md:text-gray-100 ml-1 mt-0.5 group-hover:text-gray-900">
												<path fill-rule="evenodd" d="M4.25 5.5a.75.75 0 00-.75.75v8.5c0 .414.336.75.75.75h8.5a.75.75 0 00.75-.75v-4a.75.75 0 011.5 0v4A2.25 2.25 0 0112.75 17h-8.5A2.25 2.25 0 012 14.75v-8.5A2.25 2.25 0 014.25 4h5a.75.75 0 010 1.5h-5z" clip-rule="evenodd" />
												<path fill-rule="evenodd" d="M6.194 12.753a.75.75 0 001.06.053L16.5 4.44v2.81a.75.75 0 001.5 0v-4.5a.75.75 0 00-.75-.75h-4.5a.75.75 0 000 1.5h2.553l-9.056 8.194a.75.75 0 00-.053 1.06z" clip-rule="evenodd" />
											</svg>
										</router-link>
										<p class="text-sm text-gray-500">{{ description }}</p>
									</div>
									<div class="ml-4 pr-4 sm:pr-0">
										<TheKeyresultStatusBadge :deviation="objectiveAchievement - objectiveExpectedAchievement"></TheKeyresultStatusBadge>
									</div>
								</div>
								<div class="flex flex-col-reverse gap-3 mt-3 md:flex-row md:items-center md:space-x-2 md:mt-2">
									<button @click="showKeyresults = !showKeyresults" type="button" :class="['flex items-center group rounded-full focus:ring-2 focus:ring-offset-2 focus:ring-'+color+'']">
										<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
											class="w-4 h-4 flex-shrink-0 text-gray-400 -mt-0.5 mr-1 group-hover:text-gray-600 transition ease-in-out duration-200">
											<path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
										</svg>
										<span class="text-xs text-gray-500 group-hover:text-gray-800 transition ease-in-out duration-200">{{keyresults.length}}</span>
										<span class="flex flex-shrink-0 text-xs text-gray-500 ml-1 group-hover:text-gray-800 transition ease-in-out duration-200">Key Results</span>
										<svg xmlns="http://www.w3.org/2000/svg"
											:class="[showKeyresults ? 'rotate-180 transform' : '','h-5 w-5 ml-1 flex-shrink-0 text-gray-400 transition ease-in-out duration-200 group-hover:text-gray-600']" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd" />
										</svg>
									</button>
									<div class="flex items-center">
										<svg class="w-4 h-4 flex-shrink-0 text-gray-400/80 -mt-0.5 group-hover:text-gray-600 transition ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
											<path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd" />
										</svg>
										<span class="flex text-xs text-gray-500 ml-1 group-hover:text-gray-800 transition ease-in-out duration-200">{{initiatives.length}} open Tasks</span>
									</div>
									<div class="flex items-center">
										<svg class="w-4 h-4 flex-shrink-0 text-gray-400/80 -mt-0.5 mr-1 group-hover:text-gray-600 transition ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z" clip-rule="evenodd" />
											<path fill-rule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
										</svg>
										<p class="text-xs text-gray-500 md:ml-0.5 group-hover:text-gray-800 transition ease-in-out duration-200">{{goalName}}</p>
									</div>
									<div class="flex flex-1 md:justify-end items-center">
										<svg class="w-4 h-4 flex-shrink-0 text-gray-400/80 -mt-0.5 mr-1 group-hover:text-gray-600 transition ease-in-out duration-200" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
											<path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
										</svg>
										<span class="truncate text-xs text-gray-500 md:ml-0.5 group-hover:text-gray-800 transition ease-in-out duration-200">Check-In on Sep 30, 2022</span>
									</div>
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
					<div v-show="showKeyresults" class="origin-top pl-5 pr-3 pb-6 bg-white">
						<ul role="list" class="mt-2 space-y-2">              
							<li v-for="keyresult in keyresults" :key="keyresult.id" :id="keyresult.id">
								<div class="relative group py-3">
									<!--connection line <span class="absolute top-4 left-5 -ml-px h-full w-px bg-cyan-300" aria-hidden="true" /> -->
									<div class="flex w-full space-x-3 items-start">
										<div class="flex-shrink-0 absolute inset-0  top-3">
											<div class="radial-progress text-gray-200 text-xs font-semibold" :style="['--value:'+100+'; --size:2.5rem; --thickness:4px;']" ></div>
										</div>
										<div class="flex-shrink-0 absolute -left-3 top-3">
											<div :class="['radial-progress text-'+color+' text-xs font-semibold']" :style="['--value:'+calculateKeyresultAchievement(keyresult.type, keyresult.actual, keyresult.target)+'; --size:2.5rem; --thickness:4px;']" >{{calculateKeyresultAchievement(keyresult.type, keyresult.actual, keyresult.target)}}%</div>
										</div>
										
										<div class="min-w-0 flex-1 pl-11">
											<div class="flex">
												<div class="flex-1 text-sm font-medium text-gray-900">
														
															<span class=""/>
															{{ keyresult.name }}
														
												</div>
												<div class="flex flex-col items-end">
													<TheKeyresultStatusBadge :deviation="calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected)"></TheKeyresultStatusBadge>      
												</div>
											</div>
												<div class="flex ">
														<div class="md:flex flex-1 md:space-x-3">
															<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
																	class="w-4 h-4 mt-0.5 -mr-1.5 text-gray-400/80 hidden md:block">
																	<path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
																</svg>
															<div class="flex items-baseline space-x-1">																
																		<span class="text-gray-500 text-xs">Actual:</span>
																		<span :class="'text-gray-500 text-sm'">{{ keyresult.actual.toLocaleString('de-DE') }} 
																				<span class="text-gray-500/70 text-xs">{{keyresult.unit}}</span>
																		</span>
																</div>
																<div class="flex mr-2 items-baseline space-x-1">
																		<span class="text-gray-500 text-xs">Expected:</span>
																		<span :class="'text-gray-500 text-sm'">{{ keyresult.expected.toLocaleString('de-DE') }} 
																				<span class="text-gray-500/70 text-xs">{{keyresult.unit}}</span>
																		</span>
																</div>
																<div class="flex items-baseline space-x-1">
																		<span class="text-gray-500 text-xs">Target:</span>
																		<span :class="'text-gray-500 text-sm'">{{ keyresult.target.toLocaleString('de-DE') }} 
																				<span class="text-gray-500/70 text-xs">{{keyresult.unit}}</span>
																		</span>
																</div>
																<div class="flex items-baseline space-x-1 h-full py-0.5 mt-px">
																		<span class="text-gray-500 text-xs">Deviation Actual vs. Expected:</span>
																		<span v-if="calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected) >= 0" class="text-green-500 text-xs" aria-hidden="true">+</span>
																		<span v-else class="text-red-500 text-xs" aria-hidden="true">-</span>
																		<div :class="[calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected) >=0 ? 'text-green-500' : 'text-red-500', 'flex text-xs']">
																			{{  Math.abs(calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected)).toFixed(2) }} %
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
			<div class="hidden border border-transparent hover:border-gray-400 bg-white rounded-lg shadow">
				<div class="transform transition-all">
					<div :class="'p-4 sm:p-6 rounded-lg border-t-4 border-' + color + '-500'">
					</div>
					</div>
					<div class="px-4 pb-4 sm:px-6 sm:pb-6 mt-2 transition-all ease-out">
							
							<div class="mt-4"></div>
							<Disclosure v-slot="{ open }">
									<DisclosureButton
											:class="'flex w-full justify-between rounded-lg bg-'+color+'-100 px-4 py-2 text-left text-sm font-medium text-'+color+'-900 hover:bg-'+color+'-200 focus:outline-none focus-visible:ring focus-visible:ring-'+color+'-500 focus-visible:ring-opacity-75'">
													<span>Initiatives</span>
													<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" 
															:class="[open ? 'rotate-180 transform' : '','h-5 w-5 text-'+color+'-500 transition ease-in-out duration-200']">
															<path fill-rule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clip-rule="evenodd">
															</path>
													</svg>
									</DisclosureButton>
									<transition
									enter-active-class="transition duration-150 ease-out"
									enter-from-class="transform -translate-y-8 opacity-0 scale-100"
									enter-to-class="transform translate-y-0 opacity-100 scale-100"
									leave-active-class="transition duration-100 ease-out"
									leave-from-class="transform opacity-100 scale-100"
									leave-to-class="transform -translate-y-8 opacity-0 scale-100"
									>
													<DisclosurePanel class="origin-top">
															<ul role="list" class=" border-b py-4 pl-1 pr-2">
																	<li v-for="initiative in initiatives" :key="initiative.id" class="flex py-2">
																			<div class="flex items-start w-full space-x-3">                                    
																					<div class="flex -mt-0.5">
																							<svg xmlns="http://www.w3.org/2000/svg" :class="'h-6 w-6 text-'+color+'-500'" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
																									<path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
																							</svg>
																					</div>                                    
																					<div class="text-sm font-base text-gray-500 flex-1">
																							{{ initiative.name }}                        
																					</div>
																					<span class="inline-flex items-center ml-2.5 py-0.5 rounded-full text-xs font-medium text-gray-500">
																							<svg :class="[
																													initiative.status === 'In Progress' ? 'text-yellow-400' : 
																													initiative.status === 'Implemented' ? 'text-green-400' : 
																													'text-gray-400' , 
																													'-ml-0.5 mr-1.5 h-2 w-2'
																											]" 
																											fill="currentColor" viewBox="0 0 8 8"
																									>
																									<circle cx="4" cy="4" r="3" />
																							</svg>
																							{{ initiative.status }}
																					</span>                                
																			</div>                                
																	</li>
															</ul>
													</DisclosurePanel>
										</transition>
							</Disclosure>
							<div class="flex w-full items-center mt-6">                
									<div class="flex flex-1 flex-wrap">
											<p class="flex text-sm text-gray-500 truncate">
													<span class="mr-2">
															<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
																	<path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
															</svg>
													</span> 
													Last updated July 21, 2022
											</p>                                
									</div>
									<div class="flex space-x-2">
											<TheObjectiveColorButton 
													:id="id" 
													:color="color"
													@slateColorClick="setColor('slate')"
													@grayColorClick="setColor('gray')"
													@zincColorClick="setColor('zinc')"
													@stoneColorClick="setColor('stone')"
													@redColorClick="setColor('red')"
													@orangeColorClick="setColor('orange')"
													@amberColorClick="setColor('amber')"
													@yellowColorClick="setColor('yellow')"
													@limeColorClick="setColor('lime')"
													@greenColorClick="setColor('green')"
													@emeraldColorClick="setColor('emerald')"
													@tealColorClick="setColor('teal')"
													@cyanColorClick="setColor('cyan')"
													@skyColorClick="setColor('sky')"
													@blueColorClick="setColor('blue')"
													@indigoColorClick="setColor('indigo')"
													@violetColorClick="setColor('violet')"
													@purpleColorClick="setColor('purple')"
													@fuchsiaColorClick="setColor('fuchsia')"
													@pinkColorClick="setColor('pink')"
													@roseColorClick="setColor('rose')"
													>
											</TheObjectiveColorButton>
											<TheObjectiveMenuButton
													:objectiveId="id"
													:objectiveName="name"                            
													>
											</TheObjectiveMenuButton>
									</div>                
							</div>
					</div> 
			</div>        
    </div>
	</div>
</template>