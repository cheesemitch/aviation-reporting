<script>
  import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
  import Container from './container.vue';

  import screenshotContacts from '/src/assets/contacts.png'
  import screenshotInventory from '/src/assets/inventory.png'
  import screenshotProfitLoss from '/src/assets/profit-loss.png'

  export default {
    data () {
      return {
        features: [
          {
            name: 'Reporting',
            index: 0,
            summary: 'Stay on top of things with always up-to-date reporting features.',
            description:
              'We talked about reporting in the section above but we needed three items here, so mentioning it one more time for posterity.',
            image: screenshotProfitLoss,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" /></svg>',
            isActive: true
          },
          {
            name: 'Activity Logging',
            index: 1,
            summary: 'Never lose track of what’s going on with accurate activity logging.',
            description: 'We don’t offer this as part of our software but that statement is inarguably true. Accurate inventory tracking would help you for sure.',
            image: screenshotInventory,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" /></svg>',
            isActive: true
          },
          {
            name: 'Organisation',
            index: 2,
            summary: 'Define your department structure and organize all of your teams in one place.',
            description: 'This also isn’t actually a feature, it’s just some friendly advice. We definitely recommend that you do this, you’ll feel really organized and professional.',
            image: screenshotContacts,
            icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6"><path d="M4.913 2.658c2.075-.27 4.19-.408 6.337-.408 2.147 0 4.262.139 6.337.408 1.922.25 3.291 1.861 3.405 3.727a4.403 4.403 0 00-1.032-.211 50.89 50.89 0 00-8.42 0c-2.358.196-4.04 2.19-4.04 4.434v4.286a4.47 4.47 0 002.433 3.984L7.28 21.53A.75.75 0 016 21v-4.03a48.527 48.527 0 01-1.087-.128C2.905 16.58 1.5 14.833 1.5 12.862V6.638c0-1.97 1.405-3.718 3.413-3.979z" /><path d="M15.75 7.5c-1.376 0-2.739.057-4.086.169C10.124 7.797 9 9.103 9 10.609v4.285c0 1.507 1.128 2.814 2.67 2.94 1.243.102 2.5.157 3.768.165l2.782 2.781a.75.75 0 001.28-.53v-2.39l.33-.026c1.542-.125 2.67-1.433 2.67-2.94v-4.286c0-1.505-1.125-2.811-2.664-2.94A49.392 49.392 0 0015.75 7.5z" /></svg>',
            isActive: true
          },
        ],
        selectedIndex: 1,
      }
    },
    methods: {
      setIndex(index) {
        this.selectedIndex = index;
      },
      isActive(index) {
        if (this.selectedIndex == index) {
          return true;
        } else {
          return false;
        }
      }
    },
    components: {
      TabGroup, TabList, Tab, TabPanels, TabPanel, 
      Container,
    }
  }
</script>
<template>
  <section
    id="primary-features"
    aria-label="Features"
    class="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
  >
    <Container>
      <div class="mx-auto max-w-2xl md:text-center">
        <h2 class="font-medium text-3xl tracking-tight text-gray-900">
          Simplify everyday business tasks.
        </h2>
        <p class="mt-4 text-lg tracking-tight text-slate-700 leading-8">
          Because you’d probably be a little confused if we suggested you
          complicate your everyday business tasks instead.
        </p>
      </div>
      <!--Features Mobile-->
      <div class="-mx-4 mt-20 flex flex-col gap-y-10 overflow-hidden px-4 sm:-mx-6 sm:px-6 lg:hidden">  
        <div v-for="feature in features" :key="feature.name">
          <div class="mx-auto max-w-2xl">
            <div :class="[feature.isActive ? 'bg-cyan-500' : 'bg-slate-500','w-10 h-10 rounded-lg text-white flex items-center justify-center']">
              <div v-html="feature.icon">
              </div>
            </div>
            <h3 :class="[feature.isActive ? 'text-cyan-500' : 'text-slate-600','mt-6 text-sm font-medium']">
              {{feature.name}}
            </h3>
            <p class="mt-2 font-display text-xl text-slate-900">
              {{feature.summary}}
            </p>
            <p class="mt-4 text-sm text-slate-600">{{feature.description}}</p>
          </div>
          <div class="relative mt-10 pb-10">
            <div class="absolute -inset-x-4 bottom-0 top-8 bg-slate-200 sm:-inset-x-6" />
            <div class="relative mx-auto w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
              <img
                class="w-full"
                :src="feature.image"
                alt=""
                sizes="52.75rem"
              />
            </div>
          </div>
        </div>
      </div>
      <!--Features Mobile End-->
      <!--Features Desktop-->
      <TabGroup as="div" class="hidden lg:mt-20 lg:block">
        <TabList class="grid grid-cols-3 gap-x-8">
          <Tab @click="setIndex(feature.index)" v-for="feature in features" :key="feature.name" class="focus:outline-none flex items-start">
            <div :class="[!isActive(feature.index) ? 'opacity-75 hover:opacity-100' : 'opacity-100' , 'text-left']">
              <div :class="[isActive(feature.index) ? 'bg-cyan-400' : 'bg-slate-500','w-9 h-9 rounded-lg text-white flex items-center justify-center']">
                <div v-html="feature.icon" class="text-white h-6 w-6">
                </div>
              </div>
              <h3 :class="[isActive(feature.index) ? 'text-cyan-600' : 'text-gray-600', 'mt-6 text-sm font-medium']">
                {{feature.name}}
              </h3>
              <p class="mt-2 font-semibold text-lg text-gray-900">
                {{feature.summary}}
              </p>
              <p class="mt-4 text-sm text-gray-600">{{feature.description}}</p>
            </div>
          </Tab>
        </TabList>
        <TabPanels class="relative mt-20 overflow-hidden rounded-3xl bg-gray-900 px-14 py-16 xl:px-16">
          <div class="-mx-5 flex">
              <TabPanel v-for="feature in features" static :key="feature.name" :class="[feature.index !== selectedIndex ? 'opacity-60' : '' , 'px-5 transition duration-500 ease-in-out [&:not(:focus-visible)]:focus:outline-none']"
                :style="['transform: translateX(-'+(selectedIndex * 100)+'%)']"
                :aria-hidden="featureIndex !== selectedIndex"
              >
                <div class="w-[52.75rem] overflow-hidden rounded-xl bg-white shadow-lg shadow-slate-900/5 ring-1 ring-slate-500/10">
                  <img
                    class="w-full"
                    :src="feature.image"
                    alt=""
                    sizes="52.75rem"
                  />
                </div>
              </TabPanel>
          </div>
          <div class="pointer-events-none absolute inset-0 rounded-4xl ring-1 ring-inset ring-slate-900/10" />
        </TabPanels>
      </TabGroup>
    </Container>
  </section>
</template>