<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import PrimaryButton from '../components/ThePrimaryButton.vue'
import SecondaryButton from '../components/TheSecondaryButton.vue'
import CompanyLogo from '../components/TheCompanyLogo.vue'
import myTeamsData from '../myTeams.json'
import teamsData from '../teams.json'

export default {

  data() {
    return {
      isOpen: false,
      myTeams : myTeamsData.teams,
      teams : teamsData.teams
    }
  },

  methods: {
    closeModal() {
      this.isOpen = false
    },
    openModal() {
      this.isOpen = true 
    } 
  }, 

  components: {
    CompanyLogo,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
    PrimaryButton,
    SecondaryButton
  }
}

</script>

<template>
<div>
<!-- Wrap your dialog in a `TransitionRoot`. -->
  <TransitionRoot appear :show="isOpen" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
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
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-800 p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900 dark:text-gray-200">
                Neues Team
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Bitte geben sie den Namen und eine kurze Beschreibung des neuen Teams an.
                </p>
                <div class="space-y-8 divide-y divide-gray-200">
                  <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-6 hidden">
                      <label for="photo" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Company Logo
                      </label>
                      <div class="mt-2 flex items-center">
                        <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center px-2 pb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700  dark:text-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          Change
                        </button>
                      </div>
                    </div>
                    <div class="sm:col-span-6">
                      <label for="name" class="block text-sm font-medium text-gray-700  dark:text-gray-300">
                        Name
                      </label>
                      <div class="mt-1">
                        <input id="name" name="name" type="text" autocomplete="name" class="dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md">
                      </div>
                    </div>

                    <div class="sm:col-span-6">
                      <label for="about" class="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Beschreibung
                      </label>
                      <div class="mt-1">
                        <textarea id="about" name="about" rows="3" class="dark:bg-gray-900 dark:border-gray-700 dark:text-gray-200 shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>
                      </div>
                      <p class="hidden mt-2 text-sm text-gray-500">Write a few sentences about this business area.</p>
                    </div>
                  </div>                
              </div>
              </div>

              <div class="mt-6 space-y-4 sm:space-y-0 sm:justify-end sm:flex sm:space-x-3 ">
                <SecondaryButton
                  type="button"
                  @click="closeModal">
                  Abbrechen
                </SecondaryButton>
                <PrimaryButton
                  type="button"
                  @click="closeModal">
                  Hinzufügen
                </PrimaryButton>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div class="max-w-5xl mx-auto">
    <!-- Page header -->
    <div class="flex items-start space-x-5">
      <CompanyLogo></CompanyLogo>
      <div>
        <h1 class="pt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">Teams</h1>
        <p class="text-sm font-medium text-gray-500 dark:text-gray-400">
          Übersicht und Verwaltung von Teams und MitarbeiterInnen im Unternehmen.</p>
      </div>
    </div>
    
    <div class="mt-8">        
      <!-- Organization header -->
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Meine Teams</h2>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Übersicht aller Teams denen ich zugordnet bin.
        </p>
        <div class="mt-6 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          
          <!-- my teams for loop -->
          <router-link 
            v-for="team in myTeams" 
            :key="team.id" 
            :to="{name: 'team.details', params:{id: team.id, slug: team.slug}}"
            class="flex flex-col group rounded-lg shadow-sm overflow-hidden border border-transparent hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500">
            <div class="flex-shrink-0">
              <img class="h-48 sm:h-32 w-full object-cover" :src="team.image" :alt="team.name">
            </div>
            <div class="bg-white dark:bg-gray-800 pl-4 pr-2 py-3 flex items-center space-x-1 hover:border-gray-400">
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                  {{team.name}}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {{team.members}} Mitarbeiter
                </p>
              </div>
              <div class="flex-shrink-0">
                <button class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                  <span class="sr-only">Open options</span>
                  <!-- Heroicon name: solid/dots-vertical -->
                  <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                  </svg>
                </button>
              </div>
            </div>
          </router-link>

        </div>
      

      <!-- All teams list -->
      <div class="mt-10">
        <div class="md:flex md:items-center md:justify-between md:space-x-5">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Alle Teams</h2>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">          
              Übersicht aller Teams in der Organisation.
            </p>
          </div>
            <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
              <div class="mt-4 flex space-x-3 md:mt-0">
                <PrimaryButton @click="openModal" >
                  <span>Team Hinzufügen</span>
                </PrimaryButton>
              </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 my-6">

          <router-link 
            v-for="team in teams"
            :to="{name: 'team.details', params:{id: team.id, slug: team.slug}}"  
            :key="team.id" 
            class="rounded-lg group bg-white dark:bg-gray-800 px-6 py-5 shadow-sm flex items-center space-x-3 border border-transparent hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded object-cover" :src="team.image" :alt="team.name">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 dark:text-gray-100 truncate">
                {{team.name}}
              </p>
              <p class="text-sm text-gray-500 dark:text-gray-400 truncate">
                {{team.members}} Mitarbeiter
              </p>
            </div>
            <div class="flex-shrink-0">
              <button class="w-8 h-8 bg-white inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                <span class="sr-only">Open options</span>
                <!-- Heroicon name: solid/dots-vertical -->
                <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </button>
            </div>
          </router-link> 
        </div>
      </div>
       <!-- Description list end-->
    </div>
  </div>
  </div>
</template>
