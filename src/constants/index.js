import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";
import project4 from "../assets/projects/project-4.png";
import project5 from "../assets/projects/project-5.png";

export const HERO_CONTENT = `I’m a final-year college student with one year of practical experience in web development. My expertise includes Python, Java, React JS, and foundational knowledge in Node.js. I’m proficient with tools like Vite, VS Code, and Git, and have experience with databases such as MySQL. Committed to continuous learning and professional growth, I aim to apply my skills to innovate and excel in a dynamic software development role. My goal is to contribute effectively to impactful projects and advance within the tech industry.`;

export const ABOUT_TEXT = `Driven by a passion for technology, I am a full stack developer with one year of hands-on experience. I excel in Python, Java, and SQL, and bring expertise in frontend technologies such as HTML, CSS, JavaScript, Bootstrap, and React JS. My backend skills include a foundational understanding of Node JS. Utilizing tools like Vite, VS Code, Git, and MySQL, I am committed to delivering innovative and high-quality solutions. My dedication to continuous learning ensures I stay at the forefront of technology, ready to tackle new challenges and contribute effectively.`;

export const EXPERIENCES = [
  {
    year: "Feb 2025 - Present",
    role: "Java Full Stack Developer Intern",
    company: "Global Quest Technologies",
    description: `Attended comprehensive training sessions covering Soft Skills, Aptitude, Core Java, and Advanced Java. Strengthened problem solving abilities by solving 50+ Data Structures and Algorithms DSA problems`,
    technologies: ["Core Java", "Advanced Java", "Spring Boot", "MySQL", "DSA"],
  },
  {
    year: "Jun 2024 - Aug 2024",
    role: "Full Stack Developer Intern",
    company: "Main Flow Services and Technologies",
    description: `Developed company webpage with about 4 type of sections used tools are
                  React.js, HTML, CSS, Bootstrap, and JavaScript.
                  Projects like Task Manager Application, Interactive Calculator and Product
                  based Web Pages.`,
    technologies: ["React.js", "Javascript", "Bootstrap", "HTML5", "CSS"],
  },
  {
    year: "Nov 2023 - Feb 2024",
    role: "Web Developer Intern",
    company: "NullClass",
    description: `Created an OverStackFlow clone, developed with JavaScript, React.js for
                  dynamic UIs, Redux for state management, and implemented secure
                  authentication.
                  React and Redux are used for smooth UI interactions and real-time updates,
                  enhancing user experience and application performance. Implemented
                  features such as question posting and user profiles.`,
    technologies: [
      "HTML5",
      "CSS",
      "Git",
      "Node.js",
      "Express.js",
      "MongooseJS",
    ],
  },
];

export const PROJECTS = [
  {
    title: "Wealth Management System",
    image: project1,
    description:
      "Developed a Wealth Management Platform for 100+ users, optimizing Prisma queries for 40% faster data retrieval and integrating Recharts for financial visualization, boosting engagement by 50%. Automated reports via Resend & React Email, saving 10+ hours/month, and built a scalable backend for seamless performance.",
    technologies: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Prisma",
      "Clerk",
      "Google Generative AI",
      "Radix UI",
      "Inngest",
      "Resend",
      "React Email",
    ],
    link: "https://wealth-git-main-vishnuemail96s-projects.vercel.app/",
  },
  {
    title: "Finance Company Website",
    image: project5,
    description:
      "Developed a dynamic web platform for a finance company with 4,000+ customers, improving user engagement by 30% through an attractive UI and structured service sections. Integrated Google Sheets for effortless content management, enhanced service accessibility, and streamlined hiring with Google Forms, boosting operational efficiency by 40%.",
    technologies: ["HTML", "CSS", "JavaScript", "React", "Google Integration"],
    link: "https://www.balasrithandayuthapanichits.com/",
  },
  {
    title: "Think Helper Pro AI",
    image: project2,
    description:
      "A modern AI application featuring a responsive interface with a recent tab, a new button, AI reviews, and a concise slogan. It efficiently answers all questions posed by users, ensuring an intuitive and interactive experience.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Google Generative AI SDK",
      "API Key",
    ],
    link: "https://think-helper-pro.vercel.app/",
  },
  {
    title: "Zen Market - E-commerce",
    image: project3,
    description:
      "Created Zen Market, a dynamic e-commerce website with product search, contact options, and integrated messaging functionality.",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://zen-mar-ket-e-commerce.vercel.app/",
  },
  {
    title: "Task Manager Application",
    image: project4,
    description:
      "Developed a task manager application featuring functionalities for adding items, deleting items, and tracking the number of projects done and finished.",
    technologies: ["HTML", "CSS", "JavaScript", "React"],
    link: "https://task-manager-kappa-henna.vercel.app/",
  },
];

export const CONTACT = {
  phoneNo: "+91-9159722776",
  address: "Tiruchirapalli,Tamil Nadu-601314 ",
};
