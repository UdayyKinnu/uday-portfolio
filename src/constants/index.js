import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tripguide,
    threejs,
    Easystepin,
    opiyum1,
    seller
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    // {
    //   name: "Node JS",
    //   icon: nodejs,
    // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "FrontEnd Developer (Intern)",
      company_name: "Easystepin",
      icon: Easystepin,
      iconBg: "#383E56",
      date: "Sep 2023 - Sep 2024",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    
  ];
  
  
  const projects = [
    {
      name: "Opiyum",
      description:
        "The platform offers a wide range of men's and women's fashion collections, including various clothing categories, new seasonal styles, and promotions like guaranteed savings and super-fast delivery.",
      tags: [
        {
          name: "Typescript",
          color: "blue-text-gradient",
        },
        {
          name: "Next Js",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: opiyum1,
      // source_code_link: "https://github.com/",
    },
    {
      name: "Seller Module",
      description:
        "A Seller Module is a critical part of e-commerce platforms or marketplace systems, specifically designed for vendors or sellers who manage and operate their online businesses",
      tags: [
        {
          name: "Redux Toolkit",
          color: "blue-text-gradient",
        },
        {
          name: "Next js",
          color: "green-text-gradient",
        },
        {
          name: "Material UI",
          color: "pink-text-gradient",
        },
      ],
      image: seller,
      // source_code_link: "https://github.com/",
    },
    
  ];
  
  export { services, technologies, experiences, projects };