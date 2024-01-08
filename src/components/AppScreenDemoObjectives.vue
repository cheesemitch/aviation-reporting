<script>
import CompanyObjectiveListItem from '../components/TheCompanyObjectiveListItemDemo.vue'
import ObjectiveColorButtonVue from '../components/TheObjectiveColorButton.vue'
import objectivesData from '/src/companyObjectives.json'
import PrimaryButton from './primaryButton.vue';
export default {
  data() {
    return {
      objectives: objectivesData.objectives
    }
  },
  components: {
    PrimaryButton,
    CompanyObjectiveListItem, ObjectiveColorButtonVue
  }
}
</script>
<template>
  <div>
    <ul role="list" class="divide-y">
      <CompanyObjectiveListItem v-for="objective in objectives" :key="objective.id"
      :objective="objective">
      </CompanyObjectiveListItem>
    </ul>
    <div class="px-3.5 mt-2">
      <PrimaryButton class="w-full">New Objective</PrimaryButton>
    </div>
  </div>
</template>