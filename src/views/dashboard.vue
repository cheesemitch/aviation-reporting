<script>
import chartDemo from '../components/chartDemo.vue';
import CompanyLogo from '../components/TheCompanyLogo.vue'
export default {
  components: {
    chartDemo, CompanyLogo
  }
};
</script>

<template>
  <div class="w-full mx-auto">
    <!-- Page header -->
    <div class="flex items-start space-x-5">
      <CompanyLogo></CompanyLogo>
      <div>
        <h1 class="pt-1 text-2xl font-semibold text-gray-900 dark:text-gray-100">Flugrouten</h1>
        <p class="text-sm font-semibold sm:font-medium text-gray-500 dark:text-gray-400">
          Übersicht der Flugverbindungen des Flughafen Bremen für das Jahr 2023.</p>
      </div>
    </div>
    <div class="py-4 h-screen">
      <div class="h-5/6">
        <chartDemo class="border rounded-xl bg-white overflow-hidden">

        </chartDemo>
      </div>
     


    </div>
  </div>
</template>
