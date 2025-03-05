<template>
    <div id="details-page" v-if="project">
        <div id="work-details">
            <div class="work-details-content flex flex-col">
                <div class="back-arrow">
                    <router-link :to="'/'">
                        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                            <circle cx="25" cy="25" r="24.75" stroke="#1E1E1E" stroke-width="0.5"/>
                            <path d="M20.4455 16.0505L15 21.7046L20.4455 27.3587" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M15 21.7046H23.7129C29.7278 21.7046 34.604 26.7675 34.604 33.0127V34.1435" stroke="#1E1E1E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
                <div class="project-title">
                    <div class="mb-3 project-type flex items-center gap-[5px]">
                        <span>{{ project.type }}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="5" height="5" viewBox="0 0 5 5" fill="none">
                            <path d="M2.5 5C3.88071 5 5 3.88071 5 2.5C5 1.11929 3.88071 0 2.5 0C1.11929 0 0 1.11929 0 2.5C0 3.88071 1.11929 5 2.5 5Z" fill="#D397B1"/>
                        </svg>
                    </div>
                    <h1>{{ project.title }}</h1>
                </div>
                <span class="client-info">{{ project.client }}</span>
                <div class="project-overview flex flex-wrap">
                    <div class="flex flex-col gap-3">
                        <p>Role</p>
                        <span>{{ project.role }}</span>
                    </div>
                    <div class="flex flex-col gap-3">
                        <p>Responsibilities</p>
                        <span>{{ project.duty }}</span>
                    </div>
                    <div class="flex flex-col gap-3">
                        <p>url</p>
                        <a :href="project.url" target="_blank">{{ project.url }}</a>
                    </div>
                </div>
                <div class="project-images grid gap-[3em]">
                    <img :src="project.preview">
                    <img :src="project.mobImg">
                    <img :src="project.sketch">
                </div>
                <div class="project-desc">
                    <span>{{ project.desc }}</span>
                </div>
                
            </div>
            
        </div>
        <div class="next-project-div flex flex-col">
            <div class="flex justify-between items-center w-full">
                <span>More Projects</span>
                <div class="flex gap-[3em]">
                    <router-link :to="'/work/' + previousProjectId" v-if="!isFirstProject">
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7.5H16M1 7.5L7.25 1M1 7.5L7.25 14" stroke="#D397B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                    <router-link :to="'/work/' + nextProjectId" v-if="!isLastProject">
                        <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 7.5H16M16 7.5L9.75 1M16 7.5L9.75 14" stroke="#D397B1" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </router-link>
                </div>
            </div>
            <h2>{{ nextProjectTitle }}</h2>
        </div>
    </div>
</template>

<script scoped>
import { projects } from '@/data';

export default {
    name: "WorkDetails",
    props: {
        workId: String, 
    },
    data() {
        return {
            project: null, 
        };
    },
    created() {
        this.updateProject();
    },
    watch: {
        workId: 'updateProject', 
    },
    methods: {
        updateProject() {
            this.project = projects.find(project => project.id == this.workId);
        }
    },
    computed: {
        currentProjectIndex() {
            return projects.findIndex(project => project.id == this.workId);
        },
        nextProjectId() {
            const nextIndex = (this.currentProjectIndex + 1) % projects.length;
            return projects[nextIndex].id;
        },
        previousProjectId() {
            const prevIndex = (this.currentProjectIndex - 1 + projects.length) % projects.length;
            return projects[prevIndex].id;
        },
        nextProjectTitle() {
            if (this.isFirstProject) {
                return projects[this.currentProjectIndex + 1] ? projects[this.currentProjectIndex + 1].title : projects[projects.length - 1].title;
            } else if (this.isLastProject) {
                return projects[this.currentProjectIndex - 1] ? projects[this.currentProjectIndex - 1].title : projects[0].title;
            } else {
                return projects[this.currentProjectIndex + 1].title; 
            }
        },
        isFirstProject() {
            return this.currentProjectIndex === 0;
        },
        isLastProject() {
            return this.currentProjectIndex === projects.length - 1;
        },
    },
}
</script>

<style scoped>
#details-page{
    background: #F8F7F5;
    color: #1E1E1E;
    position: relative;
    display: flex; 
    flex-direction: column;
    height: 100%;
    min-height: 100vh;
}
#work-details{
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-inline: clamp(5em, 50em, 16vw);
}
.work-details-content{
    gap: 50px;
    padding-top: 15vh;
    padding-bottom: 24vh;
}
.back-arrow{
    position: fixed;
    top: 6vh;
    left: 4.25vw;
    width: 10vw;  
    height: auto; 
}
.back-arrow svg {
    width: 100%;
    height: 100%; 
    max-height: 45px;
}
.project-type span{
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.6px;
    text-transform: uppercase;
}
.project-title h1{
    font-size: 70px;
    font-weight: 400;
    letter-spacing: 5.6px;
}
.client-info{
    font-size: 24px;
    font-weight: 400;
}
.project-overview{
    gap: 4em;
}
.project-overview p{
    font-size: 13px;
    font-weight: 600;
    letter-spacing: 2.24px;
    text-transform: uppercase;
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-skip-ink: auto;
    text-decoration-thickness: auto;
    text-underline-offset: auto;
    text-underline-position: from-font;
}
.project-overview span,a{
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.9px;
}
.project-overview a:hover{
    text-decoration: underline;
}
.project-images img{
    border-radius: 10px;
}
.mobImgs{
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5em;
}
.mobImgs img{
    max-width: 300px;
    height: auto;
    width: 100%;
}
.sketch{
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5em;
}
.sketch img{
    max-height: 500px;
    height: 100%;
    width: auto;
}
.project-desc span{
    text-align: justify;
    font-size: 14px;
    letter-spacing: 0.05rem;
}
.next-project-div{
    position: absolute;
    bottom: 7vh;
    right: 6vw;
    width: 25.75rem;
    height: 8.3125rem;
    padding: 1.875rem 2.5rem;
    gap: 0.625rem;
    border-radius: 0.625rem;
    background: #1E1E1E;
    color: #F8F7F5;
}
.next-project-div span{
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.045rem;
}
.next-project-div h2{
    font-size: 1.75rem;
    font-weight: 500;
    letter-spacing: 0.105rem;
}
@media screen and (max-width: 512px){
    .work-details-content{
        gap: 45px;
    }
    .next-project-div{
        bottom: 0;
        right: 0;
        width: auto;
        gap: 1.25em;
        left: 0;
        border-radius: 0;
    }
    .project-title h1{
        font-size: 40px;
        letter-spacing: 2px;
    }
    .project-type{
        margin-bottom: 0;
    }
    .client-info {
        font-size: 18px;
    }
    .project-overview{
        gap: 1.5em;
    }
    .project-images{
        gap: 2em;
    }
}
</style>