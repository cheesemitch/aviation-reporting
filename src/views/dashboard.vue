<script>
import chartDemo from '../components/chartDemo.vue';
export default {
  components: {
    chartDemo
  }
};
</script>

<template>
  <div class="w-full mx-auto">
    <h1 class="text-2xl font-semibold text-gray-900">Flight Routes - BRE</h1>
    <div class="py-4 h-screen">
      <div class="h-5/6">
        <chartDemo class=" border rounded-xl bg-white overflow-hidden">

        </chartDemo>
      </div>
     


    </div>
  </div>
</template>
