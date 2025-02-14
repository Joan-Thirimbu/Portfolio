<template>
    <section class="py-[90px]" id="about">
        <div class="about-content">
            <h1 class="text-center">About</h1>
            <div class="info">
                <img src="../assets/profile.webp"/>
                <div class="info-text" v-html="about"></div>
            </div>
            <div class="role-cards">
                <div class="card" v-for="role in roles" :key="role.id">
                    <div class="card-title">
                        <img :src="role.svg">
                        <div class="title-text">
                            <span class="heading">{{ role.title }}</span>
                            <span class="sub-title">{{ role.heading }}</span>
                        </div>
                    </div>
                    <div class="role-desc">
                        <span class="element">&lt;/h4&gt;</span>
                        <p>{{ role.info }}</p>
                        <span class="element">&lt;/h4&gt;</span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { roles, aboutInfo } from '@/data.js';

export default{
    name: "AboutSection",
    data(){
        return{
            roles,
            about: aboutInfo,
        }
    },
    components:{},
}
</script>

<style scoped>
.about-content{
    margin-right: clamp(3em, 50em, 8.5vw) !important;
    margin-inline: clamp(3em, 50em, 12vw);
}
h1{
    font-size: 46px;
    font-weight: 700;
}
.info{
    padding-top: 50px;
    display: grid;
    gap: 5rem;
    grid-template-columns: repeat(auto-fit, minmax(336px, 1fr));
    align-items: center;
}
.info img{
    width: 100%;
    max-width: 492px;
    height: auto;
}
::v-deep .info p{
    text-align: justify;
}
::v-deep .key{
    color: #1E1E1E;
    font-family: "Mynerve";
    font-style: normal;
    font-weight: 600;
    line-height: normal;
}
.role-cards{
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    padding-top: 100px;
    margin: 0;
}
.card{
    display: flex;
    padding: 40px 30px;
    flex-direction: column;
    gap: 22px;
    border: 1px solid #F8F7F5;
    height: 100%;
}
.card-title{
    display: flex;
    align-items: center;
    gap: 24px;
}
.card-title img{
    width: auto;
    max-width: 36px;
    min-width: 24px;
    height: auto;
}
.title-text{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}
.title-text span{
    font-size: 22px;
    font-weight: 600;
    line-height: 32px;
    text-decoration: none;
    padding-inline: 5px;
}
.heading{
    position: relative;
}
.heading::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 8px;
    background-color: #d397b1;
    transform: translateY(-7px);
    z-index: -1;
}
.element{
    font-size: 12px;
    color: #1E1E1E;
}
.role-desc p{
    text-align: unset;
    position: relative;
    padding-left: 40px;
    font-size: 16px;
    font-weight: 600;
    letter-spacing: 0.64px;
}
.role-desc p::after{
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 1px;
    height: 100%;
    margin-left: 15px;
    background-color: #1E1E1E;
}
@media screen and (min-width: 961px){
    h1{
        font-size: 56px;
    }
    .info img{
        justify-self: center;
    }
}
@media screen and (max-width: 960px){
    .info{
        justify-items: center;
        grid-template-columns: 1fr;
    }
    .role-cards{
        padding-top: 60px;
    }
}
@media screen and (max-width: 512px){
    .info{
        gap: 3rem;
    }
    .role-cards{
        grid-template-columns: 1fr;
        padding-top: 60px;
    }
    .title-text span{
        font-size: 20px;
    }
}
</style>