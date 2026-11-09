/**
 * Site content — sourced from resume (Oct 30, 2025), public GitHub repos,
 * and the existing portfolio. Do not invent metrics or roles beyond these sources.
 *
 * TODO: Confirm and feature additional projects if public repos become available:
 * - AI Invoice Assistant
 * - World Cup Bracket Prediction Platform
 */

export const site = {
  name: "Efstratios Koulouris",
  shortName: "Strati Koulouris",
  monogram: "SK",
  title: "Software Engineer / Backend & Full-Stack Developer",
  email: "strati.koulouris@gmail.com",
  location: "Illinois, United States",
  github: "https://github.com/StratiDaGoat",
  linkedin: "https://www.linkedin.com/in/efstratioskoulouris/",
  resume: "./assets/Efstratios-Koulouris-Resume.pdf",
  canonical: "https://efstratioskoulouris.com/",
};

export const projects = [
  {
    id: "berwyn-fruit-market",
    name: "Berwyn Fruit Market",
    tagline: "Production website for a local grocery and butcher shop.",
    status: "Live",
    image: "./assets/berwyn-fruit-market.jpg",
    imageAlt:
      "Berwyn Fruit Market website homepage showing produce and weekly specials",
    description:
      "Designed and built a responsive marketing site for Berwyn Fruit Market to improve online visibility and support in-store traffic. The site presents weekly specials, store information, and a clear path for customers to engage with the business on any device.",
    technologies: ["TypeScript", "React", "SCSS", "Vite", "Vercel"],
    github: "https://github.com/StratiDaGoat/berwyn-fruit-market",
    live: "https://www.berwynfruitmarket.com/",
  },
  {
    id: "aniwatchlist",
    name: "AniWatchList",
    tagline: "Full-stack anime tracker with its own catalog and user accounts.",
    status: "Live",
    image: "./assets/aniwatchlist.jpg",
    imageAlt:
      "AniWatchList homepage with an anime search bar and a featured show banner",
    description:
      "Built a web app for tracking anime series and movies to replace a notes-app watchlist. Users sign up, search the site's own catalog of 2,800+ titles, track episode and runtime progress, and organize shows into Currently Watching and Completed, with trending, airing, and Continue Watching sections on the home page.",
    technologies: [
      "TypeScript",
      "Next.js",
      "React",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
      "Auth.js",
    ],
    // Repository is private
    github: null,
    live: "https://aniwatchlist.com",
  },
  {
    id: "guitar-inventory",
    name: "Guitar Inventory",
    tagline: "Full-stack inventory app with Java APIs and PostgreSQL.",
    status: "Completed",
    // TODO: Add project screenshot when available
    image: null,
    description:
      "Built a web application for managing guitar inventory—brand, model, year, and price—with a React frontend and Java REST APIs backed by PostgreSQL.",
    technologies: [
      "Java",
      "React",
      "JavaScript",
      "HTML",
      "CSS",
      "PostgreSQL",
      "REST APIs",
    ],
    // TODO: Add GitHub URL when this project repository is made public
    github: null,
    live: null,
  },
  {
    id: "data-visualization",
    name: "Full-Stack Data Visualization",
    tagline: "Interactive sports dashboard with Dockerized Python services.",
    status: "Completed",
    // TODO: Add project screenshot when available
    image: null,
    description:
      "Developed an interactive dashboard comparing career goals per season for Cristiano Ronaldo and Lionel Messi, integrating real-world sports data through APIs and presenting results with Dash and Plotly.",
    technologies: ["Python", "Dash", "Plotly", "REST APIs", "Docker"],
    // TODO: Add GitHub URL when this project repository is made public
    github: null,
    live: null,
  },
];

export const experience = [
  {
    id: "berwyn-work",
    company: "Berwyn Fruit Market",
    role: "Frontend Developer",
    location: "Berwyn, Illinois",
    dates: "August 2025 – Present",
    technologies: ["TypeScript", "React", "SCSS", "Vite"],
    bullets: [
      "Designed and shipped a responsive, high-performance website for a local grocery store to improve online visibility and support in-store sales.",
      "Built dynamic product and promotional sections with TypeScript and React for maintainable, component-based UI development.",
      "Improved loading performance for mobile users with lazy loading, image compression, and caching strategies.",
    ],
  },
  {
    id: "bitwise",
    company: "Bitwise Global Inc.",
    role: "Backend Developer Intern",
    location: "Schaumburg, Illinois",
    dates: "June 2024 – August 2024",
    technologies: ["Java", "Spring Boot", "MySQL", "JUnit", "Postman"],
    bullets: [
      "Developed and maintained backend APIs with Java, Spring Boot, and MySQL, supporting scalable structures that handled 100+ daily requests.",
      "Designed and implemented DTOs and Entity classes to keep data consistent and reliable across services.",
      "Tested APIs with Postman and JUnit, reaching 95% code coverage and resolving 20+ bugs that improved system stability.",
    ],
  },
  {
    id: "iu-ta",
    company: "Indiana University Luddy School",
    role: "Teaching Assistant — System Programming with C and Unix",
    location: "Bloomington, Indiana",
    dates: "January 2024 – May 2024",
    technologies: ["C", "Unix/Linux"],
    bullets: [
      "Graded assignments, quizzes, and exams for 75+ students and provided detailed feedback to support learning outcomes.",
      "Held weekly office hours supporting 10–15 students per session with debugging help and concept review.",
      "Led lab sessions on topics such as memory management and Unix processes, contributing to a reported 15% improvement in average class performance.",
    ],
  },
];

/** Technologies verified via resume, repositories, or existing portfolio. */
export const skills = {
  Languages: ["Java", "TypeScript", "JavaScript", "C", "Python", "SQL"],
  Backend: ["Spring Boot", "Node.js", "REST APIs", "Flask"],
  Frontend: ["React", "HTML", "CSS", "SCSS"],
  Databases: ["MySQL", "PostgreSQL"],
  "Tools & Platforms": [
    "Git",
    "Docker",
    "Kubernetes",
    "AWS",
    "Linux/Unix",
    "Postman",
    "IntelliJ IDEA",
    "VS Code",
  ],
  Testing: ["JUnit", "Postman"],
  Visualization: ["Plotly", "Dash"],
};

export const education = {
  school: "Indiana University",
  degree: "Bachelor of Science in Computer Science",
  minor: "Business Minor, Kelley School of Business",
  dates: "August 2021 – May 2025",
  honors: "Dean’s List, Fall 2022 and Fall 2023",
  coursework: [
    "Database Concepts",
    "Software Engineering for Info Systems",
    "Data Structures & Algorithms",
    "Computer Structures",
    "Object-Oriented Software Methods",
    "Distributed Systems",
  ],
};

export const about = {
  paragraphs: [
    "I’m Strati Koulouris, a Computer Science graduate from Indiana University with a Business minor from the Kelley School of Business. I focus on backend and full-stack engineering—building APIs, modeling data, and shipping web applications that solve real operational problems.",
    "Through internship work at Bitwise Global, teaching support in C and Unix, and shipping a live site for Berwyn Fruit Market, I’ve learned to connect technical decisions to business needs and to work clearly within a team. I’m looking for a software engineering role where I can contribute to reliable systems and keep growing as an engineer.",
  ],
};
