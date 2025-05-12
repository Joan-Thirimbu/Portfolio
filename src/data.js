import design from '../src/assets/ui.svg';
import computer from '../src/assets/computer.svg';
import code from '../src/assets/code.svg';
import taskforge from '../src/assets/taskforge.webp';
import afripesa from '../src/assets/afripesa.webp';
import finsys from '../src/assets/finsys.webp';
import deskTaskforge from '../src/assets/desktop-taskforge.png';
import mobTaskforge from '../src/assets/mobile-taskforge.png';
import sketchTaskforge from '../src/assets/sketch-taskforge.png';
import wireframeafripesa from '../src/assets/wireframe-afripesa.png';
import sketchafripesa from '../src/assets/sketch-afripesa.png';
import deskFbs from '../src/assets/desktop-fbs.png';
import mobFbs from '../src/assets/mobile-fbs.png';
// import sketchFbs from '../src/assets/sketch-taskforge.png';

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
        desc: "I'm generally not a big fan of developing anything without knowing the finer details of a projects. I love to jump into Figma or pick a book to sketches some wireframes. In cases where I have time constrains this saves me from doing duplicate work and overall makes the project go faster which in this case they were (lucky me) 😜.",
        preview: deskTaskforge,
        mobImg: mobTaskforge,
        sketch: sketchTaskforge,
    },
    {
        id: 2,
        image: afripesa,
        title: 'AfriPesa',
        type: 'mobile design',
        client: 'Mobile UI/UX designing for AfriPesa – a digital financial services company focused on providing fast, secure, and accessible mobile payments and money transfers across Africa.',
        role: 'UI/UX Designer',
        duty: 'UI/UX Design for Mobile Application',
        url: 'https://www.figma.com/proto/D2WgZDjFBWgJFqXx4NqHkz/Money-Transfer-app?page-id=0%3A1&node-id=1-398&p=f&viewport=725%2C517%2C0.13&t=8c1CcUh9dU1UpI0N-1&scaling=scale-down&content-scaling=fixed',
        desc: "In this UI/UX design project, I was responsible for creating the entire mobile user interface, ensuring a seamless and engaging user experience. Over the course of 1-2 weeks, I utilized Figma to design intuitive, visually appealing layouts that ensure usability and consistency across the app. My work involved detailed design iterations, ensuring that the mobile UI is not only functional but also aligns with the brand's aesthetic. The project required close attention to user flow, responsiveness, and accessibility, resulting in a comprehensive mobile UI that enhances the overall user experience.",
        preview: wireframeafripesa,
        sketch: sketchafripesa,
    },
    {
        id: 3,
        image: finsys,
        title: 'Finsys Banking',
        type: 'Web & Mobile Design and Development',
        client: 'Web & Mobile UI designing and development for Finsys Banking Systems – a cloud-based, scalable core banking platform offering modular solutions for banks, microfinance institutions, and fintechs across Africa.',
        role: 'UI/UX Designer & Front-end Developer',
        duty: 'UI/UX Design for Web & Mobile Application',
        url: 'https://finsysbanking.com/',
        desc: "As the UI/UX Lead, I was tasked with updating the user interface of an existing banking system and designing a mobile interface. I worked closely with cross-functional teams to enhance usability, accessibility, and visual design. The mobile interface was created to provide a seamless, secure, and intuitive banking experience, aligning with modern design trends. My role included leading the design process, conducting user testing, and refining the user journey to deliver a polished and effective product.",
        desc2: "The project included some really fun animations which took me some time to get right! But I think we nailed it in the end 😎.",
        preview: deskFbs,
        mobImg: mobFbs,
    },
];

export const positions = [
    {
        title: 'Junior Full-stack developer & Lead UI designer',
        period: 'Jan 2023 - Present',
        location: 'Nairobi, Kenya',
        url: 'https://finsys-group.com/',
        desc: 'I have spearheaded the development of innovative web solutions, leveraging a broad range of technologies such as Vue.js, Angular, Django, and CodeIgniter. My role combines technical expertise with creative design, ensuring that every project meets functional needs while also providing an exceptional and engaging user experience.',
        tools: ['Figma', 'VueJS', 'Codeigniter', 'Angular', 'Django']
    },
    {
        title: 'Software Developer Attache & Intern (UI/UX Design)',
        period: 'May 2022 - Dec 2022',
        location: 'Nairobi, Kenya',
        url: 'https://eclectics.io/',
        desc: "As a UX/UI Designer and Graphic Design Intern, I was tasked with crafting user-focused UI designs for multiple projects, improving both user experience and visual aesthetics. I also designed eye-catching graphics, such as posters and banners, to support the company's marketing and promotional initiatives. Furthermore, I gained foundational experience in iOS development, becoming familiar with the development environment and essential tools.",
        tools: ['Adobe XD', 'Figma', 'Adobe Photoshop', 'Swift']
    },
    {
        title: 'IT Apprentice',
        period: 'May 2021 - Aug 2021',
        location: 'Nakuru, Kenya',
        url: 'https://ubunifu.io/',
        desc: 'During my time as an IT Apprentice at Ubunifu Learning Hub, I addressed a range of computer-related issues, offering technical support and solutions to maintain seamless operations. In addition, I taught computer application units, equipping learners with vital skills and knowledge to improve their technological proficiency.',
        tools: ['Windows', 'LAN-WAN', 'Help Desk Support', 'Maintainace', 'Hardware']
    },
];