import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    
    html,
    css,
    reactjs,
    
    tailwind,
    nodejs,
    python,
    mysql,
    java,
    git,
    c,
    cyber,
    isaf,
    ort,
    carrent,
    jobit,
    tripguide,
    
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
      title: "Team Leader",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Teacher",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "python",
      icon: python,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "java",
      icon: java,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "mysql",
      icon: mysql,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "C",
      icon: c,
    },
    
    
    
  ];
  
  const experiences = [
    {
      title: "Technican & Team Leader",
      company_name: "Israel Air Force",
      icon: isaf,
      iconBg: "#383E56",
      date: "December 2018 - September 2021",
      points: [
        "Served as a lead technician and crew leader specializing in the Patriot missile defense system, overseeing and coordinating the activities of the technical crew to ensure efficient and effective operation and maintenance.",
        "Possessed extensive experience in maintaining, troubleshooting, and repairing complex radar systems, control units, and launch mechanisms, ensuring the readiness and reliability of these critical defense components.",
        "Demonstrated expertise in working with a wide range of frequencies, hardware components, and advanced electronic systems, including performing diagnostics, calibrations, and integrations to optimize performance and address any technical issues.",
      ],
    },
    {
      title: "Education",
      company_name: "Braude Collage",
      icon: ort,
      iconBg: "#10307b",
      date: "October 2021 - June  2025",
      points: [
        "2024- Worked on a client-server project and 3D Internet site.",
        "Achieved a GPA of 87 and was named to the Dean’s List in the second year.",
        "Achieved a GPA of 92.67 in the last semester.",
        "Debator at Braude Debate Team for 3 years",
      ],
    },
    {
      title: "Tutor",
      company_name: "Cyber Education Center",
      icon: cyber,
      iconBg: "#ffffff",
      date: "June 2023 - Present",
      points: [
        "Assisting and teaching teenagers coding in Processing (JAVA).",
        "Planning and coding multiple projects.",
        "Participating in educational activities such as the Day of Good Deeds,Hacton(Hack-Marthon) at a high-tech company .",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Bahaa is a professional team leader in his field and has an excellent ability to work in a team, Bahaa was a team leader in the Wall Guard operation, took initiatives and strived for excellence, Bahaa is a sociable person and gets along well at the base.Bahaa is a professional team leader in his field and has an excellent ability to work in a team, Bahaa was a team leader in the Wall Guard operation, took initiatives and strived for excellence, Bahaa is a sociable person and gets along well at the base",
      name: "Tom Yahav",
      designation: "officer",
      company: "Israel Air Force",
      image: "https://randomuser.me/api/portraits/men/71.jpg",
    },
    {
      testimonial:
        "He is a very smart person and has great talent. He knows what he wants and know the extent of his abilities. A very hardworking and educated person. Whatever he do, He do it in the best possible way. A very real and realistic person. he is a responsible and independent and have a bright future waiting for him. ",
      name: "Haya Khier",
      designation: "HR",
      company: "Teenagers Center",
      image: "https://randomuser.me/api/portraits/women/76.jpg",
    
    },
    {
      testimonial:
        "(An_ example_ only) After Rick optimized our website, our traffic increased by 50%. We can't thank them enough! (An_ example_ only) ",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];
  
  const projects = [
    {
      name: "GoNature",
      description:
        "platform that allows users to search, book, and manage thier visit in several parks in Israel, the platform also provides several features for the employees like creating docs and more!",
      tags: [
        {
          name: "JAVA",
          color: "blue-text-gradient",
        },
        {
          name: "MYSQL",
          color: "green-text-gradient",
        },
        {
          name: "SceneBuilder",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/GalBitton/GoNature_G9.git",
    },
    {
      name: "BasketBall Game",
      description:
        "A BasketBall Game That made with Proccing(JAVA), the game was made as part of my work at Cyber Education Center.",
      tags: [
        {
          name: "JAVA",
          color: "blue-text-gradient",
        },
        {
          name: "Proccessing",
          color: "green-text-gradient",
        },
        
      ],
      image: jobit,
      source_code_link: "https://github.com/BahaaSw/BasketBall_Game.git",
    },
    {
      name: "3D Website",
      description:
        "Web-based platform that allows users to know me better, providing all the data about me and my career hopefully helps me finds my first job in software engineering.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "NodeJS",
          color: "green-text-gradient",
        },
        {
          name: "Vite",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };