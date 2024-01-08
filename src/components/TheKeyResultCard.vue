<script>
import { 
    LightningBoltIcon,
    ArrowSmDownIcon, 
    ArrowSmUpIcon 
} from '@heroicons/vue/solid'

import { 
    ChartBarIcon
} from '@heroicons/vue/outline'

import TheKeyresultStatusBadge from '/src/components/TheKeyresultStatusBadge.vue'

import Chart from 'chart.js/auto'

export default {
    data() {
        return {

        }
    },
    props: {
        objectiveId: {type: String},
        objectiveName: {type: String},
        keyresult: {type: Object},
        color: {type: String}
    },
    computed: {
        objectiveSlug() {
            return this.objectiveName.split(/[\s]+/).join("-").toLowerCase();
        },
        keyresultSlug() {
            return this.keyresult.name.split(/[\s]+/).join("-").toLowerCase();
        },
        achievement() {
            if (this.keyresult.type === 'Increase') {
                return (this.keyresult.actual / this.keyresult.target*100).toFixed(2);
            } else {
                return (1/(this.keyresult.actual / this.keyresult.target)*100).toFixed(2);
            };                
        },        
        expectedAchievement() {            
            if (this.keyresult.type === 'Increase') {
                return (this.keyresult.expected / this.keyresult.target*100).toFixed(2);
            } else {
                return (1/(this.keyresult.expected /this.keyresult.target)*100).toFixed(2);
            };
        }
    },
    methods: {
        calculateKeyresultDeviation(type, actual, expected) {
            if (type === 'Increase') {
                return (actual - expected)/expected*100
            } else {
                return (actual - expected)*-1/expected*100
            };
        }   
    },
    mounted() {
        const ctx = document.getElementById(this.keyresult.name);
        console.log('Chart.js component mounted');
        const barChart = new Chart(ctx, {            
            data: {
                labels: ['Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22', 'Jul 22', 'Aug 22', 'Sep 22', 'Okt 22', 'Nov 22', 'Dec 22'],
                datasets: [{
                        type: 'line',
                        label: 'Target',
                        data: [18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18, 18],
                        borderColor: 'rgba(221, 82, 76, 0.5)',
                        pointRadius: 0                    
                    }, 
                    {
                        type: 'line',
                        label: 'Est.',
                        data: [2, 4, 6, 6, 8, 9, 10, 10, 12, 15, 16, 18],
                        borderColor: 'rgba(78, 128, 238, 0.5)',
                    },
                    {
                        type: 'bar',
                        label: 'Act.',
                        data: [2, 3, 4, 5, 8, 8, 9, 9, null, null, null, null],
                        backgroundColor: 'rgba(103, 117, 137, 0.5)',
                        borderColor: 'rgba(103, 117, 137, 0.2)',
                    }
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    },
    components: {
        ChartBarIcon, 
        LightningBoltIcon,
        ArrowSmDownIcon, 
        ArrowSmUpIcon,
        TheKeyresultStatusBadge,
        
    }
}
</script>

<template>
    <div class="border border-transparent hover:border-gray-400 bg-white rounded-lg shadow">
        <router-link :to="{name: 'keyresult.details', params:{objectiveId: objectiveId, objectiveSlug: objectiveSlug, keyresultId: keyresult.id, keyresultSlug: keyresultSlug }}">
           <div class="transform transition-all">
                <div :class="'p-4 sm:p-6 rounded-t-lg'">
                <div class="w-70">
                        <div class="text-md font-medium text-gray-900 flex justify-start">
                            <span class="flex-1 pr-2">{{keyresult.name}}</span>
                            <div class="shrink-0">
                                <TheKeyresultStatusBadge :deviation="calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected)"></TheKeyresultStatusBadge>
                            </div>
                        </div>
                        <div class="flex items-end mt-4">
                            <div class="flex flex-col flex-1">
                                <div class="flex text-xs font-medium text-gray-500 justify-between space-x-2">
                                    <span class="flex flex-wrap">{{expectedAchievement}}% Expected </span> 
                                    <span class="flex flex-wrap justify-end">
                                        <span :class="[(achievement - expectedAchievement) < 0 ? 'text-red-500' : 'text-green-500']">{{(achievement - expectedAchievement).toFixed(2)}}%</span> 
                                         <span class="ml-1">Deviation</span> 
                                    </span>                               
                                </div>
                                <div class="relative flex-1 mt-1 overflow-hidden rounded-full border">
                                    <div class="h-2 bg-gray-100  border-gray-200 rounded-full"></div> 
                                    <div :style="'width: '+expectedAchievement+'%'" :class="'absolute h-2 inset-y-0 bg-gray-300/70 border border-gray-300 rounded-full'"></div>
                                    <div :style="'width: '+achievement+'%'" :class="'absolute h-2 inset-y-0 bg-'+color+'-500  border-'+color+'-400 rounded-full'"></div>
                                </div>
                            </div>
                            <div class="ml-3">
                                <div :class="'flex text-2xl font-semibold text-'+color+'-500 -my-0.5'">
                                    <span class="leading-none">{{achievement}}%</span>                
                                </div>
                            </div>
                        </div>
                    </div>
                   
                    
                    
                </div>
            </div>

            <canvas :id="keyresult.name" height="256" class="w-full px-6"></canvas>
            
            <div class="flex w-full px-6 mt-4">
                <div class="flex w-full">
                    <div class="flex flex-1 space-x-4">
                        <div class="flex flex-col items-baseline space-x-0.5">
                            <span class="text-xs font-medium text-gray-500 ml-0.5">Actual</span>
                            <span :class="'text-gray-800 text-sm font-medium mt-0.5'">{{ keyresult.actual.toLocaleString('de-DE') }} 
                                <span class="text-gray-500 text-xs">{{keyresult.unit}}</span>
                            </span>
                        </div>
                        <div class="flex flex-col mr-2 items-baseline space-x-0.5">
                            <span class="text-xs font-medium text-gray-500">Expected</span>
                            <span :class="'text-gray-800 text-sm font-medium mt-0.5'">{{ keyresult.expected.toLocaleString('de-DE') }} 
                                <span class="text-gray-500 text-xs">{{keyresult.unit}}</span>
                            </span>
                        </div>
                        <div class="flex flex-col items-baseline space-x-0.5">
                            <span class="text-xs font-medium text-gray-500">Target</span>
                            <span :class="'text-gray-800 text-sm font-medium mt-0.5'">{{ keyresult.target.toLocaleString('de-DE') }} 
                                <span class="text-gray-500 text-xs">{{keyresult.unit}}</span>
                            </span>
                        </div>
                        
                    </div>
                    <div class="flex flex-col space-x-0.5">
                            <span class="text-xs font-medium text-gray-500 flex justify-end">Act.-Exp.</span>
                            <div :class="[calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected) >=0 ? 'text-green-500' : 'text-red-500', 'font-medium flex justify-end items-baseline text-sm mt-0.5']">
                                <span v-if="calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected) >= 0" class="text-green-500" aria-hidden="true">+</span>
                                <span class="sr-only"> {{ calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected) >= 0 ? 'Increased' : 'Decreased' }} by </span>
                                {{  calculateKeyresultDeviation(keyresult.type, keyresult.actual, keyresult.expected).toFixed(2) }} %
                            </div>
                        </div>
                </div>
                        
                        
                    
            </div>

            <div class="px-4 pb-4 sm:px-6 sm:pb-6 mt-2 transition-all ease-out">
                
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
                        
                    </div>                
                </div>
            </div> 
        </router-link>        
    </div>
</template>