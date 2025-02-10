<template>
  <div>
    <NavbarComponent/>
    <HomeSection id="home" />
    <AboutSection id="about" />
    <WorkSection id="work" />
    <ContactSection id="contact" />
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
    color: #F8F7F5;
    background: #64786B;
    background-image: url(/src/assets/grainy.webp);
    font-family: "Eczar", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>