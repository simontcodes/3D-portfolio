import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
  twitter,
  car,
  contact,
  css,
  estate,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  pricewise,
  react,
  redux,
  sass,
  snapgram,
  summiz,
  tailwindcss,
  threads,
  typescript,
  ford,
  galac,
  grand_luxe,
  freelance
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Full Stack Web Developer",
    company_name: "Starbucks",
    icon: freelance,
    iconBg: "#accbe1",
    date: "March 2020 - April 2021",
    points: [
      "Collaborated with remote teams using Agile methodologies and leveraging tools like Slack, Figma and Jira to streamline project management and ensure efficient teamwork.",
      "Developed a feature for registering sales and managing inventory through CRUD operations.",
      "Enabled the store to optimize inventory and increase revenue through valuable insights and analytics into sales performance.",
      "Developed features for managing clients, booking appointments, and making payments resulting in increased productivity.",
      "Built in analytics and reporting features to provide valuable insights into client and payment data.",
      "Facilitated daily stand-up meetings and weekly sprint retrospectives to continuously improve processes and ensure optimal functionality.",
    ],
  },
  {
    title: "Banquet Captain",
    company_name: "The Grand Luxe Event Boutique",
    icon: grand_luxe,
    iconBg: "#fbc3bc",
    date: "Apr 2017 - Feb 2020",
    points: [
      "Managed logistics and timelines for events to meet client specifications and expectations resulting in increased referrals rates.",
      "Enforced service and performance standards to provide a high-quality environment devoted to customer satisfaction.",
      "Liaised with venue management and internal teams to ensure seamless event execution.",
    ],
  },
  {
    title: "Software Technician",
    company_name: "Galac Software",
    icon: galac,
    iconBg: "#b7e4c7",
    date: "Feb 2012 - Oct 2013",
    points: [
      "Ensured optimal software and network performance by conducting regular maintenance, troubleshooting and monitoring, providing timely and effective support to clients, and building long-term relationships with them.",
      "Proactively identified and resolved potential issues before they could affect clients, reducing downtime and enhancing system reliability and performance.",
    ],
  },
  {
    title: "Information Technology Help Desk",
    company_name: "Tae Motors CA",
    icon: ford,
    iconBg: "#a2d2ff",
    date: "Oct 2007 - Oct 2013",
    points: [
      "Collaborated with the IT team to implement changes and updates to the dealership's sales system, ensuring the system remained current and efficient.",
      "Maintained documentation of sales system processes and procedures, ensuring accuracy and consistency.",
      "Designed and implemented an improved process to streamline service appointments that allowed the team to take additional effective clients per day and approve quotes digitally.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Twitter",
    iconUrl: twitter,
    link: "https://www.twitter.com/simon_codes",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/simontcodes",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/simon-tang-arias/",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Amazon Price Tracker",
    description:
      "Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.",
    link: "https://github.com/adrianhajdin/pricewise",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "Full Stack Threads Clone",
    description:
      'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
    link: "https://github.com/adrianhajdin/threads",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Car Finding App",
    description:
      "Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.",
    link: "https://github.com/adrianhajdin/project_next13_car_showcase",
  },
  {
    iconUrl: snapgram,
    theme: "btn-back-pink",
    name: "Full Stack Instagram Clone",
    description:
      "Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.",
    link: "https://github.com/adrianhajdin/social_media_app",
  },
  {
    iconUrl: estate,
    theme: "btn-back-black",
    name: "Real-Estate Application",
    description:
      "Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.",
    link: "https://github.com/adrianhajdin/projects_realestate",
  },
  {
    iconUrl: summiz,
    theme: "btn-back-yellow",
    name: "AI Summarizer Application",
    description:
      "App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.",
    link: "https://github.com/adrianhajdin/project_ai_summarizer",
  },
];
