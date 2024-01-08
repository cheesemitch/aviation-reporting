<script>
import CompanyLogo from '/src/components/TheCompanyLogo.vue'
import ObjectiveCard from '../components/TheObjectiveCard.vue'
import objectivesData from '/src/objectives.json'

import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

export default {
  data() {
    return {      
      objectives: objectivesData.objectives,
      isOpenNewObjectiveModal: false,
      newObjectiveName: '',
      newObjectiveDescription: '',
    }
  },
  methods: {
    setColor(objectiveId, newColor) {
      console.log('set '+newColor+' for Objective with ID: '+objectiveId);
      for (var i = 0; i < this.objectives.length; i++) {
        if (this.objectives[i].id === objectiveId) {
          this.objectives[i].color = newColor;
          return;
        }
      }
    },
    openNewObjectiveModal() {
      this.isOpenNewObjectiveModal = true
    },
    closeNewObjectiveModal() {
      this.isOpenNewObjectiveModal = false
    },
    createObjective() {
      let newObjectiveId = (this.objectives.length + 1).toString()
      this.objectives.push(
        {
          id: newObjectiveId, 
          name: this.newObjectiveName, 
          description: this.newObjectiveDescription,
          color: 'indigo',
          type: '',
          state: 'Editing',
          keyresults: [],
          initiatives: []
        });
      this.isOpenNewObjectiveModal = false;
      this.newObjectiveName = '';
      this.newObjectiveDescription = '';
    }
  },
  components: {
    CompanyLogo,
    ObjectiveCard,
    TransitionRoot,
    TransitionChild,
    Dialog,
    DialogPanel,
    DialogTitle,
  }
}

</script>

<template>
  <div>
    <!-- New Objective Dialog -->
    <TransitionRoot appear :show="isOpenNewObjectiveModal" as="template">
        <Dialog as="div" @close="closeNewObjectiveModal" class="relative z-10">
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
                <DialogPanel class="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <div class="max-w-lg mx-auto">
                      <div>
                        <div class="text-center">
                          <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                          </svg>
                          <h2 class="mt-2 text-lg font-medium text-gray-900">Zielvorgabe hinzufügen</h2>
                          <p class="mt-1 text-sm text-gray-500">Fügen sie ein neue Zielvorgabe hinzu. Ergebniskennzahlen und Initiativen können im nächsten Schritt hinzugefügt werden.</p>
                        </div>
                        <div class="mt-8">
                          <div class="space-y-8">
                            <div class="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">          
                              <div class="sm:col-span-6">
                                <label for="name" class="block text-sm font-medium text-gray-700">Name</label>
                                <div class="mt-1">
                                  <input id="objectiveName" name="objectiveName" type="text" v-model="newObjectiveName"
                                  class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full 
                                  sm:text-sm border-gray-300 rounded-md" tabindex="0">                                  
                                </div>
                              </div>
                              <div class="sm:col-span-6">
                                <label for="description" class="block text-sm font-medium text-gray-700">Beschreibung</label>
                                <div class="mt-1">
                                  <textarea id="objectiveDescription" name="objectiveDescription" rows="3" v-model="newObjectiveDescription"
                                  class="shadow-sm focus:ring-gray-500 focus:border-gray-500 block w-full sm:text-sm border-gray-300 rounded-md"></textarea>                                  
                                </div> 
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="mt-6 flex justify-end">
                        <button
                          type="button"
                          class="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          @click="closeNewObjectiveModal">
                          Abbrechen
                        </button>
                        <button
                          type="button"
                          class="ml-4 inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                          @click="createObjective">
                          Hinzufügen
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
      <div class="max-w-3xl mx-auto md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-8xl">
        <div class="flex items-center space-x-5">
         <CompanyLogo></CompanyLogo>
          <div>
            <h1 class="text-2xl font-semibold text-gray-900">Meine Zielvorgaben</h1>
            <p class="text-sm font-medium text-gray-500">
              Übersicht meiner Zielvorgaben, deren Ergebniskennzahlen und Initiativen.</p>
          </div>
        </div>
        <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
          <button @click="openNewObjectiveModal" type="button" class="inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-gray-500">
            Neue Zielvorgabe
          </button>
        </div>
      </div>
    <!-- objectives list container-->
    <div class="py-4 grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 gap-10 mt-8 max-w-8xl mx-auto transform transition-all">
      <ObjectiveCard class="mx-auto "
        v-for="objective in objectives" 
        :key="objective.id" 
        :id="objective.id"
        :name="objective.name"
        :description="objective.description"
        :color="objective.color"
        :type="objective.type"
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
      </ObjectiveCard>
    </div>    
  </div>  
</template>

