<script>
import CompanyLogo from '../companyLogo.json'

export default {
    data () {
      return {
        logoPath: CompanyLogo.logo
    }
  },
  computed: {
    logo() {
      const basePath = process.env.NODE_ENV === 'production' ? '/aviation-reporting' : '';
      return basePath + this.logoPath;
    }
  }
}
</script>

<template>
  <div class="flex-shrink-0">
    <div class="relative">
      <img class="h-16 w-16 rounded-full" :src="logo" alt="Company Logo" />
      <span class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true" />
    </div>
  </div>
</template>