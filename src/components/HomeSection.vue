<template>
    <section id="home">
        <div class="flex h-screen items-center justify-center">
            <div class="px-14 identifier text-center">
                <h1>Hi, my name is Joan Thirimbu</h1>
                <p class="mt-2 px-6">I'm a Software Developer & UI Designer</p>
                <svg xmlns="http://www.w3.org/2000/svg" width="58" height="54" viewBox="0 0 58 54" fill="none">
                    <path d="M56.0794 1.86936C55.3562 16.3565 52.109 31.4072 40.1079 40.9337C33.6998 46.0205 24.0272 46.9429 21.5051 37.5226C19.7873 31.1067 20.5831 20.1396 27.8847 17.4376C35.9478 14.4538 26.9677 32.0259 25.6596 33.7282C19.537 41.6963 12.4727 46.4538 3.65521 50.8447C0.352196 52.4896 2.48146 52.9487 4.9288 52.7474C7.05223 52.5728 9.46295 52.3179 11.4644 51.5861C12.0749 51.3629 7.93199 51.9695 7.28319 52.097C4.50102 52.6435 1.26758 53.1647 1.32549 49.3908C1.33483 48.7844 1.90866 43.1534 2.75851 43.0274C3.2007 42.9618 4.89369 46.6112 5.23882 47.0594C7.48055 49.9699 9.47287 50.9851 13.0495 50.8701" stroke="black" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
            <div class="box">
                <div class="scoll-indicator justify-center flex">
                    <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.292897 0.296507C-0.0976325 0.687017 -0.0976325 1.32022 0.292897 1.71072L5.18509 6.59812C5.96629 7.37852 7.23209 7.37822 8.01289 6.59752L12.9032 1.70712C13.2938 1.31662 13.2938 0.683417 12.9032 0.292897C12.5127 -0.0976325 11.8795 -0.0976325 11.489 0.292897L7.30339 4.47852C6.91289 4.86912 6.27969 4.86902 5.88919 4.47852L1.70711 0.296507C1.31659 -0.0940228 0.683417 -0.0940228 0.292897 0.296507Z" fill="#F8F7F5"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: "HomeSection",
    components:{

    }
}
</script>

<style scoped>
h1{
    color: #F8F7F5;
    font-family: Mynerve;
    font-size: 80px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 4.2px;
}
p{
    color: #1E1E1E;
    font-family: Eczar;
    font-size: 40px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 3.6px;
}
.identifier svg{
    position: absolute;
    width: auto;
    height: auto;
    max-width: 40px;
    max-height: 55.815px;
    min-width: 37px;
    right: 26%;
    top: 50%;
}
.box{
    position: absolute;
    bottom: 3rem;
}
.scoll-indicator svg{
    animation: moveDown 1s ease-in-out infinite;
}
.scoll-indicator{
    width: 36px;
    height: 48px;
    background: #64786B;
    background-image: url(./../assets/grainy.webp);
    border-radius: .6em;
    overflow: hidden;
}
.scoll-indicator::after, .scoll-indicator::before{
    content: '';
    position: absolute;
    height: 112%;
    width: 112%;
    background-image: conic-gradient(from var(--angle), transparent 30%, #F8F7F5);
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    z-index: -1;
    border-radius: 10px;
    animation: 2s spin linear infinite;
}
.scoll-indicator::before{
  filter: blur(1.5rem);
  opacity: 0.5;
}
@property --angle{
  syntax: "<angle>";
  initial-value: 0deg;
  inherits: false;
}
@keyframes moveDown {
    0% {
      margin-top: .7em;
    }
    50% {
        margin-top: 1.8em;
    }
    100% {
        margin-top: .7em;
    }
}
@keyframes spin{
  from{
    --angle: 0deg;
  }
  to{
    --angle: 360deg;
  }
}
@media screen and (min-width: 767px) and (max-width: 1280px){
    h1{
        font-size: 3.5em;
    }
    p{
        font-size: 1.8em;
    }
    .identifier svg{
        right: calc(17% + 3em);
        top: 49.25%;
    }
}
@media screen and (min-width: 513px) and (max-width: 768px){
    h1{
        font-size: 3em;
        padding-bottom: 24px;
    }
    p{
        font-size: 1.5em;
        letter-spacing: 2.6px;
    }
}
@media screen and (max-width: 512px){
    h1{
        font-size: 40px;
        padding-bottom: 22px;
        letter-spacing: 3.2px;
    }
    p{
        font-size: 1.1em;
        letter-spacing: 2.6px;
    }
    .identifier{
        padding-inline: calc(var(--spacing) * 6);
    }
}
</style>