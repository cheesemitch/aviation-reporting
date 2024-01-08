<!-- This example requires Tailwind CSS v2.0+ -->

  <!-- This example requires Tailwind CSS v2.0+ -->
<template>

  <h3 class="text-lg leading-6 font-medium text-gray-100">Dividends </h3>
  <div class="mt-5 max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 bg-gray-800/80 rounded-lg backdrop-blur-sm shadow">
    <div class="text-center">
      <svg class="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />

      </svg>
      <h3 class="mt-2 text-sm font-medium text-gray-200">Not connected</h3>
      <p class="mt-1 text-sm text-gray-400">Start staking by connecting your wallet.</p>
      <div class="mt-6">
        <connectWalletButton />

      </div>
    </div>
  </div>
</template>



<script setup>
import connectWalletButton from './connectWalletButton.vue'
import { ShareIcon } from '@heroicons/vue/solid'

</script>
