import {
    mobile,
    backend,
    creator,
    web,
    github,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    // redux,
    tailwind,
    java,
    boot,
    aws,
    spring,
    hib,
    sql,
    python,
    aditya,
    cloud,
    srkr,
    carrent,
    jobit,
    tripguide,
    threejs,
    crud,
    todo,
    video,
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
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "React Native Developer",
      icon: creator,
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
      name: "BootStrap",
      icon: boot,
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "My Sql",
      icon: sql,
    },
    {
      name: "JAVA",
      icon: java,
    },
    {
      name: "Hibernate",
      icon: hib,
    },
    {
      name: "SpringBoot",
      icon: spring,
    },
    // {
    //   name: "Python",
    //   icon: python,
    // },
    // {
    //   name: "AWS",
    //   icon: aws,
    // },
    {
      name: "Three JS",
      icon: threejs,
    },
    // {
    //   name: "git",
    //   icon: git,
    // },
  ];
  
  const experiences = [
    {
      degree: "Internship - Hyderabad",
      College_name: "Cloud4C -DOC",
      icon: cloud,
      iconBg: "#E6DEDD",
      date: "July 2023 - March 2024",
      points: [
        "I have got an internship experience of 8 months in Digital Operation Center ",
        "Work details involve taking Snapshots, working on TICKETS, checking various Alarms",        
        "(L0,L1) Tasks of AWS, Azure, Networks, Linux, Windows, Infra, DB and more",
      ],
    },
    {
      degree: "Bachelor's Degree - Bhimavaram",
      College_name: "SRKR Engineering College - CGPA: 7.00",
      icon: srkr,
      iconBg: "#383E56",
      date: "August 2019 - April 2023",
      CGPA:"7.00",
      points: [
        "I have done my Bachelor's degree in the stream of Electrical and Electronics Engineering.",
        "I was chosen to serve as a Senior Executive Body Member of the Association of Electrical Engineers student body organization in our college.",
        "I assumed a pro-active role, arranging both technical and non technical event and demonstrated proficiency in both leadership and collaborative roles.",
        "Basket Ball Inter College Tournament Ship - Winners (Team Captain)",
      ],
    },
    {
      degree: "Intermediate - Amalapuram",
      College_name: "Aditya Junior College - CGPA: 9.57",
      icon: aditya,
      iconBg: "#E6DEDD",
      date: "July 2017 - April 2019",
      CGPA:"9.57",
      points: [
        "I have done my Board of Intermediate Examination in the stream Of MPC",
      ],
    },
    {
      degree: "Schooling - Amalapuram",
      College_name: "Adity (E.M) High School - CGPA: 9.3",
      icon: aditya,
      iconBg: "#383E56",
      date: "April 2016 - May 2017",
      CGPA:"9.3",
      points: [
        "I have done my Secondary School Certificate in the stream of MPC",
      ],
    },

  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "CRUD Wizard",
      description:
      "An intuitive web application that empowers users to Create, Read, Update, and Delete data effortlessly. With a user-friendly interface and robust functionalities, our app streamlines data management tasks, providing a seamless and efficient experience for handling information and driving productivity.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "JSON",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: crud,
      source_code_link: "https://github.com/",
    },
    {
      name: "Video Space",
      description:
      "Our React-based video platform provides users with a curated selection of high-quality videos for seamless viewing. Explore a range of captivating content without the need for search, tailored to your interests and preferences. Dive into a world of entertainment and knowledge, all in one convenient and immersive platform.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "JSON",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: video,
      source_code_link: "https://github.com/",
    },
    {
      name: "Task Master",
      description:
      "An intuitive task management application built with React, offering users a seamless experience in creating, organizing, prioritizing, and tracking tasks efficiently. With customizable features and a user-friendly interface, our app simplifies productivity, helping users stay organized and focused on their goals effortlessly.",
      tags: [
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "BootStrap",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: todo,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };