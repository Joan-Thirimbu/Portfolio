<template>
  <div>
    <router-view/>
    <button v-show="showScrollTop" @click="scrollToTop" class="scroll-to-top" ria-label="Scroll to top">
      <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke-width="0"/>
        <g stroke-linecap="round" stroke-linejoin="round"/>
        <path d="M12 4v16m0-16L8 8m4-4 4 4" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      showScrollTop: false,
    };
  },
  components: {},
  methods: {
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
    handleScroll() {
      this.showScrollTop = window.scrollY > 300; 
    },
  },
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}
html{
    scroll-behavior: smooth;
    font-family: "Eczar", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.scroll-to-top {
  position: fixed;
  bottom: 80px;
  right: 40px;
  background-color: #d397b1;
  color: #fff;
  padding: 12px;
  border: none;
  border-radius: 50%;
  font-size: 24px;
  cursor: pointer;
  z-index: 1000;
  transition: opacity 0.3s ease;
}
.scroll-to-top svg{
  width: 24px;
}
.scroll-to-top:hover {
  box-shadow: 0 4px 12px rgba(211, 151, 177, 0.5);
  transform: translateY(-2px);
}
</style>