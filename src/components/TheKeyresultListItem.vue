<script>
import { 
    LightningBoltIcon,
    ArrowSmDownIcon, 
    ArrowSmUpIcon 
} from '@heroicons/vue/solid'

import { 
    ChartBarIcon
} from '@heroicons/vue/outline'
import TheObjectiveColorButton from '/src/components/TheObjectiveColorButton.vue'
import TheKeyresultStatusBadge from '/src/components/TheKeyresultStatusBadge.vue'

export default {
    data() {
        return {
					showKeyresults: false
        }
    },
    props: {
        keyresult: {type: Object},
				color: {type: String},
				objectiveId: {type: String},
				objectiveSlug: {type: String}
    },
    computed: {
				keyresultSlug() {
        return this.keyresult.name.split(/[\s]+/).join("-").toLowerCase();        
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
        TheObjectiveColorButton,
        TheKeyresultStatusBadge,
    }
}
</script>

<template>
	<div>
    <div class="bg-white dark:bg-gray-800 rounded-xl overflow-hidden border border-transparent hover:border-gray-400 cursor-pointer">
			<router-link :to="{name: 'keyresult.details', params:{objectiveId: objectiveId, objectiveSlug: objectiveSlug, keyresultId: keyresult.id, keyresultSlug: keyresultSlug }}">
				<div class="p-6">
					<div class="flex items-start space-x-3">
						<div class="relative flex-shrink-0">
							<div class="flex-shrink-0 absolute inset-0">
								<div class="radial-progress text-gray-200 dark:text-gray-700 text-xs font-bold" :style="['--value:'+100+'; --size:3rem; --thickness:5px;']" ></div>
							</div>
							<div class="flex-shrink-0 absolute inset-0">
								<div :class="['radial-progress text-'+color+' text-xs font-bold']" :style="['--value:'+calculateKeyresultAchievement(keyresult.type, keyresult.actual, keyresult.target)+'; --size:3rem; --thickness:5px;']" >{{calculateKeyresultAchievement(keyresult.type, keyresult.actual, keyresult.target)}}%</div>
							</div>
						</div>
						<div class="min-w-0 flex-1 pl-12">
							<div class="flex">
								<div class="flex-1 text-sm font-medium text-gray-900 dark:text-gray-200">
									<span class=""/>
									{{ keyresult.name }}
								</div>
								<div class="flex flex-col items-end">
									<TheKeyresultStatusBadge :deviation="calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected)"></TheKeyresultStatusBadge>      
								</div>
							</div>
								<div class="flex mt-0.5">
										<div class="md:flex flex-1 md:space-x-3">
											<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" 
													class="w-4 h-4 mt-0.5 -mr-1.5 text-gray-400/80 hidden md:block">
													<path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
												</svg>
											<div class="flex items-baseline space-x-1">																
														<span class="text-gray-500 dark:text-gray-400/80 text-xs">Actual:</span>
														<span :class="'text-gray-500 dark:text-gray-400/80 text-sm'">{{ keyresult.actual.toLocaleString('de-DE') }} 
																<span class="text-gray-500/70 dark:text-gray-500 text-xs">{{keyresult.unit}}</span>
														</span>
												</div>
												<div class="flex mr-2 items-baseline space-x-1">
														<span class="text-gray-500 dark:text-gray-400/80 text-xs">Expected:</span>
														<span :class="'text-gray-500 dark:text-gray-400/80 text-sm'">{{ keyresult.expected.toLocaleString('de-DE') }} 
																<span class="text-gray-500/70 dark:text-gray-500 text-xs">{{keyresult.unit}}</span>
														</span>
												</div>
												<div class="flex items-baseline space-x-1">
														<span class="text-gray-500 dark:text-gray-400/80 text-xs">Target:</span>
														<span :class="'text-gray-500 dark:text-gray-400/80 text-sm'">{{ keyresult.target.toLocaleString('de-DE') }} 
																<span class="text-gray-500/70 dark:text-gray-500 text-xs">{{keyresult.unit}}</span>
														</span>
												</div>
												<div class="flex items-baseline space-x-1 h-full py-0.5 mt-px">
														<span class="text-gray-500 dark:text-gray-400/80 text-xs">Deviation Actual vs. Expected:</span>
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
			</router-link>    
    </div>
	</div>
</template>