<script>
import { 
    LightningBoltIcon,
    ArrowSmDownIcon, 
    ArrowSmUpIcon,
    CheckIcon,
    SelectorIcon 
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
    DisclosurePanel,
    Listbox, 
    ListboxButton, 
    ListboxLabel, 
    ListboxOption, 
    ListboxOptions
  } from '@headlessui/vue'

export default {
    data() {
        return {
            users : [
                { uid : '1', name : 'Sam Fisher', title: 'Product Manager', role: 'Team Lead', phone: '+49(1)54879656', mail: 'sam.fisher@company.com', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                { uid : '2', name : 'Cameron Williamson', title: 'Applications Engineer', role: 'Member', phone: '+49(1)54698741', mail: 'cameron.williamson@company.com', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                { uid : '3', name : 'Jenny Wilson', title: 'Central Security Manager', role: 'Member', phone: '+49(1)54879656', mail: 'jenny.wilson@company.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                { uid : '4', name : 'Dries Vincent', title: 'Manager Business Relations', role: 'Member', phone: '+49(1)54879656', mail: 'deries.vincent@company.com', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                { uid : '5', name : 'Michael Foster', title: 'IT Manager', role: 'Member', phone: '+49(1)54879956', mail: 'michael.foster@company.com', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
                { uid : '6', name : 'Michelle Watson', title: 'Insurance Manager', role: 'Member', phone: '+49(1)54879656', mail: 'michelle.watson@company.com', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
            ],
            teamMembers : [
                { uid : '2', name : 'Cameron Williamson', title: 'Applications Engineer', role: 'Member', phone: '+49(1)54698741', mail: 'cameron.williamson@company.com', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
                { uid : '5', name : 'Michael Foster', title: 'IT Manager', role: 'Member', phone: '+49(1)54879956', mail: 'michael.foster@company.com', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
                { uid : '6', name : 'Michelle Watson', title: 'Insurance Manager', role: 'Member', phone: '+49(1)54879656', mail: 'michelle.watson@company.com', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
            ],
            responsible :  '5',
        }
    },
    props: {
        id: {type: String, required: true},
        name: {type: String},
        description: {type: String},
        type: {type: String},
        state: {type: String},
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
        objectiveDeviation() {
            return this.objectiveAchievement - this.objectiveExpectedAchievement
        },
        responsiblePerson() {
            return this.users.find(
                (person) => person.uid == this.responsible
            );
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
        },
        showType () {
            window.alert('test');
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
        DisclosurePanel,
        Listbox,
        ListboxButton,
        ListboxOptions,
        ListboxOption,
        CheckIcon,
        SelectorIcon,
        ListboxLabel
    }
}
</script>

<template>
    <div class="transform transition-all w-full">
        <div class="bg-white rounded-lg shadow">
           <div class="transform transition-all">
                <div :class="'lg:flex lg:items-start lg:justify-start p-4 sm:px-6 sm:pt-6 lg:pb-6 rounded-t-lg lg:border-b'">
                    <div :class="'mx-auto lg:mx-0 h-12 w-12 lg:h-10 lg:w-10 shrink-0 flex items-center'">
                        <svg xmlns="http://www.w3.org/2000/svg" :class="'mx-auto lg:-ml-1 h-12 w-12 text-' + color+ '-500'" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                        </svg>
                    </div>
                    <div class="lg:flex w-full">
                        <div class="mt-3 text-center lg:text-start lg:ml-2 lg:mt-0 flex-1">
                            <h3 as="h3" class="text-lg leading-6 font-medium text-gray-900">{{name}}</h3>
                            <div class="mt-2 lg:mt-1 mr-4">
                                <p class="text-sm text-gray-500">
                                    {{description}}                                    
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="flex justify-center mt-6 lg:mt-0">
                         <div class="shrink-0">
                            <TheKeyresultStatusBadge :deviation="objectiveDeviation"></TheKeyresultStatusBadge>
                        </div>
                    </div>
                </div>
                <div class="space-y-6 py-2 sm:space-y-0 sm:py-0">
                    <!-- achievement -->
                    <div class="space-y-1 px-4 lg:grid lg:grid-cols-3 lg:gap-4 lg:space-y-0 lg:px-6 lg:pt-5 sm:pb-6">
                        <div>
                          <label for="project-name" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"> Achievement </label>
                        </div>
                        <div class="sm:col-span-2">
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
                    <div class="px-4 sm:px-6">
                        <hr class="col-span-3">
                    </div>                    
                    <!-- Project name -->
                    <div class="hidden sm:hidden space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label for="project-name" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"> Project name </label>
                        </div>
                        <div class="sm:col-span-2">
                            <input type="text" name="project-name" id="project-name" class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm">
                        </div>
                    </div>                    
                    <!-- Project description -->
                    <div class="hidden sm:hidden space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div>
                            <label for="project-description" class="block text-sm font-medium text-gray-900 sm:mt-px sm:pt-2"> Description </label>
                        </div>
                        <div class="sm:col-span-2">
                            <textarea id="project-description" name="project-description" rows="3" class="block w-full rounded-md border border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"></textarea>
                        </div>
                    </div>

                   
                    <!-- Type  -->
                    <div class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div class="flex items-center">
                            <label for="type" class="block text-sm font-medium text-gray-900 sm:mt-px"> Type </label>
                        </div>
                        <div class="sm:col-span-2 pt-1 sm:pt-0 flex items-center">
                            <div>
                                <select id="type" name="type"  
                                    class="block pl-3 pr-10 py-0.5 border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm rounded-full">
                                    <option value="Strategic">Strategic</option>
                                    <option value="Operational" selected>Operational</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="px-4 sm:px-6">
                        <hr class="col-span-3">
                    </div>
                    <!-- Category tags -->
                    <div class="space-y-1 px-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div class="">
                            <label for="project-name" class="pt-1 block text-sm font-medium text-gray-900 sm:mt-px"> Category Tags </label>
                        </div>
                        <div class="sm:col-span-2">
                            <ul role="list" class="leading-8">
                                <li class="inline">
                                    <a href="#" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                                    <div class="absolute flex-shrink-0 flex items-center justify-center">
                                        <span class="h-1.5 w-1.5 rounded-full bg-rose-500" aria-hidden="true"></span>
                                    </div>
                                    <div class="ml-3.5 text-sm font-medium text-gray-900">Customer</div>
                                    </a>
                                    <!-- space -->
                                </li>
                                <li class="inline">
                                    <a href="#" class="relative inline-flex items-center rounded-full border border-gray-300 px-3 py-0.5">
                                    <div class="absolute flex-shrink-0 flex items-center justify-center">
                                        <span class="h-1.5 w-1.5 rounded-full bg-indigo-500" aria-hidden="true"></span>
                                    </div>
                                    <div class="ml-3.5 text-sm font-medium text-gray-900">Accessibility</div>
                                    </a>
                                    <!-- space -->
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="px-4 sm:px-6">
                        <hr class="col-span-3">
                    </div>
                      <!-- Team members -->
                      <div class="grid space-y-2 px-4 sm:grid-cols-3 sm:gap-4 sm:space-y-0 sm:px-6 sm:py-5">
                        <div class="">
                          <h3 class="text-sm font-medium text-gray-900">Team Members</h3>
                        </div>
                        <div class="sm:col-span-2">
                          <div>
                      
                      <ul role="list" class="divide-y divide-gray-200">
                        <li v-for="member in teamMembers" :key="member.uid" class="flex items-center justify-between py-2">
                          <div class="flex items-center">
                            <img :src="member.avatar" :alt="member.name" class="h-8 w-8 rounded-full object-cover" />
                            <p class="ml-4 text-sm font-medium text-gray-900">{{member.name}}</p>
                          </div>
                          <button type="button" 
                          :class="'ml-6 rounded-md bg-white text-sm font-medium text-'+color+'-500 hover:text-'+color+'-400 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'">Remove<span class="sr-only"> Aimee Douglas</span></button>
                        </li>
                        
                        <li class="flex items-center justify-between py-2">
                          <button type="button" class="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-gray-500">
                            <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-200 group-hover:border-gray-300 text-gray-400
                            group-hover:text-gray-500">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                                </svg>
                            </span>
                            <span :class="'ml-4 text-sm font-medium text-'+color+'-500 group-hover:text-'+color+'-400'">Invite</span>
                          </button>
                        </li>
                      </ul>
                    </div>
                        </div>
                      </div>
                      <div class="px-4 sm:px-6">
                        <hr class="col-span-3">
                    </div>

                      <!-- Check In -->
                      <div class="space-y-2 px-4 grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:space-y-0 sm:px-6 sm:pt-6 pb-8">
                        <legend class="sr-only">Privacy</legend>
                        <div class="text-sm font-medium text-gray-900" aria-hidden="true">Check-In</div>
                        <div class="space-y-5 sm:col-span-2">
                            <div>
                                <label for="schedule" class="block text-sm font-medium text-gray-700">Schedule</label>
                                <select id="schedule" name="schedule" 
                                    class="mt-1 block pl-3 pr-10 py-2 border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm rounded-md">
                                    <option>Weekly</option>
                                    <option selected="">Monthly</option>
                                    <option>Quarterly</option>
                                    <option>Yearly</option>
                                </select>
                            </div>

                           <Listbox as="div" v-model="responsible">
                                <ListboxLabel class="block text-sm font-medium text-gray-700"> Responsible </ListboxLabel>
                                <div class="mt-1 relative">
                                    <ListboxButton :class="'relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500 sm:text-sm'">
                                        <span class="flex items-center">
                                            <img :src="responsiblePerson.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full object-cover" />
                                        <span class="ml-3 block truncate">{{ responsiblePerson.name }}</span>
                                        </span>
                                        <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                                        <SelectorIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </span>
                                    </ListboxButton>

                                    <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                                        <ListboxOptions class="absolute z- mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                                        <ListboxOption as="template" v-for="member in teamMembers" :key="member.uid" :value="member.uid" v-slot="{ active, selected }">
                                            <li :class="[active ? 'text-gray-900 bg-'+color+'-100' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                                            <div class="flex items-center">
                                                <img :src="member.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full object-cover" />
                                                <span :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']">
                                                {{ member.name }}
                                                </span>
                                            </div>

                                            <span v-if="selected" :class="[active ? 'text-gray-900' : 'text-gray-900', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                                            </span>
                                            </li>
                                        </ListboxOption>
                                        </ListboxOptions>
                                    </transition>
                                </div>
                            </Listbox>
                        </div>
                      </div>
                    </div>
            </div>
            <div class="px-4 sm:px-6">
                        <hr class="col-span-3">
                    </div>
             <div class="flex w-full items-center px-4 sm:px-6 py-4 sm:pb-6 pt-5">              
                    <div class="flex flex-1 flex-wrap">
                        <p class="flex text-sm text-gray-500 truncate">
                            <span class="mr-2">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" />
                                </svg>
                            </span> 
                            Last Check-In July 21, 2022
                        </p>                                
                    </div>
                    <div class="flex space-x-2">
                        <TheObjectiveColorButton 
                            :id="id"
                            :key="color" 
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
</template>