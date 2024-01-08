
<script>
import { PaperClipIcon, CheckIcon } from '@heroicons/vue/solid'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'

export default {
  data () {
    return {
      missionStatement: '',
      newMissionStatement: '',
      missionStatementPlaceholder: 'Fügen sie hier die Erklärung der Mission hinzu. Eine gut formulierte Mission bietet eine Anleitung und inspiriert ihr Team.',
      missionAttachments: [{
        id: '1',
        filename: 'additional_mission_info.pdf',
      }],
      visionStatement: '',
      visionStatementPlaceholder: 'Beschreiben sie hier die Zukunft aus Sicht des Unternehmens.',
      visionAttachments: [],
      coreValuesStatement: '',
      coreValuesStatementPlaceholder: 'Definieren sie hier die Grundwerte Ihres Unternehmens. Um die Leistung stetig zu verbessern, sollte die Organisation in all ihren Handlungen den Werten folgen.',
      coreValuesAttachments: [],
      isOpenMissionModal: false,
      isOpenVisionModal: false,
      isOpenCoreValuesModal: false,
      isOpenMissionChangesAlert: false,
      isOpenVisionChangesAlert: false,
      isOpenCoreValuesChangesAlert: false,
      showNotificationSaved: false,
      showAlertSaved: false,
    }
  },
  computed: {
    mission () {
      if (this.missionStatement == '') {
        return this.missionStatementPlaceholder;
      } else {
        return this.missionStatement;
      };
    },
    missionAttachmentsEmpty () {
      if (this.missionAttachments.length == 0) {
        return true;
      } else {
        return false;
      };
    },
    vision () {
      if (this.visionStatement == '') {
        return this.visionStatementPlaceholder;
      } else {
        return this.visionStatement;
      };
    },
    visionAttachmentsEmpty () {
      if (this.visionAttachments.length == 0) {
        return true;
      } else {
        return false;
      };
    },
    coreValues () {
      if (this.coreValuesStatement == '') {
        return this.coreValuesStatementPlaceholder;
      } else {
        return this.coreValuesStatement;
      };
    },
    coreValuesAttachmentsEmpty () {
      if (this.coreValuesAttachments.length == 0) {
        return true;
      } else {
        return false;
      };
    },
  },
  methods: {
    openMissionModal () {
      this.newMissionStatement = this.missionStatement;
      this.isOpenMissionModal = true;
    },
    openVisionModal () {
      this.newVisionStatement = this.visionStatement;
      this.isOpenVisionModal = true;
    },
    openCoreValuesModal () {
      this.newCoreValuesStatement = this.coreValuesStatement;
      this.isOpenCoreValuesModal = true;
    },
    closeMissionModal () {
      if (this.newMissionStatement == this.missionStatement) {
        this.isOpenMissionModal = false;
      } else {
        this.isOpenMissionChangesAlert = true;
      };      
    },
    closeVisionModal () {
      if (this.newVisionStatement == this.visionStatement) {
        this.isOpenVisionModal = false;
      } else {
        this.isOpenVisionChangesAlert = true;
      };      
    },
    closeCoreValuesModal () {
      if (this.newCoreValuesStatement == this.coreValuesStatement) {
        this.isOpenCoreValuesModal = false;
      } else {
        this.isOpenCoreValuesChangesAlert = true;
      };      
    },
    saveMissionModal () {
      this.missionStatement = this.newMissionStatement ;
      this.isOpenMissionModal = false;
      this.isOpenMissionChangesAlert = false;
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    dontSaveMission () {
      this.isOpenMissionModal = false;
      this.isOpenMissionChangesAlert = false;
    },
    saveVisionModal () {
      this.visionStatement = this.newVisionStatement ;
      this.isOpenVisionModal = false;
      this.isOpenVisionChangesAlert = false;
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    dontSaveVision () {
      this.isOpenVisionModal = false;
      this.isOpenVisionChangesAlert = false;
    },
    saveCoreValuesModal () {
      this.coreValuesStatement = this.newCoreValuesStatement ;
      this.isOpenCoreValuesModal = false;
      this.isOpenCoreValuesChangesAlert = false;
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    dontSaveCoreValues () {
      this.isOpenCoreValuesModal = false;
      this.isOpenCoreValuesChangesAlert = false;
    },
  },
  components: {
    PaperClipIcon, CheckIcon,
    Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot
  }
}


</script>


<template>
  <div>
    <!-- Mission Modal -->
    <TransitionRoot as="template" :show="isOpenMissionModal">
      <Dialog as="div" class="relative z-10" @close="closeMissionModal()">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-bl bg-opacity-30 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <!-- Modal header -->
                <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button type="button"
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" 
                  @click="closeMissionModal()">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Mission bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Die Mission oder das Leitbild des Unternehmens stellt ein Ziel auf der höchsten Abstraktionsebene dar und beschreibt den Kontext für alle aktuellen Ziele und Initiativen.</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="missionStatement" class="block text-sm font-medium text-gray-900">Beschreibung der Mission</label>
                    <div class="mt-1">
                      <textarea id="editMissionStatement" v-model="newMissionStatement"
                      name="missionStatement" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="missionStatementPlaceholder"></textarea>
                    </div>
                  </div>
                  <div class="mt-6">
                    <label for="missionStatement" class="block text-sm font-medium text-gray-900">Anhänge</label>
                    <div v-if="missionAttachmentsEmpty" class="mt-1 sm:col-span-2">
                      <div class="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div class="space-y-1 text-center">
                          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                          <div class="flex text-sm text-gray-600">
                            <label for="file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 hover:text-cyan-600">
                              <span>Upload a file</span>
                              <input id="file-upload" name="file-upload" type="file" class="sr-only">
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs text-gray-500">PDF, XLSX, PPT, PNG etc.</p>
                        </div>
                      </div>
                    </div>
                    <div v-else class="mt-1">
                      <dd class="mt-1 text-sm text-gray-900">
                        <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-300">
                          <li v-for="attachment in missionAttachments" :key="attachment.id" class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                            <div class="flex w-0 flex-1 items-center">
                              <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                              <span class="ml-2 w-0 flex-1 truncate">{{attachment.filename}}</span>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                              <a href="#" class="font-medium text-cyan-500 hover:text-cyan-600">Entfernen</a>
                            </div>
                          </li>
                        </ul>
                        <div class="flex">
                          <label for="missionAttachmentUpload" class="cursor-pointer group mt-2 flex items-center 
                            rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500">
                            <span class="-ml-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                              <svg class="h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                              </svg>
                            </span>
                            <span class="ml-2.5 text-sm font-medium text-cyan-500 group-hover:text-cyan-600">Anhang hinzufügen</span>
                            <input id="missionAttachmentUpload" name="missionAttachmentUpload" type="file" class="sr-only">
                          </label>
                        </div>
                      </dd>
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
                  @click="saveMissionModal()">Speichern</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 
                  bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" 
                  @click="closeMissionModal()">Abbrechen</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Mission Changes detected Modal -->
    <TransitionRoot as="template" :show="isOpenMissionChangesAlert">
      <Dialog as="div" class="relative z-10" @close="isOpenMissionChangesAlert = false">
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
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Unsaved changes detected</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">We have detected changes but you did not save them. Do you want to save your changes or finish editing without saving? All of your changes will be permanently removed.</p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" 
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-base 
                  font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="saveMissionModal()">Save Changes</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                  focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="dontSaveMission()" ref="cancelButtonRef">Don't Save</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                  focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenMissionChangesAlert = false" ref="cancelButtonRef">Continue Editing</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Vision Modal -->
    <TransitionRoot as="template" :show="isOpenVisionModal">
      <Dialog as="div" class="relative z-10" @close="closeVisionModal()">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-bl bg-opacity-30 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <!-- Modal header -->
                <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button type="button" 
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" 
                  @click="closeVisionModal()">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Vision bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Die Vision beschreibt die Art und Weise der Zukunft eines Unternehmens aus der Sicht der Organisation.</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="missionStatement" class="block text-sm font-medium text-gray-900">Beschreibung der Vision</label>
                    <div class="mt-1">
                      <textarea id="editMissionStatement" v-model="newVisionStatement"
                      name="missionStatement" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="visionStatementPlaceholder"></textarea>
                    </div>
                  </div>
                  <div class="mt-6">
                    <label for="visionStatement" class="block text-sm font-medium text-gray-900">Anhänge</label>
                    <div v-if="visionAttachmentsEmpty" class="mt-1 sm:col-span-2">
                      <div class="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div class="space-y-1 text-center">
                          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                          <div class="flex text-sm text-gray-600">
                            <label for="vision-file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 hover:text-cyan-600">
                              <span>Upload a file</span>
                              <input id="vision-file-upload" name="vision-file-upload" type="file" class="sr-only">
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs text-gray-500">PDF, XLSX, PPT, PNG etc.</p>
                        </div>
                      </div>
                    </div>
                    <div v-else class="mt-1">
                      <dd class="mt-1 text-sm text-gray-900">
                        <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-300">
                          <li v-for="attachment in visionAttachments" :key="attachment.id" class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                            <div class="flex w-0 flex-1 items-center">
                              <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                              <span class="ml-2 w-0 flex-1 truncate">{{attachment.filename}}</span>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                              <a href="#" class="font-medium text-cyan-500 hover:text-cyan-600">Entfernen</a>
                            </div>
                          </li>
                        </ul>
                        <div class="flex">
                          <label for="visionAttachmentUpload" class="cursor-pointer group mt-2 flex items-center 
                            rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500">
                            <span class="-ml-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                              <svg class="h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                              </svg>
                            </span>
                            <span class="ml-2.5 text-sm font-medium text-cyan-500 group-hover:text-cyan-600">Anhang hinzufügen</span>
                            <input id="visionAttachmentUpload" name="visionAttachmentUpload" type="file" class="sr-only">
                          </label>
                        </div>
                      </dd>
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
                  @click="saveVisionModal()">Speichern</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 
                  bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" 
                  @click="closeVisionModal()">Abbrechen</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Vision Changes detected Modal -->
    <TransitionRoot as="template" :show="isOpenVisionChangesAlert">
      <Dialog as="div" class="relative z-10" @close="isOpenVisionChangesAlert = false">
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
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Unsaved changes detected</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">We have detected changes but you did not save them. Do you want to save your changes or finish editing without saving? All of your changes will be permanently removed.</p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" 
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-base 
                  font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="saveVisionModal()">Save Changes</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                  focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="dontSaveVision()" ref="cancelButtonRef">Don't Save</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                  focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenVisionChangesAlert = false" ref="cancelButtonRef">Continue Editing</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Core Values Modal -->
    <TransitionRoot as="template" :show="isOpenCoreValuesModal">
      <Dialog as="div" class="relative z-10" @close="closeCoreValuesModal()">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-bl bg-opacity-30 transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-10 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <!-- Modal header -->
                <div class="absolute top-0 right-0 hidden pt-4 pr-4 sm:block">
                  <button type="button" 
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2" 
                  @click="closeCoreValuesModal()">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-sky-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Grundwerte bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Die Grundwerte sind die Leitprinzipien nach denen ein Unternehmen arbeitet. Sie stellen das Rückgrat einer Organisation dar.</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="coreValuesStatement" class="block text-sm font-medium text-gray-900">Beschreibung der Grundwerte</label>
                    <div class="mt-1">
                      <textarea id="editCoreValuesStatement" v-model="newCoreValuesStatement"
                      name="coreValuesStatement" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="coreValuesStatementPlaceholder"></textarea>
                    </div>
                  </div>
                  <div class="mt-6">
                    <label for="coreValuesStatement" class="block text-sm font-medium text-gray-900">Anhänge</label>
                    <div v-if="coreValuesAttachmentsEmpty" class="mt-1 sm:col-span-2">
                      <div class="flex max-w-lg justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-5 pb-6">
                        <div class="space-y-1 text-center">
                          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                          </svg>
                          <div class="flex text-sm text-gray-600">
                            <label for="CoreValues-file-upload" class="relative cursor-pointer rounded-md bg-white font-medium text-cyan-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-cyan-500 focus-within:ring-offset-2 hover:text-cyan-600">
                              <span>Upload a file</span>
                              <input id="CoreValues-file-upload" name="CoreValues-file-upload" type="file" class="sr-only">
                            </label>
                            <p class="pl-1">or drag and drop</p>
                          </div>
                          <p class="text-xs text-gray-500">PDF, XLSX, PPT, PNG etc.</p>
                        </div>
                      </div>
                    </div>
                    <div v-else class="mt-1">
                      <dd class="mt-1 text-sm text-gray-900">
                        <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-300">
                          <li v-for="attachment in coreValuesAttachments" :key="attachment.id" class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                            <div class="flex w-0 flex-1 items-center">
                              <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                              <span class="ml-2 w-0 flex-1 truncate">{{attachment.filename}}</span>
                            </div>
                            <div class="ml-4 flex-shrink-0">
                              <a href="#" class="font-medium text-cyan-500 hover:text-cyan-600">Entfernen</a>
                            </div>
                          </li>
                        </ul>
                        <div class="flex">
                          <label for="coreValuesAttachmentUpload" class="cursor-pointer group mt-2 flex items-center 
                            rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500">
                            <span class="-ml-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                              <svg class="h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                              </svg>
                            </span>
                            <span class="ml-2.5 text-sm font-medium text-cyan-500 group-hover:text-cyan-600">Anhang hinzufügen</span>
                            <input id="coreValuesAttachmentUpload" name="coreValuesAttachmentUpload" type="file" class="sr-only">
                          </label>
                        </div>
                      </dd>
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
                  @click="saveCoreValuesModal()">Speichern</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 
                  bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" 
                  @click="closeCoreValuesModal()">Abbrechen</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Vision Changes detected Modal -->
    <TransitionRoot as="template" :show="isOpenCoreValuesChangesAlert">
      <Dialog as="div" class="relative z-10" @close="isOpenCoreValuesChangesAlert = false">
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
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Unsaved changes detected</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">We have detected changes but you did not save them. Do you want to save your changes or finish editing without saving? All of your changes will be permanently removed.</p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" 
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-yellow-500 px-4 py-2 text-base 
                  font-medium text-white shadow-sm hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="saveCoreValuesModal()">Save Changes</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                  focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="dontSaveCoreValues()" ref="cancelButtonRef">Don't Save</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 
                  focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenCoreValuesChangesAlert = false" ref="cancelButtonRef">Continue Editing</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <div class="max-w-5xl mx-auto">
      <!-- Page header -->
      <div class="max-w-3xl mx-auto md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-8xl">
        <div class="flex items-center space-x-5">
          <div class="flex-shrink-0">
            <div class="relative">
              <img class="h-16 w-16 rounded-full" src="/src/assets/bremen-airport.svg" alt="">
              <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
            </div>
          </div>
          <div>
            <h1 class="text-2xl font-bold text-gray-900">Risikoprofil</h1>
            <p class="text-sm font-medium text-gray-500">
              Das strategische Profil beschreibt den Kern der Unternehmensstrategie, bestehend aus Mission, Vision und Grundwerten des Unternehmens.</p>
          </div>
        </div>
      </div>
      <!-- Mission Section -->
      <section class="mt-10">
        <div class="overflow-hidden bg-white  sm:rounded-lg">
          <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
              <div class="ml-4 mt-4">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Mission</h3>
                <p class="mt-1 text-sm text-gray-500">Die Mission oder das Leitbild des Unternehmens stellt ein Ziel auf der höchsten Abstraktionsebene dar und beschreibt den Kontext für alle aktuellen Ziele und Initiativen.</p>
              </div>
              <div class="ml-4 mt-4 flex-shrink-0">
                <button @click="openMissionModal()" type="button" class="inline-flex items-center px-4 py-2 rounded-md shadow-sm 
                text-gray-100 font-semibold 
                bg-gradient-to-r from-agnoscis-200 to-agnoscis-150 hover:to-agnoscis-200 
                focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-agnoscis-200 sm:text-sm">
                  Bearbeiten 
                </button>  
              </div>
            </div>
          </div>
          <div class="px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Beschreibung der Mission</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ mission }}</dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Anhänge</dt>
                <dd v-show="missionAttachmentsEmpty == false" class="mt-1 text-sm text-gray-900">
                  <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li v-for="attachment in missionAttachments" :key="attachment.filename" class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div class="flex w-0 flex-1 items-center">
                        <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span class="ml-2 w-0 flex-1 truncate">{{attachment.filename}}</span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a href="#" class="font-medium text-cyan-500 hover:text-cyan-600">Download</a>
                      </div>
                    </li>
                  </ul>
                </dd>
                <div class="flex">
                  <Button @click="isOpenMissionModal = true" class="cursor-pointer group mt-2 flex items-center 
                    rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500">
                    <span class="-ml-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                      <svg class="h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </span>
                    <span class="ml-2.5 text-sm font-medium text-cyan-500 group-hover:text-cyan-600">Bearbeiten</span>
                    <span class="ml-1.5 text-sm font-medium text-gray-400 group-hover:text-gray-500">um Anhang hinzuzufügen</span>
                  </Button>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <!-- Vision Section -->
      <section class="mt-10">
        <div class="overflow-hidden bg-white sm:rounded-lg">
          <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
              <div class="ml-4 mt-4">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Vision</h3>
                <p class="mt-1 text-sm text-gray-500">Die Vision beschreibt die Art und Weise der Zukunft eines Unternehmens aus der Sicht der Organisation.</p>
              </div>
              <div class="ml-4 mt-4 flex-shrink-0">
                <button @click="openVisionModal()" type="button" class="inline-flex items-center px-4 py-2 rounded-md shadow-sm 
                text-gray-100 font-semibold 
                bg-gradient-to-r from-agnoscis-200 to-agnoscis-150 hover:to-agnoscis-200 
                focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-agnoscis-200 sm:text-sm">
                  Bearbeiten 
                </button>  
              </div>
            </div>
          </div>
          <div class="px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Erklärung der Vision</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ vision }}</dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Anhänge</dt>
                <dd v-show="visionAttachmentsEmpty == false" class="mt-1 text-sm text-gray-900">
                  <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li v-for="attachment in visionAttachments" :key="attachment.filename" class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div class="flex w-0 flex-1 items-center">
                        <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span class="ml-2 w-0 flex-1 truncate">{{attachment.filename}}</span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a href="#" class="font-medium text-cyan-500 hover:text-cyan-600">Download</a>
                      </div>
                    </li>
                  </ul>
                </dd>
                <div class="flex">
                  <Button @click="isOpenVisionModal = true" class="cursor-pointer group mt-2 flex items-center 
                    rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500">
                    <span class="-ml-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                      <svg class="h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </span>
                    <span class="ml-2.5 text-sm font-medium text-cyan-500 group-hover:text-cyan-600">Bearbeiten</span>
                    <span class="ml-1.5 text-sm font-medium text-gray-400 group-hover:text-gray-500">um Anhang hinzuzufügen</span>
                  </Button>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
      <!-- Core Values Section -->
      <section class="mt-10">
        <div class="overflow-hidden bg-white sm:rounded-lg">
          <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
            <div class="-ml-4 -mt-4 flex flex-wrap items-center justify-between sm:flex-nowrap">
              <div class="ml-4 mt-4">
                <h3 class="text-lg font-medium leading-6 text-gray-900">Grundwerte</h3>
                <p class="mt-1 text-sm text-gray-500">Die Grundwerte sind die Leitprinzipien nach denen ein Unternehmen arbeitet. Sie stellen das Rückgrat einer Organisation dar.</p>
              </div>
              <div class="ml-4 mt-4 flex-shrink-0">
                <button @click="openCoreValuesModal()" type="button" class="inline-flex items-center px-4 py-2 rounded-md shadow-sm 
                text-gray-100 font-semibold 
                bg-gradient-to-r from-agnoscis-200 to-agnoscis-150 hover:to-agnoscis-200 
                focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 
                focus:ring-agnoscis-200 sm:text-sm">
                  Bearbeiten 
                </button>  
              </div>
            </div>
          </div>
          <div class="px-4 py-5 sm:px-6">
            <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Beschreibung der Grundwerte</dt>
                <dd class="mt-1 text-sm text-gray-900">{{ coreValues }}</dd>
              </div>
              <div class="sm:col-span-2">
                <dt class="text-sm font-medium text-gray-500">Anhänge</dt>
                <dd v-show="coreValuesAttachmentsEmpty == false" class="mt-1 text-sm text-gray-900">
                  <ul role="list" class="divide-y divide-gray-200 rounded-md border border-gray-200">
                    <li v-for="attachment in coreValuesAttachments" :key="attachment.filename" class="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                      <div class="flex w-0 flex-1 items-center">
                        <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                        <span class="ml-2 w-0 flex-1 truncate">{{attachment.filename}}</span>
                      </div>
                      <div class="ml-4 flex-shrink-0">
                        <a href="#" class="font-medium text-cyan-500 hover:text-cyan-600">Download</a>
                      </div>
                    </li>
                  </ul>
                </dd>
                <div class="flex">
                  <Button @click="isOpenCoreValuesModal = true" class="cursor-pointer group mt-2 flex items-center 
                    rounded-md bg-white p-1 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus-within:ring-2 focus-within:ring-cyan-500">
                    <span class="-ml-1 flex h-8 w-8 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                      <svg class="h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                      </svg>
                    </span>
                    <span class="ml-2.5 text-sm font-medium text-cyan-500 group-hover:text-cyan-600">Bearbeiten</span>
                    <span class="ml-1.5 text-sm font-medium text-gray-400 group-hover:text-gray-500">um Anhang hinzuzufügen</span>
                  </Button>
                </div>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </div>
    <!-- Global notification live region, render this permanently at the end of the document -->
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 mt-14 flex items-end px-4 py-6 sm:items-start sm:p-6">
      <div class="flex w-full flex-col items-center space-y-4 sm:items-end">
        <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
        <transition enter-active-class="transform ease-out duration-300 transition" enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2" enter-to-class="translate-y-0 opacity-100 sm:translate-x-0" leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
          <div v-if="showNotificationSaved" class="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-sm font-medium text-gray-900">Successfully saved!</p>
                  <p class="mt-1 text-sm text-gray-500">Anyone with a link can now view this file.</p>
                </div>
                <div class="ml-4 flex flex-shrink-0">
                  <button type="button" @click="showNotificationSaved = false" class="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" >
                      <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
    <!-- Global alert (snackbar) live region, render this permanently at the end of the document -->
    <div aria-live="assertive" class="pointer-events-none fixed inset-0 lg:ml-76 mt-14 flex items-end justify-center px-4 py-6 sm:p-6">
      <div class="flex flex-col items-center space-y-4 w-full">
        <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
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
      </div>
    </div>
  </div>
</template>
