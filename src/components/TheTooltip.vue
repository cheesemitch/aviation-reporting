<script>
  export default {
    data() {
      return {
        showTooltip: false,
      }
    },
    props: {
      show: {type: Boolean},
      text: {type: String}
    } 
  }
</script>
<template>
  <div>
    <transition 
      enter-active-class="transition ease-out duration-100" 
      enter-from-class="transform opacity-0 scale-95" 
      enter-to-class="transform opacity-100 scale-100" 
      leave-active-class="transition ease-in duration-75" 
      leave-from-class="transform opacity-100 scale-100" 
      leave-to-class="transform opacity-0 scale-95">
      <div v-show="show" class="origin-top absolute z-10 left-0 mt-2 w-full rounded-md shadow-lg px-6 pt-4 pb-5 bg-gray-900/80 dark:bg-gray-700/80 backdrop-blur-sm ring-1 ring-black ring-opacity-5">
        <p class="text-sm font-medium text-gray-200 dark:text-gray-300">
          {{text}}
        </p>
      </div>
    </transition>
  </div>
</template>