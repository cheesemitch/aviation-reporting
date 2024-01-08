<script>
import ObjectiveDetailCard from '../components/TheObjectiveDetailCard.vue'
import objectivesData from '/src/objectives.json'
import KeyResultCardVue from '/src/components/TheKeyResultCard.vue'
import activityfeed from '/src/components/TheActivityCard.vue'
import KeyresultStatusBadgeLarge from '/src/components/TheKeyresultStatusBadgeLarge.vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
  Listbox, 
  ListboxButton, 
  ListboxLabel, 
  ListboxOption, 
  ListboxOptions
} from '@headlessui/vue'
import {
    CheckIcon,
    SelectorIcon,
    UsersIcon,
    CalendarIcon,
    ThumbUpIcon, 
    UserIcon,
    ArchiveIcon
} from '@heroicons/vue/solid'
import { PlusIcon } from '@heroicons/vue/outline'

export default {
   props: {
    id: {type: String, required: true},
  },
  data() {
    return {      
      objectives: objectivesData.objectives,
      isOpenInitiativeModal: false,
      selectedInitiativeId: '',
      initiativeName: '',
      componentKey: 0,
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
      timeline : [
        {
          id: 1,
          active: true,
          content: 'Initiative created by',
          target: 'Michael Foster',
          href: '#',
          date: 'Sep 20',
          datetime: '2020-09-20',
          icon: PlusIcon,
          iconBackground: 'bg-yellow-400',
        },
        {
          id: 2,
          active: true,
          content: 'Initiative started by',
          target: 'Martha Gardner',
          href: '#',
          date: 'Sep 28',
          datetime: '2020-09-28',
          icon: CheckIcon,
          iconBackground: 'bg-green-500',
        },
        {
          id: 3,
          active: false,
          content: 'Deadline scheduled for Dec 21, 2022',
          target: '',
          href: '#',
          date: '',
          datetime: '',
          icon: '',
          iconBackground: 'bg-white',
        },
      ],
      keyresultsEmptyManuell: true,
    }
  },
  computed: {
    objective () {
      return objectivesData.objectives.find(
        (objective) => objective.id === this.id
      );
    },
    responsiblePerson() {
        return this.users.find(
            (person) => person.uid == this.responsible
        );
    },
    selectedInitiative() {
      return this.objective.initiatives.find(
        (initiative) => initiative.id === this.selectedInitiativeId
      );
    },
    keyresultsEmpty() {
      if (this.objective.keyresults.length >= 1) {
        return false;
      } else {
        return true;
      }
    },
    initiativesEmpty() {
      if (this.objective.initiatives.length >= 1) {
        return false;
      } else {
        return true;
      }
    },
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
    setColor(objectiveId, newColor) {
      console.log('set '+newColor+' for Objective with ID: '+objectiveId);
      this.componentKey += 1;
      for (var i = 0; i < this.objectives.length; i++) {
        if (this.objectives[i].id === objectiveId) {
          this.objectives[i].color = newColor;
          return;
        }
      };      
    },
    openInitiativeModal(initiativeId) {
      this.isOpenInitiativeModal = true;
      this.selectedInitiativeId = initiativeId;
      this.initiativeName = this.selectedInitiative.name
    },
    closeInitiativeModal() {
      this.isOpenInitiativeModal = false
    },
  },
  components: {
    KeyresultStatusBadgeLarge,
    ObjectiveDetailCard,
    KeyResultCardVue,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    activityfeed,
    Listbox, 
    ListboxButton, 
    ListboxLabel, 
    ListboxOption, 
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
    UsersIcon,
    CalendarIcon,
    ThumbUpIcon, 
    UserIcon,
    PlusIcon,
    ArchiveIcon
  }
}

</script>

<template>
  <div class="max-w-5xl mx-auto">
    <!-- New Objective Dialog -->
    <TransitionRoot appear :show="isOpenInitiativeModal" as="template">
        <Dialog as="div" @close="closeInitiativeModal" class="relative z-10">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div class="fixed inset-0 overflow-y-auto">
            <div class="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all">
                  <div>
                    <div class="max-w-lg mx-auto">
                      <div>
                        <div class="text-center border-b px-8 pt-6 pb-6">
                          <svg :class="'mx-auto h-12 w-12 text-'+objective.color+''" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
                          </svg>
                          <h2 class="mt-2 text-lg font-medium text-gray-900">{{selectedInitiative.name}}</h2>
                          <p class="mt-4 justify-center flex items-center text-sm text-gray-500">
                            <span class="h-4 w-4 bg-green-100 rounded-full flex items-center justify-center mr-2" aria-hidden="true">
                            <span class="h-2 w-2 bg-green-400 rounded-full"></span>
                            </span>
                            In progress
                          </p>
                        </div>
                        <div class="px-8 py-3">
                          <div class="space-y-8">
                            <div class="grid gap-x-4 grid-cols-6">

                              <div class="col-span-6 hidden">
                                <label for="name" class="block text-sm font-medium text-gray-700">New Tiitle</label>
                                <div class="mt-1">
                                  <textarea id="initiativeName" name="initiativeName" type="text" :placeholder="selectedInitiative.name"
                                  v-model="initiativeName"
                                  class="shadow-sm focus:ring-gray-500 focus:border-gray-500 flex flex-wrap w-full sm:text-sm border-gray-300 rounded-md" 
                                  tabindex="0"></textarea>                            
                                </div>
                              </div>
                              <div class="col-span-6 hidden">
                                <label for="description" class="block text-sm font-medium text-gray-700">Description (Optional)</label>
                                <div class="mt-1">
                                  <textarea id="description" name="description" rows="3" 
                                  class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md">
                                  </textarea>                                  
                                </div> 
                              </div>

                              <div class="grid grid-cols-6 items-center col-span-6 py-4">
                                <div class="flex items-center col-span-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400 mr-1.5 shrink-0">
                                    <path fill-rule="evenodd" d="M4.25 2A2.25 2.25 0 002 4.25v11.5A2.25 2.25 0 004.25 18h11.5A2.25 2.25 0 0018 15.75V4.25A2.25 2.25 0 0015.75 2H4.25zM15 5.75a.75.75 0 00-1.5 0v8.5a.75.75 0 001.5 0v-8.5zm-8.5 6a.75.75 0 00-1.5 0v2.5a.75.75 0 001.5 0v-2.5zM8.584 9a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5a.75.75 0 01.75-.75zm3.58-1.25a.75.75 0 00-1.5 0v6.5a.75.75 0 001.5 0v-6.5z" clip-rule="evenodd" />
                                  </svg>
                                  <label for="type" class="block text-sm font-medium text-gray-500">Status</label>
                                </div>
                                <div class="col-span-4 pt-0 flex items-center justify-end">
                                  <div class="-mr-0.5 flex-shrink-0 flex">
                                  <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                    <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                                    <circle cx="4" cy="4" r="3"></circle>
                                    </svg> 
                                    On track
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div class="grid grid-cols-6 items-center col-span-6 py-4">
                                <div class="flex items-center col-span-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 mr-1.5 text-gray-400 shrink-0">
                                    <path d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" />
                                    <path d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" />
                                  </svg>
                                  <label for="type" class="block text-sm font-medium text-gray-500"> Progress </label>
                                </div>
                                <div class="col-span-4 pt-1 sm:pt-0 flex items-center justify-end">
                                  <div>
                                    <div :class="'flex text-lg font-medium text-'+objective.color+'-500 -my-0.5'">
                                        <span class="leading-none">{{'77 '}}%</span>                
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div class="grid grid-cols-6 items-center col-span-6 py-4">
                                <div class="flex items-center col-span-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5 text-gray-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                    <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                  </svg>
                                  <label for="type" class="block text-sm font-medium text-gray-500"> Priority </label>
                                </div>
                                <div class="col-span-4 pt-0 flex items-center justify-end">
                                  <div>
                                    <select id="priority" name="priority"  
                                      class="block pl-3 pr-10 py-0.5 border-gray-300 focus:outline-none focus:ring-gray-500 focus:border-gray-500 text-sm rounded-full">
                                      <option value="High">High</option>
                                      <option value="Medium" selected>Medium</option>
                                      <option value="Low">Low</option>
                                    </select>
                                  </div>
                                </div>
                              </div>
                              <div class="grid grid-cols-6 items-center col-span-6 py-2">
                                <div class="flex items-center col-span-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 mr-1.5 text-gray-400 shrink-0">
                                    <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                                  </svg>
                                  <label for="type" class="block text-sm font-medium text-gray-500"> Assigned to </label>
                                </div>
                                <div class="col-span-4 flex items-center justify-end">
                                  <div>
                                    <Listbox as="div" v-model="responsible">
                                      
                                      <div class="relative">
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
                                                  <li :class="[active ? 'text-gray-900 bg-'+objective.color+'-100' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
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
                              <div class="grid grid-cols-6 items-center col-span-6 py-4">
                                <div class="flex items-center col-span-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 mr-1.5 text-gray-400 shrink-0">
                                    <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                                  </svg>
                                  <label for="type" class="block text-sm font-medium text-gray-500"> Scheduled start </label>
                                </div>
                                <div class="col-span-4 flex items-center justify-end">
                                  <div>
                                    <p class="text-sm font-medium text-gray-900">
                                      Dec 21, 2022
                                    </p>
                                  </div>
                                </div>
                              </div>
                              <div class="grid grid-cols-6 items-center col-span-6 py-4">
                                <div class="flex items-center col-span-2">
                                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 mr-1.5 text-gray-400 shrink-0">
                                    <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                                  </svg>
                                  <label for="type" class="block text-sm font-medium text-gray-500"> Deadline on </label>
                                </div>
                                <div class="col-span-4 flex items-center justify-end">
                                  <div>
                                    <p class="text-sm font-medium text-gray-900">
                                      Dec 21, 2022
                                    </p>
                                  </div>
                                </div>
                              </div>
                              
                            </div>
                          </div>
                        </div>
                        <div class="flow-root px-8">
                          <div class="items-center col-span-2 hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" 
                            fill="currentColor" class="w-5 h-5 text-gray-400 mr-1.5">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
                            </svg>


                            <label for="type" class="block text-sm font-medium text-gray-500"> Timeline </label>
                          </div>
                          <div class="pt-1 rounded-lg mt-2 mb-6 ">
                          <ul role="list" class="-mb-8 mt-2">
                            
                            <li v-for="(event, eventIdx) in timeline" :key="event.id">
                              <div class="relative pb-8">
                                <span v-if="eventIdx !== timeline.length - 1" class="absolute top-4 left-3  h-full w-px bg-gray-400" aria-hidden="true" />
                                <div class="relative flex space-x-3">
                                  <div>
                                    <span :class="[ event.active ? 'ring-offset-2 ring-1 ring-gray-400' : 'border border-gray-400 border-dashed', event.iconBackground, 'h-6 w-6 rounded-full flex items-center justify-center']">
                                      <component :is="event.icon" class="h-4 w-4 text-white" aria-hidden="true" />
                                    </span>
                                  </div>
                                  <div class="flex min-w-0 flex-1 justify-between space-x-4 pt-0.5">
                                    <div>
                                      <p class="text-sm text-gray-500">
                                        {{ event.content }} <a :href="event.href" class="font-medium text-gray-900">{{ event.target }}</a>
                                      </p>
                                    </div>
                                    <div class="whitespace-nowrap text-right text-sm text-gray-500">
                                      <time :datetime="event.datetime">{{ event.date }}</time>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                          </ul>
                          </div>
                        </div>
                      </div>
                      <div class="px-8 py-6 border-t border-gray-300 flex justify-end bg-gray-100">
                        <button
                          type="button"
                          class="inline-flex justify-center shadow-sm rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          @click="closeInitiativeModal">
                          Edit
                        </button>
                        <button
                          type="button"
                          class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-gray-600 px-4 py-2 text-sm font-medium text-white hover:bg-gray-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          @click="closeInitiativeModal">
                          Close Initiative
                        </button>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
    </TransitionRoot>
    <!-- Page header -->
    <!-- Header section -->
    <div class="md:flex md:items-center lg:justify-between">
      <div class="min-w-0 flex-1">
        <!-- Bread crumbs -->
        <nav class="flex" aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-4">
            <li>
              <div class="flex items-center mr-2">
                <router-link :to="{name: 'objectives.myObjectives'}" class="group flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                  <svg class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-700 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                  </svg>
                  Back to objectives
                </router-link>
              </div>
            </li>
            <li class="hidden">
              <div class="flex items-center">
                <span  class="w-5 flex-shrink-0 text-gray-400 mr-2 text-xs font-semibold" >|</span>
                <router-link :to="{name: 'objectives.myObjectives'}" class="text-sm font-medium text-gray-500 hover:text-gray-700">Objectives</router-link>
              </div>
            </li>
            <li class="hidden">
              <div class="flex items-center">
                <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                </svg>
                <router-link :to="{name: 'objective.details', params:{id: objective.id}}" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                  {{objective.name}}
                </router-link>
              </div>
            </li>
          </ol>
        </nav>
        <div class="flex mt-1">
          <div class="flex-shrink-0 h-16 w-16 mt-4 mr-3 -ml-0.5">
            <span :class="['bg-'+objective.color+'', 'inline-flex items-center justify-center h-16 w-16 rounded-full']">
              <div class="radial-progress text-sm text-white font-bold" :style="['--value:'+objectiveAchievement+'; --size:3.5rem; --thickness:4px;']">{{objectiveAchievement}}%</div>
            </span>
          </div>
          <div class="w-full">
            <div class="flex items-start justify-between">
              <h2 class="mt-5 text-2xl font-semibold leading-7 text-gray-900 sm:tracking-tight">{{objective.name}}</h2>
              <KeyresultStatusBadgeLarge :deviation="objectiveAchievement - objectiveExpectedAchievement" class="py-1 mt-4 ml-2 -mr-1" ></KeyresultStatusBadgeLarge>
            </div>
            <h3 class="mt-1.5 text-sm font-medium text-gray-500/80">
              {{objective.description}}
            </h3>
            <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap justify-between">
              <div class="flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                <div class="mt-1.5 flex items-center text-sm font-medium text-gray-500/80 mr-6">
                  <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z" clip-rule="evenodd" />
                    <path fill-rule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                  </svg>
                  {{objective.goalName}}
                </div>
                <div class="mt-1.5 flex items-center text-sm font-medium text-gray-500/80 mr-6">
                  <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                    <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                  </svg>
                  Started on Jan 01, 2022{{}}
                </div>
                <div class="mt-1.5 flex items-center text-sm font-medium text-gray-500/80 mr-6">
                  <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                    <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                  </svg>
                  Deadline on Dec 31, 2022{{}}
                </div>
              </div>
              <div class="flex">
                <div class="mt-1.5 flex items-center text-sm font-medium text-gray-500/80">
                  <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                  </svg>
                  Check-In on Oct 30, 2022{{}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- objective-->
    <div class="mt-8 transform transition-all grid grid-cols-1 sm:grid-cols-3 gap-6">
      <ObjectiveDetailCard class="mx-auto col-span-1 sm:col-span-2" 
        :key="componentKey" 
        :id="objective.id"
        :name="objective.name"
        :description="objective.description"
        :color="objective.color"
        :type="objective.type"
        :state="objective.state"
        :keyresults="objective.keyresults"
        :initiatives="objective.initiatives"
        @slateColorClick="setColor(objective.id, 'slate')"
        @grayColorClick="setColor(objective.id, 'gray')"
        @zincColorClick="setColor(objective.id, 'zinc')"
        @stoneColorClick="setColor(objective.id, 'stone')"
        @redColorClick="setColor(objective.id, 'red')"
        @orangeColorClick="setColor(objective.id, 'orange')"
        @amberColorClick="setColor(objective.id, 'amber')"
        @yellowColorClick="setColor(objective.id, 'yellow')"
        @limeColorClick="setColor(objective.id, 'lime')"
        @greenColorClick="setColor(objective.id, 'green')"
        @emeraldColorClick="setColor(objective.id, 'emerald')"
        @tealColorClick="setColor(objective.id, 'teal')"
        @cyanColorClick="setColor(objective.id, 'cyan')"
        @skyColorClick="setColor(objective.id, 'sky')"
        @blueColorClick="setColor(objective.id, 'blue')"
        @indigoColorClick="setColor(objective.id, 'indigo')"
        @violetColorClick="setColor(objective.id, 'violet')"
        @purpleColorClick="setColor(objective.id, 'purple')"
        @fuchsiaColorClick="setColor(objective.id, 'fuchsia')"
        @pinkColorClick="setColor(objective.id, 'pink')"
        @roseColorClick="setColor(objective.id, 'rose')"
        >
      </ObjectiveDetailCard>
      
      <div class="col-span-1">
        <!-- Status Info -->
        <div class="bg-white shadow rounded-lg pb-4 relative">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Status</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Status info for the objective.</p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div>
              <div class="sm:col-span-1">
                <div class="space-y-5">
                  <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-500 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M3 5a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2h-2.22l.123.489.804.804A1 1 0 0113 18H7a1 1 0 01-.707-1.707l.804-.804L7.22 15H5a2 2 0 01-2-2V5zm5.771 7H5V5h10v7H8.771z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-green-700 text-sm font-medium">Under monitoring</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clip-rule="evenodd" />
                    </svg>
                    <span class="text-gray-900 text-sm font-medium">Next Check-In in 14 days</span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                    </svg>
                    <span class="text-gray-900 text-sm font-medium">Last edited on <time datetime="2020-12-02">Jul 2, 2022</time></span>
                  </div>
                  <div class="flex items-center space-x-2">
                    <svg class="h-5 w-5 text-gray-400 shrink-0" x-description="Heroicon name: solid/calendar" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="text-gray-900 text-sm font-medium">Created on <time datetime="2020-12-02">Jul 2, 2022</time></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Statistics -->
        <div class="bg-white shadow rounded-lg mt-6 pb-4 relative">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Statistics</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Latest statistics for the objective.</p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div>
             <div class="sm:col-span-1">
                <div class="space-y-5">
                  <div class="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                      </svg>
                      <span class="text-gray-900 text-sm font-medium">4 Key Results</span>
                  </div>
                  <div class="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M2 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 100 4v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2a2 2 0 100-4V6z" />
                      </svg>
                      <span class="text-gray-900 text-sm font-medium">3 Initiatives</span>
                  </div>
                  <div class="flex items-center space-x-2">
                      <svg class="h-5 w-5 text-gray-400 shrink-0" x-description="Heroicon name: solid/chat-alt" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                          <path fill-rule="evenodd" d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z" clip-rule="evenodd"></path>
                      </svg>
                      <span class="text-gray-900 text-sm font-medium">4 Comments</span>
                  </div>
                  <div class="flex items-center space-x-2">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                      </svg>
                      <span class="text-gray-900 text-sm font-medium">3 Team Members</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- Team members -->
        <div class="bg-white shadow overflow-hidden rounded-lg hidden">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Team members</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Members assigned to this objective.</p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div>
              <ul role="list" class="divide-y divide-gray-200">
                <li v-for="member in teamMembers" :key="member.uid" class="flex items-center justify-between py-2">
                  <div class="flex items-center">
                    <img :src="member.avatar" :alt="member.name" class="h-8 w-8 rounded-full object-cover" />
                    <p class="ml-4 text-sm font-medium text-gray-900">{{member.name}}</p>
                  </div>
                  <button type="button" 
                  :class="'ml-6 rounded-md bg-white text-sm font-medium text-'+objective.color+' hover:text-'+objective.color+' focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2'">Remove<span class="sr-only"> Aimee Douglas</span></button>
                </li>
                <li class="flex items-center justify-between py-2">
                  <button type="button" class="group -ml-1 flex items-center rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-gray-500">
                    <span class="flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-200 group-hover:border-gray-300 text-gray-400
                    group-hover:text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentcolor">
                            <path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd" />
                        </svg>
                    </span>
                    <span :class="'ml-4 text-sm font-medium text-'+objective.color+' group-hover:text-'+objective.color+''">Invite</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Check-In -->
        <div class="bg-white shadow rounded-lg mt-6 pb-4 relative hidden">
          <div class="px-4 py-5 sm:px-6">
            <h3 class="text-lg leading-6 font-medium text-gray-900">Check-In</h3>
            <p class="mt-1 max-w-2xl text-sm text-gray-500">Update schedule for the objective.</p>
          </div>
          <div class="border-t border-gray-200 px-4 py-5 sm:px-6">
            <div>
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
                      <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                      <ListboxOption as="template" v-for="member in teamMembers" :key="member.uid" :value="member.uid" v-slot="{ active, selected }">
                          <li :class="[active ? 'text-gray-900 bg-'+objective.color+'' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
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
      </div>
    </div>
    <!-- Key Results -->
    <section class="mt-14">
      <div class="md:flex md:items-center md:justify-between md:space-x-5">
        <div>
          <h2 class="text-xl font-semibold text-gray-900">Ergebniskennzahlen</h2>
          <p class="mt-1 text-sm text-gray-500">Übersicht der Ergebniskennzahlen des Unternehmensziels. </p>
        </div>
        <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
          <div class="mt-4 flex space-x-3 md:mt-0">
            <button type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm 
              text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none 
              focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
              <!-- Heroicon name: solid/pencil -->
              <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path>
              </svg>
              <span>Neue Ergebniskennzahl</span>
            </button>
          </div>
        </div>
      </div>
      <div v-if="keyresultsEmpty" class="mt-8">
        <button type="button" class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
          </svg>
          <span class="mt-2 block text-sm font-medium text-gray-900">Create a new Key Result</span>
        </button>
      </div>
      <div v-else class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-8">
        <KeyResultCardVue 
        v-for="keyresult in objective.keyresults" 
        :key="keyresult"
        :id="keyresult.id"
        :keyresult="keyresult"
        :objectiveId="objective.id"
        :objectiveName="objective.name"
        :color="objective.color"
        ></KeyResultCardVue>
      </div>
    </section>
   
    <!-- Initiatives -->
    <section class="mt-14">
      <div class="grid grid-cols-1 gap-4">
        <div class="bg-white shadow overflow-hidden rounded-md">
          <div class="bg-white px-4 py-5 border-b border-gray-200 sm:px-6 items-center">
            <div class="flex justify-between items-center flex-wrap sm:flex-nowrap">
              <div class="">
               
                  <h2 class="text-xl font-semibold text-gray-900">Initiativen</h2>
                  <p class="mt-1 text-sm text-gray-500">Übersicht der Initiativen zm erreichen des Unternehmensziels. </p>
                
              </div>
              <div class="mt-3 flex sm:mt-0 sm:ml-4">
                <button type="button" class="-ml-px relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-gray-50 hover:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                    <path fill-rule="evenodd" d="M2 3.75A.75.75 0 012.75 3h11.5a.75.75 0 010 1.5H2.75A.75.75 0 012 3.75zM2 7.5a.75.75 0 01.75-.75h6.365a.75.75 0 010 1.5H2.75A.75.75 0 012 7.5zM14 7a.75.75 0 01.55.24l3.25 3.5a.75.75 0 11-1.1 1.02l-1.95-2.1v6.59a.75.75 0 01-1.5 0V9.66l-1.95 2.1a.75.75 0 11-1.1-1.02l3.25-3.5A.75.75 0 0114 7zM2 11.25a.75.75 0 01.75-.75H7A.75.75 0 017 12H2.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
                  </svg>
                  <span class="ml-2">Sort</span>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="ml-2.5 -mr-1.5 h-5 w-5 text-gray-400">
                    <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
                  </svg>
                </button>
                <button type="button" class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium 
                text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  Erstellen
                </button>
              </div>
            </div>
          </div>
          <div v-if="initiativesEmpty" class="text-center p-8">
            <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path vector-effect="non-scaling-stroke" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">No initiatives</h3>
            <p class="mt-1 text-sm text-gray-500">Get started by creating a new initiative.</p>
            <div class="mt-6">
              <button type="button" class="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                <PlusIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
                New Project
              </button>
            </div>
          </div>
          <ul v-else role="list" class="divide-y divide-gray-200">
            <li v-for="initiative in objective.initiatives" :key="initiative.id">
              <div @click="openInitiativeModal(initiative.id)" class="block hover:bg-gray-50 cursor-pointer">
                <div class="px-4 py-4 sm:px-6">
                  <div class="flex items-start justify-start">
                    <svg xmlns="http://www.w3.org/2000/svg" :class="'-mt-0.5 h-6 w-6 text-'+objective.color+''" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                    </svg>
                    <p class="ml-2 text-sm font-medium text-gray-900 sm:truncate flex-1">
                      {{ initiative.name }}
                    </p>
                    <div class="ml-2 -mr-0.5 flex-shrink-0 flex">
                     <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"></circle>
                      </svg> 
                      On track
                      </span>
                    </div>
                  </div>
                  <div class="mt-2 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <p class="flex items-center text-sm text-gray-500">
                        <span class="h-4 w-4 bg-green-100 rounded-full flex items-center justify-center mr-2" aria-hidden="true">
                        <span class="h-2 w-2 bg-green-400 rounded-full"></span>
                        </span>
                        In progress
                      </p>
                      <p class="flex items-center text-sm text-gray-500 mt-2 sm:mt-0 sm:ml-6">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1.5 text-gray-400 shrink-0" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                        </svg>
                        Medium priority
                      </p>
                      <p class="flex items-center text-sm text-gray-500 mt-2 sm:mt-0 sm:ml-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 mr-1.5 text-gray-400 shrink-0">
                          <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                        </svg>
                        Assigned to John Doe
                      </p>
                      <p class="flex items-center text-sm text-gray-500 mt-2 sm:mt-0 sm:ml-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 mr-1.5 text-gray-400 shrink-0">
                          <path d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" />
                          <path d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" />
                        </svg>
                        77% progress
                      </p>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 mr-1.5 text-gray-400 shrink-0">
                        <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                      </svg>
                      <p>
                        Closing on Dec 21, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div
          v-for="initiative in objective.initiatives"
          :key="initiative.id" 
          class="hidden rounded-lg border border-gray-300 group bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500">
          <div class="flex-shrink-0">
            <div class="h-10 w-10 rounded object-cover bg-white flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" :class="'h-8 w-8 text-'+objective.color+''" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
              </svg>
            </div>
          </div>
          <div class="flex-1 min-w-0">
            <p class="text-sm font-medium text-gray-900 truncate">
              {{initiative.name}}
            </p>
            <p class="text-sm text-gray-500 truncate">
              Nr. {{initiative.id}} 
            </p>
          </div>
          <div class="flex-shrink-0">
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
        </div> 
      </div>
    </section>
  
    
    <!-- Activity feed -->
    <section class="mt-14">
      <activityfeed></activityfeed>
    </section>
    
  </div>  
</template>

