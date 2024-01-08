<script>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
import PrimaryButton from '/src/components/ThePrimaryButton.vue'
import SecondaryButton from '/src/components/TheSecondaryButton.vue'
import CompanyLogo from '/src/components/TheCompanyLogo.vue'
import myTeamsData from '/src/myTeamsAndObjectives.json'
import otherTeamsData from '/src/otherTeamsAndObjectives.json'
import OkrTeamListItem from '../components/TheOkrTeamListItem.vue'

export default {

  data() {
    return {
      // user
      user: { uid : '1', name : 'Michael Foster', title: 'Product Manager', department: 'Forschung & Entwicklung', role: 'Team Lead', phone: '+49(1)54879956', mail: 'michael.foster@company.com', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
      isOpen: false,
      myTeams : myTeamsData.teams,
      otherTeams : otherTeamsData.teams
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
    OkrTeamListItem,
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
      <div class="md:flex md:items-center md:justify-between md:space-x-5">
        <div class="flex items-start space-x-5">
          <div class="flex-shrink-0">
          <div class="relative">
            <img class="object-cover h-16 w-16 rounded-full" :src="user.avatar" alt="Avatar">
            <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
          </div>
        </div>
          <!--
            Use vertical padding to simulate center alignment when both lines of text are one line,
            but preserve the same layout if the text wraps without making the image jump around.
          -->
          <div class="pt-1.5 relative">
            <div class="flex flex-wrap items-center">
              <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-200 mr-3">{{user.name}}</h1>
              <div class="">
                <span :class="[user.role == 'Team Lead' ? 'text-green-800 bg-green-100 dark:text-green-900 dark:bg-green-200/90 ' : 'text-sky-800 bg-sky-100 dark:text-sky-900 dark:bg-sky-300' , 'px-2 py-1 text-xs font-medium rounded-full']">{{user.role}}</span>
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
                <div class="mt-2 sm:mt-1 flex items-center text-sm font-medium text-gray-500">
                  <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-400/80" x-description="Heroicon name: mini/briefcase" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd"></path>
                    <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"></path>
                  </svg>
                  {{user.title}}
                </div>
                <div class="mt-2 sm:mt-1 flex items-center text-sm font-medium text-gray-500">
                  <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-400/80" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z" clip-rule="evenodd" />
                  </svg>
                  {{user.department}}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <section class="mt-8">
        <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">My Teams</h2>
        <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
          Overview of my teams and their objectives.
        </p>
        <div class="grid grid-cols-1 gap-4 my-6">
          <OkrTeamListItem v-for="team in myTeams" :key="team.id" :team="team"></OkrTeamListItem> 
        </div>
      </section>
      <!-- All teams list -->
      <section class="mt-8">
        <div class="md:flex md:items-center md:justify-between md:space-x-5">
          <div>
            <h2 class="text-xl font-semibold text-gray-900 dark:text-gray-100">Other Teams</h2>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">          
              Overview of other teams and their objectives across the organisation.
            </p>
          </div>
        </div>
        <div class="grid grid-cols-1 gap-4 my-6">
          <OkrTeamListItem v-for="team in otherTeams" :key="team.id" :team="team"></OkrTeamListItem>
        </div>
      </section>
    </div>
  </div>
</template>
