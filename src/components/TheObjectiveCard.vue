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

        }
    },
    props: {
        id: {type: String, required: true},
        name: {type: String},
        description: {type: String},
        type: {type: String},
        color: {type: String},
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
                return (sum/this.keyresults.length*100).toFixed(2);
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
        }   
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
    <div class="transform transition-all max-w-lg w-full xl:max-w-none">
        <div class="border border-transparent hover:border-gray-400 bg-white rounded-lg shadow">
           <div class="transform transition-all">
            <div :class="'p-4 sm:p-6 rounded-lg border-t-4 border-' + color + '-500'">                   
                <svg xmlns="http://www.w3.org/2000/svg" :class="'mx-auto h-12 w-12 text-' + color+ '-500'" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                </svg>
                <div class="mt-3 text-center">
                    <h3 as="h3" class="text-lg leading-6 font-medium text-gray-900">{{name}}</h3>
                    <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            {{description}}
                        </p>
                    </div>
                </div>
                <div class="mt-4 text-center">
                    <ul role="list" class="mt-2 leading-8">
                        <li class="inline">
                            <a href="#" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                                <div class="absolute flex-shrink-0 flex items-center justify-center">
                                <span class="h-1.5 w-1.5 rounded-full bg-gray-500" aria-hidden="true"></span>
                                </div>
                                <div class="ml-3.5 text-sm font-medium text-gray-900">{{type}}</div>
                            </a>
                            <!-- space -->
                        </li>
                  </ul> 
                </div>
                <div class="w-70 mt-4">
                    <div class="text-base font-medium text-gray-900 flex justify-start">
                        <span class="">Achievement</span>
                    </div>
                    <div class="flex items-end mt-1.5">
                        <div class=" flex flex-col flex-1">
                            <div class="flex  text-xs font-medium text-gray-500 justify-between space-x-4">
                               <span class="">{{objectiveExpectedAchievement}}% Expected </span> 
                               <span class="">
                                    <span :class="[(objectiveAchievement - objectiveExpectedAchievement) < 0 ? 'text-red-500' : 'text-green-500']">{{(objectiveAchievement - objectiveExpectedAchievement).toFixed(2)}}%</span> 
                                    Deviation
                                </span>                               
                            </div>
                            <div class="relative flex-1 mt-1 overflow-hidden rounded-full border">
                                <div class="h-2 bg-gray-100  border-gray-200 rounded-full"></div> 
                                <div :style="'width: '+objectiveExpectedAchievement+'%'" :class="'absolute h-2 inset-y-0 bg-gray-300/70 border border-gray-300 rounded-full'"></div>
                                <div :style="'width: '+objectiveAchievement+'%'" :class="'absolute h-2 inset-y-0 bg-'+color+'-500  border-'+color+'-400 rounded-full'"></div>
                            </div>
                        </div>
                        <div class="ml-3">
                            <div :class="'flex text-2xl font-semibold text-'+color+'-500 -my-0.5'">
                                <span class="leading-none">{{objectiveAchievement}}%</span>                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            <div class="px-4 pb-4 sm:px-6 sm:pb-6 mt-2 transition-all ease-out">
                <Disclosure v-slot="{ open }">
                    <DisclosureButton
                    :class="'flex w-full justify-between rounded-lg bg-'+color+'-100 px-4 py-2 text-left text-sm font-medium text-'+color+'-900 hover:bg-'+color+'-200 focus:outline-none focus-visible:ring focus-visible:ring-'+color+'-500 focus-visible:ring-opacity-75'">
                        <span>Key Results</span>
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
                            <ul role="list" class="mt-4 px-1 divide-y divide-gray-200">              
                                <li v-for="keyresult in keyresults" :key="keyresult.id" :id="keyresult.id">
                                    <div class="relative group py-3">
                                        <div class="flex w-full space-x-3 items-start">
                                            <div class="flex-shrink-0">
                                                <span :class="'bg-' + color + '-500' + ' inline-flex items-center justify-center h-10 w-10 rounded-lg'">
                                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                                    </svg>
                                                </span>
                                            </div>
                                            <div class="min-w-0 flex-1">
                                                <div class="text-sm font-medium text-gray-900">
                                                    <div>
                                                    <span class="absolute inset-0" aria-hidden="true" />
                                                    {{ keyresult.name }}
                                                    </div>
                                                </div>
                                                <p class="hidden text-sm text-gray-500">{{ keyresult.description }}</p>
                                                <div class="flex mt-0.5">
                                                    <div class="flex w-full space-x-3">
                                                        <div class="flex flex-col items-baseline space-x-0.5">
                                                            <span class="text-gray-500 text-xs">Actual</span>
                                                            <span :class="'text-gray-600 text-sm mt-0.5'">{{ keyresult.actual.toLocaleString('de-DE') }} 
                                                                <span class="text-gray-500/70 text-xs">{{keyresult.unit}}</span>
                                                            </span>
                                                        </div>
                                                        <div class="flex flex-col mr-2 items-baseline space-x-0.5">
                                                            <span class="text-gray-500 text-xs">Expected</span>
                                                            <span :class="'text-gray-600 text-sm mt-0.5'">{{ keyresult.expected.toLocaleString('de-DE') }} 
                                                                <span class="text-gray-500/70 text-xs">{{keyresult.unit}}</span>
                                                            </span>
                                                        </div>
                                                        <div class="flex flex-col items-baseline space-x-0.5">
                                                            <span class="text-gray-500 text-xs">Target</span>
                                                            <span :class="'text-gray-600 text-sm mt-0.5'">{{ keyresult.target.toLocaleString('de-DE') }} 
                                                                <span class="text-gray-500/70 text-xs">{{keyresult.unit}}</span>
                                                            </span>
                                                        </div>
                                                        <div class="flex flex-col space-x-0.5">
                                                            <span class="text-gray-500 text-xs flex justify-start">Act.-Exp.</span>
                                                            <div :class="[calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected) >=0 ? 'text-green-500' : 'text-red-500', 'flex justify-start items-baseline text-sm mt-0.5']">
                                                                <span v-if="calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected) >= 0" class="text-green-500" aria-hidden="true">+</span>
                                                                <span class="sr-only"> {{ calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected) >= 0 ? 'Increased' : 'Decreased' }} by </span>
                                                                {{  calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected).toFixed(2) }} %
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="flex flex-col items-end">
                                                <TheKeyresultStatusBadge :deviation="calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected)"></TheKeyresultStatusBadge>      
                                            </div>
                                        </div>
                                    </div>              
                                </li>
                            </ul>
                        </DisclosurePanel>
                     </transition>
                </Disclosure>
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
</template>