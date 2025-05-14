<template>
    <section class="py-[90px]" id="work">
        <div class="work-content">
            <div class="heading grid mb-15">
                <div class="flex flex-col gap-[2em]">
                    <h1 class="text-justify">My Work</h1>
                    <p>Explore a curated selection of my top projects, spanning mobile and web design, along with code development. These projects highlight my versatility and expertise, showcasing my ability to seamlessly integrate creativity and technical skill across diverse digital landscapes.</p>
                </div>
                <div class="feature-div">
                    <div class="feature flex items-baseline ml-[5em]">
                        <svg width="93" height="72" viewBox="0 0 93 72" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M78.8634 12.2591L78.4944 2L90.8531 15.5407L77.5526 29.8956L78.6591 18.31C78.6591 18.31 52.6636 21.3959 38.6009 30.4885C21.8684 41.3073 2 70 2 70C2 70 16.7153 32.1647 35.7761 20.4684C49.8867 11.8097 78.8634 12.2591 78.8634 12.2591Z" stroke="#D397B1" stroke-width="3" stroke-linejoin="round"/>
                        </svg>
                        <img src="../assets/portfolio.png">
                    </div>
                    <div class="text-btn-div mt-4 flex flex-col items-start">
                        <span>Featured Project</span>
                        <button class="text-justify btn-view mt-2" onclick="window.open('https://www.figma.com/design/Sgy9riSkjHCZexnow3Wdh8/Portfolio?node-id=0-1&t=TMHdlBFaK3LaFVpC-1', '_blank')">View Designs</button>
                    </div>
                </div>
            </div>
            <div class="filter-div flex items-center">
                <span class="mr-3">Filter by:</span>
                <ul class="filter-links">
                    <li class="list" :class="{ 'active-filter': selectedFilter === 'all' }" @click="setFilter('all')">
                        <span>All</span>
                    </li>
                    <li class="list" :class="{ 'active-filter': selectedFilter === 'web' }" @click="setFilter('web')">
                        <span>Web Design & Development</span>
                    </li>
                    <li class="list" :class="{ 'active-filter': selectedFilter === 'mobile' }" @click="setFilter('mobile')">
                        <span>Mobile Design</span>
                    </li>
                </ul>

            </div>
            <div class="projects-div grid mt-8" id="projects">
                <div class="project-card-border" v-for="project in filteredProjects" :key="project.title">
                    <div class="project-card-content">
                        <div class="project-image flex items-center justify-center flex-col">
                            <img :src="project.image">
                        </div>
                        <div class="project-info flex items-center justify-between">
                            <div class="project-info-text flex flex-col">
                                <span class="project-title">{{ project.title }}</span>
                                <span class="project-type">- {{ project.type }}</span>
                            </div>
                            <a :href="'/work/' + project.title">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M1.69421 13.2798L13.6942 1.27979M13.6942 1.27979H2.89421M13.6942 1.27979V12.0798" 
                                        stroke="#F8F7F5" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="experience-content flex flex-col items-center pt-[8em]">
                <h3 class="pb-[1.5em]">Professional Experience</h3>
                <div class="accordion pb-[20px] flex flex-col gap-[15px]" v-for="(position , index) in positions" :key="position.id">
                    <div class="accordion-heading flex items-center justify-between" @click="toggleAccordion(index)">
                        <span class="role-title">{{ position.title }}</span>
                        <div class="flex items-center gap-[1.2em]">
                            <span class="role-period">{{ position.period }}</span>
                            <div class="accordion-svg"></div>
                        </div>
                    </div>
                    <transition @enter="enter" @leave="leave">
                        <div v-show="isOpen(index)" class="accordion-body flex flex-col" ref="accordionBodies">
                            <div class="accordion-body-wrap flex flex-col gap-4">
                                <div class="desc flex items-center">
                                    <div class="flex items-center gap-[12px] mr-4">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="15" viewBox="0 0 10 15" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.14286 5.81058C7.14286 4.62701 6.18357 3.66772 5 3.66772C3.81643 3.66772 2.85714 4.62701 2.85714 5.81058C2.85714 6.99415 3.81643 7.95344 5 7.95344C6.18357 7.95344 7.14286 6.99415 7.14286 5.81058ZM10 5.35718C10 8.11861 5 14.6429 5 14.6429C5 14.6429 0 8.11861 0 5.35718C0 2.59575 2.23857 0.357178 5 0.357178C7.76143 0.357178 10 2.59575 10 5.35718ZM5.71429 5.81058C5.71429 6.20415 5.39357 6.52487 5 6.52487C4.60643 6.52487 4.28571 6.20415 4.28571 5.81058C4.28571 5.41701 4.60643 5.0963 5 5.0963C5.39357 5.0963 5.71429 5.41701 5.71429 5.81058Z" fill="#64786B"/>
                                        </svg>
                                        <span class="location">{{ position.location }}</span>
                                    </div>
                                    <div class="flex items-center gap-[12px]">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="15" viewBox="0 0 14 15" fill="none">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M3.67505 0.771474C4.58415 0.56944 5.68701 0.5 7 0.5C8.31299 0.5 9.41584 0.56944 10.3249 0.771474C11.242 0.975279 12.0042 1.3232 12.5905 1.90951C13.1768 2.49581 13.5247 3.25801 13.7285 4.17505C13.9306 5.08415 14 6.18701 14 7.5C14 8.81299 13.9306 9.91584 13.7285 10.8249C13.5247 11.742 13.1768 12.5042 12.5905 13.0905C12.0042 13.6768 11.242 14.0247 10.3249 14.2285C9.41584 14.4306 8.31299 14.5 7 14.5C5.68701 14.5 4.58415 14.4306 3.67505 14.2285C2.75801 14.0247 1.99581 13.6768 1.40951 13.0905C0.8232 12.5042 0.475279 11.742 0.271474 10.8249C0.06944 9.91584 0 8.81299 0 7.5C0 6.18701 0.06944 5.08415 0.271474 4.17505C0.475279 3.25801 0.8232 2.49581 1.40951 1.90951C1.99581 1.3232 2.75801 0.975279 3.67505 0.771474ZM9.8 8.9C9.8 9.28661 9.48661 9.6 9.1 9.6C8.71339 9.6 8.4 9.28661 8.4 8.9V7.08994L5.39498 10.095C5.12161 10.3683 4.67839 10.3683 4.40502 10.095C4.13166 9.82162 4.13166 9.37838 4.40502 9.10503L7.41006 6.1H5.6C5.2134 6.1 4.9 5.7866 4.9 5.4C4.9 5.0134 5.2134 4.7 5.6 4.7H8.87019C9.38378 4.7 9.8 5.11642 9.8 5.62986V8.9Z" fill="#64786B"/>
                                        </svg>
                                        <span class="url">{{ position.url }}</span>
                                    </div>
                                </div>
                                <p>{{ position.desc }}</p>
                                <div class="tools-div">
                                    <span v-for="(tool, index) in position.tools" :key="index" class="tools">{{ tool }}</span>
                                </div>
                            </div>
                        </div>
                    </transition>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { projects, positions } from '@/data';
export default{
    name: "WorkSection",
    data(){
        return{
            projects,
            positions,
            selectedFilter: 'all',
            activeIndex: 0,
        }
    },
    computed: {
        filteredProjects() {
            if (this.selectedFilter === 'all') {
                return this.projects;
            }

            return this.projects.filter(project => {
                const type = project.type.toLowerCase();
                return this.selectedFilter === 'web'
                    ? type.includes('web')
                    : type.includes('mobile');
            });
        }
    },
    components:{},
    methods: {
        setFilter(type) {
            this.selectedFilter = type;
        },
        toggleAccordion(index) {
            this.activeIndex = this.activeIndex === index ? -1 : index;
        },
        isOpen(index) {
            return this.activeIndex === index;
        },
        enter(el) {
            el.style.height = '0px';
            el.style.opacity = 0;
            requestAnimationFrame(() => {
            el.style.transition = 'all cubic-bezier(.4,0,.2,1) .4s';
            el.style.height = el.scrollHeight + 'px';
            el.style.opacity = 1;
            });
        },
        leave(el) {
            el.style.height = el.scrollHeight + 'px';
            el.style.opacity = 1;
            requestAnimationFrame(() => {
            el.style.transition = 'all cubic-bezier(.4,0,.2,1) .4s';
            el.style.height = '0px';
            el.style.opacity = 0;
            });
        },
    },
}
</script>

<style scoped>
.accordion{
    max-width: 750px;
    width: 100%;
}
h3{
    text-align: center;
    font-size: 40px;
    font-weight: 700;
    line-height: 58px; 
}
.accordion-heading{
    border-radius: 5px;
    background: #64786B;
    display: flex;
    padding: 12px 24px;
    justify-content: space-between;
    align-items: center;
    align-self: stretch;
    color: #F8F7F5;
}
.role-title{
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: capitalize;
}
.role-period{
    font-size: .75rem;
    font-weight: 500;
    text-transform: capitalize;
}
.accordion-svg{
    content: '-';
    display: block;
    width: 0.625rem;
    height: 0.125rem;
    background-color: #F8F7F5;
}
.accordion-body{
    border-radius: 5px;
    background: #DDE0DC;
    max-height: 15em;
    overflow: hidden;
}
.accordion-body-wrap{
    padding: 24px;
}
.desc span{
    font-size: 12px;
}
.accordion-body p{
    font-size: 14px;
    align-self: stretch;
}
.tools-div{
    display: flex;
    align-items: center;
    align-content: center;
    gap: 0.625rem;
    align-self: stretch;
    flex-wrap: wrap;
}
.tools{
    border-radius: 15px;
    background: #D397B1;
    color: #F8F7F5;
    padding: 10px;
    text-align: justify;
    font-size: 12px;
    font-weight: 500;
    line-height: 15px; 
    letter-spacing: 0.48px;
}
#work{
    background: #F8F7F5;
    color: #1E1E1E;
}
.work-content{
    margin-right: clamp(3em, 50em, 7.5vw) !important;
    margin-inline: clamp(3em, 50em, 12vw);
}
.heading {
    grid-template-columns: 1fr;
    gap: 3em;
}
h1{
    width: 65px;
    font-size: 54px;
    font-weight: 700;
    line-height: 70px; 
    letter-spacing: 6.4px;
}
.feature svg{
    min-width: 70px;
}
.feature img{
    width: 100%;
    min-width: 292.63px;
    max-width: 391.63px;
    height: auto;
}
.text-btn-div span{
    font-size: 20px;
    font-weight: 500;
}
.btn-view{
    color: #F8F7F5;
    font-size: 14px;
    font-weight: 600;
    line-height: 15px; 
    letter-spacing: 0.56px;
    padding: 15px 20px;
    border-radius: 4px;
    background: #D397B1;
}
.btn-view:hover{
    cursor: pointer;
}
.filter-div{
    font-size: 13px;
}
.list {
    display: inline-block;
    font-weight: 500;
}
.filter-links li{
    cursor: pointer;
}
.filter-links li:not(:last-child)::after {
    content: "/";
    color: #1E1E1E;
    text-decoration: none;
    padding-inline: 10px;
}
.active-filter span{
    font-weight: bold;
    color: #D397B1; 
    text-decoration: underline;
}
.projects-div{
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 3em;
}
.project-card-border{
    border-radius: 40px;
    border: 1px dashed #1E1E1E;
    padding: 8px;
    min-width: 250px;
}
.project-card-content{
    border-radius: 40px;
    border: 1px solid #1E1E1E;
}
.project-image{
    height: 269.28px;
    padding-inline: 30px;
}
.project-image img{
    max-width: 225px;
}
.project-info{
    display: flex;
    padding: 20px 30px;
    border-radius: 0px 0px 40px 40px;
    background: #1E1E1E;
}
.project-title{
    color: #F8F7F5;
    font-size: 20px;
    font-weight: 500;
}
.project-type{
    color: #F8F7F5;
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
}
@media screen and (min-width: 961px){
    .heading{
        grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
        gap: 3em;
    }
    .feature-div {
        justify-self: end;
    }
}
@media screen and (max-width: 960px){
    .work-content{
        margin-inline: clamp(3em, 50em, 12vw) !important;
    }
}
@media screen and (max-width: 512px){
    .heading{
        margin-bottom: calc(var(--spacing) * 10);
    }
    .feature{
        display: inline;
        margin: 0;
    }
    .feature svg{
        display: none;
    }
    .text-btn-div{
        margin-top: calc(var(--spacing) * 8);
    }
    .filter-div{
        display: inline;
        margin: 0;
    }
    .filter-links{
        margin-top: calc(var(--spacing) * 2);
    }
}
</style>