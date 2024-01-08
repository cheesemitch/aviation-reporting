<script>
import PrimaryButton from '/src/components/ThePrimaryButton.vue'
import SecondaryButton from '/src/components/TheSecondaryButton.vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import CompanyLogo from '/images/bremen-airport.svg'

export default {
  data() {
    return {
      // Company info
      logo: CompanyLogo,
      company: {
        name: 'Bremen Airport',
        credo: 'Unternehmen Flughafen - Wir schaffen Verbindungen',
        cover: 'https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
        website: 'www.bremen-airport.com',
        addressName: 'Flughafen Bremen GmbH',
        address: 'Postfach 28 61 52',
        city: 'Bremen',
        zipcode: '28361',
        country: 'Deutschland',
        about: 'Mit seinen knapp 30 Nonstop-Zielen in vielen Ländern Europas und Nordafrikas gehört der Bremen Airport zu den internationalen Verkehrsflughäfen in Deutschland. Der Flughafen Bremen ist Europas schnellster Abflughafen: Nur hier finden Reisende in Deutschland einen internationalen Flughafen, der so nah an der Innenstadt liegt. In nur elf Minuten erreichen Fluggäste von der Bremer City aus den Airport. Die Straßenbahn hält direkt vor dem Terminal. Reisende profitieren von den hervorragenden Umsteigeverbindungen an europäischen Drehkreuzen, die täglich angeflogen werden.',
        twitter: 'BremenAirport?s=20&t=cDBthvAlECYz5kRGysU2tw',
        twitterUser: '@BremenAirport',
        facebook: 'BremenAirport',
        facebookUser: '@BremenAirport',
        instagram: 'bremen.aviation',
        instagramUser: '@bremen.aviation',
        linkedin: 'company/flughafen-bremen-gmbh',
        linkedinUser: 'Flughafen Bremen GmbH',
        phone: '+49 421 5595-0',
        email: 'contact@airport-bremen.de',
      },
      // Company info edit
      newCompany: {
        name: '',
        credo: '',
        cover: '',
        logo: '',
        website: '',
        addressName: '',
        address: '',
        city: '',
        zipcode: '',
        country: '',
        about: '',
        twitter: '',
        twitterUser: '',
        facebook: '',
        facebookUser: '',
        instagram: '',
        instagramUser: '',
        linkedin: '',
        linkedinUser: '',
        phone: '',
        email: '',
      },
      // modals
      isOpenEditModal: false,
      isOpenCancelEditingModal: false,
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
    PrimaryButton,
    SecondaryButton,
    Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot
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
      <h1 class="text-2xl font-semibold text-gray-900 dark:text-gray-200">Unternehmen</h1>
      <p class="text-sm font-medium text-gray-500 dark:text-gray-400">Datailinformationen über das Unternehmen.</p>
       <!-- company profile -->
      <div class="py-8">
          <div>
            <div>
              <img class="h-32 w-full object-cover lg:h-48 rounded-t-lg" :src="company.cover" alt="company-cover-image" />
            </div>
            <div class="mx-auto max-w-5xl px-4 sm:px-6 bg-white dark:bg-gray-800">
              <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div class="flex">
                  <img class="h-24 w-24 rounded-full ring-4 ring-white dark:ring-gray-800 sm:h-32 sm:w-32" :src="logo" alt="company-logo" />
                </div>
                <div class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                  <div class="mt-6 min-w-0 flex-1 sm:hidden ">
                    <h1 class="truncate text-2xl font-bold text-gray-900 dark:text-gray-200">{{ company.name }}</h1>
                    <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400/80">{{company.credo}}</p>
                  </div>
                  <div class="justify-stretch mt-6 flex flex-col space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <PrimaryButton @click="openEditModal()">
                      <span>Bearbeiten</span>
                    </PrimaryButton>
                  </div>
                </div>
              </div>
              <div class="mt-6 hidden min-w-0 flex-1 sm:block">
                <h1 class="truncate text-2xl font-bold text-gray-900 dark:text-gray-200">{{ company.name }}</h1>
                <p class="mt-1 max-w-2xl text-sm text-gray-500 dark:text-gray-400/80">{{company.credo}}</p>
              </div>
            </div>
          </div>
          
          <div class="pt-5 overflow-hidden bg-white dark:bg-gray-800 rounded-b-lg">
            <div>
              <div class="px-4 py-5 sm:px-6">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-900 dark:text-gray-200">Über das Unternehmen</dt>
                    <dd class="mt-1 text-sm text-gray-500 dark:text-gray-400/80">
                      {{company.about}}
                    </dd>
                  </div>
                  <div class="sm:col-span-2">
                    <dt class="text-sm font-medium text-gray-900 dark:text-gray-200">Website</dt>
                    <dd class="mt-1 text-sm text-gray-900">
                      <a class="text-cyan-500 hover:underline" :href="'https://'+company.website" target="_blank">{{company.website}}</a>
                    </dd>
                  </div>
                  <div class="sm:col-span-1">
                    <dt class="text-sm font-medium text-gray-900 dark:text-gray-200">Kontakt</dt>
                    <dd class="mt-1 text-sm text-gray-500 dark:text-gray-400/80">
                      {{company.email}} <br>
                      {{company.phone}} <br>
                    </dd>
                    <dt class="mt-8 text-sm font-medium text-gray-900 dark:text-gray-200">Anschrift</dt>
                    <dd class="mt-1 text-sm text-gray-500 dark:text-gray-400/80">
                      {{company.addressName}} <br>
                      {{company.address}} <br>
                      {{company.zipcode}} {{company.city}} <br>
                      {{company.country}}
                    </dd>
                  </div>
                  <div class="col-span-1 flex flex-col justify-end">
                    <div class="flex flex-col">
                    <dt class="text-sm font-medium text-gray-900 dark:text-gray-200">Social Media</dt>
                    <dd class="mt-1 text-sm text-gray-500 dark:text-gray-400/80">
                      <ul role="list">
                        <li class="flex items-center justify-between py-3 pr-4 text-sm">
                          <div class="flex w-0 flex-1 items-center">
                            <svg viewBox="0 0 20 20" aria-hidden="true" class="h-4 w-4 fill-gray-400">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 20 3.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 .8 7.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.095 4.095 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 0 16.407a11.615 11.615 0 0 0 6.29 1.84"></path>
                            </svg>
                            <span class="ml-2 w-0 flex-1 truncate">Twitter</span>
                          </div>
                          <div class="ml-4 flex-shrink-0">
                            <a :href="'https://twitter.com/'+company.twitter" target="_blank" class="font-medium text-cyan-500 hover:underline">{{company.twitterUser}}</a>
                          </div>
                        </li>
                        <li class="flex items-center justify-between py-3 pr-4 text-sm">
                          <div class="flex w-0 flex-1 items-center">
                            <svg class="h-4 w-4 fill-gray-400" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 504.4 504.4" style="enable-background:new 0 0 504.4 504.4;" xml:space="preserve">
                                <path d="M377.6,0.2H126.4C56.8,0.2,0,57,0,126.6v251.6c0,69.2,56.8,126,126.4,126H378c69.6,0,126.4-56.8,126.4-126.4V126.6
                                  C504,57,447.2,0.2,377.6,0.2z M168,408.2H96v-208h72V408.2z M131.6,168.2c-20.4,0-36.8-16.4-36.8-36.8c0-20.4,16.4-36.8,36.8-36.8
                                  c20.4,0,36.8,16.4,36.8,36.8C168,151.8,151.6,168.2,131.6,168.2z M408.4,408.2H408h-60V307.4c0-24.4-3.2-55.6-36.4-55.6
                                  c-34,0-39.6,26.4-39.6,54v102.4h-60v-208h56v28h1.6c8.8-16,29.2-28.4,61.2-28.4c66,0,77.6,38,77.6,94.4V408.2z"/>
                            </svg>
                            <span class="ml-2 w-0 flex-1 truncate">LinkedIn</span>
                          </div>
                          <div class="ml-4 flex-shrink-0">
                            <a :href="'https://www.linkedin.com/'+company.linkedin" target="_blank" class="font-medium text-cyan-500 hover:underline">{{company.linkedinUser}}</a>
                          </div>
                        </li>
                        <li class="flex items-center justify-between py-3 pr-4 text-sm">
                          <div class="flex w-0 flex-1 items-center">
                            <svg class="h-4 w-4 fill-gray-400" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                              viewBox="0 0 408.788 408.788" style="enable-background:new 0 0 408.788 408.788;" xml:space="preserve">
                              <path d="M353.701,0H55.087C24.665,0,0.002,24.662,0.002,55.085v298.616c0,30.423,24.662,55.085,55.085,55.085
                                h147.275l0.251-146.078h-37.951c-4.932,0-8.935-3.988-8.954-8.92l-0.182-47.087c-0.019-4.959,3.996-8.989,8.955-8.989h37.882
                                v-45.498c0-52.8,32.247-81.55,79.348-81.55h38.65c4.945,0,8.955,4.009,8.955,8.955v39.704c0,4.944-4.007,8.952-8.95,8.955
                                l-23.719,0.011c-25.615,0-30.575,12.172-30.575,30.035v39.389h56.285c5.363,0,9.524,4.683,8.892,10.009l-5.581,47.087
                                c-0.534,4.506-4.355,7.901-8.892,7.901h-50.453l-0.251,146.078h87.631c30.422,0,55.084-24.662,55.084-55.084V55.085
                              C408.786,24.662,384.124,0,353.701,0z"/>
                            </svg>
                            <span class="ml-2 w-0 flex-1 truncate">facebook</span>
                          </div>
                          <div class="ml-4 flex-shrink-0">
                            <a :href="'https://www.facebook.com/'+company.facebook" target="_blank" class="font-medium text-cyan-500 hover:underline">{{company.facebookUser}}</a>
                          </div>
                        </li>
                        <li class="flex items-center justify-between py-3 pr-4 text-sm">
                          <div class="flex w-0 flex-1 items-center">
                            <svg class="h-4 w-4 fill-gray-400" viewBox="0 0 16 16" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                              <rect width="16" height="16" id="icon-bound" fill="none" />
                              <path d="M8,4C5.791,4,4,5.791,4,8s1.791,4,4,4s4-1.791,4-4S10.209,4,8,4z M8,10c-1.103,0-2-0.897-2-2s0.897-2,2-2s2,0.897,2,2 S9.103,10,8,10z M11,0H5C2.237,0,0,2.237,0,5v6c0,2.762,2.237,5,5,5h6c2.762,0,5-2.238,5-5V5C16,2.237,13.762,0,11,0z M14,11 c0,1.653-1.347,3-3,3H5c-1.653,0-3-1.347-3-3V5c0-1.653,1.347-3,3-3h6c1.653,0,3,1.347,3,3V11z M12,3c-0.553,0-1,0.447-1,1 s0.447,1,1,1s1-0.447,1-1S12.553,3,12,3z" />
                            </svg>
                            <span class="ml-2 w-0 flex-1 truncate">Instagram</span>
                          </div>
                          <div class="ml-4 flex-shrink-0">
                            <a :href="'https://www.instagram.com/'+company.instagram" target="_blank" class="font-medium text-cyan-500 hover:underline">{{company.instagramUser}}</a>
                          </div>
                        </li>
                      </ul>
                    </dd>
                  </div>
                  </div>
                </dl>
              </div>
            </div>
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
        leave-to-class="opacity-0">
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
