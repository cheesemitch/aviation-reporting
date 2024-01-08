<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import CompanyLogo from '/src/components/TheCompanyLogo.vue'
import PrimaryButton from '/src/components/ThePrimaryButton.vue'
import SecondaryButton from '/src/components/TheSecondaryButton.vue'
export default {
  data () {
    return {
      // strengths
      strengths: [
        {
          id: 1,
          title: 'Technologisches Know-how in der Software-Entwicklung.'
        },
        {
          id: 2,
          title: 'Innovative Designs und Konzepte zur Produkt- und Prozessverbesserung.'
        },
        {
          id: 3,
          title: 'Sehr geringe Fixkosten.'
        },
        {
          id: 4,
          title: 'Kurze Entscheidungswege mit eingespielten Prozessen.'
        },
        {
          id: 5,
          title: 'Qualifizierte Mitarbeiter mit speziellen Domänen-Kenntnissen.'
        }
      ],
      newStrengths: [],
      newStrengthTitle: '',
      newStrengthId: 6,
      strengthsLastUpdated: 'Sep 5, 2022',
      isOpenStrengthsModal: false,
      isOpenStrengthsCancelModal: false,
      isOpenStrengthsDeleteAlert: false,
      strengthToDelete: [],
      strengthToDeleteIndex: '',
      // weaknesses
      weaknesses: [
        {
          id: 1,
          title: 'Geringe Finanzkraft mit wenig Eigenkapital.'
        },
        {
          id: 2,
          title: 'Kein eigener Vertrieb und kein eigenes Marketing.'
        },
        {
          id: 3,
          title: 'Abhängigkeit von Partnern.'
        },
        {
          id: 4,
          title: 'Fehlender Patentschutz.'
        },
        {
          id: 5,
          title: 'Mangelhaftes Know-how in der Kaltakquise von neun Kunden und Parntern.'
        }
      ],
      newWeaknesses: [],
      newWeaknessTitle: '',
      newWeaknessId: 6,
      weaknessesLastUpdated: 'Sep 5, 2022',
      isOpenWeaknessesModal: false,
      isOpenWeaknessesCancelModal: false,
      isOpenWeaknessesDeleteAlert: false,
      weaknessToDelete: [],
      weaknessToDeleteIndex: '',
      // opportunities
      opportunities: [
         {
          id: 1,
          title: 'Steigendes Bewusstsein der Unternehmen für Risikomanagement.'
        },
        {
          id: 2,
          title: 'Wenig bis keine technologischen Weiterentwicklungen der Konkurrenzprodukte.'
        },
        {
          id: 3,
          title: 'Aufgeschlossenheit für Risikomanagement von wichtigen Kunden und Partnern.'
        },
        {
          id: 4,
          title: 'Interesse der Kunden an Produktverbesserungen und Neuentwicklungen.'
        }
      ],
      newOpportunities: [],
      newOpportunityTitle: '',
      newOpportunityId: 5,
      opportunitiesLastUpdated: 'Sep 5, 2022',
      isOpenOpportunitiesModal: false,
      isOpenOpportunitiesCancelModal: false,
      isOpenOpportunitiesDeleteAlert: false,
      opportunityToDelete: [],
      opportunityToDeleteIndex: '',
      // threats
      threats: [
        {
          id: 1,
          title: 'Einstieg neuer Konkurrenten am Markt.'
        },
        {
          id: 2,
          title: 'Abwanderung wichtiger Kunden und Parnter.'
        },
        {
          id: 3,
          title: 'Abgang der Know-how-Träger im Unternehmen.'
        },
        {
          id: 4,
          title: 'Mangelnder Cashflow und Zahlungsunfähigkeit.'
        },
        {
          id: 5,
          title: 'Rückgang der Kaufkraft von Kunden aufgrund Makroökonomischer Faktoren.'
        }
      ],
      newThreats: [],
      newThreatTitle: '',
      newThreatId: 6,
      threatsLastUpdated: 'Sep 5, 2022',
      isOpenThreatsModal: false,
      isOpenThreatsCancelModal: false,
      isOpenThreatsDeleteAlert: false,
      threatToDelete: [],
      threatToDeleteIndex: '',
      // strategy "Develop"
      currentSituationDevelop: '',
      newCurrentSituationDevelop: '',
      currentSituationDevelopPlaceholder: 'Beschreiben Sie die aktuelle Lage die sich aus der Stärken und Chancen Kombination ergibt.',
      initiativesDevelop: '',
      newInitiativeDevelop: '',
      initiativesDevelopPlaceholder: 'Beschreiben Sie Maßnahmen und die weitere Vorgehensweise um die Stärken und Chancen optimal zu nutzen.',
      developLastUpdated: 'Sep 10, 2022',
      isOpenDevelopModal: false,
      // strategy "CatchUp"
      currentSituationCatchUp: '',
      newCurrentSituationCatchUp: '',
      currentSituationCatchUpPlaceholder: 'Beschreiben Sie die aktuelle Lage die sich aus der Schwächen und Chancen Kombination ergibt.',
      initiativesCatchUp: '',
      newInitiativeCatchUp: '',
      initiativesCatchUpPlaceholder: 'Beschreiben Sie Maßnahmen und die weitere Vorgehensweise um die Schwächen zu beseitigen und in Chancen umzuwandeln.',
      catchUpLastUpdated: 'Sep 10, 2022',
      isOpenCatchUpModal: false,
      // strategy "Hedge"
      currentSituationHedge: '',
      newCurrentSituationHedge: '',
      currentSituationHedgePlaceholder: 'Beschreiben Sie die aktuelle Lage die sich aus der Risiken und Stärken Kombination ergibt.',
      initiativesHedge: '',
      newInitiativeHedge: '',
      initiativesHedgePlaceholder: 'Beschreiben Sie Maßnahmen und die weitere Vorgehensweise um mit den Stärken den Eintritt von Risiken abzuwenden.',
      hedgeLastUpdated: 'Sep 10, 2022',
      isOpenHedgeModal: false,
      // strategy "Avoid"
      currentSituationAvoid: '',
      newCurrentSituationAvoid: '',
      currentSituationAvoidPlaceholder: 'Beschreiben Sie die aktuelle Lage die sich aus der Risiken und Schwächen Kombination ergibt.',
      initiativesAvoid: '',
      newInitiativeAvoid: '',
      initiativesAvoidPlaceholder: 'Beschreiben Sie Maßnahmen und die weitere Vorgehensweise um bestimmte Aktivitäten zu vermeiden und somit das Unternehmen vor Schäden zu schützen.',
      avoidLastUpdated: 'Sep 10, 2022',
      isOpenAvoidModal: false,
      // cancel editing
      isOpenCancelEditingModal: false,
      // alerts (snackbar)
      showAlertSaved: false,
      showAlertAdded: false,
      showAlertRemoved: false,
      showAlertCancelled: false,
    }
  },
  computed: {
    isEmptyStrengths() {
      if (this.strengths.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    isEmptyNewStrengths() {
      if (this.newStrengths.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    isEmptyWeaknesses() {
      if (this.weaknesses.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    isEmptyNewWeaknesses() {
      if (this.newWeaknesses.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    isEmptyOpportunities() {
      if (this.opportunities.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    isEmptyNewOpportunities() {
      if (this.newOpportunities.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    isEmptyThreats() {
      if (this.threats.length == 0) {
        return true;
      } else {
        return false;
      }
    },
    isEmptyNewThreats() {
      if (this.newThreats.length == 0) {
        return true;
      } else {
        return false;
      }
    },
  },
  methods: {
    // strengths
    openStrengthsModal() {
      this.newStrengths = JSON.parse(JSON.stringify(this.strengths));
      this.isOpenStrengthsModal = true;
    },
    saveStrengths () {
      this.strengths = JSON.parse(JSON.stringify(this.newStrengths));
      this.isOpenStrengthsModal = false;
      this.strengthsLastUpdated= new Date();
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    cancelStrenghtsEditing () {
        this.isOpenStrengthsCancelModal = false;
        setTimeout(() => {this.isOpenStrengthsModal = false;},300);
        setTimeout(() => {this.showAlertCancelled = true;},400);
        setTimeout(() => {this.showAlertCancelled = false;},4000);
    },
    addStrength () {
        let id = this.newStrengthId;
        let title = this.newStrengthTitle;
        this.newStrengths.push({id, title});
        this.newStrengthTitle = '';
        this.newStrengthId++;
        setTimeout(() => {this.showAlertAdded = true;},300);
        setTimeout(() => {this.showAlertAdded = false;},4000);
    },
    openDeleteStrengthModal (item, id) {
        this.strengthToDelete = item;
        this.strengthToDeleteIndex = this.newStrengths.findIndex(element => {
        return element.id === id;
        });
        console.log('Index of Strength to delete:'+this.strengthToDeleteIndex);
        this.isOpenStrengthsDeleteAlert = true;
    },
    deleteStrength (index) {
      this.newStrengths.splice(this.strengthToDeleteIndex, 1);
      this.isOpenStrengthsDeleteAlert = false;
      setTimeout(() => {this.showAlertRemoved = true;},300);
      setTimeout(() => {this.showAlertRemoved = false;},4000);
    },
    // weaknesses
    openWeaknessesModal() {
      this.newWeaknesses = JSON.parse(JSON.stringify(this.weaknesses));
      this.isOpenWeaknessesModal = true;
    },
    saveWeaknesses () {
      this.weaknesses = JSON.parse(JSON.stringify(this.newWeaknesses));
      this.isOpenWeaknessesModal = false;
      this.weaknessesLastUpdated= new Date();
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    cancelWeaknessesEditing () {
        this.isOpenWeaknessesCancelModal = false;
        setTimeout(() => {this.isOpenWeaknessesModal = false;},300);
        setTimeout(() => {this.showAlertCancelled = true;},400);
        setTimeout(() => {this.showAlertCancelled = false;},4000);
    },
    addWeakness () {
        let id = this.newWeaknessId;
        let title = this.newWeaknessTitle;
        this.newWeaknesses.push({id, title});
        this.newWeaknessTitle = '';
        this.newWeaknessId++;
        setTimeout(() => {this.showAlertAdded = true;},300);
        setTimeout(() => {this.showAlertAdded = false;},4000);
    },
    openDeleteWeaknessModal (item, id) {
        this.weaknessToDelete = item;
        this.weaknessToDeleteIndex = this.newWeaknesses.findIndex(element => {
        return element.id === id;
        });
        console.log('Index of Weakness to delete:'+this.weaknessToDeleteIndex);
        this.isOpenWeaknessesDeleteAlert = true;
    },
    deleteWeakness (index) {
      this.newWeaknesses.splice(this.weaknessToDeleteIndex, 1);
      this.isOpenWeaknessesDeleteAlert = false;
      setTimeout(() => {this.showAlertRemoved = true;},300);
      setTimeout(() => {this.showAlertRemoved = false;},4000);
    },
    // opportunities
    openOpportunitiesModal() {
      this.newOpportunities = JSON.parse(JSON.stringify(this.opportunities));
      this.isOpenOpportunitiesModal = true;
    },
    saveOpportunities () {
      this.opportunities = JSON.parse(JSON.stringify(this.newOpportunities));
      this.isOpenOpportunitiesModal = false;
      this.opportunitiesLastUpdated= new Date();
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    cancelOpportunitiesEditing () {
        this.isOpenOpportunitiesCancelModal = false;
        setTimeout(() => {this.isOpenOpportunitiesModal = false;},300);
        setTimeout(() => {this.showAlertCancelled = true;},400);
        setTimeout(() => {this.showAlertCancelled = false;},4000);
    },
    addOpportunity () {
        let id = this.newOpportunityId;
        let title = this.newOpportunityTitle;
        this.newOpportunities.push({id, title});
        this.newOpportunityTitle = '';
        this.newOpportunityId++;
        setTimeout(() => {this.showAlertAdded = true;},300);
        setTimeout(() => {this.showAlertAdded = false;},4000);
    },
    openDeleteOpportunityModal (item, id) {
        this.opportunityToDelete = item;
        this.opportunityToDeleteIndex = this.newOpportunities.findIndex(element => {
        return element.id === id;
        });
        console.log('Index of Strength to delete:'+this.opportunityToDeleteIndex);
        this.isOpenOpportunitiesDeleteAlert = true;
    },
    deleteOpportunity (index) {
      this.newOpportunities.splice(this.opportunityToDeleteIndex, 1);
      this.isOpenOpportunitiesDeleteAlert = false;
      setTimeout(() => {this.showAlertRemoved = true;},300);
      setTimeout(() => {this.showAlertRemoved = false;},4000);
    },
    // threats
    openThreatsModal() {
      this.newThreats = JSON.parse(JSON.stringify(this.threats));
      this.isOpenThreatsModal = true;
    },
    saveThreats () {
      this.threats = JSON.parse(JSON.stringify(this.newThreats));
      this.isOpenThreatsModal = false;
      this.threatsLastUpdated= new Date();
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    cancelThreatsEditing () {
        this.isOpenThreatsCancelModal = false;
        setTimeout(() => {this.isOpenThreatsModal = false;},300);
        setTimeout(() => {this.showAlertCancelled = true;},400);
        setTimeout(() => {this.showAlertCancelled = false;},4000);
    },
    addThreat () {
        let id = this.newThreatId;
        let title = this.newThreatTitle;
        this.newThreats.push({id, title});
        this.newThreatTitle = '';
        this.newThreatId++;
        setTimeout(() => {this.showAlertAdded = true;},300);
        setTimeout(() => {this.showAlertAdded = false;},4000);
    },
    openDeleteThreatModal (item, id) {
        this.threatToDelete = item;
        this.threatToDeleteIndex = this.newThreats.findIndex(element => {
        return element.id === id;
        });
        console.log('Index of Threat to delete:'+this.threatToDeleteIndex);
        this.isOpenThreatsDeleteAlert = true;
    },
    deleteThreat (index) {
      this.newThreats.splice(this.threatToDeleteIndex, 1);
      this.isOpenThreatsDeleteAlert = false;
      setTimeout(() => {this.showAlertRemoved = true;},300);
      setTimeout(() => {this.showAlertRemoved = false;},4000);
    },
    openDevelopModal () {
      this.newCurrentSituationDevelop = this.currentSituationDevelop;
      this.newInitiativeDevelop = this.initiativesDevelop;
      this.isOpenDevelopModal = true;
    },
    saveDevelopStrategy () {
      this.currentSituationDevelop = this.newCurrentSituationDevelop;
      this.initiativesDevelop = this.newInitiativeDevelop ;
      this.isOpenDevelopModal = false;
      this.developLastUpdated = new Date();
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    openCatchUpModal () {
      this.newCurrentSituationCatchUp = this.currentSituationCatchUp;
      this.newInitiativeCatchUp = this.initiativesCatchUp;
      this.isOpenCatchUpModal = true;
    },
    saveCatchUpStrategy () {
      this.currentSituationCatchUp = this.newCurrentSituationCatchUp;
      this.initiativesCatchUp = this.newInitiativeCatchUp ;
      this.isOpenCatchUpModal = false;
      this.catchUpLastUpdated = new Date();
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    openHedgeModal () {
      this.newCurrentSituationHedge = this.currentSituationHedge;
      this.newInitiativeHedge = this.initiativesHedge;
      this.isOpenHedgeModal = true;
    },
    saveHedgeStrategy () {
      this.currentSituationHedge = this.newCurrentSituationHedge;
      this.initiativesHedge = this.newInitiativeHedge ;
      this.isOpenHedgeModal = false;
      this.hedgeLastUpdated = new Date();
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    openAvoidModal () {
      this.newCurrentSituationAvoid = this.currentSituationAvoid;
      this.newInitiativeAvoid = this.initiativesAvoid;
      this.isOpenAvoidModal = true;
    },
    saveAvoidStrategy () {
      this.currentSituationAvoid = this.newCurrentSituationAvoid;
      this.initiativesAvoid = this.newInitiativeAvoid ;
      this.isOpenAvoidModal = false;
      this.avoidLastUpdated = new Date();
      setTimeout(() => {this.showAlertSaved = true;},300);
      setTimeout(() => {this.showAlertSaved = false;},4000);
    },
    cancelEditing () {
        this.isOpenCancelEditingModal = false;
        setTimeout(() => {this.isOpenDevelopModal = false;},300);
        setTimeout(() => {this.isOpenCatchUpModal = false;},300);
        setTimeout(() => {this.isOpenHedgeModal = false;},300);
        setTimeout(() => {this.isOpenAvoidModal = false;},300);
        setTimeout(() => {this.showAlertCancelled = true;},400);
        setTimeout(() => {this.showAlertCancelled = false;},4000);
    },
  },
  components: {
    CompanyLogo, Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, PrimaryButton, SecondaryButton 
  }
}
</script>

<template>
  <div>
    <!-- Strengths Modal -->
    <TransitionRoot as="template" :show="isOpenStrengthsModal">
      <Dialog as="div" class="relative z-10">
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
                  @click="isOpenStrengthsCancelModal = true;">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                    <svg class="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Stärken bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Stärken sind Merkmale, die im Wettbewerb einen Vorteil darstellen oder die das Unternehmen besser beherrscht als die Konkurrenz.</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="missionStatement" class="block text-sm font-medium text-gray-900">Stärken</label>
                    <!-- Empty state -->
                    <div v-if="isEmptyNewStrengths" class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400/50" x-description="Heroicon name: outline/megaphone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"></path>
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Keine Stärken definiert.</h3>
                      <p class="mt-1 text-sm text-gray-500">Fangen Sie an, indem Sie eine neue Stärke hinzufügen.</p>
                      
                    </div>
                    <div v-else class="mt-1">
                      <dd class="mt-1 text-sm text-gray-900">
                        <ul role="list" class="">
                          <li v-for="item in newStrengths" :key="item.id" class="flex items-start justify-between py-3  text-sm">
                            <div class="flex w-0 flex-1 items-start">
                                <span class=" flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full bg- text-gray-400">
                                  <svg class="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" >
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                                  </svg>
                                </span>
                              <textarea id="editStrengths" v-model="item.title"
                                name="editStrengths" 
                                :rows="item.title.length/25" 
                                class="ml-2 flex w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan-500 sm:text-sm"
                                placeholder="Stärke bearbeiten...">
                              </textarea>
                            </div>
                            <div class="ml-2 flex-shrink-0">
                              <button @click="openDeleteStrengthModal(item, item.id);" class="flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full text-gray-300 bg-white
                                shadow-sm hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                    <div class="mt-6">
                      <div class="flex mt-2">
                        
                        <span class="flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                          <svg class="h-5 w-5 text-cyan-400" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                          </svg>
                        </span>
                        <label for="add-new-strength" class="ml-2 flex-1 cursor-pointer group flex items-center
                          rounded-md bg-white">
                          <textarea v-model="newStrengthTitle" rows="1" id="add-new-strength" name="add-new-strength" type="text" 
                          class="flex w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-400 focus:ring-cyan-400 sm:text-sm"
                              placeholder="Stärke hinzufügen"></textarea>
                        </label>
                        <button @click="addStrength()" class="ml-2 flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full text-white bg-cyan-400 border border-transparent
                        shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 flex-shrink-0">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                          </svg>

                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal buttons -->
                <div class="mt-10 sm:flex sm:flex-row-reverse">
                  <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent 
                  px-4 py-2 text-base font-medium text-white shadow-sm 
                  bg-gradient-to-r from-agnoscis-200 to-agnoscis-150 hover:to-agnoscis-200 
                  focus:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-agnoscis-200
                  sm:ml-3 sm:w-auto sm:text-sm" 
                  @click="saveStrengths()">Speichern</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 
                  bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" 
                  @click="isOpenStrengthsCancelModal = true;">Abbrechen</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Strengths Delete Strength Modal -->
    <TransitionRoot as="template" :show="isOpenStrengthsDeleteAlert">
      <Dialog as="div" class="relative z-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity" />
        </TransitionChild>

        <div class="fixed inset-0 z-20 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Stärke entfernen</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-900">{{strengthToDelete.title}}</p>
                    </div>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500/80">Möchten Sie diese Stärke wirklich entfernen? Änderungen können rückgängig gemacht werden in dem Sie die Bearbeitung ohne zu Speichern beenden.</p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" 
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base 
                  font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="deleteStrength(strengthToDeleteIndex)">Entfernen</button>
                  <button type="button" 
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                    font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 
                    focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenStrengthsDeleteAlert = false;" ref="cancelButtonRef">
                    Abbrechen
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Strengths Cancel Modal -->
    <TransitionRoot as="template" :show="isOpenStrengthsCancelModal">
      <Dialog as="div" class="relative z-20" @close="isOpenStrengthsCancelModal = false">
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
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="cancelStrenghtsEditing()">Ja, abbrechen</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 
                  focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenStrengthsCancelModal = false;" ref="cancelButtonRef">Zurück</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Weaknesses Modal -->
    <TransitionRoot as="template" :show="isOpenWeaknessesModal">
      <Dialog as="div" class="relative z-10">
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
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-amber   -500 focus:ring-offset-2" 
                  @click="isOpenWeaknessesCancelModal = true;">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-amber-100">
                    <svg class="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Schwächen bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Merkmale die im Wettbewerb ein Nachteil sind und sich negativ auf den Unternehmenserfolg auswirken können.</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="missionStatement" class="block text-sm font-medium text-gray-900">Schwächen</label>
                    <!-- Empty state -->
                    <div v-if="isEmptyNewWeaknesses" class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Keine Schwächen definiert.</h3>
                      <p class="mt-1 text-sm text-gray-500">Fangen Sie an, indem Sie eine neue Schwäche hinzufügen.</p>
                    </div>
                    <div v-else class="mt-1">
                      <dd class="mt-1 text-sm text-gray-900">
                        <ul role="list" class="">
                          <li v-for="item in newWeaknesses" :key="item.id" class="flex items-start justify-between py-3  text-sm">
                            <div class="flex w-0 flex-1 items-start">
                                <span class="flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full bg- text-gray-400">
                                  <svg class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                                  </svg>
                                </span>
                              <textarea id="editStrengths" v-model="item.title"
                                name="editStrengths" 
                                :rows="item.title.length/25" 
                                class="ml-2 flex w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm"
                                placeholder="Schwäche bearbeiten...">
                              </textarea>
                            </div>
                            <div class="ml-2 flex-shrink-0">
                              <button @click="openDeleteWeaknessModal(item, item.id);" class="flex flex-shrink-0 h-9 w-9 
                                items-center justify-center rounded-full text-gray-300 bg-white
                                shadow-sm hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                    <div class="mt-6">
                      <div class="flex mt-2">
                        <span class="flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                          <svg class="h-5 w-5 text-amber-500" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                          </svg>
                        </span>
                        <label for="add-new-strength" class="ml-2 flex-1 cursor-pointer group flex items-center
                          rounded-md bg-white">
                          <textarea v-model="newWeaknessTitle" rows="1" id="add-new-strength" name="add-new-strength" type="text" 
                          class="flex w-full rounded-md border-gray-300 shadow-sm focus:border-amber-400 focus:ring-amber-400 sm:text-sm"
                              placeholder="Schwäche hinzufügen"></textarea>
                        </label>
                        <button @click="addWeakness()" class="ml-2 flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full text-white 
                          bg-amber-400 border border-transparent
                          shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 flex-shrink-0">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal buttons -->
                <div class="mt-10 sm:flex sm:flex-row-reverse">
                  <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent 
                  px-4 py-2 text-base font-medium text-white shadow-sm 
                  bg-amber-400 hover:bg-amber-500 
                  focus:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-amber-400
                  sm:ml-3 sm:w-auto sm:text-sm" 
                  @click="saveWeaknesses()">Speichern</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 
                  bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-amber-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" 
                  @click="isOpenWeaknessesCancelModal = true;">Abbrechen</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Weaknesses Delete Weakness Modal -->
    <TransitionRoot as="template" :show="isOpenWeaknessesDeleteAlert">
      <Dialog as="div" class="relative z-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-20 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Schwäche entfernen</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-900">{{weaknessToDelete.title}}</p>
                    </div>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500/80">Möchten Sie diese Schwäche wirklich entfernen? Änderungen können rückgängig gemacht werden in dem Sie die Bearbeitung ohne zu Speichern beenden.</p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" 
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base 
                  font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="deleteWeakness(weaknessToDeleteIndex)">Entfernen</button>
                  <button type="button" 
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                    font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 
                    focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenWeaknessesDeleteAlert = false;" ref="cancelButtonRef">
                    Abbrechen
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Weaknesses Cancel Modal -->
    <TransitionRoot as="template" :show="isOpenWeaknessesCancelModal">
      <Dialog as="div" class="relative z-10" @close="isOpenWeaknessesCancelModal = false">
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
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="cancelWeaknessesEditing()">Ja, abbrechen</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 
                  focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenWeaknessesCancelModal = false;" ref="cancelButtonRef">Zurück</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Opportunities Modal -->
    <TransitionRoot as="template" :show="isOpenOpportunitiesModal">
      <Dialog as="div" class="relative z-10">
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
                  class="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2" 
                  @click="isOpenOpportunitiesCancelModal = true;">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-lime-100">
                    <svg class="h-6 w-6 text-lime-500"  fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Chancen bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Einflussfaktoren und Entwicklungen im Umfeld oder Markt, die für das Unternehmen ein Vorteil sein können oder aus denen Potenziale entstehen können.</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="missionStatement" class="block text-sm font-medium text-gray-900">Chancen</label>
                    <!-- Empty state -->
                    <div v-if="isEmptyNewOpportunities" class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Keine Chancen definiert.</h3>
                      <p class="mt-1 text-sm text-gray-500">Fangen Sie an, indem Sie Chancen hinzufügen.</p>
                    </div>
                    <div v-else class="mt-1">
                      <dd class="mt-1 text-sm text-gray-900">
                        <ul role="list" class="">
                          <li v-for="item in newOpportunities" :key="item.id" class="flex items-start justify-between py-3  text-sm">
                            <div class="flex w-0 flex-1 items-start">
                                <span class=" flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full bg- text-gray-400">
                                   <svg class="h-6 w-6 text-lime-500"  fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                                  </svg>
                                </span>
                              <textarea id="editOpportunities" v-model="item.title"
                                name="editOpportunities" 
                                :rows="item.title.length/25" 
                                class="ml-2 flex w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                                placeholder="Chance bearbeiten...">
                              </textarea>
                            </div>
                            <div class="ml-2 flex-shrink-0">
                              <button @click="openDeleteOpportunityModal(item, item.id);" class="flex flex-shrink-0 h-9 w-9 items-center 
                                justify-center rounded-full text-gray-300 bg-white
                                shadow-sm hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                    <div class="mt-6">
                      <div class="flex mt-2">
                        <span class="flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                          <svg class="h-5 w-5 text-lime-500" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                          </svg>
                        </span>
                        <label for="add-new-opportunity" class="ml-2 flex-1 cursor-pointer group flex items-center
                          rounded-md bg-white">
                          <textarea v-model="newOpportunityTitle" rows="1" id="add-new-opportunity" name="add-new-opportunity" type="text" 
                          class="flex w-full rounded-md border-gray-300 shadow-sm focus:border-lime-500 focus:ring-lime-500 sm:text-sm"
                              placeholder="Chance hinzufügen"></textarea>
                        </label>
                        <button @click="addOpportunity()" class="ml-2 flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full 
                        text-white bg-lime-500 border border-transparent
                        shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 flex-shrink-0">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal buttons -->
                <div class="mt-10 sm:flex sm:flex-row-reverse">
                  <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent 
                  px-4 py-2 text-base font-medium text-white shadow-sm 
                  bg-lime-500 hover:bg-lime-600
                  focus:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-lime-500
                  sm:ml-3 sm:w-auto sm:text-sm" 
                  @click="saveOpportunities()">Speichern</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 
                  bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-lime-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" 
                  @click="isOpenOpportunitiesCancelModal = true;">Abbrechen</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Opportunities Delete Opportunities Modal -->
    <TransitionRoot as="template" :show="isOpenOpportunitiesDeleteAlert">
      <Dialog as="div" class="relative z-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-20 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Chance entfernen</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-900">{{opportunityToDelete.title}}</p>
                    </div>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500/80">Möchten Sie diese Chance wirklich entfernen? Änderungen können rückgängig gemacht werden in dem Sie die Bearbeitung ohne zu Speichern beenden.</p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" 
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base 
                  font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="deleteOpportunity(opportunityToDeleteIndex)">Entfernen</button>
                  <button type="button" 
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                    font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 
                    focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenOpportunitiesDeleteAlert = false;" ref="cancelButtonRef">
                    Abbrechen
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Opportunities Cancel Modal -->
    <TransitionRoot as="template" :show="isOpenOpportunitiesCancelModal">
      <Dialog as="div" class="relative z-10" @close="isOpenOpportunitiesCancelModal = false">
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
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="cancelOpportunitiesEditing()">Ja, abbrechen</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 
                  focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenOpportunitiesCancelModal = false;" ref="cancelButtonRef">Zurück</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Threats Modal -->
    <TransitionRoot as="template" :show="isOpenThreatsModal">
      <Dialog as="div" class="relative z-10">
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
                  @click="isOpenThreatsCancelModal = true;">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                    <svg class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Risiken bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Faktoren und Entwicklungen im Umfeld oder im Marktgeschehen des Unternehmens, aus denen Nachteile oder Gefahren entstehen können, die das Unternehmen schwächen oder zu Verlusten führen können.</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="missionStatement" class="block text-sm font-medium text-gray-900">Risiken</label>
                    <!-- Empty state -->
                    <div v-if="isEmptyNewThreats" class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Keine Risiken definiert.</h3>
                      <p class="mt-1 text-sm text-gray-500">Fangen Sie an, indem Sie ein neues Risiko hinzufügen.</p>
                    </div>
                    <div v-else class="mt-1">
                      <dd class="mt-1 text-sm text-gray-900">
                        <ul role="list" class="">
                          <li v-for="item in newThreats" :key="item.id" class="flex items-start justify-between py-3  text-sm">
                            <div class="flex w-0 flex-1 items-start">
                                <span class=" flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full text-gray-400">
                                  <svg class="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                                  </svg>
                                </span>
                              <textarea id="editThreats" v-model="item.title"
                                name="editThreats" 
                                :rows="item.title.length/25" 
                                class="ml-2 flex w-full rounded-md border-gray-300 shadow-sm focus:border-pink-500 focus:ring-pink-500 sm:text-sm"
                                placeholder="Risiko bearbeiten...">
                              </textarea>
                            </div>
                            <div class="ml-2 flex-shrink-0">
                              <button @click="openDeleteThreatModal(item, item.id);" class="flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full text-gray-300 bg-white
                                shadow-sm hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2">
                               <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                  <path fill-rule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                              </button>
                            </div>
                          </li>
                        </ul>
                      </dd>
                    </div>
                    <div class="mt-6">
                      <div class="flex mt-2">
                        <span class="flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full border-2 border-dashed border-gray-300 text-gray-400">
                          <svg class="h-5 w-5 text-pink-400" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                          </svg>
                        </span>
                        <label for="add-new-Threat" class="ml-2 flex-1 cursor-pointer group flex items-center
                          rounded-md bg-white">
                          <textarea v-model="newThreatTitle" rows="1" id="add-new-Threat" name="add-new-Threat" type="text" 
                          class="flex w-full rounded-md border-gray-300 shadow-sm focus:border-pink-400 focus:ring-pink-400 sm:text-sm"
                              placeholder="Risiko hinzufügen"></textarea>
                        </label>
                        <button @click="addThreat()" class="ml-2 flex flex-shrink-0 h-9 w-9 items-center justify-center rounded-full text-white bg-pink-500 border border-transparent
                        shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 flex-shrink-0">
                            <path fill-rule="evenodd" d="M10 17a.75.75 0 01-.75-.75V5.612L5.29 9.77a.75.75 0 01-1.08-1.04l5.25-5.5a.75.75 0 011.08 0l5.25 5.5a.75.75 0 11-1.08 1.04l-3.96-4.158V16.25A.75.75 0 0110 17z" clip-rule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Modal buttons -->
                <div class="mt-10 sm:flex sm:flex-row-reverse">
                  <button type="button" class="inline-flex w-full justify-center rounded-md border border-transparent 
                  px-4 py-2 text-base font-medium text-white shadow-sm 
                  bg-pink-500 hover:bg-pink-600 
                  focus:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-offset-2 
                  focus:ring-pink-500
                  sm:ml-3 sm:w-auto sm:text-sm" 
                  @click="saveThreats()">Speichern</button>
                  <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 
                  bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:text-gray-500 focus:outline-none 
                  focus:ring-2 focus:ring-pink-500 focus:ring-offset-2 sm:mt-0 sm:w-auto sm:text-sm" 
                  @click="isOpenThreatsCancelModal = true;">Abbrechen</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Threats Delete Threats Modal -->
    <TransitionRoot as="template" :show="isOpenThreatsDeleteAlert">
      <Dialog as="div" class="relative z-20">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm transition-opacity" />
        </TransitionChild>
        <div class="fixed inset-0 z-20 overflow-y-auto">
          <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
              <DialogPanel class="relative transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div class="sm:flex sm:items-start">
                  <div class="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Risiko entfernen</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-900">{{threatToDelete.title}}</p>
                    </div>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500/80">Möchten Sie dieses Risiko wirklich entfernen? Änderungen können rückgängig gemacht werden in dem Sie die Bearbeitung ohne zu Speichern beenden.</p>
                    </div>
                  </div>
                </div>
                <div class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse">
                  <button type="button" 
                  class="inline-flex w-full justify-center rounded-md border border-transparent bg-red-500 px-4 py-2 text-base 
                  font-medium text-white shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="deleteThreat(threatToDeleteIndex)">Entfernen</button>
                  <button type="button" 
                    class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                    font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 
                    focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenThreatsDeleteAlert = false;" ref="cancelButtonRef">
                    Abbrechen
                  </button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- Threats Cancel Modal -->
    <TransitionRoot as="template" :show="isOpenThreatsCancelModal">
      <Dialog as="div" class="relative z-10" @close="isOpenThreatsCancelModal = false">
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
                  focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm" @click="cancelThreatsEditing()">Ja, abbrechen</button>
                  <button type="button" 
                  class="mt-3 inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base 
                  font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-500 
                  focus:ring-offset-2 sm:ml-3 sm:mt-0 sm:w-auto sm:text-sm" @click="isOpenThreatsCancelModal = false;" ref="cancelButtonRef">Zurück</button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- "Develop" Modal -->
    <TransitionRoot as="template" :show="isOpenDevelopModal">
      <Dialog as="div" class="relative z-10">
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
                  @click="isOpenCancelEditingModal = true;">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="flex justify-center">
                    <div class="-mr-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100">
                      <svg class="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                      </svg>
                    </div>
                    <div class="-ml-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/30">
                      <svg class="h-6 w-6 text-lime-500"  fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    </div>
                  </div>
                  
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Strategie "Ausbauen" bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Welche Stärken passen zu welchen Chancen?
                        Wie können Stärken dazu beitragen, die Chancen (besser) zu nutzen?
                        Welche Geschäftsfelder oder Produktbereiche kann das Unternehmen erweitern?</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="currentSituationDevelop" class="block text-sm font-medium text-gray-900">Beschreibung der aktuellen Lage</label>
                    <div class="mt-1">
                      <textarea id="editCurrentSituationDevelop" v-model="newCurrentSituationDevelop"
                      name="currentSituationDevelop" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="currentSituationDevelopPlaceholder"></textarea>
                    </div>
                  </div>
                  <div class="mt-6">
                    <label for="initiativesDevelop" class="block text-sm font-medium text-gray-900">Beschreibung der Maßnahmen</label>
                    <div class="mt-1">
                      <textarea id="editInitiativesDevelop" v-model="newInitiativeDevelop"
                      name="initiativesDevelop" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="initiativesDevelopPlaceholder"></textarea>
                    </div>
                  </div>
                </div>
                <!-- Modal buttons -->
                <div class="mt-10 sm:flex sm:flex-row-reverse">
                  <PrimaryButton @click="saveDevelopStrategy()">Speichern</PrimaryButton>
                  <SecondaryButton @click="isOpenCancelEditingModal = true;">Abbrechen</SecondaryButton>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- "CatchUp" Modal -->
    <TransitionRoot as="template" :show="isOpenCatchUpModal">
      <Dialog as="div" class="relative z-10">
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
                  @click="isOpenCancelEditingModal = true;">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="flex justify-center">
                    <div class="-mr-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-amber-200/80">
                      <svg class="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                      </svg>
                    </div>
                    <div class="-ml-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-lime-400/30">
                      <svg class="h-6 w-6 text-lime-500"  fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                    </div>
                  </div>
                  
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Strategie "Aufholen" bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">In welchen Geschäftsfeldern oder Märkten gibt es Aufholbedarf? Welche Schwächen müssen beseitigt werden? Wodurch lassen sich Schwächen ausgleichen? Welche Chancen stecken in einer Schwäche?</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="currentSituationCatchUp" class="block text-sm font-medium text-gray-900">Beschreibung der aktuellen Lage</label>
                    <div class="mt-1">
                      <textarea id="editCurrentSituationCatchUp" v-model="newCurrentSituationCatchUp"
                      name="currentSituationCatchUp" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="currentSituationCatchUpPlaceholder"></textarea>
                    </div>
                  </div>
                  <div class="mt-6">
                    <label for="initiativesCatchUp" class="block text-sm font-medium text-gray-900">Beschreibung der Maßnahmen</label>
                    <div class="mt-1">
                      <textarea id="editInitiativesCatchUp" v-model="newInitiativeCatchUp"
                      name="initiativesCatchUp" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="initiativesCatchUpPlaceholder"></textarea>
                    </div>
                  </div>
                </div>
                <!-- Modal buttons -->
                <div class="mt-10 sm:flex sm:flex-row-reverse">
                  <PrimaryButton @click="saveCatchUpStrategy()">Speichern</PrimaryButton>
                  <SecondaryButton @click="isOpenCancelEditingModal = true;">Abbrechen</SecondaryButton>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- "Hedge" Modal -->
    <TransitionRoot as="template" :show="isOpenHedgeModal">
      <Dialog as="div" class="relative z-10">
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
                  @click="isOpenCancelEditingModal = true;">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="flex justify-center">
                    <div class="-mr-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                      <svg class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div class="-ml-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-cyan-300/30">
                      <svg class="h-6 w-6 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                      </svg>
                    </div>
                  </div>
                  
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Strategie "Absichern" bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Welchen Risiken kann das Unternehmen mit welchen Stärken begegnen?
                        Wie können Stärken den Eintritt bestimmter Risiken abwenden?
                        In welchen technischen oder organisatorischen Bereichen muss sich das Unternehmen absichern?</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="currentSituationHedge" class="block text-sm font-medium text-gray-900">Beschreibung der aktuellen Lage</label>
                    <div class="mt-1">
                      <textarea id="editCurrentSituationHedge" v-model="newCurrentSituationHedge"
                      name="currentSituationHedge" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="currentSituationHedgePlaceholder"></textarea>
                    </div>
                  </div>
                  <div class="mt-6">
                    <label for="initiativesHedge" class="block text-sm font-medium text-gray-900">Beschreibung der Maßnahmen</label>
                    <div class="mt-1">
                      <textarea id="editInitiativesHedge" v-model="newInitiativeHedge"
                      name="initiativesHedge" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="initiativesHedgePlaceholder"></textarea>
                    </div>
                  </div>
                </div>
                <!-- Modal buttons -->
                <div class="mt-10 sm:flex sm:flex-row-reverse">
                  <PrimaryButton @click="saveHedgeStrategy()">Speichern</PrimaryButton>
                  <SecondaryButton @click="isOpenCancelEditingModal = true;">Abbrechen</SecondaryButton>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
    <!-- "Avoid" Modal -->
    <TransitionRoot as="template" :show="isOpenAvoidModal">
      <Dialog as="div" class="relative z-10">
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
                  @click="isOpenCancelEditingModal = true;">
                    <span class="sr-only">Close</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <div>
                  <div class="flex justify-center">
                    <div class="-mr-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-pink-100">
                      <svg class="h-6 w-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                      </svg>
                    </div>
                    <div class="-ml-1.5 flex h-12 w-12 items-center justify-center rounded-full bg-amber-400/30">
                      <svg class="h-6 w-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                      </svg>
                    </div>
                  </div>
                  
                  <div class="mt-3 text-center sm:mt-5">
                    <DialogTitle as="h3" class="text-lg font-medium leading-6 text-gray-900">Strategie "Vermeiden" bearbeiten</DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500">Wo treffen Schwächen auf Risiken? Welche Gefahren erwachsen dadurch dem Unternehmen? Wie kann das Unternehmen dennoch vor Schaden geschützt werden? Welche Aktivitäten sollte das Unternehmen vermeiden oder nicht mehr ausüben?</p> 
                    </div>
                  </div>
                </div>
                <!-- Modal content -->
                <div>
                  <div class="mt-6">
                    <label for="currentSituationAvoid" class="block text-sm font-medium text-gray-900">Beschreibung der aktuellen Lage</label>
                    <div class="mt-1">
                      <textarea id="editCurrentSituationAvoid" v-model="newCurrentSituationAvoid"
                      name="currentSituationAvoid" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="currentSituationAvoidPlaceholder"></textarea>
                    </div>
                  </div>
                  <div class="mt-6">
                    <label for="initiativesAvoid" class="block text-sm font-medium text-gray-900">Beschreibung der Maßnahmen</label>
                    <div class="mt-1">
                      <textarea id="editInitiativesAvoid" v-model="newInitiativeAvoid"
                      name="initiativesHedge" 
                      rows="4" 
                      class="block w-full rounded-md border-gray-300 shadow-sm focus:border-cyan-500 focus:ring-cyan  -500 sm:text-sm"
                      :placeholder="initiativesAvoidPlaceholder"></textarea>
                    </div>
                  </div>
                </div>
                <!-- Modal buttons -->
                <div class="mt-10 sm:flex sm:flex-row-reverse">
                  <PrimaryButton @click="saveAvoidStrategy()">Speichern</PrimaryButton>
                  <SecondaryButton @click="isOpenCancelEditingModal = true;">Abbrechen</SecondaryButton>
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
      <div class="max-w-3xl mx-auto md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-8xl">
        <div class="flex items-start space-x-5">
          <CompanyLogo></CompanyLogo>
          <div>
            <h1 class="text-2xl font-semibold text-gray-900">SWOT Analyse</h1>
            <p class="text-sm font-medium text-gray-500">
              Die SWOT-Aanalyse ist eine Methode zur Formulierung der Unternehmensstrategie oder der Entwicklung von Businessplänen. Sie dient als Grundlage zur Festlegung der 
              Strategie und Beschreibt Strärken und Schwächen des Unternehmens sowie Chancen und Risiken im Umfeld. Die Ergebnisse sollen dem Management dabei helfen Ressourcen und 
              Budgets richtig einzusetzen, Potenziale zu nutzen und Gefahren zu erkennen um die zukünftige Wettbewerbsfähigkeit des Unternehmens zu stärken.
            </p>
          </div>
        </div>
      </div>
      <!-- Analysis Section -->
      <section class="mt-10">
        <!-- Section Heading -->
        <div class="pb-8">
          <h3 class="text-xl font-medium leading-6 text-gray-900">Analyse</h3>
          <p class="mt-2 max-w-4xl text-sm text-gray-500">Im ersten Schritt der SWOT Analyse werden Informationen recherchiert die den aktuellen Zustand im Unternehmen aus interner Sicht (Stärken & Schwächen)
            und externer Sicht (Chancen & Risiken) beschreiben. 
          </p>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Strengths -->
          <div class="overflow-hidden bg-white rounded-lg">
            <!-- Wrapper -->
            <div class="h-full flex flex-col justify-between">
              <!-- Header -->
              <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div class="">
                  <div class="group relative flex items-start space-x-3">
                    <div class="flex-shrink-0">
                      <span class="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-400">
                        <svg class="h-6 w-6 text-white" x-description="Heroicon name: outline/megaphone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"></path>
                        </svg>
                      </span>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h2 class="text-base font-medium text-gray-900">
                          Stärken
                      </h2>
                      <p class="text-sm text-gray-500">Merkmale die im Wettbewerb einen Vorteil darstellen oder die das Unternehmen besser beherrscht als die Konkurrenz.</p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="px-4 py-5 sm:px-6 flex-grow">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <!-- Empty state -->
                    <div v-if="isEmptyStrengths" class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400/50" x-description="Heroicon name: outline/megaphone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"></path>
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Keine Stärken definiert.</h3>
                      <p class="mt-1 text-sm text-gray-500">Fangen Sie an, indem Sie eine neue Stärke hinzufügen.</p>
                      <div class="mt-4">
                        <button @click="openStrengthsModal()" type="button" class="inline-flex items-center rounded-md border border-transparent bg-cyan-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2">
                          <svg class="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                          </svg>
                          Stärken hinzufügen
                        </button>
                      </div>
                    </div>
                    <!-- List -->
                    <ul v-else role="list" class="space-y-7 mt-1">
                      <li v-for="strength in strengths" :key="strength.title" class="flex">
                        <div class="flex items-start w-full space-x-3">
                          <div class="flex -mt-0.5">
                            <svg class="w-6 h-6 text-cyan-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" >
                              <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                            </svg>
                          </div>
                          <div class="text-sm font-base text-gray-500 flex-1">{{strength.title}}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </dl>
              </div>
              <!-- Footer -->
              <div class="px-4 py-4 sm:px-6">
                <div class="flex w-full items-center">
                  <div class="flex flex-1 flex-wrap">
                    <p class="flex text-sm text-gray-400 truncate">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span v-if="strengthsLastUpdated == null">
                        Never updated
                      </span>
                      <span v-else>
                      Last updated on
                      {{strengthsLastUpdated.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}}
                      </span>
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <div>
                      <div class="flex-shrink-0">
                        <button @click="openStrengthsModal()" id="edit-strengths" type="button" aria-haspopup="true" aria-expanded="false" 
                          class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full 
                          bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <!-- Heroicon name: solid/dots-vertical -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Weaknesses -->
          <div class="overflow-hidden bg-white rounded-lg">
            <!-- Wrapper -->
            <div class="h-full flex flex-col justify-between">
              <!-- Header -->
              <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div class="">
                  <div class="group relative flex items-start space-x-3">
                    <div class="flex-shrink-0">
                      <span class="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-amber-400">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                      </span>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h2 class="text-base font-medium text-gray-900">
                          Schwächen
                      </h2>
                      <p class="text-sm text-gray-500">Merkmale die im Wettbewerb ein Nachteil sind und sich negativ auf den Unternehmenserfolg auswirken können.</p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="px-4 py-5 sm:px-6 flex-grow">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <!-- Empty state -->
                    <div v-if="isEmptyWeaknesses" class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Keine Schwächen definiert.</h3>
                      <p class="mt-1 text-sm text-gray-500">Fangen Sie an, indem Sie Schwächen hinzufügen.</p>
                      <div class="mt-4">
                        <button @click="openWeaknessesModal()" type="button" class="inline-flex items-center rounded-md border border-transparent bg-amber-400 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-amber-500 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2">
                          <svg class="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                          </svg>
                          Schwächen hinzufügen
                        </button>
                      </div>
                    </div>
                    <!-- List -->
                    <ul v-else role="list" class="space-y-7 mt-1">
                      <li v-for="weakness in weaknesses" :key="weakness.title" class="flex">
                        <div class="flex items-start w-full space-x-3">
                          <div class="flex -mt-0.5">
                            <svg class="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                            </svg>
                          </div>
                          <div class="text-sm font-base text-gray-500 flex-1">{{weakness.title}}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </dl>
              </div>
              <!-- Footer -->
              <div class="px-4 py-4 sm:px-6">
                <div class="flex w-full items-center">
                  <div class="flex flex-1 flex-wrap">
                    <p class="flex text-sm text-gray-400 truncate">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span v-if="weaknessesLastUpdated == null">
                        Never updated
                      </span>
                      <span v-else>
                        Last updated on
                        {{weaknessesLastUpdated.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}}
                      </span>
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <div>
                      <div class="flex-shrink-0">
                        <button @click="openWeaknessesModal()" id="edit-strengths" type="button" aria-haspopup="true" aria-expanded="false" 
                          class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full 
                          bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <!-- Heroicon name: solid/dots-vertical -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Opportunites -->
          <div class="overflow-hidden bg-white rounded-lg">
            <!-- Wrapper -->
            <div class="h-full flex flex-col justify-between">
              <!-- Header -->
              <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div class="">
                  <div class="group relative flex items-start space-x-3">
                    <div class="flex-shrink-0">
                      <span class="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-lime-500">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                      </span>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h2 class="text-base font-medium text-gray-900">
                          Chancen
                      </h2>
                      <p class="text-sm text-gray-500">Einflussfaktoren und Entwicklungen im Umfeld oder Markt, die für das Unternehmen ein Vorteil sein können oder aus denen Potenziale entstehen können.</p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="px-4 py-5 sm:px-6 flex-grow">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <!-- Empty state -->
                    <div v-if="isEmptyOpportunities" class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Keine Chancen definiert.</h3>
                      <p class="mt-1 text-sm text-gray-500">Fangen Sie an, indem Sie Chancen hinzufügen.</p>
                      <div class="mt-4">
                        <button @click="openOpportunitiesModal()" type="button" class="inline-flex items-center rounded-md border border-transparent bg-lime-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-lime-600 focus:outline-none focus:ring-2 focus:ring-lime-500 focus:ring-offset-2">
                          <svg class="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                          </svg>
                          Chancen hinzufügen
                        </button>
                      </div>
                    </div>
                    <!-- List -->
                    <ul v-else role="list" class="space-y-7 mt-1">
                      <li v-for="opportunity in opportunities" :key="opportunity.title" class="flex">
                        <div class="flex items-start w-full space-x-3">
                          <div class="flex -mt-0.5">
                            <svg class="w-6 h-6 text-lime-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                            </svg>
                          </div>
                          <div class="text-sm font-base text-gray-500 flex-1">{{opportunity.title}}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </dl>
              </div>
              <!-- Footer -->
              <div class="px-4 py-4 sm:px-6">
                <div class="flex w-full items-center">
                  <div class="flex flex-1 flex-wrap">
                    <p class="flex text-sm text-gray-400 truncate">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span v-if="opportunitiesLastUpdated == null">
                        Never updated
                      </span>
                      <span v-else>
                      Last updated on
                      {{opportunitiesLastUpdated.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}}
                      </span>
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <div>
                      <div class="flex-shrink-0">
                        <button @click="openOpportunitiesModal()" id="edit-strengths" type="button" aria-haspopup="true" aria-expanded="false" 
                          class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full 
                          bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <!-- Heroicon name: solid/dots-vertical -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Threats -->
          <div class="overflow-hidden bg-white rounded-lg">
            <!-- Wrapper -->
            <div class="h-full flex flex-col justify-between">
              <!-- Header -->
              <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div class="">
                  <div class="group relative flex items-start space-x-3">
                    <div class="flex-shrink-0">
                      <span class="inline-flex items-center justify-center h-12 w-12 rounded-lg bg-pink-500">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                      </span>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h2 class="text-base font-medium text-gray-900">
                          Risiken
                      </h2>
                      <p class="text-sm text-gray-500">Faktoren und Entwicklungen im Umfeld, aus denen Nachteile oder Gefahren entstehen können, die das Unternehmen schwächen oder zu Verlusten führen können.</p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="px-4 py-5 sm:px-6 flex-grow">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <!-- Empty state -->
                    <div v-if="isEmptyThreats" class="text-center">
                      <svg class="mx-auto h-12 w-12 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                      </svg>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Keine Risiken definiert.</h3>
                      <p class="mt-1 text-sm text-gray-500">Fangen Sie an, indem Sie neue Risiken hinzufügen.</p>
                      <div class="mt-4">
                        <button @click="openThreatsModal()" type="button" class="inline-flex items-center rounded-md border border-transparent bg-pink-500 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-offset-2">
                          <svg class="-ml-1 mr-2 h-5 w-5" x-description="Heroicon name: mini/plus" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z"></path>
                          </svg>
                          Risiken hinzufügen
                        </button>
                      </div>
                    </div>
                    <!-- List -->
                    <ul v-else role="list" class="space-y-7 mt-1">
                      <li v-for="threat in threats" :key="threat.title" class="flex">
                        <div class="flex items-start w-full space-x-3">
                          <div class="flex -mt-0.5">
                            
                            <svg class="w-6 h-6 text-pink-500" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                            </svg>
                          </div>
                          <div class="text-sm font-base text-gray-500 flex-1">{{threat.title}}</div>
                        </div>
                      </li>
                    </ul>
                  </div>
                </dl>
              </div>
              <!-- Footer -->
              <div class="px-4 py-4 sm:px-6">
                <div class="flex w-full items-center">
                  <div class="flex flex-1 flex-wrap">
                    <p class="flex text-sm text-gray-400 truncate">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span v-if="threatsLastUpdated == null">
                        Never updated
                      </span>
                      <span v-else>
                      Last updated on
                      {{threatsLastUpdated.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}}
                      </span>
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <div>
                      <div class="flex-shrink-0">
                        <button @click="openThreatsModal()" id="edit-strengths" type="button" aria-haspopup="true" aria-expanded="false" 
                          class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full 
                          bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <!-- Heroicon name: solid/dots-vertical -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Strategy Section -->
      <section class="mt-10">
        <!-- Section Heading -->
        <div class="pb-8">
          <h3 class="text-xl font-medium leading-6 text-gray-900">Zusammenhänge & Strategieplanung</h3>
          <p class="mt-2 max-w-4xl text-sm text-gray-500">Zusammenhänge zwischen Stärken und Schwächen einerseits und zwischen Chancen und Risiken andererseits sichtbar. Je nachdem, welche Merkmale des Unternehmens mit ausgewählten Merkmalen des Umfelds in Verbindung gebracht werden, lassen sich für die Strategieplanung allgemeine Stoßrichtungen ableiten und in den vier Feldern (Ausbauen, Aufholen, Absichern, Vermeiden) der SWOT-Matrix darstellen.
            
          </p>
        </div>
        <div class="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <!-- Strengths & Opportunities-->
          <div class="overflow-hidden bg-white rounded-lg">
            <!-- Wrapper -->
            <div class="h-full flex flex-col justify-between">
              <!-- Header -->
              <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div class="">
                  <div class="group relative flex items-start space-x-3">

                    <div class="flex-shrink-0 relative h-20 w-20">
                      <span class="absolute top-0 left-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-400">
                        <svg class="h-6 w-6 text-white" x-description="Heroicon name: outline/megaphone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"></path>
                        </svg>
                      </span>
                      
                       <span class="shadow-sm border border-lime-300 absolute bottom-0 right-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-lime-500/70 backdrop-blur-sm">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                      </span>
                    </div>
                    
                    <div class="min-w-0 flex-1">
                      <h2 class="text-base font-medium text-gray-900">
                          Stärken & Chancen
                      </h2>
                      <p class="text-sm text-gray-500">
                        Welche Stärken passen zu welchen Chancen?
                        Wie können Stärken dazu beitragen, die Chancen (besser) zu nutzen?
                        Welche Geschäftsfelder oder Produktbereiche kann das Unternehmen erweitern?
                      </p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="px-4 py-5 sm:px-6 flex-grow">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <div class="text-center">
                      <div class="flex justify-center items-center">
                        <svg class="h-10 w-10 text-gray-400/50" x-description="Heroicon name: outline/megaphone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"></path>
                        </svg>
                        <svg class="h-6 w-6 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        <svg class="h-10 w-10 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                      </div>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Strategie "Ausbauen"</h3>
                      <p class="mt-1 text-sm text-gray-500">Strategie um Stärken und Chancen besser zu nutzen.</p>
                    </div>
                     <div class="sm:col-span-2 mt-4">
                        <dt class="text-sm font-medium text-gray-900">Aktuelle Lage</dt>
                        <dd v-if="currentSituationDevelop == ''" class="mt-1 text-sm text-gray-500">{{currentSituationDevelopPlaceholder}}</dd>
                        <dd v-else class="mt-1 text-sm text-gray-500">{{currentSituationDevelop}}</dd>
                     </div>
                     <div class="sm:col-span-2 mt-4">
                        <dt class="text-sm font-medium text-gray-900">Maßnahmen</dt>
                        <dd v-if="initiativesDevelop == ''" class="mt-1 text-sm text-gray-500">{{initiativesDevelopPlaceholder}}</dd>
                        <dd v-else class="mt-1 text-sm text-gray-500">{{initiativesDevelop}}</dd>
                     </div>
                  </div>
                </dl>
              </div>
              <!-- Footer -->
              <div class="px-4 py-4 sm:px-6">
                <div class="flex w-full items-center">
                  <div class="flex flex-1 flex-wrap">
                    <p class="flex text-sm text-gray-400 truncate">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span v-if="developLastUpdated == null">
                        Never updated
                      </span>
                      <span v-else>
                      Last updated on
                      {{developLastUpdated.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}}
                      </span>
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <div>
                      <div class="flex-shrink-0">
                        <button @click="openDevelopModal()" id="edit-strengths" type="button" aria-haspopup="true" aria-expanded="false" 
                          class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full 
                          bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <!-- Heroicon name: solid/dots-vertical -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Weaknesses & Opportunites-->
          <div class="overflow-hidden bg-white rounded-lg">
            <!-- Wrapper -->
            <div class="h-full flex flex-col justify-between">
              <!-- Header -->
              <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div class="">
                  <div class="group relative flex items-start space-x-3">
                    <div class="flex-shrink-0 relative h-20 w-20">
                      <span class="absolute top-0 left-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-amber-400">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                      </span>
                      <span class="shadow-sm border border-lime-200 absolute bottom-0 right-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-lime-500/70 backdrop-blur-sm">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                      </span>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h2 class="text-base font-medium text-gray-900">
                          Schwächen & Chancen
                      </h2>
                      <p class="text-sm text-gray-500">In welchen Geschäftsfeldern oder Märkten gibt es Aufholbedarf?
                        Welche Schwächen müssen beseitigt werden?
                        Wodurch lassen sich Schwächen ausgleichen?
                        Welche Chancen stecken in einer Schwäche?
                      </p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="px-4 py-5 sm:px-6 flex-grow">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <div class="text-center">
                      <div class="flex justify-center items-center">
                        <svg class="h-10 w-10 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                        <svg class="h-6 w-6 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        <svg class="h-10 w-10 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12.06 12.06 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
                        </svg>
                      </div>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Strategie "Aufholen"</h3>
                      <p class="mt-1 text-sm text-gray-500">Strategie um Schwächen aufzuholen und daraus Chancen zu erkennen.</p>
                    </div>
                     <div class="sm:col-span-2 mt-4">
                        <dt class="text-sm font-medium text-gray-900">Aktuelle Lage</dt>
                        <dd v-if="currentSituationCatchUp == ''" class="mt-1 text-sm text-gray-500">{{currentSituationCatchUpPlaceholder}}</dd>
                        <dd v-else class="mt-1 text-sm text-gray-500">{{currentSituationCatchUp}}</dd>
                     </div>
                     <div class="sm:col-span-2 mt-4">
                        <dt class="text-sm font-medium text-gray-900">Maßnahmen</dt>
                        <dd v-if="initiativesCatchUp == ''" class="mt-1 text-sm text-gray-500">{{initiativesCatchUpPlaceholder}}</dd>
                        <dd v-else class="mt-1 text-sm text-gray-500">{{initiativesCatchUp}}</dd>
                     </div>
                  </div>
                </dl>
              </div>
              <!-- Footer -->
              <div class="px-4 py-4 sm:px-6">
                <div class="flex w-full items-center">
                  <div class="flex flex-1 flex-wrap">
                    <p class="flex text-sm text-gray-400 truncate">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span v-if="catchUpLastUpdated == null">
                        Never updated
                      </span>
                      <span v-else>
                        Last updated on
                        {{catchUpLastUpdated.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}}
                      </span>
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <div>
                      <div class="flex-shrink-0">
                        <button @click="openCatchUpModal()" id="edit-strengths" type="button" aria-haspopup="true" aria-expanded="false" 
                          class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full 
                          bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <!-- Heroicon name: solid/dots-vertical -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Risks & Strengths -->
          <div class="overflow-hidden bg-white rounded-lg">
            <!-- Wrapper -->
            <div class="h-full flex flex-col justify-between">
              <!-- Header -->
              <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div class="">
                  <div class="group relative flex items-start space-x-3">
                    <div class="flex-shrink-0 relative h-20 w-20">
                      <span class="absolute top-0 left-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-pink-500">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                      </span>
                      <span class="shadow-sm border border-cyan-100 absolute bottom-0 right-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-cyan-400/80 backdrop-blur-sm">
                        <svg class="h-6 w-6 text-white" x-description="Heroicon name: outline/megaphone" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46"></path>
                        </svg>
                      </span>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h2 class="text-base font-medium text-gray-900">
                          Risiken & Stärken
                      </h2>
                      <p class="text-sm text-gray-500">
                          Welchen Risiken kann das Unternehmen mit welchen Stärken begegnen?
                          Wie können Stärken den Eintritt bestimmter Risiken abwenden?
                          In welchen technischen oder organisatorischen Bereichen muss sich das Unternehmen absichern?
                      </p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="px-4 py-5 sm:px-6 flex-grow">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <div class="text-center">
                      <div class="flex justify-center items-center">
                        <svg class="h-10 w-10 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                        <svg class="h-6 w-6 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        <svg class="h-10 w-10 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
                        </svg>
                      </div>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Strategie "Absichern"</h3>
                      <p class="mt-1 text-sm text-gray-500">Strategie um den Eintritt von Risiken mit Stärken abzuwenden.</p>
                    </div>
                     <div class="sm:col-span-2 mt-4">
                        <dt class="text-sm font-medium text-gray-900">Aktuelle Lage</dt>
                        <dd v-if="currentSituationHedge == ''" class="mt-1 text-sm text-gray-500">{{currentSituationHedgePlaceholder}}</dd>
                        <dd v-else class="mt-1 text-sm text-gray-500">{{currentSituationHedge}}</dd>
                     </div>
                     <div class="sm:col-span-2 mt-4">
                        <dt class="text-sm font-medium text-gray-900">Maßnahmen</dt>
                        <dd v-if="initiativesHedge == ''" class="mt-1 text-sm text-gray-500">{{initiativesHedgePlaceholder}}</dd>
                        <dd v-else class="mt-1 text-sm text-gray-500">{{initiativesHedge}}</dd>
                     </div>
                  </div>
                </dl>
              </div>
              <!-- Footer -->
              <div class="px-4 py-4 sm:px-6">
                <div class="flex w-full items-center">
                  <div class="flex flex-1 flex-wrap">
                    <p class="flex text-sm text-gray-400 truncate">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span v-if="hedgeLastUpdated == null">
                        Never updated
                      </span>
                      <span v-else>
                      Last updated on
                      {{hedgeLastUpdated.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}}
                      </span>
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <div>
                      <div class="flex-shrink-0">
                        <button @click="openHedgeModal()" id="edit-strengths" type="button" aria-haspopup="true" aria-expanded="false" 
                          class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full 
                          bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <!-- Heroicon name: solid/dots-vertical -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- Risks & Weaknesses -->
          <div class="overflow-hidden bg-white rounded-lg">
            <!-- Wrapper -->
            <div class="h-full flex flex-col justify-between">
              <!-- Header -->
              <div class="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
                <div class="">
                  <div class="group relative flex items-start space-x-3">
                    <div class="flex-shrink-0 relative h-20 w-20">
                      <span class="absolute top-0 left-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-pink-500">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                      </span>
                      <span class="shadow-sm border border-amber-200 absolute bottom-0 right-0 inline-flex items-center justify-center h-12 w-12 rounded-lg bg-amber-400/70 backdrop-blur-sm">
                        <svg class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                      </span>
                    </div>
                    <div class="min-w-0 flex-1">
                      <h2 class="text-base font-medium text-gray-900">
                          Risiken & Schwächen
                      </h2>
                      <p class="text-sm text-gray-500">Wo treffen Schwächen auf Risiken?
                        Welche Gefahren erwachsen dadurch dem Unternehmen?
                        Wie kann das Unternehmen dennoch vor Schaden geschützt werden?
                        Welche Aktivitäten sollte das Unternehmen vermeiden oder nicht mehr ausüben?
                      </p>
                    </div>
                    <div class="flex-shrink-0 self-center">
                    </div>
                  </div>
                </div>
              </div>
              <!-- Content -->
              <div class="px-4 py-5 sm:px-6 flex-grow">
                <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                  <div class="sm:col-span-2">
                    <div class="text-center">
                      <div class="flex justify-center items-center">
                        <svg class="h-10 w-10 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v3.75m0-10.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.75c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.75h-.152c-3.196 0-6.1-1.249-8.25-3.286zm0 13.036h.008v.008H12v-.008z" />
                        </svg>
                        <svg class="h-6 w-6 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                        </svg>
                        <svg class="h-10 w-10 text-gray-400/50" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 6L9 12.75l4.286-4.286a11.948 11.948 0 014.306 6.43l.776 2.898m0 0l3.182-5.511m-3.182 5.51l-5.511-3.181" />
                        </svg>
                      </div>
                      <h3 class="mt-2 text-sm font-medium text-gray-900">Strategie "Vermeiden"</h3>
                      <p class="mt-1 text-sm text-gray-500">Strategie um Aktivitäten und potenzielle Gefahren zu vermeiden.</p>
                    </div>
                     <div class="sm:col-span-2 mt-4">
                        <dt class="text-sm font-medium text-gray-900">Aktuelle Lage</dt>
                        <dd v-if="currentSituationAvoid == ''" class="mt-1 text-sm text-gray-500">{{currentSituationAvoidPlaceholder}}</dd>
                        <dd v-else class="mt-1 text-sm text-gray-500">{{currentSituationAvoid}}</dd>
                     </div>
                     <div class="sm:col-span-2 mt-4">
                        <dt class="text-sm font-medium text-gray-900">Maßnahmen</dt>
                        <dd v-if="initiativesAvoid == ''" class="mt-1 text-sm text-gray-500">{{initiativesAvoidPlaceholder}}</dd>
                        <dd v-else class="mt-1 text-sm text-gray-500">{{initiativesAvoid}}</dd>
                     </div>
                  </div>
                </dl>
              </div>
              <!-- Footer -->
              <div class="px-4 py-4 sm:px-6">
                <div class="flex w-full items-center">
                  <div class="flex flex-1 flex-wrap">
                    <p class="flex text-sm text-gray-400 truncate">
                      <span class="mr-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
                          <path fill-rule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clip-rule="evenodd" />
                        </svg>
                      </span>
                      <span v-if="avoidLastUpdated == null">
                        Never updated
                      </span>
                      <span v-else>
                      Last updated on
                      {{avoidLastUpdated.toLocaleString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}}
                      </span>
                    </p>
                  </div>
                  <div class="flex space-x-2">
                    <div>
                      <div class="flex-shrink-0">
                        <button @click="openAvoidModal()" id="edit-strengths" type="button" aria-haspopup="true" aria-expanded="false" 
                          class="w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full 
                          bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500">
                          <!-- Heroicon name: solid/dots-vertical -->
                          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
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
