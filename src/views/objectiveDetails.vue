<script>
import objectivesData from '/src/objectives.json'
import KeyResultCardVue from '/src/components/TheKeyResultCard.vue'
import activityfeed from '/src/components/TheActivityCard.vue'
import KeyresultStatusBadgeLarge from '/src/components/TheKeyresultStatusBadgeLarge.vue'
import ObjectiveColorButton from '../components/TheObjectiveColorButton.vue'
import MemberListItem from '../components/TheMemberListItem.vue'
import KeyresultListItem from '../components/TheKeyresultListItem.vue'
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
                { uid : '5', name : 'Michael Foster', title: 'Product Manager', role: 'Member', phone: '+49(1)54879956', mail: 'michael.foster@company.com', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
                { uid : '6', name : 'Michelle Watson', title: 'Insurance Manager', role: 'Member', phone: '+49(1)54879656', mail: 'michelle.watson@company.com', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
            ],
      teamMembers : [
          { uid : '2', name : 'Cameron Williamson', title: 'Applications Engineer', role: 'Member', phone: '+49(1)54698741', mail: 'cameron.williamson@company.com', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
          { uid : '5', name : 'Michael Foster', title: 'IT Manager', role: 'Team Lead', phone: '+49(1)54879956', mail: 'michael.foster@company.com', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
          { uid : '6', name : 'Michelle Watson', title: 'Insurance Manager', role: 'Member', phone: '+49(1)54879656', mail: 'michelle.watson@company.com', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
          { uid : '3', name : 'Jenny Wilson', title: 'Central Security Manager', role: 'Member', phone: '+49(1)54879656', mail: 'jenny.wilson@company.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
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
    ObjectiveColorButton,
    KeyresultListItem,
    KeyResultCardVue,
    MemberListItem,
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
                        <ObjectiveColorButton class="hidden"></ObjectiveColorButton>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
    </TransitionRoot>
    <!-- Header section -->
    <div class="md:flex md:items-center lg:justify-between">
      <div class="min-w-0 flex-1">
        <!-- Bread crumbs -->
        <nav class="flex" aria-label="Breadcrumb">
          <ol role="list" class="flex items-center space-x-4">
            <li>
              <div class="flex items-center mr-2">
                <router-link :to="{name: 'my.objectives.list'}" class="group flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                  <svg class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-700 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                  </svg>
                  Back to my objectives
                </router-link>
              </div>
            </li>
          </ol>
        </nav>
        <div class="flex flex-col sm:flex-row mt-1">
          <div class="flex flex-1">
            <div class="flex-shrink-0 h-16 w-16 mt-4 mr-3 -ml-0.5">
              <span :class="['bg-'+objective.color+'', 'inline-flex items-center justify-center h-16 w-16 rounded-full']">
                <div class="radial-progress text-sm text-white font-bold" :style="['--value:'+objectiveAchievement+'; --size:3.5rem; --thickness:4px;']">{{objectiveAchievement}}%</div>
              </span>
            </div>
            <div class="w-full">
              <div class="flex items-start justify-between">
                <h2 class="mt-5 text-2xl font-semibold leading-7 text-gray-900 sm:tracking-tight">{{objective.name}}</h2>
                <KeyresultStatusBadgeLarge :deviation="objectiveAchievement - objectiveExpectedAchievement" class="mt-5 pt-0.5 ml-3 -mr-1.5" ></KeyresultStatusBadgeLarge>
              </div>
              <h3 class="mt-1 text-sm font-medium text-gray-500/80">
                {{objective.description}}
              </h3>
              <div class="mt-1.5 flex flex-col sm:mt-1 sm:flex-row sm:flex-wrap justify-between">
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
                      <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
                    </svg>
                    {{objective.keyresults.length}} Keyresults
                  </div>
                  <div class="mt-1.5 flex items-center text-sm font-medium text-gray-500/80 mr-6">
                    <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                      <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
                    </svg>
                    {{objective.initiatives.length}} Open initiatives
                  </div>
                </div>
                <div class="flex">
                  <div class="mt-1.5 flex items-center text-sm font-medium text-gray-500/80">
                    <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                    </svg>
                    Check-In due in 15 days
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
    <!-- Objective details section -->
    <section class="mt-8">
      <!-- section heading -->
      <div class="sm:flex sm:items-end sm:justify-between">
        <div class="">
          <h2 class="text-lg font-semibold text-gray-900">Objective Details</h2>
          <div class="flex flex-col sm:flex-row mt-2 sm:mt-1 space-y-2 sm:space-y-0 sm:space-x-6">
            <div class="flex items-center">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
              </svg>
              <p class="text-sm text-gray-500">          
                Created on Jan 01, 2022
              </p>
            </div>
            <div class="flex items-center">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
              </svg>
              <p class="text-sm text-gray-500">          
                Last edited on Sep 30, 2022
              </p>
            </div>
            <div class="flex items-center">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
              </svg>
              <p class="text-sm text-gray-500">          
                Last check-in on Sep 30, 2022 
              </p>
            </div>
          </div>
        </div>
        <div class="flex mt-2 flex-col-reverse sm:flex-row sm:mt-0">
          <div class="mt-2 flex xl:mt-0 sm:mr-3">
            <button type="button" class="w-full sm:w-auto flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">Edit</button>
          </div>
          <div class="mt-2 flex xl:mt-0">
            <button type="button" :class="['w-full sm:w-auto flex items-center justify-center rounded-md border border-transparent bg-'+objective.color+' px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-'+objective.color+' focus:outline-none focus:ring-2 focus:ring-'+objective.color+' focus:ring-offset-2 focus:ring-offset-gray-100']">Check-In</button>
          </div>
        </div>
      </div>
      <!-- stats  -->
      <div class="mt-6">
        <!-- Stats  -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <!-- imtem -->
          <div class="rounded-xl p-8 bg-white">
            <span :class="['rounded-lg inline-flex p-3 bg-'+objective.secondaryColor+' text-'+objective.textColor+' ring-4 ring-white']">
              <svg class="h-7 w-7" x-description="Heroicon name: outline/users" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"></path>
              </svg>
            </span>
            <h3 class="mt-6 font-semibold text-gray-900">Responsible</h3>
            <div class="mt-3 relative flex items-center">
              <div class="flex-shrink-0">
                <img class="h-10 w-10 rounded-full object-cover" :src="responsiblePerson.avatar" alt="" />
              </div>
              <div class="min-w-0 flex-1 ml-3">
                <a href="#" class="focus:outline-none">
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">{{ responsiblePerson.name }}</p>
                  <p class="truncate text-sm text-gray-500">{{ responsiblePerson.title }}</p>
                </a>
              </div>
            </div>
          </div>
          <div class="rounded-xl p-8 bg-white">
            <span :class="['rounded-lg inline-flex p-3 bg-'+objective.secondaryColor+' text-'+objective.textColor+' ring-4 ring-white']">
              <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
              </svg>
            </span>
            <h3 class="mt-6 font-semibold text-gray-900">Duration</h3>
            <div class="mt-2 flex items-center text-sm font-medium text-gray-500/80">
              <svg class="mr-1.5 h-4 w-4 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
              </svg>
              Start on Jan 01, 2022{{}}
            </div>
            <div class="mt-2 flex items-center text-sm font-medium text-gray-500/80">
              <svg class="mr-1.5 h-4 w-4 text-gray-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M5.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H6a.75.75 0 01-.75-.75V12zM6 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H6zM7.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H8a.75.75 0 01-.75-.75V12zM8 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H8zM9.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V10zM10 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H10zM9.25 14a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H10a.75.75 0 01-.75-.75V14zM12 9.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V10a.75.75 0 00-.75-.75H12zM11.25 12a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H12a.75.75 0 01-.75-.75V12zM12 13.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V14a.75.75 0 00-.75-.75H12zM13.25 10a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75H14a.75.75 0 01-.75-.75V10zM14 11.25a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75h.01a.75.75 0 00.75-.75V12a.75.75 0 00-.75-.75H14z" />
                <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
              </svg>
              Deadline on Dec 31, 2022{{}}
            </div>
          </div>
          
          <div class="rounded-xl p-8 bg-white">
            <span :class="['rounded-lg inline-flex p-3 bg-'+objective.secondaryColor+' text-'+objective.textColor+' ring-4 ring-white']">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-7 h-7">
                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
            <h3 class="mt-6 font-semibold text-gray-900">Check-In</h3>
            <div class="mt-2 flex items-center text-sm font-medium text-gray-500/80">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
              </svg>
              Weekly, every Friday
            </div>
            <div class="mt-2 flex items-center text-sm font-medium text-gray-500/80">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
              </svg>
              Next check-in on Dec 31, 2022{{}}
            </div>
          </div>
        </div>
      </div>
    </Section>
    <!-- Team section -->
    <section class="mt-8">
      <!-- section heading -->
      <div class="sm:flex sm:items-end sm:justify-between">
        <div class="">
          <h2 class="text-lg font-semibold text-gray-900">Contributors</h2>
          <div class="flex flex-col sm:flex-row mt-2 sm:mt-1 space-y-2 sm:space-y-0 sm:space-x-6">
            <div class="flex items-center">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M10 9a3 3 0 100-6 3 3 0 000 6zM6 8a2 2 0 11-4 0 2 2 0 014 0zM1.49 15.326a.78.78 0 01-.358-.442 3 3 0 014.308-3.516 6.484 6.484 0 00-1.905 3.959c-.023.222-.014.442.025.654a4.97 4.97 0 01-2.07-.655zM16.44 15.98a4.97 4.97 0 002.07-.654.78.78 0 00.357-.442 3 3 0 00-4.308-3.517 6.484 6.484 0 011.907 3.96 2.32 2.32 0 01-.026.654zM18 8a2 2 0 11-4 0 2 2 0 014 0zM5.304 16.19a.844.844 0 01-.277-.71 5 5 0 019.947 0 .843.843 0 01-.277.71A6.975 6.975 0 0110 18a6.974 6.974 0 01-4.696-1.81z" />
              </svg>
              <p class="text-sm text-gray-500">          
                {{teamMembers.length}} Members
              </p>
            </div>
          </div>
        </div>
        <div class="flex mt-2 flex-col-reverse sm:flex-row sm:mt-0">
          <div class="mt-2 flex xl:mt-0 sm:mr-3">
            <button type="button" class="w-full sm:w-auto flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">Manage</button>
          </div>
          <div class="mt-2 flex xl:mt-0">
            <button type="button" :class="['w-full sm:w-auto flex items-center justify-center rounded-md border border-transparent bg-'+objective.color+' px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-'+objective.color+' focus:outline-none focus:ring-2 focus:ring-'+objective.color+' focus:ring-offset-2 focus:ring-offset-gray-100']">Invite</button>
          </div>
        </div>
      </div>
      <!--Team member list-->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        <MemberListItem v-for="member in teamMembers" :key="member.uid"
          :avatar="member.avatar"
          :name="member.name" 
          :title="member.title" 
          :role="member.role"
        ></MemberListItem>
      </div>
    </section>
    <!-- Key Results -->
    <section class="mt-8">
      <!--Key Results section heading -->
      <div class="sm:flex sm:items-end sm:justify-between">
        <div class="">
          <h2 class="text-lg font-semibold text-gray-900">Key Results</h2>
          <div class="flex flex-col sm:flex-row mt-2 sm:mt-1 space-y-2 sm:space-y-0 sm:space-x-6">
            <div class="flex items-center">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M15.5 2A1.5 1.5 0 0014 3.5v13a1.5 1.5 0 001.5 1.5h1a1.5 1.5 0 001.5-1.5v-13A1.5 1.5 0 0016.5 2h-1zM9.5 6A1.5 1.5 0 008 7.5v9A1.5 1.5 0 009.5 18h1a1.5 1.5 0 001.5-1.5v-9A1.5 1.5 0 0010.5 6h-1zM3.5 10A1.5 1.5 0 002 11.5v5A1.5 1.5 0 003.5 18h1A1.5 1.5 0 006 16.5v-5A1.5 1.5 0 004.5 10h-1z" />
              </svg>
              <p class="text-sm text-gray-500">          
                {{objective.keyresults.length}} Key Results
              </p>
            </div>
          </div>
        </div>
        <div class="flex mt-2 flex-col-reverse sm:flex-row sm:mt-0">
          <div class="mt-2 hidden xl:mt-0 sm:mr-3">
            <button type="button" class="w-full sm:w-auto flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">Edit</button>
          </div>
          <div class="mt-2 flex xl:mt-0">
            <button type="button" :class="['w-full sm:w-auto flex items-center justify-center rounded-md border border-transparent bg-'+objective.color+' px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-'+objective.color+' focus:outline-none focus:ring-2 focus:ring-'+objective.color+' focus:ring-offset-2 focus:ring-offset-gray-100']">Add Key Result</button>
          </div>
        </div>
      </div>
      <!--Key Results List -->
      <div v-if="keyresultsEmpty" class="mt-6">
        <button type="button" class="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          <svg class="mx-auto h-12 w-12 text-gray-400" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 14v20c0 4.418 7.163 8 16 8 1.381 0 2.721-.087 4-.252M8 14c0 4.418 7.163 8 16 8s16-3.582 16-8M8 14c0-4.418 7.163-8 16-8s16 3.582 16 8m0 0v14m0-4c0 4.418-7.163 8-16 8S8 28.418 8 24m32 10v6m0 0v6m0-6h6m-6 0h-6" />
          </svg>
          <span class="mt-2 block text-sm font-medium text-gray-900">Create a new Key Result</span>
        </button>
      </div>
      <div v-else class="grid grid-cols-1 gap-4 mt-6">
        <KeyresultListItem 
        v-for="keyresult in objective.keyresults" 
        :key="keyresult"
        :keyresult="keyresult"
        :color="objective.color"
        :objectiveId="objective.id"
				:objectiveSlug="objectiveSlug"
        ></KeyresultListItem>
      </div>
    </section>
    <!-- Initiatives -->
    <section class="mt-8">
      <!--Initiatives section heading -->
      <div class="sm:flex sm:items-end sm:justify-between">
        <div class="">
          <h2 class="text-lg font-semibold text-gray-900">Initiatives</h2>
          <div class="flex flex-col sm:flex-row mt-2 sm:mt-1 space-y-2 sm:space-y-0 sm:space-x-6">
            <div class="flex items-center">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                <path fill-rule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"></path>
              </svg>
              <p class="text-sm text-gray-500">          
                {{objective.initiatives.length}} Open Initiatives 
              </p>
            </div>
          </div>
        </div>
        <div class="flex mt-2 flex-col-reverse sm:flex-row sm:mt-0">
          <div class="mt-2 hidden xl:mt-0 sm:mr-3">
            <button type="button" class="w-full sm:w-auto flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">Edit</button>
          </div>
          <div class="mt-2 flex xl:mt-0">
            <button type="button" :class="['w-full sm:w-auto flex items-center justify-center rounded-md border border-transparent bg-'+objective.color+' px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-'+objective.color+' focus:outline-none focus:ring-2 focus:ring-'+objective.color+' focus:ring-offset-2 focus:ring-offset-gray-100']">Add Initiative</button>
          </div>
        </div>
      </div>
      <div class="mt-6">
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
        <ul v-else role="list" class="grid grid-cols-1 gap-4">
          <li v-for="initiative in objective.initiatives" :key="initiative.id" class="bg-white border border-transparent rounded-xl hover:border-gray-400 overflow-hidden cursor-pointer p-4 sm:p-6">
            <div @click="openInitiativeModal(initiative.id)" class="">
              <div class="flex md:items-center">
                <div :class="['h-12 w-12 mr-3 rounded-full flex justify-center items-center bg-'+objective.secondaryColor]">
                  <svg :class="['h-6 w-6 rounded-full text-'+objective.textColor]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                  </svg>
                </div>
                <div class="w-full">
                  <div class="flex items-start justify-start">
                    <p class="text-sm font-medium text-gray-900 sm:truncate flex-1">
                      {{ initiative.name }}
                    </p>
                    <div class="-mr-0.5 flex-shrink-0 flex">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      <svg class="-ml-0.5 mr-1.5 h-2 w-2 text-green-400" fill="currentColor" viewBox="0 0 8 8">
                      <circle cx="4" cy="4" r="3"></circle>
                      </svg> 
                      On track
                      </span>
                    </div>
                  </div>
                  <div class="mt-1 sm:flex sm:justify-between">
                    <div class="sm:flex">
                      <p class="flex items-center text-sm text-gray-500">
                        <span class="h-4 w-4 bg-green-100 rounded-full flex items-center justify-center mr-2" aria-hidden="true">
                        <span class="h-2 w-2 bg-green-400 rounded-full"></span>
                        </span>
                        In progress
                      </p>
                      <p class="flex items-center text-sm text-gray-500/80 mt-2 sm:mt-0 sm:ml-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400/80">
                          <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                        </svg>
                        Medium priority
                      </p>
                      <p class="flex items-center text-sm text-gray-500/80 mt-2 sm:mt-0 sm:ml-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400/80">
                          <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
                        </svg>
                        Assigned to John Doe
                      </p>
                      <p class="flex items-center text-sm text-gray-500/80 mt-2 sm:mt-0 sm:ml-6">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400/80">
                          <path d="M12 9a1 1 0 01-1-1V3c0-.553.45-1.008.997-.93a7.004 7.004 0 015.933 5.933c.078.547-.378.997-.93.997h-5z" />
                          <path d="M8.003 4.07C8.55 3.992 9 4.447 9 5v5a1 1 0 001 1h5c.552 0 1.008.45.93.997A7.001 7.001 0 012 11a7.002 7.002 0 016.003-6.93z" />
                        </svg>
                        77% progress
                      </p>
                    </div>
                    <div class="mt-2 flex items-center text-sm text-gray-500/80 sm:mt-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400/80">
                        <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                      </svg>
                      <p>
                        Closing on Dec 21, 2022
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
    <!-- Activity feed -->
    <section class="mt-8">
      <!--Key Results section heading -->
      <div class="sm:flex sm:items-end sm:justify-between">
        <div class="">
          <h2 class="text-lg font-semibold text-gray-900">Recent Activities</h2>
          <div class="flex flex-col sm:flex-row mt-2 sm:mt-1 space-y-2 sm:space-y-0 sm:space-x-6">
            <div class="flex items-center">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 1a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 1zM5.05 3.05a.75.75 0 011.06 0l1.062 1.06A.75.75 0 116.11 5.173L5.05 4.11a.75.75 0 010-1.06zm9.9 0a.75.75 0 010 1.06l-1.06 1.062a.75.75 0 01-1.062-1.061l1.061-1.06a.75.75 0 011.06 0zM3 8a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 013 8zm11 0a.75.75 0 01.75-.75h1.5a.75.75 0 010 1.5h-1.5A.75.75 0 0114 8zm-6.828 2.828a.75.75 0 010 1.061L6.11 12.95a.75.75 0 01-1.06-1.06l1.06-1.06a.75.75 0 011.06 0zm3.594-3.317a.75.75 0 00-1.37.364l-.492 6.861a.75.75 0 001.204.65l1.043-.799.985 3.678a.75.75 0 001.45-.388l-.978-3.646 1.292.204a.75.75 0 00.74-1.16l-3.874-5.764z" clip-rule="evenodd" />
              </svg>
              <p class="text-sm text-gray-500">          
                4 Activities
              </p>
            </div>
            <div class="flex items-center">
              <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10 2c-2.236 0-4.43.18-6.57.524C1.993 2.755 1 4.014 1 5.426v5.148c0 1.413.993 2.67 2.43 2.902 1.168.188 2.352.327 3.55.414.28.02.521.18.642.413l1.713 3.293a.75.75 0 001.33 0l1.713-3.293a.783.783 0 01.642-.413 41.102 41.102 0 003.55-.414c1.437-.231 2.43-1.49 2.43-2.902V5.426c0-1.413-.993-2.67-2.43-2.902A41.289 41.289 0 0010 2zM6.75 6a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-6.5zm0 2.5a.75.75 0 000 1.5h3.5a.75.75 0 000-1.5h-3.5z" clip-rule="evenodd" />
              </svg>
              <p class="text-sm text-gray-500">          
                2 Comments
              </p>
            </div>
          </div>
        </div>
        <div class="hidden mt-2 flex-col-reverse sm:flex-row sm:mt-0">
          <div class="mt-2 hidden xl:mt-0 sm:mr-3">
            <button type="button" class="w-full sm:w-auto flex items-center justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">Edit</button>
          </div>
          <div class="mt-2 flex xl:mt-0">
            <button type="button" :class="['w-full sm:w-auto flex items-center justify-center rounded-md border border-transparent bg-'+objective.color+' px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-'+objective.color+' focus:outline-none focus:ring-2 focus:ring-'+objective.color+' focus:ring-offset-2 focus:ring-offset-gray-100']">Add Key Result</button>
          </div>
        </div>
      </div>
      <activityfeed :color="objective.color"></activityfeed>
    </section>
    
  </div>  
</template>

