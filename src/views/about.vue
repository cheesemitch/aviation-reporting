<script>
import Header from '../components/Header.vue';
import Hero from '../components/Hero.vue';
import PrimaryFeatures from '../components/PrimaryFeatures.vue';
import SecondaryFeatures from '../components/SecondaryFeatures.vue';
import TertiaryFeature from '../components/TertiaryFeature.vue';
export default {
  components: {
    Header, Hero, PrimaryFeatures, SecondaryFeatures, TertiaryFeature
  }
}
</script>
<template>
  <div>
    <Header></Header>
    <main>
      <Hero></Hero>
      <PrimaryFeatures></PrimaryFeatures>
      <SecondaryFeatures></SecondaryFeatures>
      <TertiaryFeature></TertiaryFeature>
    </main>
  </div>
</template>