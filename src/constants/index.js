import {
  c,
  python,
  java,
  cpp,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  git,
  threejs,
  employeeManagementSystem,
  hotelManagementSystem,
  gymWebsite,
  cricketGame,
  dsaPractice,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Works",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: c },
  { title: "C++", icon: cpp },
  { title: "Python", icon: python },
  { title: "Java", icon: java },
];

export const technologies = [
  { name: "HTML 5", icon: html },
  { name: "CSS 3", icon: css },
  { name: "JavaScript", icon: javascript },
  { name: "React JS", icon: reactjs },
  { name: "Tailwind CSS", icon: tailwind },
  { name: "Node JS", icon: nodejs },
  { name: "Three JS", icon: threejs },
  { name: "git", icon: git },
];

export const projects = [
  {
    name: "Employee Management System",
    description:
      "Developed a web-based Employee Management System using React.js, Tailwind CSS, Context API, and Local Storage. Implemented authentication, employee record management, and role-based access.",
    tags: [
      { name: "React.js", color: "blue-text-gradient" },
      { name: "Tailwind CSS", color: "green-text-gradient" },
      { name: "Context API", color: "pink-text-gradient" },
      { name: "Local Storage", color: "yellow-text-gradient" },
    ],
    image: employeeManagementSystem,
    source_code_link:
      "https://github.com/NpSingh12/employee-management-system",
    demo_link: "https://npsingh12.github.io/employee-management-system/",
    repo_link:
      "https://github.com/NpSingh12/employee-management-system",
  },
  {
    name: "Hotel Management System",
    description:
      "Developed a full-stack hotel booking system using PHP, MySQL, HTML, CSS, and JavaScript. Implemented room booking, customer management, and automated billing.",
    tags: [
      { name: "PHP", color: "blue-text-gradient" },
      { name: "MySQL", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
      { name: "CSS", color: "yellow-text-gradient" },
      { name: "JavaScript", color: "red-text-gradient" },
    ],
    image: hotelManagementSystem,
    source_code_link:
      "https://github.com/npsingh12.github.io/Hotel-Management-System",
    demo_link: "https://npsingh12.github.io/Hotel-management/",
    repo_link: "https://github.com/NpSingh12/Hotel-management",
  },
  {
    name: "Gym Website",
    description:
      "Built a responsive Gym Website using HTML, CSS, and JavaScript. Designed a modern UI with interactive animations for an engaging user experience.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "JavaScript", color: "pink-text-gradient" },
    ],
    image: gymWebsite,
    source_code_link: "https://github.com/npsingh12.github.io/Gym-Website",
    demo_link: "https://npsingh12.github.io/GYM-PROJECT/",
    repo_link: "https://github.com/NpSingh12/GYM-PROJECT",
  },
  {
    name: "Cricket Game (Bat Ball Game)",
    description:
      "Developed a JavaScript-based cricket game with dynamic scoring and interactive mechanics. Used CSS animations for enhanced gameplay.",
    tags: [
      { name: "JavaScript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
    ],
    image: cricketGame,
    source_code_link: "https://github.com/npsingh12.github.io/Bat-Ball-Game",
    demo_link: "https://npsingh12.github.io/BatBall-Game/",
    repo_link: "https://github.com/NpSingh12/BatBall-Game",
  },
  {
    name: "Data Structures and Algorithms Practice",
    description:
      "Maintained a GitHub repository showcasing solutions to X+ DSA problems on LeetCode and CodeChef. Focused on arrays, recursion, sorting algorithms, and problem-solving techniques.",
    tags: [
      { name: "DSA", color: "blue-text-gradient" },
      { name: "LeetCode", color: "green-text-gradient" },
      { name: "CodeChef", color: "pink-text-gradient" },
    ],
    image: dsaPractice,
    source_code_link: "https://github.com/npsingh12/DSA-Practice-Repository",
    demo_link: "https://github.com/NpSingh12/DSA",
    repo_link: "https://github.com/NpSingh12/DSA",
  },
];
