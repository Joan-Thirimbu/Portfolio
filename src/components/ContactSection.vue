<template>
    <section class="py-[4.9em]" id="contact">
        <div class="contact-content flex justify-between">
            <div class="contacts flex flex-col gap-[2.125em]">
                <img src="../assets/avatar.webp">
                <h1>Thank You.</h1>
                <span>Need a beautiful, well-structured website that you can own and maintain yourself? Get in touch.</span>
                <div class="socials">
                    <div class="mail">
                        <a href="mailto:joanwangare3@gmail.com">joanwangare3@gmail.com</a>
                    </div>
                    <ul class="flex">
                        <li class="links"><a href="https://www.linkedin.com/in/joan-thirimbu-969008231/" target="_blank">LinkedIn</a></li>
                        <li class="links"><a href="https://github.com/Joan-Thirimbu/" target="_blank">Github</a></li>
                        <li class="links"><a href="https://www.instagram.com/joan.thirimbu/" target="_blank">Instagram</a></li>
                    </ul>
                </div>
            </div>
            <div class="line"></div>
            <div class="fun-facts-content flex flex-col items-center">
                <h2>Fun facts</h2>
                <div class="fun-facts">
                    <div class="hope text-end">
                        <img class="mb-2 ml-5" src="../assets/arrow.svg">
                        <div class="guitar">
                            <span>
                                I love music & I hope I learn playing the guitar some day!
                            </span>
                            <img src="../assets/guitar.svg">
                        </div>
                    </div>
                    <div class="cream">
                        <img class="mb-3 ml-5" src="../assets/icecream.svg">
                        <span>
                            Favourite snack is plain vanilla or mint-vanilla Ice-cream.
                        </span>
                    </div>
                    <div class="cook text-end">
                        <img class="mb-3" src="../assets/cook.svg">
                        <span>
                            I prefer home cooked meals to fast foods.
                        </span>
                    </div>
                    <div class="book">
                        <img class="mb-3" src="../assets/books.svg">
                        <span>
                            I enjoy reading books and learning new languages.
                        </span>
                    </div>
                    <div class="film flex items-center gap-4">
                        <img src="../assets/film.svg">
                        <span>
                            Okay, maybe i’m a movie buff.
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default{
    name: "ContactSection",
    components:{}
}
</script>

<style scope>
#contact{
    background-color: #1e1e1e;
    color: #f8f7f5;
}
.contact-content{
    margin-inline: clamp(3em, 50em, 12vw);
}
.fun-facts-content, .contacts{
    width: 45%;
}
.contacts img{
    width: 100%;
    max-width: 10.625rem;
    height: auto;
}
h1{
    font-size: 3rem;
    font-weight: 400;
    line-height: 3.3125rem; 
    letter-spacing: 0.3rem;
}
.mail a{
    font-size: 1.5rem;
    font-weight: 400;
    position: relative;
    z-index: 1;
}
.mail a::after{
    content: '';
    position: absolute;
    left: 0;
    bottom: 12px;
    width: 100%;
    height: 7px;
    z-index: -1;
    background-color: #d397b1;
}
.mail svg{
    display: inline-block;
}
.links{
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}
.links:not(:last-child)::after {
    content: "/";
    color: #F8F7F5;
    text-decoration: none;
    padding-inline: .3em;
}
.links a {
    text-decoration-line: underline; 
}
.line{
    content: "";
    display: block;
    background: #F8F7F5;
    width: 1px;
}
h2{
    font-size: 48px;
    font-weight: 400;
    line-height: 53px;
    letter-spacing: 4.8px;
}
.fun-facts{
    font-family: Mynerve;
    font-size: 12px;
    font-weight: 400;
    letter-spacing: 0.78px;
    position: relative;
    width: 100%;
    height: 100%;
    min-height: 400px;
}
.hope{
    position: absolute;
    right: 4vw;
    width: 100%;
    max-width: 180px;
}
.guitar{
    position: relative;
}
.guitar img{
    position: absolute;
    right: 0;
}
.cream{
    position: absolute;
    top: 25%;
    width: 100%;
    max-width: 210px;
    left: 6vw;
}
.cook{
    position: absolute;
    right: 0;
    top: 50%;
    width: 100%;
    max-width: 200px;
}
.book{
    position: absolute;
    bottom: 15%;
    width: 100%;
    max-width: 265px;
}
.film{
    position: absolute;
    bottom: 0;
    right: 7vw;
}
@media screen and (max-width: 1024px){
    .contact-content {
        display: grid;
        grid-template-columns: 1fr; 
        gap: 4em; 
    }
    .contacts {
        order: 3; 
        align-items: center;
        text-align: center;
    }
    .socials{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    .line{
        order: 2;
        width: 100%;
        height: 1px;
    }
    .fun-facts-content, .contacts{
        width: 100%;
    }
    .fun-facts-content {
        order: 1; 
        align-items: center;
    }
}
@media screen and (max-width: 512px){
    .fun-facts-content{
        margin-bottom: 4em;
    }
    .cream{
        top: 30%;
    }
    .cook{
        top: 65%;
    }
    .book{
        bottom: 0;
    }
    .film{
        bottom: -20%;
    }
}
</style>