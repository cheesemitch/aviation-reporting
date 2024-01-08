<!-- This example requires Tailwind CSS v2.0+ -->
<template>

  <button type="button" class="inline-flex items-center px-4 py-2 shadow-sm text-sm font-medium rounded-md text-white
  bg-gradient-to-r from-lime-400 to-green-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
    <ShareIcon class="-ml-1 mr-2 h-5 w-5" aria-hidden="true" />
    <span>
      Connect Wallet
    </span>
  </button>

</template>

<script setup>

import {
  ShareIcon,
} from '@heroicons/vue/solid'

</script>
