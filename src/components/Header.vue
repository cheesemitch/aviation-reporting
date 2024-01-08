<script>
import Container from "../components/container.vue"
import PrimaryButton from "../components/primaryButton.vue"
import SecondaryButton from "../components/secondaryButton.vue"
import { Popover, PopoverButton, PopoverPanel, PopoverOverlay, TransitionRoot, TransitionChild } from '@headlessui/vue'

export default {
  components: {
    Container,
    Popover, PopoverButton, PopoverPanel, PopoverOverlay,
    TransitionRoot, TransitionChild,
    PrimaryButton, SecondaryButton,
    
  }
}
</script>
<template>
  <div>
    <header>
      <nav class="dark:bg-gray-800">
        <Container class="relative z-50 flex justify-between py-8">
          <div class="relative z-10 flex items-center gap-16">
            <!--logo-->
            <a aria-label="Home" href="#" class="flex items-center gap-2.5">
              <svg viewBox="0 0 40 40" aria-hidden="true" width="40" height="40" class="fill-cyan-500">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
              </svg>            
              <span class="text-md font-semibold text-gray-900">
                FutureCap
              </span>
            </a>
            <!--logo-->
            <!--Navigation Links-->
            <div class="hidden lg:flex lg:gap-10">
              <a class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700" href="#">
                <span class="relative z-10">About</span>
              </a>
              <a class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700" href="#">
                <span class="relative z-10">Solutions</span>
              </a>
              <a class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700" href="#">
                <span class="relative z-10">Services</span>
              </a>
              <a class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200/50 dark:hover:bg-gray-700" href="#">
                <span class="relative z-10">Contact</span>
              </a>
            </div>
            <!--Navigation Links-->
          </div>
          <!--Navigation Buttons-->
          <div class="flex items-center">
            <!--Mobile Navigation-->
            <Popover v-slot="{ open }" class="lg:hidden">
              <PopoverButton class="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 dark:hover:bg-gray-700 hover:stroke-gray-600 active:stroke-gray-900 focus:outline-none"
                aria-label="Toggle site navigation">
                <div v-if="open">
                  <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" class="h-6 w-6"><path d="M17 14l-5-5-5 5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                </div>
                <div v-else>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="w-6 h-6 text-gray-900 dark:text-gray-100">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                </div>
              </PopoverButton>
              <TransitionRoot as="template" :show="open">
                <TransitionChild as="template"
                  enter="transition-all ease-linear duration-300" 
                  enter-from="opacity-0" 
                  enter-to="opacity-100" 
                  leave="transition-all ease-linear duration-100" 
                  leave-from="opacity-100" 
                  leave-to="opacity-0">
                  <PopoverOverlay class="fixed inset-0 z-0 bg-gray-300/60 backdrop-blur" />
                </TransitionChild>
              </TransitionRoot>
              <TransitionRoot as="template" :show="open">
                <TransitionChild as="template" 
                  enter="transition-all ease-in-out duration-250 transform" 
                  enter-from="-translate-y-12 opacity-0" 
                  enter-to="translate-y-0 opacity-100" 
                  leave="transition-all ease-in-out duration-200 transform"
                  leave-from="translate-y-0 opacity-100" 
                  leave-to="-translate-y-12 opacity-0">
                  <PopoverPanel class="absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-white pb-6 pt-32 shadow-2xl shadow-gray-900/20">
                    <div class="space-y-1 px-3">
                      <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 hover:bg-gray-100 hover:text-gray-800">About</a>
                      <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 hover:bg-gray-100 hover:text-gray-800">Services</a>
                      <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 hover:bg-gray-100 hover:text-gray-800">Initiatives</a>
                      <a href="#" class="block rounded-md px-3 py-2 text-base text-gray-900 hover:bg-gray-100 hover:text-gray-800">Contact</a>
                    </div>
                    <div class="mt-8 flex flex-col gap-4 px-6">
                      <SecondaryButton>Log In</SecondaryButton>
                      <PrimaryButton>Sign Up</PrimaryButton>
                    </div>
                  </PopoverPanel>
                </TransitionChild>
              </TransitionRoot>
            </Popover>
            <div class="hidden lg:flex items-center gap-6">
              <SecondaryButton>Log In</SecondaryButton>
              <PrimaryButton>Sign Up</PrimaryButton>
            </div>
          </div>
        </Container>
      </nav>
    </header>
  </div>
</template>