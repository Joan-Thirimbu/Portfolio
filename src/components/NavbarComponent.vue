<template>
    <div class="navbar">
        <div class="nav-content pt-10 flex items-center justify-between">
            <div class="copyright flex justify-center items-center">
                <span class="material-icons">copyright</span>
                <span class="year">/2025</span>
            </div>
            <div class="line mx-2"></div>
            <div class="nav-container">
                <ul class="nav-links justify-between flex">
                    <li><a href="#home" @click.prevent="scrollToSection('home')">Home</a></li>
        <li><a href="#about" @click.prevent="scrollToSection('about')">About</a></li>
        <li><a href="#work" @click.prevent="scrollToSection('work')">Work</a></li>
        <li><a href="#contact" @click.prevent="scrollToSection('contact')">Contact</a></li>
                    <li>CV</li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    name: "NavbarComponent",
    components:{},
    methods: {
        scrollToSection(section) {
            const element = document.getElementById(section);
            if (element) {
                element.scrollIntoView({
                behavior: 'smooth',  
                block: 'start', 
                });
            }
        },
    },
}
</script>

<style scoped>
.navbar{
    position: fixed;
    top: 96%;
    left: 0;
    z-index: 10;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: top left;
}
.nav-content{
    gap: 2.8em;
}
.copyright{
    gap: 6px;
}
.material-icons{
    font-size: 10px;
    margin-bottom: 1.5px;
}
.year{
    font-size: 10px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 2.4px;
}
.line{
    content: "";
    display: block;
    height: 1px;
    width: 112px;
    background: #F8F7F5;
}
.nav-links{
    gap: 2.5em;
}
.nav-links li{
    font-size: 10px;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 5px;
    text-transform: uppercase;
}

@media screen and (min-width: 1281px){
    .line{
        width: 294px;
    }
}
</style>