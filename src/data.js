import design from '../src/assets/ui.svg';
import computer from '../src/assets/computer.svg';
import code from '../src/assets/code.svg';
import taskforge from '../src/assets/taskforge.webp';
import afripesa from '../src/assets/afripesa.webp';
import finsys from '../src/assets/finsys.webp';
import deskTaskforge from '../src/assets/desktop-taskforge.png';
import mobTaskforge from '../src/assets/mobile-taskforge.png';
import sketchTaskforge from '../src/assets/sketch-taskforge.png';

export const roles = [
    {
        id: '1',
        title: 'Software',
        heading: 'Development',
        info: 'Experienced in OOP, Event-Driven and Component-based development: Python, PhP, Javascript, TypeScript',
        svg: computer,
    },
    {
        id: '2',
        title: 'Frontend Dev',
        heading: 'Vue, Angular',
        info: 'Over 2 years experience of development in HTML, CSS. JS, PHP, Vue and Angular frameworks.',
        svg: code,
    },
    {
        id: '3',
        title: 'UX/UI Design',
        heading: 'Figma, XD',
        info: 'Passionate about UI/UX. Over 3 years experience designing with Figma and Adobe XD.',
        svg: design,
    },
];

export const aboutInfo = `<p>As a <span class="key">Frontend Focused Developer</span> and <span class="key">UX/UI Designer</span> based in Kenya, I get to combine my love for technology with my passion for art and design.</p><br><p>I attained my Bachelor’s degree in <span class="key">Software Development</span> from <span class="key">KCA University</span>, and I am currently pursuing the <span class="key">Google UX Design Certificate</span> on <span class="key">Coursera</span>.</p><br><p>I enjoy using my creativity and problem-solving skills to create digital experiences that not only look great but also work seamlessly for the user. When Im not designing or coding, you can usually find me exploring the city or my neighbourhood in search for inspiration while taking in the sceneries. I believe that continuous learning is the key to success, and ï'm always on the look out for fresh challenges to keep me motivated and engaged.</p>`;

export const projects = [
    {
        id: 1,
        image: taskforge,
        title: 'TaskForge',
        type: 'web design and development',
        client: 'Website development for Creswave Limited – a software development company founded in 2016 headquartered in Nairobi, Kenya.',
        role: 'Front End Developer',
        duty: 'Web Development using Angular',
        url: 'https://joan-thirimbu.github.io/TaskForge/',
        desc: "I'm generally not a big fan of developing anything without knowing the finer details of a projects. I love to jump into Figma or pick a book to sketches some wireframes. In cases where I have time constrains this saves me from doing duplicate work and overall makes the project go faster which in this case they were (lucky me).",
        preview: deskTaskforge,
        mobImg: mobTaskforge,
        sketch: sketchTaskforge,
    },
    {
        id: 2,
        image: afripesa,
        title: 'AfriPesa',
        type: 'mobile design',
    },
    {
        id: 3,
        image: finsys,
        title: 'Finsys Banking',
        type: 'web design and development',
    },
];

export const positions = [
    {
        id: '1',
        title: 'Junior Full-stack developer & Lead UI designer',
        period: 'Jan 2023 - Present',
        location: 'Nairobi, Kenya',
        url: 'https://finsys-group.com/',
        desc: 'I have spearheaded the development of innovative web solutions, leveraging a broad range of technologies such as Vue.js, Angular, Django, and CodeIgniter. My role combines technical expertise with creative design, ensuring that every project meets functional needs while also providing an exceptional and engaging user experience.',
        tools: ['Figma', 'VueJS', 'Codeigniter', 'Angular', 'Django']
    },
    {
        id: '2',
        title: 'Software Developer Attache & Intern (UI/UX Design)',
        period: 'May 2022 - Dec 2022',
        location: 'Nairobi, Kenya',
        url: 'https://eclectics.io/',
        desc: "As a UX/UI Designer and Graphic Design Intern, I was tasked with crafting user-focused UI designs for multiple projects, improving both user experience and visual aesthetics. I also designed eye-catching graphics, such as posters and banners, to support the company's marketing and promotional initiatives. Furthermore, I gained foundational experience in iOS development, becoming familiar with the development environment and essential tools.",
        tools: ['Adobe XD', 'Figma', 'Adobe Photoshop', 'Swift']
    },
    {
        id: '1',
        title: 'IT Apprentice',
        period: 'May 2021 - Aug 2021',
        location: 'Nakuru, Kenya',
        url: 'https://ubunifu.io/',
        desc: 'During my time as an IT Apprentice at Ubunifu Learning Hub, I addressed a range of computer-related issues, offering technical support and solutions to maintain seamless operations. In addition, I taught computer application units, equipping learners with vital skills and knowledge to improve their technological proficiency.',
        tools: ['Windows', 'LAN-WAN', 'Help Desk Support', 'Maintainace', 'Hardware']
    },
];