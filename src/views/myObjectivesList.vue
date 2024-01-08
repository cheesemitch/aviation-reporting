<script>
  import CompanyLogo from '/src/components/TheCompanyLogo.vue'
  import PrimaryButton from '/src/components/ThePrimaryButton.vue'
  import SecondaryButton from '/src/components/TheSecondaryButton.vue'
  import RocketIcon from '/src/components/TheRocketIcon.vue'
  import ObjectiveIcon from '/src/components/TheObjectiveIcon.vue'
  import { ChevronRightIcon } from '@heroicons/vue/solid'
  import TheTooltip from '/src/components/TheTooltip.vue'
  import GoalStatusBadge from '../components/TheGoalStatusBadge.vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  import MyObjectiveListItem from '../components/TheMyObjectiveListItem.vue'
  import ObjectiveColorButtonVue from '../components/TheObjectiveColorButton.vue'
  import ObjectivesData from '/src/myObjectives.json'
  export default {
    data() {
      return {
        // user
        user: { uid : '1', name : 'Michael Foster', title: 'Product Manager', department: 'Forschung & Entwicklung', role: 'Team Lead', phone: '+49(1)54879956', mail: 'michael.foster@company.com', avatar: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60' },
        // goals data
        objectives: ObjectivesData.objectives,
        // modals
        isOpenEditModal: false,
        isOpenCancelEditingModal: false,
        // tooltips
        headerTooltip: 'Die Zielvorgaben werden übergeordneten Unternehmenszielen zugeordnet. Eine Übersicht aller Ziele samt Zielvorgaben finden Sie unter Unternehmensziele.',
        showHeaderTooltip: false,
        // toggle
        showClosedGoals: false,
        // snackbar
        showAlertSaved: false,
        showAlertCancelled: false,
        showAlertAdded: false,
        showAlertRemoved: false,
      }
    },
    methods: {
      openEditModal() {
        this.newCompany = JSON.parse(JSON.stringify(this.company));
        this.isOpenEditModal = true;
      },
      saveCompanyInfo() {
        this.company = JSON.parse(JSON.stringify(this.newCompany));
        this.isOpenEditModal = false;
        setTimeout(() => {this.showAlertSaved = true;},500);
        setTimeout(() => {this.showAlertSaved = false;},4000);
      },
      cancelEditing () {
          this.isOpenCancelEditingModal = false;
          setTimeout(() => {this.isOpenEditModal = false;},300);
          setTimeout(() => {this.showAlertCancelled = true;},500);
          setTimeout(() => {this.showAlertCancelled = false;},4000);
      },
    },
    components: {
      CompanyLogo,
      PrimaryButton,
      SecondaryButton,
      RocketIcon,
      ChevronRightIcon,
      ObjectiveIcon,
      TheTooltip,
      GoalStatusBadge,
      MyObjectiveListItem,
      ObjectiveColorButtonVue,
      Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, Switch, SwitchGroup, SwitchLabel
    }
  }
</script>
<template>
  <div>
    <!-- Edit Modal -->
    <TransitionRoot as="template" :show="isOpenEditModal">
      <Dialog as="div" class=" relative z-10">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-30 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-3xl sm:p-6">
                <!-- Modal header -->
                <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" 
                  @click="isOpenCancelEditingModal = true">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Unternehmensprofil bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Bearbeiten Sie hier die Detailinformationen Ihres Unternehmens.</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div class="mt-8">
                  <div class="grid grid-cols-6 gap-6">

                    <div class="col-span-6">
                      <label class="block text-sm font-medium text-gray-700">Cover photo</label>
                      <div class="mt-1 flex justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div class="space-y-1 text-center">
                          <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                            <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                          <div class="flex text-sm text-gray-600">
                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-400 focus-within:ring-offset-2 hover:text-cyan-400">
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" class="sr-only" />
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                        </div>
                      </div>
                    </div>

                    <div class="col-span-3">
                      <label class="block text-sm font-medium text-gray-700">Logo</label>
                      <div class="mt-1 flex items-center">
                        <span class="inline-block h-12 w-12 overflow-hidden rounded-full bg-gray-100">
                          <svg class="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                          </svg>
                        </span>
                        <button type="button" class="ml-5 rounded-md border border-gray-300 bg-white py-2 px-3 text-sm font-medium leading-4 text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">Change</button>
                      </div>
                    </div>
                    
                  <div class="col-span-6">
                    <label for="name" class="block text-sm font-medium text-gray-700">Name des Unternehmens</label>
                    <input v-model="newCompany.name" type="text" name="name" id="name" autocomplete="name" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>

                  <div class="col-span-6">
                    <label for="credo" class="block text-sm font-medium text-gray-700">Credo</label>
                    <div class="mt-1">
                      <textarea v-model="newCompany.credo" id="credo" name="credo" rows="2" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm" placeholder="" />
                    </div>
                  </div>

                  

                  <div class="col-span-6">
                    <label for="about" class="block text-sm font-medium text-gray-700">Über das Unternehmen</label>
                    <div class="mt-1">
                      <textarea v-model="newCompany.about" id="about" name="about" rows="3" class="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm" placeholder="" />
                    </div>
                    <p class="mt-2 text-sm text-gray-500">Eine kurze Beschreibung über Ihr Unternehmen.</p>
                  </div>
                                  
                  <div class="col-span-6 sm:col-span-4">
                    <label for="company-website" class="block text-sm font-medium text-gray-700">Website</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">https://</span>
                      <input v-model="newCompany.website" type="text" name="username" id="username" autocomplete="username" class="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm" />
                    </div>
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="email-address" class="block text-sm font-medium text-gray-700">Email adresse</label>
                    <input v-model="newCompany.email" type="text" name="email-address" id="email-address" autocomplete="email" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="telephone" class="block text-sm font-medium text-gray-700">Telefonnummer</label>
                    <input v-model="newCompany.phone" type="text" name="telephone" id="telephone" autocomplete="telephone" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="address-name" class="block text-sm font-medium text-gray-700">Firmenname (Anschrift)</label>
                    <input v-model="newCompany.addressName" type="text" name="address-name" id="address-name" autocomplete="street-address" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="street-address" class="block text-sm font-medium text-gray-700">Straße (Anschrift)</label>
                    <input v-model="newCompany.address" type="text" name="street-address" id="street-address" autocomplete="street-address" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="postal-code" class="block text-sm font-medium text-gray-700">Postleitzahl</label>
                    <input v-model="newCompany.zipcode" type="text" name="postal-code" id="postal-code" autocomplete="postal-code" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-6 lg:col-span-2">
                    <label for="city" class="block text-sm font-medium text-gray-700">Ort</label>
                    <input v-model="newCompany.city" type="text" name="city" id="city" autocomplete="address-level2" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3 lg:col-span-2">
                    <label for="region" class="block text-sm font-medium text-gray-700">Land</label>
                    <input v-model="newCompany.country" type="text" name="region" id="region" autocomplete="address-level1" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>

                  <div class="col-span-6 sm:col-span-3">
                    <label for="twitter-link" class="block text-sm font-medium text-gray-700">Twitter</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">twitter.com/</span>
                      <input v-model="newCompany.twitter" type="text" name="twitter-link" id="twitter-link" autocomplete="twitter-link" class="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm" />
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="twitter-user" class="block text-sm font-medium text-gray-700">Twitter Username</label>
                    <input v-model="newCompany.twitterUser" type="text" name="twitter-user" id="twitter-user" autocomplete="twitter-user" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="linkedin-link" class="block text-sm font-medium text-gray-700">LinkedIn</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">linkedin.com/</span>
                      <input v-model="newCompany.linkedin" type="text" name="linkedin-link" id="linkedin-link" autocomplete="linkedin-link" class="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm" />
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="linkedin-user" class="block text-sm font-medium text-gray-700">LinkedIn Username</label>
                    <input v-model="newCompany.linkedinUser" type="text" name="linkedin-user" id="linkedin-user" autocomplete="linkedin-user" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="facebook-link" class="block text-sm font-medium text-gray-700">Facebook</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">facebook.com/</span>
                      <input v-model="newCompany.facebook" type="text" name="facebook-link" id="facebook-link" autocomplete="facebook-link" class="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm" />
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="facebook-user" class="block text-sm font-medium text-gray-700">Facebook Username</label>
                    <input v-model="newCompany.facebookUser" type="text" name="facebook-user" id="facebook-user" autocomplete="facebook-user" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="instagram-link" class="block text-sm font-medium text-gray-700">Instagram</label>
                    <div class="mt-1 flex rounded-md shadow-sm">
                      <span class="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-sm">instagram.com/</span>
                      <input v-model="newCompany.instagram" type="text" name="instagram-link" id="instagram-link" autocomplete="instagram-link" class="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm" />
                    </div>
                  </div>
                  <div class="col-span-6 sm:col-span-3">
                    <label for="instagram-user" class="block text-sm font-medium text-gray-700">Instagram Username</label>
                    <input v-model="newCompany.instagramUser" type="text" name="instagram-user" id="instagram-user" autocomplete="instagram-user" class="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-cyan-400 focus:outline-none focus:ring-cyan-400 sm:text-sm" />
                  </div>

                </div>
                </div>
                <!-- Modal buttons -->
                <div class="mt-6 sm:flex sm:flex-row-reverse">
                  <ObjectiveColorButtonVue></ObjectiveColorButtonVue>
                  <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent 
                  px-4 py-2 text-base font-medium text-white shadow-sm 
                  bg-gradient-to-r from-agnoscis-200 to-agnoscis-150 hover:to-agnoscis-200 
                  focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-agnoscis-200
                  sm:ml-3 sm:w-auto sm:text-sm" 
                  @click="saveCompanyInfo()">Speichern</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 
                  bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" 
                  @click="isOpenCancelEditingModal = true">Abbrechen</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Cancel Editing Modal -->
    <TransitionRoot as="template" :show="isOpenCancelEditingModal">
      <Dialog as="div" class="relative z-10" @close="isOpenCancelEditingModal = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-amber-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Bearbeitung abbrechen</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Bei Abbruch der Bearbeitung werden alle nicht gespeicherten Änderungen zurückgesetzt. Möchten Sie fortfahren?</p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" 
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-base 
                  font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="cancelEditing()">Ja, abbrechen</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 
                  focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenCancelEditingModal = false;" ref="cancelButtonRef">Zurück</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div class="max-w-5xl mx-auto">
      <!-- Page header -->
      <div class="hidden items-start space-x-5 relative">
        <div class="flex-shrink-0">
          <div class="relative">
            <img class="h-16 w-16 rounded-full" :src="user.avatar" alt="">
            <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
          </div>
        </div>
        <div class="relative">
          <h1 class="text-2xl font-semibold text-gray-900">Meine Zielvorgaben</h1>
          <p class="text-sm font-medium text-gray-500 mt-0.5">
            Übersicht meiner Zielvorgaben und der übergeordneten Unternehmensziele.
            <span class="cursor-pointer text-sm font-medium text-sky-400 hover:text-sky-500" @mouseover="showHeaderTooltip = true" @click="showHeaderTooltip = true" @mouseout="showHeaderTooltip = false">
              Mehr erfahren ...
            </span>
          <TheTooltip :show="showHeaderTooltip" :text="headerTooltip"></TheTooltip>
          </p>
        </div>
      </div>
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
              <h1 class="text-2xl font-semibold text-gray-900 mr-3">{{user.name}}</h1>
              <div class="">
                <span :class="[user.role == 'Team Lead' ? 'text-green-800 bg-green-100' : 'text-sky-800 bg-sky-100' , 'px-2 py-1 text-xs font-medium rounded-full']">{{user.role}}</span>
              </div>
            </div>
            <div class="flex">
              <div class="flex flex-col sm:flex-row sm:flex-wrap sm:space-x-6">
                <div class="mt-2 sm:mt-1 flex items-center text-sm font-medium text-gray-500">
                  <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" x-description="Heroicon name: mini/briefcase" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M6 3.75A2.75 2.75 0 018.75 1h2.5A2.75 2.75 0 0114 3.75v.443c.572.055 1.14.122 1.706.2C17.053 4.582 18 5.75 18 7.07v3.469c0 1.126-.694 2.191-1.83 2.54-1.952.599-4.024.921-6.17.921s-4.219-.322-6.17-.921C2.694 12.73 2 11.665 2 10.539V7.07c0-1.321.947-2.489 2.294-2.676A41.047 41.047 0 016 4.193V3.75zm6.5 0v.325a41.622 41.622 0 00-5 0V3.75c0-.69.56-1.25 1.25-1.25h2.5c.69 0 1.25.56 1.25 1.25zM10 10a1 1 0 00-1 1v.01a1 1 0 001 1h.01a1 1 0 001-1V11a1 1 0 00-1-1H10z" clip-rule="evenodd"></path>
                    <path d="M3 15.055v-.684c.126.053.255.1.39.142 2.092.642 4.313.987 6.61.987 2.297 0 4.518-.345 6.61-.987.135-.041.264-.089.39-.142v.684c0 1.347-.985 2.53-2.363 2.686a41.454 41.454 0 01-9.274 0C3.985 17.585 3 16.402 3 15.055z"></path>
                  </svg>
                  {{user.title}}
                </div>
                <div class="mt-2 sm:mt-1 flex items-center text-sm font-medium text-gray-500">
                  <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M4 16.5v-13h-.25a.75.75 0 010-1.5h12.5a.75.75 0 010 1.5H16v13h.25a.75.75 0 010 1.5h-3.5a.75.75 0 01-.75-.75v-2.5a.75.75 0 00-.75-.75h-2.5a.75.75 0 00-.75.75v2.5a.75.75 0 01-.75.75h-3.5a.75.75 0 010-1.5H4zm3-11a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zM7.5 9a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1zM11 5.5a.5.5 0 01.5-.5h1a.5.5 0 01.5.5v1a.5.5 0 01-.5.5h-1a.5.5 0 01-.5-.5v-1zm.5 3.5a.5.5 0 00-.5.5v1a.5.5 0 00.5.5h1a.5.5 0 00.5-.5v-1a.5.5 0 00-.5-.5h-1z" clip-rule="evenodd" />
                  </svg>
                  {{user.department}}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="justify-stretch mt-6 flex flex-col-reverse space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-y-0 sm:space-x-3 sm:space-x-reverse md:mt-0 md:flex-row md:space-x-3">
          <!-- 
          <PrimaryButton>Neues Ziel</Primarybutton>
          -->
        </div>
      </div>
      <!-- Goals section -->
      <div class="mt-2 sm:mt-8">
        <div class="xl:flex md:items-end md:justify-between">
          <div v-if="showClosedGoals == false">
            <h2 class="text-lg font-semibold text-gray-900">Meine Zielvorgaben</h2>
            <div class="flex flex-col sm:flex-row mt-2 sm:mt-0.5 space-y-2 sm:space-y-0 sm:space-x-6">
              <div class="flex items-center">
                <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M1 2.75A.75.75 0 011.75 2h16.5a.75.75 0 010 1.5H18v8.75A2.75 2.75 0 0115.25 15h-1.072l.798 3.06a.75.75 0 01-1.452.38L13.41 18H6.59l-.114.44a.75.75 0 01-1.452-.38L5.823 15H4.75A2.75 2.75 0 012 12.25V3.5h-.25A.75.75 0 011 2.75zM7.373 15l-.391 1.5h6.037l-.392-1.5H7.373zm7.49-8.931a.75.75 0 01-.175 1.046 19.326 19.326 0 00-3.398 3.098.75.75 0 01-1.097.04L8.5 8.561l-2.22 2.22A.75.75 0 115.22 9.72l2.75-2.75a.75.75 0 011.06 0l1.664 1.663a20.786 20.786 0 013.122-2.74.75.75 0 011.046.176z" clip-rule="evenodd" />
                </svg>
                <p class="text-sm text-gray-500">          
                  {{objectives.length}} aktuelle Zielvorgaben
                </p>
              </div>
              <div class="flex items-center">
                <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 00-1 1v1a1 1 0 001 1h16a1 1 0 001-1V4a1 1 0 00-1-1H2z" />
                  <path fill-rule="evenodd" d="M2 7.5h16l-.811 7.71a2 2 0 01-1.99 1.79H4.802a2 2 0 01-1.99-1.79L2 7.5zM7 11a1 1 0 011-1h4a1 1 0 110 2H8a1 1 0 01-1-1z" clip-rule="evenodd" />
                </svg>
                <p class="text-sm text-gray-500">          
                  2 archivierte Zielvorgaben
                </p>
              </div>
              <div class="flex items-center">
                <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clip-rule="evenodd" />
                </svg>
                <p class="text-sm text-gray-500">          
                  1 Zielvorgabe erfüllt
                </p>
              </div>
              

            </div>
          </div>
          <div v-else>
            <h2 class="text-lg font-semibold text-gray-900">Aktuelle und archivierte Zielvorgaben</h2>
            <p class="mt-0.5 text-sm text-gray-500">          
              Übersicht meiner aktuellen und archivierten Zielvorgaben.
            </p>
          </div>
            <div class="flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse xl:justify-end  sm:space-x-reverse sm:space-y-0 md:mt-0 md:flex-row ">
              <div class="mt-2 flex space-x-3 md:mt-2 xl:mt-0">
                <!-- This example requires Tailwind CSS v2.0+ -->
                <SwitchGroup as="div" class="flex items-center w-full justify-between">
                  <SwitchLabel as="span" class="mr-3">
                    <span class="text-sm font-medium text-gray-500">Archivierte Zielvorgaben anzeigen</span>
                  </SwitchLabel>
                  <Switch v-model="showClosedGoals" :class="[showClosedGoals ? 'bg-sky-400' : 'bg-gray-200', 'relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2']">
                    <span aria-hidden="true" :class="[showClosedGoals ? 'translate-x-5' : 'translate-x-0', 'pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out']" />
                  </Switch>
                </SwitchGroup>
              </div>
            </div>
          </div>
        <!-- Goals List -->
        <div class="mt-6">
          <!-- Content -->
          <!-- Empty state -->
          <div v-if="objectives.length == 0" class="text-center">
            <svg class="mx-auto h-12 w-12 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
            </svg>
            <h3 class="mt-2 text-sm font-medium text-gray-900">Keine Zielvorgaben definiert.</h3>
            <p class="mt-1 text-sm text-gray-500">Fangen Sie an, indem Sie eine neue Zielvorgabe hinzufügen.</p>
            <div class="mt-4">
              <button @click="openStrengthsModal()" type="button" :class="['inline-flex items-center rounded-md border border-transparent', 'bg-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-'+goal.color+'-500 focus:outline-none focus:ring-2 focus:ring-'+goal.color+'-400 focus:ring-offset-2']">
                <svg class="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                </svg>
                Zielvorgaben hinzufügen
              </button>
            </div>
          </div>
          <!-- List -->
          <ul v-else role="list" class="space-y-4">
            <!-- initial design
            <li v-for="(objective, itemIdx) in goal.objectives" :key="itemIdx" 
              class="cursor-pointer bg-gray-10/70 rounded-xl px-4 hover:bg-gray-100">
              <div class="group relative flex items-start space-x-3 py-4">
                <div class="flex-shrink-0">
                  <span :class="['bg-'+goal.color+'-400', 'inline-flex items-center justify-center h-10 w-10 rounded-lg']">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="mt-0.5 w-6 h-6 text-white">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" />
                    </svg>
                  </span>
                </div>
                <div class="min-w-0 flex-1">
                  <div class="text-sm font-medium text-gray-900">
                    <a href="#">
                      <span class="absolute inset-0" aria-hidden="true" />
                      {{ objective.name }}
                    </a>
                  </div>
                  <p class="text-sm text-gray-500">{{ objective.description }}</p>
                </div>
                <div class="flex-shrink-0 self-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-gray-400 group-hover:text-gray-500">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
            </li> 
            -->
            <MyObjectiveListItem v-for="objective in objectives" :key="objective.id"
              :id="objective.id"
              :slug="objective.slug"
              :name="objective.name"
              :description="objective.description"
              :type="objective.type"
              :color="objective.color"
              :goalName="objective.goalName"
              :goalId="objective.goalId"
              :keyresults="objective.keyresults"
              :initiatives="objective.initiatives">
            </MyObjectiveListItem>
          </ul>
        </div>
      </div>
    </div>
    <!-- Global alert (snackbar) live region, render this permanently at the end of the document -->
    <div aria-live="assertive" class="pointer-events-none fixed z-20 inset-0 lg:ml-76 mt-14 flex items-end justify-center px-4 py-6 sm:p-6">
      <div class="flex flex-col items-center space-y-4 w-full">
        <!-- Saved -->
        <transition enter-active-class="transform ease-out duration-300 transition" 
          enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
          leave-active-class="transition ease-in duration-100" 
          leave-from-class="opacity-100" 
          leave-to-class="opacity-0">
          <div v-if="showAlertSaved" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="rounded-md bg-green-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800">Successfully saved</p>
                </div>
                <div class="ml-auto pl-3">
                  <div class="-mx-1.5 -my-1.5">
                    <button type="button" @click="showAlertSaved = false" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                      <span class="sr-only">Dismiss</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- Added -->
        <transition enter-active-class="transform ease-out duration-300 transition" 
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
        leave-active-class="transition ease-in duration-100" 
        leave-from-class="opacity-100" 
        leave-to-class="opacity-0">
          <div v-if="showAlertAdded" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="rounded-md bg-green-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800">Element added successfully</p>
                </div>
                <div class="ml-auto pl-3">
                  <div class="-mx-1.5 -my-1.5">
                    <button type="button" @click="showAlertAdded = false" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                      <span class="sr-only">Dismiss</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
         <!-- Deleted -->
        <transition enter-active-class="transform ease-out duration-300 transition" 
          enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
          leave-active-class="transition ease-in duration-100" 
          leave-from-class="opacity-100" 
          leave-to-class="opacity-0">
          <div v-if="showAlertRemoved" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="rounded-md bg-green-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-green-400" aria-hidden="true" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-green-800">Element removed successfully</p>
                </div>
                <div class="ml-auto pl-3">
                  <div class="-mx-1.5 -my-1.5">
                    <button type="button" @click="showAlertRemoved = false" class="inline-flex rounded-md bg-green-50 p-1.5 text-green-500 hover:bg-green-100 focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-green-50">
                      <span class="sr-only">Dismiss</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
        <!-- Cancelled -->
        <transition enter-active-class="transform ease-out duration-300 transition" 
            enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" 
            enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" 
            leave-active-class="transition ease-in duration-100" 
            leave-from-class="opacity-100" 
            leave-to-class="opacity-0"
          >
          <div v-if="showAlertCancelled" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="rounded-md bg-yellow-50 p-4">
              <div class="flex">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5 text-yellow-400">
                    <path fill-rule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3">
                  <p class="text-sm font-medium text-yellow-800">Bearbeitung abgebrochen</p>
                </div>
                <div class="ml-auto pl-3">
                  <div class="-mx-1.5 -my-1.5">
                    <button type="button" @click="showAlertCancelled = false" class="inline-flex rounded-md bg-yellow-50 p-1.5 text-yellow-500 hover:bg-yellow-100 focus:outline-none focus:ring-2 focus:ring-yellow-600 focus:ring-offset-2 focus:ring-offset-yellow-50">
                      <span class="sr-only">Dismiss</span>
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>
