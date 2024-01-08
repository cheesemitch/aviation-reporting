<script>

import teamsData from '/src/teams.json'
import TheDepartmentMenuButton from '../components/TheDepartmentMenuButton.vue'
import TheMemberListItemVue from '../components/TheMemberListItem.vue'
import TheMemberDetailCardVue from '../components/TheMemberDetailCard.vue'
import PrimaryButton from '/src/components/ThePrimaryButton.vue'
import SecondaryButton from '/src/components/TheSecondaryButton.vue'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

import { PlusSmIcon } from '@heroicons/vue/solid'

export default {
  props: {
    id: {type: String, required: true},
  },
  data() {
    return {
      isOpenEditInfoModal: false,
      memberDetailsModalOpen: false,
      inviteMemberModalOpen: false,
      members : [
        { uid : '1', name : 'Sam Fisher', title: 'Product Manager', role: 'Team Lead', phone: '+49(1)54879656', mail: 'sam.fisher@company.com', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { uid : '2', name : 'Cameron Williamson', title: 'Applications Engineer', role: 'Member', phone: '+49(1)54698741', mail: 'cameron.williamson@company.com', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { uid : '3', name : 'Jenny Wilson', title: 'Central Security Manager', role: 'Member', phone: '+49(1)54879656', mail: 'jenny.wilson@company.com', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { uid : '4', name : 'Dries Vincent', title: 'Manager Business Relations', role: 'Member', phone: '+49(1)54879656', mail: 'deries.vincent@company.com', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixqx=vmH11vnWUy&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
        { uid : '5', name : 'Michael Foster', title: 'IT Manager', role: 'Team Lead', phone: '+49(1)54879956', mail: 'michael.foster@company.com', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
        { uid : '6', name : 'Michelle Watson', title: 'Insurance Manager', role: 'Member', phone: '+49(1)54879656', mail: 'michelle.watson@company.com', avatar: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8cGVvcGxlfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
      ],
      memberDetailUid: '',
    }
  },
  computed: {
    team () {
       return teamsData.teams.find(
          (team) => team.id === parseInt(this.id)
        );
      },
    memberdetail() {
      return this.members.find(
        (memberdetail) => memberdetail.uid == this.memberDetailUid
      );
    },
  },
  methods: {
    closeEditInfoModal() {
      this.isOpenEditInfoModal = false
    },
    openEditInfoModal() {
      this.isOpenEditInfoModal = true 
    },
    openMemberDetailsModal(uid) {      
      this.memberDetailUid = uid;
      console.log(this.memberDetailUid);
      this.memberDetailsModalOpen = true;                 
    },
    closeMemberDetailsModal() {
      this.memberDetailsModalOpen = false
    },
    openInviteMemberModal() {
      this.inviteMemberModalOpen = true
    },
    closeInviteMemberModal() {
      this.inviteMemberModalOpen = false 
    }, 
  },
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    TheDepartmentMenuButton,
    TheMemberListItemVue,
    TheMemberDetailCardVue,
    PlusSmIcon,
    PrimaryButton,
    SecondaryButton
  }
}



</script>

<template>
  <div>
    <!-- Edit Department Info Dialog -->
     <TransitionRoot appear :show="isOpenEditInfoModal" as="template">
        <Dialog as="div" @close="closeEditInfoModal" class="relative z-10">
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
                <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                    Unternehmensbereich bearbeiten
                  </DialogTitle>
                  <div class="mt-2">
                    <p class="text-sm text-gray-500">
                      Ändern sie den Namen und die Beschreibung des Unternehmensbereichs.
                    </p>
                    <div class="space-y-8 divide-y divide-gray-200">
                    
                      <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">                        
                        <div class="sm:col-span-6">
                          <label for="name" class="block text-sm font-medium text-gray-700">
                            Name
                          </label>
                          <div class="mt-1">
                            <input id="name" name="name" type="text" autocomplete="name" class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md">
                          </div>
                        </div>

                        <div class="sm:col-span-6">
                          <label for="about" class="block text-sm font-medium text-gray-700">
                            Beschreibung
                          </label>
                          <div class="mt-1">
                            <textarea id="about" name="about" rows="3" class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                          </div>
                        </div>
                      </div>
                    
                  </div>
                  </div>

                  <div class="mt-6 flex justify-end">
                    <button
                      type="button"
                      class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      @click="closeEditInfoModal">
                      Abbrechen
                    </button>
                    <button
                      type="button"
                      class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      @click="closeEditInfoModal">
                      Speichern
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    <!-- Member Details Dialog -->
      <TransitionRoot appear :show="memberDetailsModalOpen" as="template">
        <Dialog as="div" @close="closeMemberDetailsModal" class="relative z-10">
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
                <DialogPanel class="w-full max-w-sm">
                  <TheMemberDetailCardVue
                  :id="memberdetail.uid" 
                  :key="memberdetail.uid"
                  :avatar="memberdetail.avatar" 
                  :name="memberdetail.name" 
                  :title="memberdetail.title"
                  :role="memberdetail.role"
                  :mail="memberdetail.mail"
                  :phone="memberdetail.phone"
                  @clickOnClose="closeMemberDetailsModal()"
                  ></TheMemberDetailCardVue>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
    <!-- invite Member Dialog -->
     <TransitionRoot appear :show="inviteMemberModalOpen" as="template">
        <Dialog as="div" @close="closeInviteMemberModal" class="relative z-10">
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
                <DialogPanel class="w-full max-w-xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <div class="max-w-lg mx-auto">
                      <div>
                        <div class="text-center">
                          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 48 48" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M34 40h10v-4a6 6 0 00-10.712-3.714M34 40H14m20 0v-4a9.971 9.971 0 00-.712-3.714M14 40H4v-4a6 6 0 0110.713-3.714M14 40v-4c0-1.313.253-2.566.713-3.714m0 0A10.003 10.003 0 0124 26c4.21 0 7.813 2.602 9.288 6.286M30 14a6 6 0 11-12 0 6 6 0 0112 0zm12 6a4 4 0 11-8 0 4 4 0 018 0zm-28 0a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                          <h2 class="mt-2 text-lg font-medium text-gray-900">Mitglieder einladen</h2>
                          <p class="mt-1 text-sm text-gray-500">Fügen sie neue Mitglieder zum Unternehmensbereich hinzu. Die Rollen können durch den Risikomanager geändert werden.</p>
                        </div>
                        <form action="#" class="mt-6 flex">
                          <label for="email" class="sr-only">Email address</label>
                          <input type="email" name="email" id="email" class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md" placeholder="Enter an email" />
                          <PrimaryButton
                            @click="closeEditInfoModal">
                            Einladen
                          </PrimaryButton>                       
                        </form>
                      </div>
                      <div class="mt-10">
                        <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide">Vorschläge</h3>
                        <ul role="list" class="mt-4 border-t border-b border-gray-200 divide-y divide-gray-200 ">
                          <li v-for="member in members" :key="member.uid" class="py-4 flex items-center justify-between space-x-3">
                            <div class="min-w-0 flex-1 flex items-center space-x-3">
                              <div class="flex-shrink-0">
                                <img class="h-10 w-10 rounded-full object-cover" :src="member.avatar" alt="" />
                              </div>
                              <div class="min-w-0 flex-1">
                                <p class="text-sm font-medium text-gray-900 truncate">{{ member.name }}</p>
                                <p class="text-sm font-medium text-gray-500 truncate">{{ member.title }}</p>
                              </div>
                            </div>
                            <div class="flex-shrink-0">
                              <button type="button" class="inline-flex items-center py-2 px-3 border border-transparent rounded-full bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                                <PlusSmIcon class="-ml-1 mr-0.5 h-5 w-5 text-gray-400" aria-hidden="true" />
                                <span class="text-sm font-medium text-gray-900">
                                  Einladen <span class="sr-only">{{ member.name }}</span>
                                </span>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

      <div class="max-w-5xl mx-auto">
        <div>
          <div class="pb-2">
            <nav class="flex items-center text-sm font-medium">
              <router-link to="/app/teams" active-class="" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-100 focus:outline-none focus:underline transition duration-150 ease-in-out">
                Übersicht Teams
              </router-link>
              <svg class="flex-shrink-0 mx-2 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
              </svg>
              <div href="" class="text-gray-500 dark:text-gray-400 hover:text-gray-700 focus:outline-none focus:underline transition duration-150 ease-in-out">
               {{ team.name }}
              </div>
            </nav>
          </div>
          <div class="md:flex md:items-center md:justify-between">
           <div class="flex-1 min-w-0">
             <h2 class="text-2xl font-semibold text-gray-900 sm:truncate dark:text-gray-200">
               Team
             </h2>
           </div>
         </div>
        </div>

         <!-- Team Card -->
        <div class="mt-6 flex flex-col lg:flex-row bg-white dark:bg-gray-800 rounded-lg shadow-sm ">
          <div class="h-48 lg:w-64 overflow-hidden rounded-t-lg lg:rounded-t-none lg:rounded-tl-lg lg:rounded-l-lg lg:overflow-hidden">
              <img class="w-full h-full object-cover" :src="team.image" :alt="team.name">
          </div>

          <div class="flex flex-col w-full lg:ml-2 p-6 lg:p-6">
            <div>
              <h1 class="text-xl font-semibold text-gray-900 dark:text-gray-300 truncate">{{ team.name }}</h1>
            </div>
            <div class="flex flex-1 items-start lg:pr-4">
              <p class="text-sm font-medium text-gray-500 mt-2 dark:text-gray-400/80">{{ team.description }}</p>

            </div>
            <div>
              <div class="flex items-center mt-4">

                  <div class="flex flex-1 flex-wrap">
                    <p class="flex text-sm text-gray-500 dark:text-gray-400/80 truncate">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="-ml-0.5 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                          <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      {{ team.members }} Mitglieder
                    </p>
                  </div>

                  <TheDepartmentMenuButton @editInfoButtonClicked="openEditInfoModal()"></TheDepartmentMenuButton>
                    
                  
                </div>
            </div>

          </div>

        </div>

        <!-- Team Members -->
        <div class="mt-10">
          <div class="border-gray-200 sm:flex sm:items-center sm:justify-between">
            <div>
              <h3 class="text-xl font-semibold text-gray-900 dark:text-gray-200">Mitglieder</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400"> Übersicht der Teams denen ich zugordnet bin. </p>
            </div>
            <div class="mt-3 space-y-3 sm:space-y-0 sm:space-x-3 sm:flex sm:mt-0 sm:ml-4">
              <SecondaryButton>
                Verwalten
              </SecondaryButton>
              <PrimaryButton @click="openInviteMemberModal()">
                Einladen
              </PrimaryButton>
            </div>
          </div>

          
          <!-- Team Members -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">

            <TheMemberListItemVue 
            v-for="member in members"
            :id="member.uid" 
            :key="member.uid"
            :avatar="member.avatar" 
            :name="member.name" 
            :title="member.title"
            :role="member.role"
            @clickOnMemberDetails="openMemberDetailsModal(member.uid)"
            ></TheMemberListItemVue>

          </div>

        </div>

    </div>
  </div>

</template>
