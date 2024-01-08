<script setup>
import { ref } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

  const isOpen = ref(false)

  function closeModal() {
  isOpen.value = false
  }

  function openModal() {
  isOpen.value = true
  }

  const myDepartments = [
  { name: 'Recht/Versicherungen/Gremien', route: '/app/organisation/recht-versicherungen-gremien' , image: '/src/assets/recht-versicherungen-gremien.jpg', members: '6' },
  { name: 'Bremen Airport Handling', route: '/app/organisation/bremen-airport-handling' , image: '/src/assets/bah.jpg', members: '5' }, 
  ]

  const Departments = [
  { name: 'Personal-/Sozial-/Tarifwesen', image: '/src/assets/human-resources.jpg', members: '12' },  
  { name: 'Recht/Versicherungen/Gremien', image: '/src/assets/recht-versicherungen-gremien.jpg', members: '6' },
  { name: 'Sales/Marketing/Medien', image: '/src/assets/sales-marketing-medien.jpg', members: '3' },
  { name: 'Operations', image: '/src/assets/operations.jpg', members: '5' },
  { name: 'Infrastruktur/Technik', image: '/src/assets/infrastruktur-technik.jpg', members: '4' },
  { name: 'Bremen Airport Handling', image: '/src/assets/bah.jpg', members: '5' },
  { name: 'Finanzen', image: '/src/assets/finanzen.jpg', members: '7' },
  { name: 'Beteiligungen', image: '/src/assets/beteiligungen.jpg', members: '8' },
  { name: 'IT', image: '/src/assets/it.jpg', members: '4' },
  { name: 'Umweltmanagement', image: '/src/assets/umweltmanagement.jpg', members: '9' },
  { name: 'Safety Office', image: '/src/assets/safety.jpg', members: '13' }, 
  ]


</script>

<template>
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
            <DialogPanel class="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">
                Neuer Unternehmensbereich
              </DialogTitle>
              <div class="mt-2">
                <p class="text-sm text-gray-500">
                  Bitte geben sie den Namen und eine kurze Beschreibung des neuen Unternehmensbereichs an.
                </p>
                <div class="space-y-8 divide-y divide-gray-200">
                
                  <div class="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                    <div class="sm:col-span-6 hidden">
                      <label for="photo" class="block text-sm font-medium text-gray-700">
                        Company Logo
                      </label>
                      <div class="mt-2 flex items-center">
                        <span class="h-12 w-12 rounded-full overflow-hidden bg-gray-200 flex justify-center items-center px-2 pb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fill-rule="evenodd" d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd" />
                            </svg>
                        </span>
                        <button type="button" class="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          Change
                        </button>
                      </div>
                    </div>
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
                      <p class="hidden mt-2 text-sm text-gray-500">Write a few sentences about this business area.</p>
                    </div>



                  </div>
                
              </div>
              </div>

              <div class="mt-6 flex justify-end">
                <button
                  type="button"
                  class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal">
                  Abbrechen
                </button>
                <button
                  type="button"
                  class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                  @click="closeModal">
                  Hinzufügen
                </button>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>

  <div class="max-w-5xl mx-auto">
    <h1 class="text-2xl font-semibold text-gray-900">Organisation</h1>
    <div class="mt-2 py-4">        
      <!-- Organization header -->
        <h2 class="text-xl font-semibold text-gray-900">Meine Bereiche</h2>
        <p class="mt-1 text-sm text-gray-500">
          Übersicht der Unternehmensbereiche denen ich zugordnet bin.
        </p>
        <div class="mt-6 mx-auto grid gap-5 grid-cols-1 sm:grid-cols-3 lg:grid-cols-4">
          
          <!-- my departments for loop -->
          <router-link v-for="item in myDepartments" :key="item.name" :to="item.route" :departmentname="item.name" class="flex flex-col group rounded-lg border border-gray-300 shadow-sm overflow-hidden hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500">
            <div class="flex-shrink-0">
              <img class="h-48 sm:h-32 w-full object-cover" :src="item.image" :alt="item.name">
            </div>
            <div class="bg-white pl-4 pr-2 py-3 flex items-center space-x-1 hover:border-gray-400">
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-gray-900 truncate">
                  {{item.name}}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  {{item.members}} Mitarbeiter
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
      <div class="my-10">

        <div class="md:flex md:items-center md:justify-between md:space-x-5">
          <div>
            <h2 class="text-xl font-semibold text-gray-900">Alle Bereiche</h2>
            <p class="mt-1 text-sm text-gray-500">          
              Übersicht aller Unternehmensbereiche in der Organisation.
            </p>
          </div>
            <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
              <div class="mt-4 flex space-x-3 md:mt-0">
                <button @click="openModal" type="button" class="inline-flex justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">
                  <!-- Heroicon name: solid/pencil -->
                  <svg class="-ml-1 mr-2 h-5 w-5 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd" />
                    </svg>
                  <span>Bereich Hinzufügen</span>
                </button>
              </div>
            </div>
        </div>

        <div class="grid grid-cols-1 gap-4 my-6">

          <a href="#" v-for="item in Departments" :key="item.name" class="rounded-lg border border-gray-300 group bg-white px-6 py-5 shadow-sm flex items-center space-x-3 hover:border-gray-400 focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-gray-500">
            <div class="flex-shrink-0">
              <img class="h-10 w-10 rounded object-cover" :src="item.image" :alt="item.name">
            </div>
            <div class="flex-1 min-w-0">
              <p class="text-sm font-medium text-gray-900 truncate">
                {{item.name}}
              </p>
              <p class="text-sm text-gray-500 truncate">
                {{item.members}} Mitarbeiter
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
          </a> 
        </div>
      </div>
       <!-- Description list end-->
    </div>
  </div>
</template>
