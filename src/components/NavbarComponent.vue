<template>
    <div :class="['navbar', navbarClass]">
        <div class="nav-content py-9 px-6 flex items-center justify-between">
            <div class="copyright flex justify-center items-center">
                <span class="material-icons">copyright</span>
                <span class="year">/2025</span>
            </div>
            <div :class="['line mx-2', lineClass]"></div>
            <button :class="['btn mobile-nav-toggle', svg]" @click="toggleNav()" :aria-expanded="isExpanded.toString()" type="button">
                <span class="sr-only">Menu</span>
            </button>
            <div class="pr-18 nav-container" :class="{ open: isExpanded }">
                <ul class="nav-links justify-between flex">
                    <li><a href="#home" class="link home" @click.prevent="scrollToSection('home'); toggleNav()"><span>Home</span></a></li>
                    <li><a href="#about" class="link about" @click.prevent="scrollToSection('about'); toggleNav()"><span>About</span></a></li>
                    <li><a href="#work" class="link work" @click.prevent="scrollToSection('work'); toggleNav()"><span>Work</span></a></li>
                    <li><a href="#contact" class="link contact" @click.prevent="scrollToSection('contact'); toggleNav()"><span>Contact</span></a></li>
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
            navbarClass: '',
            lineClass: '',
            svg: '',
        };
    },
    methods: {
        toggleNav(){
            this.isExpanded = !this.isExpanded;
            this.updateNavbarStyle();
        },
        scrollToSection(section) {
            this.updateNavbarStyle(section); 
            const element = document.getElementById(section);
            window.scrollTo({
                top: element.offsetTop,
                behavior: 'smooth',
            });
        },
        updateNavbarStyle(section) {
            const expanded = this.isExpanded;
            if (section === 'work') {
                this.navbarClass = 'bg-work text-dark';  
                this.lineClass = 'line-dark';  
                if(expanded === true) {
                    this.svg = 'close-dark';
                }else{
                    this.svg = 'menu-dark';
                }    
            } else if (section === 'contact') {
                this.navbarClass = 'bg-contact';
                this.lineClass = '';     
                if(expanded === true) {
                    this.svg = 'close-light';
                }else{
                    this.svg = 'menu-light';
                }          
            } else {
                this.navbarClass = 'bg';  
                this.lineClass = '';   
                if(expanded === true) {
                    this.svg = 'close-light';
                }else{
                    this.svg = 'menu-light';
                }   
            }
        },
        handleScroll() {
            const sections = ['work', 'contact']; 
            let activeSection = '';

            sections.forEach(section => {
                const element = document.getElementById(section);
                    const sectionTop = element.getBoundingClientRect().top; 
                    const sectionHeight = element.offsetHeight;
                    const viewportHeight = window.innerHeight;

                    if (sectionTop < viewportHeight * 0.8 && sectionTop + sectionHeight > viewportHeight * 0.8) {
                        activeSection = section;
                }
            });

            this.updateNavbarStyle(activeSection);
        }
    },
    mounted() {
            window.addEventListener('scroll', this.handleScroll);
    },
    unmounted() {
        window.removeEventListener('scroll', this.handleScroll);
    },
}
</script>

<style scoped>
.bg-work{
    background: #F8F7F5; 
}
.line-dark{
    background: #1e1e1e !important;
}
.text-dark {
  color: #1e1e1e !important;
}
.bg-contact {
    background-color: #1e1e1e;
}
.bg{
    background: transparent;
}
.menu-light{ 
    background-image: url('../assets/menu-light.svg') !important;
}
.menu-dark{ 
    background-image: url('../assets/menu-dark.svg') !important;
}
.close-light{
    background-image: url('../assets/close-light.svg') !important;
}
.close-dark{
    background-image: url('../assets/close-dark.svg') !important;
}
.navbar{
    color: #F8F7F5;
    position: fixed;
    top: 100%;
    left: 0;
    z-index: 10;
    transform: translateY(-50%) rotate(-90deg);
    transform-origin: top left;
    width: 100vh;
    transition: background-color 0.3s ease, color 0.3s ease;
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
    transition: background-color 0.3s ease;
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
    transition: 0.3s ease;
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

@media screen and (min-width: 769px){
    .bg-work{
        background: transparent !important; 
    }
}
@media screen and (min-width: 513px) and (max-width: 768px){
    .bg{
        background: #64786B;
        background-image: url(/src/assets/grainy.webp);
    }
    .navbar{
        transform: rotate(0deg);
        top: 0;
        width: 100vw;
    }
    .nav-content{
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
    .bg{
        background: #64786B;
        background-image: url(/src/assets/grainy.webp);
    }
    .navbar{
        transform: rotate(0deg);
        top: 0;
        width: 100vw;
    } 
    .line{
        display: none;
    }
    .nav-container{
        position: fixed;
        padding: 0;
        inset: 0 0 0 40%;
        transform: translateX(100%);
        transition: transform 300ms ease-in-out;
    }
    .nav-container.open {
        transform: translateX(0);
    }
    .mobile-nav-toggle{
        display: block !important;
        position: absolute;
        z-index: 9999;
        right: 1.5em;
        aspect-ratio: 1;
        width: 1.5em;
        background-repeat: no-repeat;
        background-image: url('../assets/menu-light.svg');
        background-size: contain;
    }
    .mobile-nav-toggle[aria-expanded='true']{
        background-image: url('../assets/close-light.svg');
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