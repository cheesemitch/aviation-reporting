<script>
import TokenSelection from "./TokenSelection.vue";
export default {
  data () {
    return {
      currentPrice: 14.75,
      currentCirculatingSupply: 556849970,
      maxSupply: 1000000000,
      maxSupplyInfinite: false,
      price: 0,
      circulatingSupply: 0,
      marketCap: 0,
      holdings: 0,
      netWorth: 0,
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
    currentCirculatingSupplyPercentage() {
      return (this.currentCirculatingSupply / this.maxSupply) * 100; // returns a percentage
    },
    currentMarketCap() {
      return this.currentPrice * this.currentCirculatingSupply
    }
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
    },
    updateFromHoldings() {
        this.netWorth = this.currentPrice * this.holdings;
    },
    updateFromNetWorth() {
      if (this.currentPrice > 0) {
        this.holdings = this.netWorth / this.currentPrice;
      }
    },
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
      <h2 class="flex items-center text-sm font-semibold text-gray-900">
        <!--
          <svg viewBox="0 0 40 40" aria-hidden="true" class="h-6 w-6 flex-none fill-gray-500">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
          </svg>
        -->
        <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 flex-none text-cyan-500">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 15.75V18m-7.5-6.75h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V13.5zm0 2.25h.008v.008H8.25v-.008zm0 2.25h.008v.008H8.25V18zm2.498-6.75h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V13.5zm0 2.25h.007v.008h-.007v-.008zm0 2.25h.007v.008h-.007V18zm2.504-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zm0 2.25h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V18zm2.498-6.75h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V13.5zM8.25 6h7.5v2.25h-7.5V6zM12 2.25c-1.892 0-3.758.11-5.593.322C5.307 2.7 4.5 3.65 4.5 4.757V19.5a2.25 2.25 0 002.25 2.25h10.5a2.25 2.25 0 002.25-2.25V4.757c0-1.108-.806-2.057-1.907-2.185A48.507 48.507 0 0012 2.25z" />
        </svg>
        <span class="ml-4 text-cyan-500">Simple Calculator</span>
      </h2>
      <!-- Current valuation -->
      <section class="mt-6">
        <div class="-ml-1 pr-1">
          <div class="flex w-full justify-between items-center">
            <TokenSelection class=""></TokenSelection>
            <div>
              <div class="relative flex items-baseline gap-1 justify-end">
                <span class="text-sm text-gray-500">$</span>
                <span class="transition duration-300 text-md tabular-nums font-semibold tracking-tight text-gray-900 ">
                  {{formattedPrice}}
                </span>
              </div>
            </div>
          </div>  
        </div>
        
        <div class="mt-2 pb-5 pt-3 px-5 rounded-2xl bg-gray-100/70 border">
          <ul role="list" class="text-sm text-gray-500 grid gap-y-1">
            <li class="flex items-center justify-between py-1">
              <div class="flex items-center">
                <label for="marketCap" class="flex flex-wrap gap-1 items-center">Market cap
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </label>
              </div>
              <div class="flex gap-1">
                <span class="text-sm text-gray-500">$</span>
                <p class="text-sm font-semibold text-gray-900">
                  {{ 
                    currentMarketCap.toLocaleString('en-US', {
                        maximumFractionDigits: 0 
                      }
                    ) 
                  }}
                </p>
              </div>
            </li>
            
            <li class="py-1">
              <div>
                <div class="flex justify-between">
                  <div class="flex items-center">
                    <label for="marketCap" class="flex flex-wrap gap-1 items-center">Circulating supply ({{ currentCirculatingSupplyPercentage.toFixed(0) }}%)
                      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </label>
                  </div>
                  <div class="flex gap-1">
                    <p class="text-sm font-semibold text-gray-900">
                      {{ 
                        currentCirculatingSupply.toLocaleString('en-US', {
                            maximumFractionDigits: 0 
                          }
                        ) 
                      }}
                    </p>
                    <span class="text-sm font-semibold text-gray-900">LINK</span>
                  </div>
                </div>
                <!--
                  <div class="mt-2">
                    
                      <div class="flex items-center gap-x-3 whitespace-nowrap">
                        <div class="flex w-full h-1.5 bg-gray-100 rounded-full" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                          <div class="flex flex-col justify-center rounded-full overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" :style="{width: + currentCirculatingSupplyPercentage +'%'}"></div>
                          <div class="flex items-center">
                            <div class="h-3 w-0.5 rounded-full -ml-0.5 bg-gray-500"></div>
                          </div>
                        
                        </div>
                        <div class="text-end">
                          <span class="text-sm text-gray-500 dark:text-white">{{ currentCirculatingSupplyPercentage.toFixed(2) }}%</span>
                        </div>
                      </div>
                
                  </div>
                -->
              </div>
            </li>
          </ul>
          
          <div class="flex mt-2 items-end">
            <div class="w-1/2">
              <label for="holdings" class="block text-sm text-gray-500">Holdings</label>
              <div class="relative mt-2 rounded-md border">
                <input type="text" v-model.number="holdings" @input="updateFromHoldings()" name="holdings" id="holdings" 
                class="block font-semibold w-full rounded-md border-0 py-1.5 pr-12 text-gray-900 bg-white placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="price-currency">
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span class="text-gray-500 sm:text-sm" id="holdings-currency">LINK</span>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-400 w-4 h-4 mb-2.5 mx-1">
              <path fill-rule="evenodd" d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z" clip-rule="evenodd" />
            </svg>
            <div class="w-1/2">
              <label for="netWorth" class="block text-sm text-gray-500 text-right">Net worth</label>
              <div class="relative mt-2 rounded-md border">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500 sm:text-sm" id="netWorth-currency">USD</span>
                </div>
                <input type="text" v-model.number="netWorth" @input="updateFromNetWorth()" name="netWorth" id="netWorth" 
                class="block text-right font-semibold w-full rounded-md border-0 py-1.5 pl-12 text-gray-900 bg-white placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="netWorth-currency">
                
              </div>
            </div>
          </div>

        </div>
      </section>

      <!-- Current valuation -->
      <section class="mt-6">
        <div class="flex items-center pl-0.5 gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-gray-400">
            <path fill-rule="evenodd" d="M12.577 4.878a.75.75 0 01.919-.53l4.78 1.281a.75.75 0 01.531.919l-1.281 4.78a.75.75 0 01-1.449-.387l.81-3.022a19.407 19.407 0 00-5.594 5.203.75.75 0 01-1.139.093L7 10.06l-4.72 4.72a.75.75 0 01-1.06-1.061l5.25-5.25a.75.75 0 011.06 0l3.074 3.073a20.923 20.923 0 015.545-4.931l-3.042-.815a.75.75 0 01-.53-.919z" clip-rule="evenodd" />
          </svg>
          <h3 class="text-sm text-gray-400">
            Future valuation
          </h3>
        </div>
        <div class="mt-2 -ml-1 pr-1">
          <div class="flex w-full justify-between items-center">
            <TokenSelection class=""></TokenSelection>
            <div>
              <div class="relative flex items-baseline gap-1 justify-end">
                <span class="text-sm text-gray-500">$</span>
                <span class="transition duration-300 text-md tabular-nums font-semibold tracking-tight text-gray-900 ">
                  {{formattedPrice}}
                </span>
              </div>
            </div>
          </div>  
        </div>
        
        <div class="mt-2 pb-5 pt-3 px-5 rounded-2xl bg-gray-100/70 border">
          <ul role="list" class="text-sm text-gray-500 grid gap-y-1">
            <li class="flex items-center justify-between py-1">
              <div class="flex items-center">
                <label for="marketCap" class="flex flex-wrap gap-1 items-center">Market cap
                  <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                  </svg>
                </label>
              </div>
              <div class="flex gap-1">
                <span class="text-sm text-gray-500">$</span>
                <p class="text-sm font-semibold text-gray-900">
                  {{ 
                    currentMarketCap.toLocaleString('en-US', {
                        maximumFractionDigits: 0 
                      }
                    ) 
                  }}
                </p>
              </div>
            </li>
            
            <li class="py-1">
              <div>
                <div class="flex justify-between">
                  <div class="flex items-center">
                    <label for="marketCap" class="flex flex-wrap gap-1 items-center">Circulating supply ({{ currentCirculatingSupplyPercentage.toFixed(0) }}%)
                      <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 text-gray-400">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                      </svg>
                    </label>
                  </div>
                  <div class="flex gap-1">
                    <p class="text-sm font-semibold text-gray-900">
                      {{ 
                        currentCirculatingSupply.toLocaleString('en-US', {
                            maximumFractionDigits: 0 
                          }
                        ) 
                      }}
                    </p>
                    <span class="text-sm font-semibold text-gray-900">LINK</span>
                  </div>
                </div>
                <!--
                  <div class="mt-2">
                    
                      <div class="flex items-center gap-x-3 whitespace-nowrap">
                        <div class="flex w-full h-1.5 bg-gray-100 rounded-full" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100">
                          <div class="flex flex-col justify-center rounded-full overflow-hidden bg-gray-300 text-xs text-white text-center whitespace-nowrap transition duration-500 dark:bg-blue-500" :style="{width: + currentCirculatingSupplyPercentage +'%'}"></div>
                          <div class="flex items-center">
                            <div class="h-3 w-0.5 rounded-full -ml-0.5 bg-gray-500"></div>
                          </div>
                        
                        </div>
                        <div class="text-end">
                          <span class="text-sm text-gray-500 dark:text-white">{{ currentCirculatingSupplyPercentage.toFixed(2) }}%</span>
                        </div>
                      </div>
                
                  </div>
                -->
              </div>
            </li>
          </ul>
          
          <div class="flex mt-2 items-end">
            <div class="w-1/2">
              <label for="holdings" class="block text-sm text-gray-500">Holdings</label>
              <div class="relative mt-2 rounded-md border">
                <input type="text" v-model.number="holdings" @input="updateFromHoldings()" name="holdings" id="holdings" 
                class="block font-semibold w-full rounded-md border-0 py-1.5 pr-12 text-gray-900 bg-white placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="price-currency">
                <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                  <span class="text-gray-500 sm:text-sm" id="holdings-currency">LINK</span>
                </div>
              </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="text-gray-400 w-4 h-4 mb-2.5 mx-1">
              <path fill-rule="evenodd" d="M13.2 2.24a.75.75 0 00.04 1.06l2.1 1.95H6.75a.75.75 0 000 1.5h8.59l-2.1 1.95a.75.75 0 101.02 1.1l3.5-3.25a.75.75 0 000-1.1l-3.5-3.25a.75.75 0 00-1.06.04zm-6.4 8a.75.75 0 00-1.06-.04l-3.5 3.25a.75.75 0 000 1.1l3.5 3.25a.75.75 0 101.02-1.1l-2.1-1.95h8.59a.75.75 0 000-1.5H4.66l2.1-1.95a.75.75 0 00.04-1.06z" clip-rule="evenodd" />
            </svg>
            <div class="w-1/2">
              <label for="netWorth" class="block text-sm text-gray-500 text-right">Net worth</label>
              <div class="relative mt-2 rounded-md border">
                <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                  <span class="text-gray-500 sm:text-sm" id="netWorth-currency">USD</span>
                </div>
                <input type="text" v-model.number="netWorth" @input="updateFromNetWorth()" name="netWorth" id="netWorth" 
                class="block text-right font-semibold w-full rounded-md border-0 py-1.5 pl-12 text-gray-900 bg-white placeholder:text-gray-400 
                focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" placeholder="0.00" aria-describedby="netWorth-currency">
                
              </div>
            </div>
          </div>

        </div>
      </section>
     

      <!--

      <a class="hidden inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6" aria-label="Get started with the Investor plan for [object Object]" href="/register">
        Subscribe
      </a>
    -->
    </div>
  </div>
  
</template>