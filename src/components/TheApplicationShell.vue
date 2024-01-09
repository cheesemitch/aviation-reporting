<script setup>
import { ref } from 'vue'
import LogIcon from './TheLogIcon.vue'
import TheSpeedometerIconVue from './TheSpeedometerIcon.vue'
import RocketIcon from './TheRocketIcon.vue'
import ObjectiveIcon from './TheObjectiveIcon.vue'
import TwoUsersIcon from './TheUsersIcon.vue'

import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

import {
  BellIcon,
  ChartBarIcon,
  HomeIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  ShieldExclamationIcon,
  ShieldCheckIcon,
  FlagIcon,
  ArchiveIcon,
  OfficeBuildingIcon,
  CollectionIcon,
  UserGroupIcon,
  TrendingUpIcon,
  SupportIcon,
  LightBulbIcon,
  SparklesIcon,
  ViewGridIcon,
  ClipboardListIcon
} from '@heroicons/vue/outline'

import { SearchIcon } from '@heroicons/vue/solid'

const navigationHome = [
  { name: 'Dashboard', route: '/app/dashboard', icon: HomeIcon},
]

const navigationGovernance = [
  { name: 'Unternehmen', route: '/app/organisation/companyprofile', icon: OfficeBuildingIcon},
  { name: 'Teams', route: '/app/organisation/teams', icon: UserGroupIcon},
]

const navigationStrategy = [
  { name: 'Unternehmensleitbild', route: '/app/strategic-planning/mission-statement', icon: ClipboardListIcon},
  { name: 'SWOT Analyse', route: '/app/strategic-planning/strategy-development/swot', icon: ViewGridIcon},
  { name: 'Unternehmensziele', route: '/app/strategic-planning/goalsetting/okr/company/objectives', icon: RocketIcon},
  { name: 'Team Ziele', route: '/app/strategic-planning/goalsetting/okr/teams', icon: TwoUsersIcon},
  { name: 'Meine Ziele', route: '/app/strategic-planning/goalsetting/okr/my-objectives', icon: ObjectiveIcon},
]

const navigationRiskmanagement = [
  { name: 'Risikoprofil', route: '/app/risk-management/riskriskprofile', icon: TheSpeedometerIconVue},
  { name: 'Chancen', route: '/app/risk-management/opportunities', icon: LightBulbIcon},
  { name: 'Risiken', route: '/app/risk-management/risks', icon: ShieldExclamationIcon},
  { name: 'Maßnahmen', route: '/app/risk-management/measures', icon: ShieldCheckIcon},
  { name: 'Berichte', route: '/app/risk-management/reports', icon: ChartBarIcon},
  { name: 'Archiv', route: '/app/risk-management/archive', icon: ArchiveIcon},
]

const risikoklassen = [
  { name: 'Gering', route: '/app/risks', bgColorClass: 'bg-lime-500', count: 7 },
  { name: 'Mäßig', route: '/app/risks', bgColorClass: 'bg-yellow-500', count: 4 },
  { name: 'Wesentlich', route: '/app/risks', bgColorClass: 'bg-orange-500', count: 3 },
  { name: 'Kritisch', route: '/app/risks', bgColorClass: 'bg-pink-600', count: 1 },
]

const navigationSupport = [
  { name: 'Support', route: '/app/support', icon: SupportIcon, current: false },
  { name: 'Version', route: '/app/version', icon: LogIcon, current: false },
]

const userNavigation = [
  { name: 'Your Profile', route: '/app/userprofile' },
  { name: 'Settings', route: '/app/settings' },
  { name: 'Sign out', route: '/' },
]

const sidebarOpen = ref(false)

</script>

<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="sidebarOpen = false">
        <TransitionChild as="template" 
        enter="transition-opacity ease-linear duration-300" 
        enter-from="opacity-0" 
        enter-to="opacity-100" 
        leave="transition-opacity ease-linear duration-300" 
        leave-from="opacity-100" 
        leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>

        <div class="fixed inset-0 flex z-40">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-gray-800">
              <TransitionChild as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button type="button" class="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>
              <div class="flex-shrink-0 flex items-center px-4">
                <img class="h-7 w-auto" src="../assets/agnoscis.svg" alt="agnoscis logo" />
                <img class="h-6 w-auto ml-2.5" src="/images/agnoscis-letters-white.svg" alt="agnoscis logo" />
              </div>
              <div class="mt-5 flex-1 h-0 overflow-y-auto">
                <nav class="px-2 space-y-1">
                  <router-link v-for="item in navigationHome" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
                    class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                    <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                    {{ item.name }}
                  </router-link>
                  <h3 class="pt-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Organisation</h3>
                  <div class="pt-1 space-y-1">
                    <router-link v-for="item in navigationGovernance" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
                    class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                      <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                      {{ item.name }}
                    </router-link>
                  </div>
                  <h3 class="pt-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Strategie</h3>
                  <div class="pt-1 space-y-1">
                    <router-link v-for="item in navigationStrategy" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
                    class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                      <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                      {{ item.name }}
                    </router-link>
                  </div>
                   <h3 class="pt-3 px-2 text-xs font-semibold text-gray-500 uppercase tracking-wider">Risikomanagement</h3>
                  <div class="pt-1 space-y-1">
                    <router-link v-for="item in navigationRiskmanagement" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
                    class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                      <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                      {{ item.name }}
                    </router-link>
                  </div>
                  
                </nav>
              </div>
              <nav class="px-2 space-y-1">
                <router-link v-for="item in navigationSupport" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
                class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                  <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                  {{ item.name }}
                </router-link>
                <p class="px-2 py-2 text-xs text-gray-500">© 2022 agnoscis GmbH. All rights reserved.</p>
              </nav>
            </DialogPanel>
          </TransitionChild>
          <div class="flex-shrink-0 w-14" aria-hidden="true">
            <!-- Dummy element to force sidebar to shrink to fit close icon -->
          </div>
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:w-68 lg:flex-col lg:fixed lg:inset-y-0">
      <!-- Sidebar component -->
      <div class="flex-1 flex flex-col min-h-0 bg-gray-900 dark:bg-gray-800/50 dark:border-r dark:border-gray-700 overflow-y-auto">

        <!-- alternative logo
        <div class="flex flex-col items-center flex-shrink-0 bg-gray-800 pt-9 pb-8">
          <img class="h-10 w-auto" src="../assets/agnoscis.svg" alt="agnoscis logo" />
          <img class="h-10 w-auto mt-2.5" src="../assets/agnoscis-letters.svg" alt="agnoscis logo" />
          <span class="mt-3 text-sm text-center text-gray-400">Risk Intelligence</span>
        </div>
        -->
        
        <div class="flex items-center flex-shrink-0 px-5 pt-5 pb-4">
          <img class="h-6 w-auto" src="../assets/agnoscis.svg" alt="agnoscis logo" />
          <img class="h-5 w-auto ml-3" src="/images/agnoscis-letters-white.svg" alt="agnoscis logo" />
        </div>
        
        <!-- navigation -->
        <nav class="flex flex-col px-2 flex-1 bg-gray-800 dark:bg-transparent">
          
          <div class="mt-5">
            <div class="px-2 space-y-1">
              <router-link v-for="item in navigationHome" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
              class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                {{ item.name }}
              </router-link>
            </div>
          </div>

          <div class="mt-5">
            <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Organisation</h3>
            <div class="mt-3 px-2 space-y-1">
              <router-link v-for="item in navigationGovernance" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
              class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                {{ item.name }}
              </router-link>
            </div>
          </div>

          <div class="mt-5">
            <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Strategische Planung</h3>
            <div class="mt-3 px-2 space-y-1">
              <router-link v-for="item in navigationStrategy" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
              class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                {{ item.name }}
              </router-link>
            </div>
          </div>

          <div class="mt-5 flex-1">
            <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Risikomanagement</h3>
            <div class="mt-3 px-2 space-y-1">
              <router-link v-for="item in navigationRiskmanagement" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
              class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                {{ item.name }}
              </router-link>
            </div>
          </div>
        
          <!-- risikoklassen navigation optional 
          <div class="mt-8 flex flex-col flex-1">
            <h3 class="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">Risikoklassen</h3>
            <div class="px-2 py-4 space-y-1">
              <router-link v-for="risikoklassen in risikoklassen" :to="risikoklassen.route" :key="risikoklassen.name" class="text-gray-300 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <component :is="risikoklassen" class="text-gray-400 group-hover:text-gray-300 mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                <span :class="[risikoklassen.bgColorClass, 'w-2.5 h-2.5 mr-4 rounded-full']" aria-hidden="true" />
                <span class="truncate flex-1">
                  {{ risikoklassen.name }}
                </span>
                <span class="bg-gray-900 group-hover:bg-gray-800 ml-3 inline-block py-0.5 px-3 text-xs font-medium rounded-full">
                  {{ risikoklassen.count }}
                </span>
              </router-link>
            </div>
          </div>
          -->
          <!-- Support navigation -->
          <div class="mt-6">
            <div class="px-2 py-4 space-y-1">
              <router-link v-for="item in navigationSupport" :to="item.route" :key="item.name" active-class="text-gray-100 bg-gray-900" exact-active-class=""
              class="text-gray-400 hover:bg-gray-700 hover:text-white group flex items-center px-2 py-2 text-sm font-medium rounded-md">
                <component :is="item.icon" class="mr-3 flex-shrink-0 h-6 w-6" aria-hidden="true" />
                {{ item.name }}
              </router-link>
              <p class="px-2 py-2 text-xs text-gray-500">© 2022 agnoscis GmbH. All rights reserved.</p>
            </div>
          </div>
        </nav>
      </div>
    </div>
    <!-- Container -->
    <div class="lg:pl-68 flex flex-col">
      <!-- Top navigation bar -->
      <div class="lg:hidden sticky dark:border-b dark:border-gray-700 dark:lg:border-transparent top-0 z-10 flex-shrink-0 flex h-16 bg-white dark:bg-transparent dark:backdrop-blur-lg shadow dark:shadow-none">
         <!-- Mobile menu button -->
        <button type="button" class="px-4 border-r border-gray-200 dark:border-gray-700 text-gray-500 
        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 lg:hidden" @click="sidebarOpen = true">
          <span class="sr-only">Open sidebar</span>
          <MenuAlt2Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <div class="flex-1 px-4 flex justify-between">
          <!-- search bar -->
          <div class="flex-1 flex">
            <form class="w-full flex lg:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div class="hidden relative w-full text-gray-400 focus-within:text-gray-600">
                <div class="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input id="search-field" class="hidden dark:bg-transparent w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm" placeholder="Search" type="search" name="search" />
              </div>
            </form>
          </div>
          <!-- Top-right buttons container -->
          <div class="ml-4 flex items-center md:ml-6">
            <button type="button" class="bg-transparent p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset- focus:ring-gray-500">
              <span class="sr-only">View notifications</span>
              <BellIcon class="h-6 w-6" aria-hidden="true" />
            </button>
            <!-- Profile dropdown -->
            <Menu as="div" class="ml-3 relative">
              <div>
                <MenuButton class="max-w-xs bg-transparent flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset- focus:ring-gray-500">
                  <span class="sr-only">Open user menu</span>
                  <img class="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHBlb3BsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" alt="" />
                </MenuButton>
              </div>
              <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                <MenuItems class="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <router-link v-for="item in userNavigation" :key="item.name"
                     :to="item.route" active-class="" exact-active-class="" class="block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white">
                     {{ item.name }}
                  </router-link>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
      <!-- Page content -->
      <main class="flex-1 min-h-screen">
        <div class="py-6">
          <div class="px-4 sm:px-6 md:px-8">
            <!-- Router view -->
              <router-view v-slot="{Component}"> 
                <transition mode="out-in"
                    enter-active-class="transition ease-out duration-500" 
                    enter-from-class="transform opacity-0 scale-95" 
                    enter-to-class="transform opacity-100 scale-100" 
                    leave-active-class="transition ease-in duration-200" 
                    leave-from-class="transform opacity-100" 
                    leave-to-class="transform opacity-0"
                    >
                      <component :is="Component"></component>
                  </transition>
              </router-view>
            <!-- /End replace -->
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
