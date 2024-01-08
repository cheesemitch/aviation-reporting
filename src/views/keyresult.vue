<script>
  
  import PrimaryButton from '/src/components/ThePrimaryButton.vue'
  import SecondaryButton from '/src/components/TheSecondaryButton.vue'
  import ObjectiveIcon from '/src/components/TheObjectiveIcon.vue'
  import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, Switch, SwitchGroup, SwitchLabel } from '@headlessui/vue'
  import MyObjectiveListItem from '../components/TheMyObjectiveListItem.vue'
  import ObjectiveColorButtonVue from '../components/TheObjectiveColorButton.vue'
  import KeyresultStatusBadgeLarge from '../components/TheKeyresultStatusBadgeLarge.vue'
  import KeyresultsData from '/src/keyresults.json'
  import ObjectivesData from '/src/objectives.json'
  import { ArrowDownIcon, ArrowUpIcon } from '@heroicons/vue/solid'
  import Chart from 'chart.js/auto'
  
  export default {
    props: {
      objectiveId: {type: String},
      keyresultId: {type: String}
    },
    data() {
      return {
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
        // stats & dummy data
        keyresultData : [
            { period: 'January 2022', plan: 2, actual: 2, target: null},
            { period: 'February 2022', plan: 4, actual: 3, target: null},
            { period: 'March 2022', plan: 6, actual: 4, target: null},
            { period: 'April 2022', plan: 8, actual: 7, target: null},
            { period: 'May 2022', plan: 9, actual: 8, target: null},
            { period: 'June 2022', plan: 9, actual: 8, target: null},
            { period: 'July 2022', plan: 9, actual: 8, target: null},
            { period: 'August 2022', plan: 9, actual: 8, target: null},
            { period: 'September 2022', plan: 9, actual: 8, target: null},
            { period: 'October 2022', plan: 9, actual: null, target: null},
            { period: 'November 2022', plan: 9, actual: null, target: null},
            { period: 'December 2022', plan: 9, actual: null, target: null},
          ]
      }
    },
    computed: {
      keyresult () {
        return KeyresultsData.keyresults.find((keyresult) => keyresult.id === this.keyresultId);
      },
      keyresultRandomData() {
        return {
          keyresultData : [
            { period: 'January 2022', 
              plan: this.keyresult.initial, 
              actual: this.keyresult.initial, 
              target: null
            },
            { period: 'February 2022', 
              plan: this.randomNumber((this.keyresult.initial * 13/12), (this.keyresult.target * 2/12 + this.keyresult.initial )), 
              actual: this.randomNumber((this.keyresult.initial * 13/12), (this.keyresult.target * 2/12 + this.keyresult.initial )), 
              target: null
            },
            { period: 'March 2022', 
              plan: this.randomNumber((this.keyresult.initial * 14/12), (this.keyresult.target * 3/12 + this.keyresult.initial* 9/12)), 
              actual: this.randomNumber((this.keyresult.initial * 14/12), (this.keyresult.target * 3/12 + this.keyresult.initial* 9/12)),  
              target: 
              null
            },
            { period: 'April 2022', 
              plan: this.randomNumber((this.keyresult.initial* 15/12), (this.keyresult.target * 4/12+ this.keyresult.initial* 8/12)), 
              actual: this.randomNumber((this.keyresult.initial* 15/12), (this.keyresult.target * 4/12+ this.keyresult.initial* 8/12)), 
              target: null
            },
            { period: 'May 2022', 
              plan: this.randomNumber((this.keyresult.initial* 16/12), (this.keyresult.target * 5/12+ this.keyresult.initial* 7/12)), 
              actual: this.randomNumber((this.keyresult.initial* 15/12), (this.keyresult.target * 5/12+ this.keyresult.initial* 7/12)), 
              target: null
            },
            { period: 'June 2022', 
              plan: this.randomNumber((this.keyresult.initial* 17/12), (this.keyresult.target * 6/12+ this.keyresult.initial* 6/12)), 
              actual: this.randomNumber((this.keyresult.initial* 15/12), (this.keyresult.target * 6/12+ this.keyresult.initial* 6/12)), 
              target: null
            },
            { period: 'July 2022', 
              plan: this.randomNumber((this.keyresult.initial* 18/12), (this.keyresult.target * 7/12+ this.keyresult.initial* 5/12)), 
              actual: this.randomNumber((this.keyresult.initial* 16/12), this.keyresult.actual), 
              target: null
            },
            { period: 'August 2022', 
              plan: this.randomNumber((this.keyresult.initial* 19/12), (this.keyresult.target * 8/12+ this.keyresult.initial* 4/12)), 
              actual: this.randomNumber((this.keyresult.initial* 17/12), this.keyresult.actual), 
              target: null
            },
            { period: 'September 2022', 
              plan: this.randomNumber((this.keyresult.initial* 20/12), (this.keyresult.target * 9/12+ this.keyresult.initial * 3/12)), 
              actual: this.randomNumber((this.keyresult.initial* 19/12), (this.keyresult.actual)), 
              target: null
            },
            { period: 'October 2022', 
              plan: this.keyresult.plan, 
              actual: this.keyresult.actual, 
              target: null
            },
            { period: 'November 2022', 
              plan: this.randomNumber((this.keyresult.initial* 22/12), (this.keyresult.target * 11/12+ this.keyresult.initial* 1/12)), 
              actual: null, 
              target: null
            },
            { period: 'December 2022', 
              plan: this.keyresult.target, 
              actual: null, 
              target: this.keyresult.target
            },
          ]
        }
      },
      objective () {
        return ObjectivesData.objectives.find((objective) => objective.id === this.objectiveId);
      },
      objectiveSlug() {
        return this.objective.name.split(/[\s]+/).join("-").toLowerCase();
      },
      keyresultDeviation() {
        if (this.keyresult.type === 'Increase') {
            return (this.keyresult.actual - this.keyresult.plan)/this.keyresult.plan*100
        } else {
            return (this.keyresult.actual - this.keyresult.plan)*-1/this.keyresult.plan*100
        };
      },
      keyresultAchievement() {
        if (this.keyresult.target == 0 || this.keyresult.target == null) {
          return 0
        } else {
          if (this.keyresult.type === 'Increase') {
              return (this.keyresult.actual/this.keyresult.target*100).toFixed(0)
          } else {
              return (((this.keyresult.actual/this.keyresult.target)**-1)*100).toFixed(0)
          };
        };
      },
      targetChange() {
        return ((this.keyresult.target - this.keyresult.initial)/this.keyresult.initial*100).toFixed(2);
      },
      planChange() {
        return ((this.keyresult.plan - this.keyresult.planPrevious)/this.keyresult.planPrevious*100).toFixed(2);
      },
      actualChange() {
        return ((this.keyresult.actual - this.keyresult.actualPrevious)/this.keyresult.actualPrevious*100).toFixed(2);
      },
    },
    methods: {
      randomNumber(min, max) {
        return (Math.floor(Math.random() * (max - min)) + min).toFixed(0);
      },
      deviationPercent(actual, plan) {
        if (plan == null || actual == null) {
            return null;         
        } else {
          if (this.keyresult.type === 'Increase') {
            return ((actual - plan)/plan*100).toFixed(1)
        } else {
            return ((actual - plan)*-1/plan*100).toFixed(1)
        };
        }
      },
      deviationAbsolute(actual, plan) {
        if (plan == null || actual == null) {
          return null;
        } else {
          if (this.keyresult.type === 'Increase') {
            return (actual - plan)
        } else {
            return (actual - plan)*-1
        };
        }
      },
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
    mounted() {
        const ctx = document.getElementById(this.keyresult.name);
        console.log('Chart.js component mounted');
        const lineChart = new Chart(ctx, {            
            data: {
                labels: ['Jan 22', 'Feb 22', 'Mar 22', 'Apr 22', 'May 22', 'Jun 22', 'Jul 22', 'Aug 22', 'Sep 22', 'Okt 22', 'Nov 22', 'Dec 22'],
                datasets: [{
                        type: 'line',
                        label: 'Target',
                        data: [
                          this.keyresultRandomData.keyresultData[0].target , 
                          this.keyresultRandomData.keyresultData[1].target , 
                          this.keyresultRandomData.keyresultData[2].target , 
                          this.keyresultRandomData.keyresultData[3].target , 
                          this.keyresultRandomData.keyresultData[4].target ,
                          this.keyresultRandomData.keyresultData[5].target ,
                          this.keyresultRandomData.keyresultData[6].target ,
                          this.keyresultRandomData.keyresultData[7].target ,
                          this.keyresultRandomData.keyresultData[8].target , 
                          this.keyresultRandomData.keyresultData[9].target , 
                          this.keyresultRandomData.keyresultData[10].target , 
                          this.keyresultRandomData.keyresultData[11].target , 
                        ],
                        borderColor: '#DD524C',
                        backgroundColor: '#DD524C',
                        pointRadius: 3.5,                 
                    },
                    {
                        type: 'line',
                        label: 'Actual',
                        data: [
                          this.keyresultRandomData.keyresultData[0].actual , 
                          this.keyresultRandomData.keyresultData[1].actual , 
                          this.keyresultRandomData.keyresultData[2].actual , 
                          this.keyresultRandomData.keyresultData[3].actual , 
                          this.keyresultRandomData.keyresultData[4].actual ,
                          this.keyresultRandomData.keyresultData[5].actual ,
                          this.keyresultRandomData.keyresultData[6].actual ,
                          this.keyresultRandomData.keyresultData[7].actual ,
                          this.keyresultRandomData.keyresultData[8].actual , 
                          this.keyresultRandomData.keyresultData[9].actual , 
                          this.keyresultRandomData.keyresultData[10].actual , 
                          this.keyresultRandomData.keyresultData[11].actual , 
                        ],
                        borderColor: '#22D3EE',
                        backgroundColor: '#22D3EE',
                        pointRadius: 0
                        
                    }, 
                    {
                        type: 'line',
                        label: 'Plan',
                        data: [
                          this.keyresultRandomData.keyresultData[0].plan , 
                          this.keyresultRandomData.keyresultData[1].plan , 
                          this.keyresultRandomData.keyresultData[2].plan , 
                          this.keyresultRandomData.keyresultData[3].plan , 
                          this.keyresultRandomData.keyresultData[4].plan ,
                          this.keyresultRandomData.keyresultData[5].plan ,
                          this.keyresultRandomData.keyresultData[6].plan ,
                          this.keyresultRandomData.keyresultData[7].plan ,
                          this.keyresultRandomData.keyresultData[8].plan , 
                          this.keyresultRandomData.keyresultData[9].plan, 
                          this.keyresultRandomData.keyresultData[10].plan,
                          this.keyresultRandomData.keyresultData[11].plan,
                        ],
                        backgroundColor: '#F3F4F6',
                        borderColor: '#E4E6EA',
                        pointRadius: 4
                    },
                    
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                maintainAspectRatio: false,
                plugins: {
                  legend: {
                      display: false,
                  }
              }
            }
        });
    },
    components: {
      PrimaryButton,
      SecondaryButton,
      ObjectiveIcon,
      MyObjectiveListItem,
      ObjectiveColorButtonVue,
      KeyresultStatusBadgeLarge,
      Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, Switch, SwitchGroup, SwitchLabel,
      ArrowDownIcon,
      ArrowUpIcon
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
      <!-- Header section -->
      <div class="md:flex md:items-center lg:justify-between">
        <div class="min-w-0 flex-1">
          <!-- Bread crumbs -->
          <nav class="flex" aria-label="Breadcrumb">
            <ol role="list" class="flex items-center space-x-4">
              <li>
                <div class="flex items-center mr-2">
                  <router-link :to="{name: 'my.objective.details', params:{id: objectiveId, slug: objectiveSlug }}" class="group flex items-center text-sm font-medium text-gray-500 hover:text-gray-700">
                    <svg class="h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-700 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z" clip-rule="evenodd" />
                    </svg>
                    Back to objective
                  </router-link>
                </div>
              </li>
              <li class="hidden sm:block">
                <div class="flex items-center">
                  <span  class="w-5 flex-shrink-0 text-gray-400 mr-2 text-xs font-semibold" >|</span>
                  <router-link :to="{name: 'my.objectives.list'}" class="text-sm font-medium text-gray-500 hover:text-gray-700">My objectives</router-link>
                </div>
              </li>
              <li class="hidden sm:block">
                <div class="flex items-center">
                  <svg class="h-5 w-5 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg>
                  <router-link :to="{name: 'my.objective.details', params:{id: objectiveId, slug: objectiveSlug }}" class="ml-4 text-sm font-medium text-gray-500 hover:text-gray-700">
                    {{objective.name}}
                  </router-link>
                </div>
              </li>
            </ol>
          </nav>
          <div class="flex mt-1">
            <div class="relative h-16 w-16 mt-4 mr-3 -ml-0.5 rounded-full bg-white flex-shrink-0">
              <div class="flex-shrink-0 absolute inset-0">
                <div class="radial-progress text-gray-200 text-sm font-bold" :style="['--value:'+100+'; --size:4rem; --thickness:5px;']" ></div>
              </div>
              <div class="flex-shrink-0 absolute inset-0">
                <div :class="['radial-progress text-'+keyresult.color+' text-base font-bold']" :style="['--value:'+keyresultAchievement+'; --size:4rem; --thickness:5px;']" >{{keyresultAchievement}}%</div>
              </div>
            </div>
            <div class="w-full">
              <div class="flex items-start justify-between">
                <h2 class="mt-5 text-2xl font-semibold leading-7 text-gray-900 sm:tracking-tight">{{keyresult.name}}</h2>
                <KeyresultStatusBadgeLarge :deviation="keyresultDeviation" class="py-1 mt-4 ml-2 -mr-1" ></KeyresultStatusBadgeLarge>
              </div>
              <div class="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap justify-between">
                <div class="flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap">
                  <div class="mt-1.5 flex items-center text-sm font-medium text-gray-500/80 mr-6">
                    <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fill-rule="evenodd" d="M4.606 12.97a.75.75 0 01-.134 1.051 2.494 2.494 0 00-.93 2.437 2.494 2.494 0 002.437-.93.75.75 0 111.186.918 3.995 3.995 0 01-4.482 1.332.75.75 0 01-.461-.461 3.994 3.994 0 011.332-4.482.75.75 0 011.052.134z" clip-rule="evenodd" />
                      <path fill-rule="evenodd" d="M5.752 12A13.07 13.07 0 008 14.248v4.002c0 .414.336.75.75.75a5 5 0 004.797-6.414 12.984 12.984 0 005.45-10.848.75.75 0 00-.735-.735 12.984 12.984 0 00-10.849 5.45A5 5 0 001 11.25c.001.414.337.75.751.75h4.002zM13 9a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                    </svg>
                    {{keyresult.goalName}}
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
      <!-- stats section -->
      <section class="mt-6">
        <div class="grid  md:grid-cols-10 gap-4">
          <!-- stats container -->
          <div class="md:col-span-3 bg-white rounded-xl overflow-hidden px-4 py-5 sm:p-6">
            <dl class="grid grid-cols-1 gap-5">
              <!-- stats -->
              <div :class="['bg-'+objective.secondaryColor+' rounded-xl px-4 pt-3 pb-4 -mx-2 -mt-2']">
                <dt :class="['text-base font-light text-'+objective.textColor]">Target</dt>
                <dd class="mt-1">
                  <div class="flex w-full justify-between items-baseline">
                    <span :class="['text-sm font-medium truncate text-'+objective.textColor]">Initial value</span>
                   <span :class="['flex items-baseline text-lg font-semibold text-'+objective.textColor+' whitespace-nowrap']">
                    {{ keyresult.initial.toLocaleString('de-DE') }} {{keyresult.unit}}
                   </span> 
                  </div>
                  <div class="flex w-full justify-between items-baseline">
                    <span :class="['text-sm font-medium truncate text-'+objective.textColor]">Target value</span>
                    <span :class="['flex items-baseline text-lg font-semibold text-'+objective.textColor+' whitespace-nowrap']">
                      {{ keyresult.target.toLocaleString('de-DE') }} {{keyresult.unit}}
                    </span> 
                  </div>
                  <div class="flex w-full justify-between items-baseline whitespace-nowrap">
                    <span :class="['text-sm font-medium truncate text-'+objective.textColor]">{{keyresult.type}} by</span>
                    <div :class="[keyresult.type == 'Increase' ? 'text-green-600' : 'text-red-600', 'inline-flex items-baseline rounded-full text-sm font-medium mt-1']">
                      <ArrowUpIcon v-if="keyresult.type == 'Increase'" class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                      <ArrowDownIcon v-else class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                      <span class="sr-only"> {{ keyresult.type == 'Increase' ? 'Increased' : 'Decreased' }} by </span>
                      {{(keyresult.target - keyresult.initial).toLocaleString('de-DE')}} {{keyresult.unit}}
                    </div>
                  </div>
                </dd>
              </div>
              <div>
                <dt class="text-base font-normal text-gray-500/80">Plan (to date)</dt>
                <dd class="mt-1 flex items-baseline justify-between md:block">
                  <div :class="['flex items-baseline text-2xl font-semibold text-gray-600 whitespace-nowrap']">
                    {{keyresult.plan.toLocaleString('de-DE')}} {{keyresult.unit}}
                    <span class="ml-2 text-sm font-medium text-gray-500 truncate">last period {{keyresult.planPrevious.toLocaleString('de-DE')}} {{keyresult.unit}} </span>
                  </div>
                  <div :class="[planChange >= 0 ? 'text-green-600' : 'text-red-600', 'flex whitespace-nowrap items-baseline rounded-full text-sm font-medium mt-1']">
                    <ArrowUpIcon v-if="planChange >= 0" class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                    <ArrowDownIcon v-else class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                    <span class="sr-only"> {{ planChange >= 0 ? 'Increased' : 'Decreased' }} by </span>
                    {{ planChange }}%
                    <span class="ml-2 text-sm font-medium text-gray-400 truncate">from last period</span>
                  </div>
                </dd>
              </div>
              <div>
                <dt class="text-base font-normal text-gray-500/80">Actual</dt>
                <dd>
                  <div class="mt-1 flex items-baseline justify-between md:block">
                    <div :class="['flex items-baseline text-2xl font-semibold text-gray-600 whitespace-nowrap']">
                      {{keyresult.actual.toLocaleString('de-DE')}} {{keyresult.unit}}
                      <span class="ml-2 text-sm font-medium text-gray-500 truncate">last period {{keyresult.actualPrevious.toLocaleString('de-DE')}}{{keyresult.unit}} </span>
                    </div>
                    <div :class="[actualChange >= 0 ? 'text-green-600' : 'text-red-600', 'flex items-baseline rounded-full text-sm font-medium mt-1']">
                      <ArrowUpIcon v-if="actualChange >= 0" class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                      <ArrowDownIcon v-else class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                      <span class="sr-only"> {{ actualChange >= 0 ? 'Increased' : 'Decreased' }} by </span>
                      {{ actualChange }}%
                      <span class="ml-2 text-sm font-medium text-gray-400 truncate">from last period</span>
                    </div>
                  </div>
                  <div class="flex items-baseline">
                    <div :class="[keyresultDeviation >= 0 ? 'text-green-600' : 'text-red-600', 'flex whitespace-nowrap items-baseline rounded-full text-sm font-medium mt-1']">
                      <ArrowUpIcon v-if="keyresultDeviation >= 0" class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                      <ArrowDownIcon v-else class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                      <span class="sr-only"> {{ keyresultDeviation >= 0 ? 'Increased' : 'Decreased' }} by </span>
                      {{ keyresultDeviation.toFixed(2) }}%
                    </div>
                    <span class="ml-2 text-sm font-medium text-gray-400 truncate">deviation from plan</span>
                  </div>
                </dd>
              </div>
            </dl>
          </div>
          <!-- chart container -->
          <div style="height:26rem;" class="relative flex flex-col md:col-span-7 bg-white rounded-xl overflow-hidden items-center p-6">
            <!-- chart legend -->
            <div class="flex mb-2">
              <div class="flex items-center mr-6">
                <div class="h-2 w-2 rounded-full bg-red-500 mr-2"></div>
                <span class="text-sm text-gray-400">Target</span>
              </div>
              <div class="flex items-center mr-6">
                <div class="h-1 w-4 border-2 border-gray-200 mr-2"></div>
                <span class="text-sm text-gray-400">Plan</span>
              </div>
              <div class="flex items-center mr-6">
                <div class="h-1 w-4 border-2 border-cyan-400 mr-2"></div>
                <span class="text-sm text-gray-400">Actual</span>
              </div>
            </div>
            <!-- chart wrapper -->
            <div class="w-full h-full">
              <!-- chart -->
              <canvas :id="keyresult.name"></canvas>
            </div>
          </div>
        </div>
      </section>
      <!-- Data section -->
      <section class="mt-8">
        <!-- section heading -->
        <div class="sm:flex sm:items-end sm:justify-between">
          <div class="">
            <h2 class="text-lg font-semibold text-gray-900">Keyresult data</h2>
            <div class="flex flex-col sm:flex-row mt-2 sm:mt-1 space-y-2 sm:space-y-0 sm:space-x-6">
              <div class="flex items-center">
                <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M.99 5.24A2.25 2.25 0 013.25 3h13.5A2.25 2.25 0 0119 5.25l.01 9.5A2.25 2.25 0 0116.76 17H3.26A2.267 2.267 0 011 14.74l-.01-9.5zm8.26 9.52v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.615c0 .414.336.75.75.75h5.373a.75.75 0 00.627-.74zm1.5 0a.75.75 0 00.627.74h5.373a.75.75 0 00.75-.75v-.615a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625zm6.75-3.63v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75v.625c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75zM17.5 7.5v-.625a.75.75 0 00-.75-.75H11.5a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75h5.25a.75.75 0 00.75-.75zm-8.25 0v-.625a.75.75 0 00-.75-.75H3.25a.75.75 0 00-.75.75V7.5c0 .414.336.75.75.75H8.5a.75.75 0 00.75-.75z" clip-rule="evenodd" />
                </svg>
                <p class="text-sm text-gray-500">          
                  12 Periods
                </p>
              </div>
              <div class="flex items-center">
                <svg class="mr-1.5 h-4 w-4 flex-shrink-0 text-gray-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm.75-13a.75.75 0 00-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 000-1.5h-3.25V5z" clip-rule="evenodd" />
                </svg>
                <p class="text-sm text-gray-500">          
                  Monthly timeframe
                </p>
              </div>
            </div>
          </div>
          <div class="flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse xl:justify-end sm:space-y-0 md:mt-0 md:flex-row ">
            <div class="mt-2 flex xl:mt-0">
              <!-- This example requires Tailwind CSS v2.0+ -->
              <PrimaryButton>Edit</PrimaryButton>
            </div>
          </div>
        </div>
        <!-- Data Table -->
        <div class="mt-6">
          <!-- table wrapper -->
          <div class="bg-white rounded-xl overflow-hidden p-4">
            <!--header-->
            <div class="grid grid-cols-10 sm:grid-cols-12 py-4 gap-2 px-2">
              <div class="col-span-2 sm:col-span-4 text-left text-sm font-semibold text-gray-900 whitespace-nowrap truncate">Period</div>
              <div class="col-span-2 sm:col-span-2 text-right text-sm font-semibold text-gray-900 whitespace-nowrap truncate">Plan</div>
              <div class="col-span-2 sm:col-span-2 text-right text-sm font-semibold text-gray-900 whitespace-nowrap truncate">Actual</div>
              <div class="col-span-2 sm:col-span-2 text-right text-sm font-semibold text-gray-900 whitespace-nowrap truncate">Deviation</div>
              <div class="col-span-2 sm:col-span-2 text-right text-sm font-semibold text-gray-900 whitespace-nowrap truncate">Deviation %</div>
            </div>
            <!--data rows-->
            <div v-for="(row, rowIdx) in keyresultRandomData.keyresultData" :key="row.period" 
              :class="[rowIdx % 2 === 0 ? 'bg-white' : 'bg-gray-100/70' , 'hover:bg-gray-200/70 cursor-pointer rounded-xl px-2 grid grid-cols-10 sm:grid-cols-12 py-4 gap-2']">
              <div class="col-span-2 sm:col-span-4 text-left text-sm font-medium text-gray-500 whitespace-nowrap truncate">{{ row.period }}</div>
              <div v-if="row.plan != null" class="col-span-2 sm:col-span-2 text-right text-sm text-gray-500 whitespace-nowrap truncate">{{ row.plan }} {{keyresult.unit}}</div>
              <div v-else class="col-span-2 sm:col-span-2 text-right text-sm text-gray-500 whitespace-nowrap truncate"></div>
              <div v-if="row.actual != null" class="col-span-2 sm:col-span-2 text-right text-sm text-gray-500 whitespace-nowrap truncate">{{ row.actual }} {{keyresult.unit}}</div>
              <div v-else class="col-span-2 sm:col-span-2 text-right text-sm text-gray-500 whitespace-nowrap truncate"></div>            
              <div v-if="deviationAbsolute(row.actual, row.plan) == null" class="col-span-2 sm:col-span-2 text-right text-sm text-gray-500 whitespace-nowrap truncate"></div>
              <div v-else class="col-span-2 sm:col-span-2 text-right text-sm text-gray-500 whitespace-nowrap truncate">
                <div :class="[deviationAbsolute(row.actual, row.plan) >= 0 ? 'text-green-600' : 'text-red-600', 'flex justify-end whitespace-nowrap items-baseline text-sm font-medium truncate']">
                  <ArrowUpIcon v-if="deviationAbsolute(row.actual, row.plan) >= 0" class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                  <ArrowDownIcon v-else class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                  <span class="sr-only"> {{ deviationAbsolute(row.actual, row.plan) >= 0 ? 'Increased' : 'Decreased' }} by </span>
                  {{ deviationAbsolute(row.actual, row.plan)}} {{keyresult.unit}}
                </div>
              </div>
              <div v-if="deviationPercent(row.actual, row.plan) == null" class="col-span-2 sm:col-span-2 text-right text-sm text-gray-500 whitespace-nowrap truncate"></div>
              <div v-else class="col-span-2 sm:col-span-2 text-right text-sm text-gray-500 whitespace-nowrap truncate">
                <div :class="[deviationPercent(row.actual, row.plan) >= 0 ? 'text-green-600' : 'text-red-600', 'flex justify-end whitespace-nowrap items-baseline text-sm font-medium truncate']">
                  <ArrowUpIcon v-if="deviationPercent(row.actual, row.plan) >= 0" class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-green-500" aria-hidden="true" />
                  <ArrowDownIcon v-else class="mr-0.5 h-4 w-4 flex-shrink-0 self-center text-red-500" aria-hidden="true" />
                  <span class="sr-only"> {{ deviationPercent(row.actual, row.plan) >= 0 ? 'Increased' : 'Decreased' }} by </span>
                  {{ deviationPercent(row.actual, row.plan) }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
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
