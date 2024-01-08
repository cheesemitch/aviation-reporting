<script>
import Container from './container.vue';
import PrimaryButton from './primaryButton.vue';
import SecondaryButton from './secondaryButton.vue';
import BackgroundIllustration from './BackgroundIllustration.vue';
import PhoneFrame from './PhoneFrame.vue';
import AppScreen from './AppScreen.vue';
import AppScreenHeader from './AppScreenHeader.vue';
import AppScreenTitle from './AppScreenTitle.vue';
import AppScreenSubtitle from '/src/components/AppScreenSubtitle.vue';
import AppScreenBody from './AppScreenBody.vue';
import AppScreenDemoObjectives from './AppScreenDemoObjectives.vue';
import Calculator from "./Calculator.vue";
export default {
  components: {
    Container, PrimaryButton, SecondaryButton, BackgroundIllustration, 
    PhoneFrame,
    AppScreen, AppScreenHeader, AppScreenTitle, AppScreenSubtitle, AppScreenBody,
    AppScreenDemoObjectives,
    Calculator
  }
}
</script>
<template>
  <div>
    <div class="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36 dark:bg-gray-800">
      <Container class="">
        <div class=" lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          
          <div class="relative z-10 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h1 class="font-medium tracking-tight text-gray-900 dark:text-gray-100" style="font-size:2.4rem;">
              Simulate future asset valuations.
            </h1>
            <p class="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-8">
              The process of planning under uncertainty can be referred to as "Uncertainty-Adaptive Planning" or "Contingent Planning." This approach involves developing flexible strategies and incorporating risk management techniques to effectively navigate unpredictable situations and adapt to changing conditions.
            </p>
            <div class="mt-8 flex flex-wrap gap-x-6 gap-y-4">
              <PrimaryButton>Learn more</PrimaryButton>
              <SecondaryButton>Get in touch</SecondaryButton>
            </div>
          </div>

          <div class="flex justify-center relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:-mt-10 xl:col-span-6">
            <Calculator></Calculator>
          </div>
          
          <div class="hidden border border-red-500 relative mt-10 lg:col-span-7 lg:mt-2 mb-11 xl:col-span-6">
            <p class="text-center text-sm font-semibold text-gray-900 lg:text-left">
              Follow us
            </p>
            <ul role="list" class="mx-auto mt-4 flex max-w-xl items-center flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start">
              <li  class="flex items-center">
                <img src="/src/assets/twitter-logo.jpeg" alt="" class="h-8"/>
              </li>
              <li  class="flex items-center">
                <img src="/src/assets/linkedin-logo.webp" alt="" class="h-16 mt-2"/>
              </li>
              <li  class="flex items-center grayscale">
                <img src="/src/assets/Xing-logo.jpeg" alt="" class="h-12"/>
              </li>
            </ul>
          </div>

        </div>
      </Container>
    </div>
  </div>
</template>