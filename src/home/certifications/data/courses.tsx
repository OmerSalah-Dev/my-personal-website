import type React from "react";
import {icons} from "./icons"


export interface Course {
  id: string;
  glowClass: string;
  logo: React.ReactElement;
  category: string;
  categoryDescription: string;
  title: string;
  description: string;
  rating: number;
  reviews: string;
  provider: string;
  providerIcon: React.ReactElement;
  duration: string;
  dateCompleted: string;
}

const coursesData: Course[] = [

   {
    id: "youtube-html-1",
    glowClass: "glow-html",
    logo: icons.html,
    category: "HTML & CSS",
    categoryDescription: "Frontend Development",
    title: "HTML & CSS Full Course - Modern Web Design",
    description: "Learned CSS Grid and Flexbox for layouts, responsive design with media queries, and positioning techniques. Built a responsive YouTube clone with dynamic video grids, sidebar navigation, and thumbnail overlay elements.",
    rating: 4.5,
    reviews: "(Free Course)",
    provider: "YouTube",
    providerIcon: icons.youtube,
    duration: "6.5 hours",
    dateCompleted: "October 2024",
  },

    {
    id: "youtube-react-1",
    glowClass: "glow-js",
    logo: icons.javascript,
    category: "JavaScript",
    categoryDescription: "Frontend Development",
    title: "JavaScript Full Course - ES6+ & Modern Web Apps",
    description: "Learned modern JavaScript with ES6+ modules, classes, async operations, and DOM manipulation. Built an Amazon clone with product rendering, shopping cart, search functionality, and local storage.",
    rating: 4.5,
    reviews: "(Free Course)",
    provider: "YouTube",
    providerIcon: icons.youtube,
    duration: "22 hours",
    dateCompleted: "February 2025",
  },
  
  {
    id: "udemy-node-1",
    glowClass: "glow-nodejs",
    logo: icons.node,
    category: "Node.js",
    categoryDescription: "Backend Development",
    title: "Node.js & Express: Full-Stack Web Development with MongoDB",
    description: "Learned backend development with Node.js and Express, building secure APIs and real-time features. Built a full e-commerce backend with authentication, payments, and database management.",
    rating: 4.6,
    reviews: "(53,973 Reviews)",
    provider: "Udemy",
    providerIcon: icons.udemy,
    duration: "45.5 hours",
    dateCompleted: "November 2025",
  },
];

export default coursesData;