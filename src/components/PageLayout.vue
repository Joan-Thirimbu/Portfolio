<template>
    <div id="page">
        <NavbarComponent/>
        <HomeSection/>
        <AboutSection/>
        <WorkSection/>
        <ContactSection/>
    </div>
</template>
  
<script>
import NavbarComponent from '@/components/NavbarComponent.vue';
import HomeSection from './HomeSection.vue';
import AboutSection from './AboutSection.vue';
import ContactSection from './ContactSection.vue';
import WorkSection from './WorkSection.vue';

export default {
    name: 'PageLayout',
    components: {
        NavbarComponent,
        HomeSection,
        AboutSection,
        ContactSection,
        WorkSection,
    },
}
</script>

<style scoped>
#page{
    color: #F8F7F5;
    background: #64786B;
    background-image: url(/src/assets/grainy.webp);
}
</style>