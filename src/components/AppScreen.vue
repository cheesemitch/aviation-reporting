<script>
</script>
<template>
  <div class="flex flex-col">
    <div class="flex justify-between px-4 pt-4">
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
        <path
          d="M5 6h14M5 18h14M5 12h14"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <div class="flex items-center">
        <img src="/src/assets/agnoscis.svg" class="w-auto h-5" alt=""/>
        <img src="/images/agnoscis-letters-white.svg" class="w-auto h-4 mt-0.5 ml-2" alt=""/>
      </div>
      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6 flex-none">
        <path
          d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
          stroke="#fff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
    <slot></slot>
  </div>
</template>