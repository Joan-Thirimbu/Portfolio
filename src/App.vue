<template>
  <div>
    <NavbarComponent/>
    <HomeSection/>
    <AboutSection/>
    <WorkSection/>
    <ContactSection/>
  </div>
</template>

<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import HomeSection from './components/HomeSection.vue';
import AboutSection from './components/AboutSection.vue';
import ContactSection from './components/ContactSection.vue';
import WorkSection from './components/WorkSection.vue';
export default {
  name: 'App',
  components: {
    NavbarComponent,
    HomeSection,
    AboutSection,
    ContactSection,
    WorkSection,
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}
html{
  scroll-behavior: smooth;
  color: #F8F7F5;
  background: #64786B;
  background-image: url(/src/assets/grainy.webp);
  font-family: "Eczar", serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>