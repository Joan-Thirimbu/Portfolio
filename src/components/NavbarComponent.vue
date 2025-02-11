<template>
    <div class="navbar">
        <div class="nav-content py-8 px-6 flex items-center justify-between">
            <div class="copyright flex justify-center items-center">
                <span class="material-icons">copyright</span>
                <span class="year">/2025</span>
            </div>
            <div class="line mx-2"></div>
            <button class="btn mobile-nav-toggle" @click="toggleNav()" :aria-expanded="isExpanded.toString()" type="button">
                <span class="sr-only">Menu</span>
            </button>
            <div class="pr-18 nav-container" :class="{ open: isExpanded }">
                <ul class="nav-links justify-between flex">
                    <li><a href="#home" class="link home" @click.prevent="scrollToSection('home')"><span>Home</span></a></li>
                    <li><a href="#about" class="link about" @click.prevent="scrollToSection('about')"><span>About</span></a></li>
                    <li><a href="#work" class="link work" @click.prevent="scrollToSection('work')"><span>Work</span></a></li>
                    <li><a href="#contact" class="link contact" @click.prevent="scrollToSection('contact')"><span>Contact</span></a></li>
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
    data() {
        return {
            isExpanded: false,
        };
    },
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
        toggleNav(){
            this.isExpanded = !this.isExpanded;
        },
    },
}
</script>

<style scoped>
.navbar{
    position: fixed;
    top: 100%;
    left: 0;
    z-index: 10;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: top left;
    width: 100vh;
}
.nav-content{
    gap: 4em;
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
    width: 100%;
    background: #F8F7F5;
}
.sr-only {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    overflow: hidden;
    top: 30%;
    right: 0;
    font-size: 10px;
}
.mobile-nav-toggle{
    display: none !important;
    border: none;
    background-image: url('../assets/menu.svg') !important;
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
@media screen and (min-width: 513px) and (max-width: 768px){
    .navbar{
        transform: rotate(0deg);
        top: 0;
        width: 100vw;
    }
    .nav-content{
        background: #64786B;
        background-image: url(/src/assets/grainy.webp);
        padding-inline: 30px;
        gap: 2.5em;
    }
    .nav-container{
        padding-right: 18px;
    }
    .work::after {
        content: "WK"; 
    }
    .home::after {
        content: "HM"; 
    }
    .about::after {
        content: "AB"; 
    }
    .contact::after {
        content: "CT"; 
    }
    .link span {
        display: none;
    }
}
@media screen and (max-width: 512px){
    .navbar{
        transform: rotate(0deg);
        top: 0;
        width: 100vw;
    } 
    .nav-content{
        background: #64786B;
        background-image: url(/src/assets/grainy.webp);
    }
    .line{
        display: none;
    }
    .nav-container{
        position: fixed;
        padding: 0;
        inset: 0 0 0 40%;
        transform: translateX(100%);
        transition: transform 350ms ease-in-out;
    }
    .nav-container.open {
        transform: translateX(0);
    }
    .mobile-nav-toggle{
        display: block !important;
        position: absolute;
        z-index: 9999;
        background-color: transparent !important;
        background-image: url('../assets/menu.svg') !important;
        right: 1.5em;
        aspect-ratio: 1;
        width: 1.5em;
        background-repeat: no-repeat;
        background-size: contain;
    }
    .mobile-nav-toggle[aria-expanded='true']{
        background-image: url('../assets/close.svg') !important;
    }
    .nav-links{
        flex-direction: column;
        justify-content: unset;
        padding: min(30vh, 5.5em) 0;
        gap: 1.5em;
        height: 100vh;
        padding-left: 2em;
    }
    @supports (backdrop-filter: blur(.3em)) {
        .nav-links{
            background: hsl(0 0% 0% / 0.1);
            backdrop-filter: blur(.3em);
        }
    }
    .nav-content{
        gap: 1em;
    }
}
</style>