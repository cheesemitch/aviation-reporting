<script>
import TokenSelection from "./TokenSelection.vue";
export default {
  data () {
    return {
      currentPrice: 2000,
      currentCirculatingSupply: 120251000,
      currentMarketCap: 239769138318,
      maxSupply: 0,
      maxSupplyInfinite: true,
      price: 0,
      circulatingSupply: 0,
      marketCap: 0,
    }
  },
  computed: {
    marketCapSize() {
      return this.marketCap.toString().length || 2;
    },
    formattedPrice() {
      return this.price.toLocaleString('en-US', {
        maximumFractionDigits: 2,
        minimumFractionDigits: 2
      });
    },
  },
  methods: {
    initiateValues () {
      this.price = this.currentPrice;
      this.circulatingSupply = this.currentCirculatingSupply;
      this.marketCap = this.currentMarketCap;
    },
    updateFromMarketCap() {
      if (this.circulatingSupply > 0) {
        this.price = this.marketCap / this.circulatingSupply;
      }
    },
    updateFromPrice() {
      this.marketCap = this.price * this.circulatingSupply;
    },
    updateFromSupply() {
      if (this.circulatingSupply > 0) {
        this.price = this.marketCap / this.circulatingSupply;
      }
    }
  },
  watch: {
    marketCap() {
      console.log("New size:", this.inputWidth);
    },
  },
  mounted() {
    this.initiateValues();
  },
  components: {
    TokenSelection
  }
}
</script>
<template>
  <div class="w-full max-w-md">
    <div class="flex flex-col overflow-hidden rounded-3xl p-6 shadow-2xl bg-white">
      <h3 class="flex items-center text-sm font-semibold text-gray-900">
        <!--
          <svg viewBox="0 0 40 40" aria-hidden="true" class="h-6 w-6 flex-none fill-gray-500">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
          </svg>
        -->
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 flex-none text-cyan-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
        </svg>

        <span class="ml-4 text-cyan-500">Simple Calculator</span>
      </h3>
      <div class="mt-6 pb-2 border-b">
        <div class="flex items-center justify-between pl-0.5">
          <span class="text-sm text-gray-500">
            Asset
          </span>
          <div class="flex items-center">
            <span class="text-sm text-gray-500">Price</span>
            <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-4 h-4 text-gray-400">
              <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
          </div>
        </div>
        <div class="flex w-full justify-between items-center">
          <TokenSelection class="-ml-2"></TokenSelection>
          <p class="relative flex items-baseline gap-2">
            <span class="text-md text-gray-500">$</span>
            <span class="transition duration-300 text-2xl tabular-nums font-semibold tracking-tight text-gray-900 ">
              {{price}}
            </span>
            
          </p>
        </div>  
      </div>
      
      
      <div class="mt-4 pl-0.5">
        <ul role="list" class="-my-2 text-sm text-gray-500">
          <li class="flex py-2 items-center justify-between">
            <div class="flex items-center">
              <label for="marketCap" class="">Market cap</label>
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-4 h-4 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div class="flex">
              <div class="relative rounded-md">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500 sm:text-sm">$</span>
                </div>
                <input type="text" :size="marketCapSize" name="marketCap" id="marketCap" v-model="marketCap" @input="updateFromMarketCap" 
                class="hover:bg-gray-100 flex text-right rounded-md border-0 pl-7 text-sm font-semibold text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset 
                focus:ring-cyan-500"/>    
              </div>
            </div>
          </li>
          <li class="flex py-2 items-center justify-between">
            <div class="flex items-center">
              <span class="">Max. supply</span>
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-4 h-4 text-gray-400">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
            </div>
            <div>
              <span class="text-sm font-semibold text-gray-900 dark:text-gray-100">
                ∞
              </span>
            </div>
          </li>
          <li class="py-2">
            <div>
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <span class="">Circulating supply</span>
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="ml-2 w-4 h-4 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </div>
                <div class="flex border flex-1">
                  <div class="relative rounded-md">
                    <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <span class="text-gray-500 sm:text-sm">ETH</span>
                    </div>
                    <input type="text" name="circulatingSupply" id="circulatingSupply" v-model="circulatingSupply" @input="updateFromSupply" 
                    class="hover:bg-gray-100 flex flex-grow text-right rounded-md border-0 pl-7 text-sm font-semibold text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-inset
                     focus:ring-cyan-500"/>
                  </div>
                </div>
              </div>
              <div class="mt-2">
                <!-- Progress -->
                  <div class="flex items-center gap-x-3 whitespace-nowrap">
                    <div class="flex w-full h-1.5 bg-gray-100 rounded-full" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                      <div class="flex flex-col justify-center rounded-full overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" style="width: 80%"></div>
                      <div class="flex items-center">
                        <div class="h-3 w-0.5 rounded-full -ml-0.5 bg-gray-500"></div>
                      </div>
                     
                    </div>
                    <div class="w-10 text-end">
                      <span class="text-sm text-gray-500 dark:text-white">80%</span>
                    </div>
                  </div>
                <!-- End Progress -->
              </div>

            </div>
            
            
          </li>
          <li>
            <div class="flex justify-center items-center p-4">
                <input class="flex w-full p-2 border border-gray-300" type="text" placeholder="Type here...">
            </div>
          </li>
          
        </ul>
      </div>
      <!--

      <a class="hidden inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6" aria-label="Get started with the Investor plan for [object Object]" href="/register">
        Subscribe
      </a>
    -->
    </div>
  </div>
  
</template>