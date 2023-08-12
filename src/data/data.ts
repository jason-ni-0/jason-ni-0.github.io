import BNYLogo from "assets/images/logos/BNYLogo.png";
import UCSFLogo from "assets/images/logos/UCSFLogo.jpeg";
import UCSBLogo from "assets/images/logos/UCSBLogo.jpg";
import JhuaplLogo from "assets/images/logos/jhuapl.jpeg";
import UniLogo from "assets/images/logos/fast.png";
import figma from "assets/images/skills/figma.png";
import vscode from "assets/images/skills/vscode.png";
import react from "assets/images/skills/react.png";
import ruby from "assets/images/skills/ruby.png";
import rails from "assets/images/skills/rails.png";
import javascript from "assets/images/skills/javascript.png";
import typescript from "assets/images/skills/typescript.png";
import html5 from "assets/images/skills/html-5.png";
import css3 from "assets/images/skills/css3.png";
import python from "assets/images/skills/python.png";
import bootstrap from "assets/images/skills/bootstrap.png";
import postgres from "assets/images/skills/postgresql.png";
import redis from "assets/images/skills/redis.png";
import mysql from "assets/images/skills/mysql.png";
import heroku from "assets/images/skills/heroku.png";
import docean from "assets/images/skills/digital-ocean.png";
import aws from "assets/images/skills/aws.png";
import nginx from "assets/images/skills/nginx.png";

export const companies = [
  {
    title: "Bank of New York Mellon",
    alt: "BNY image",
    role: "Software Engineer Intern",
    desc: "Overhauling Digital Assets tokenization platform to Java 17 and Spring Boot 3 to eliminate previous Spring web vulnerabilities. Enhanced security by implementing Spring security and configuring OAuth 2.0, all while (learning the importance of) cleanly documenting the migration for future engineers to reference. On the same note of maintenance, I set up a centralized dependency management system for painless future updates and added a logging service for the wallet provider service. All deployed in production!",
    period: "Jun 2023 - Aug 2023",
    logo: BNYLogo
  },
  {
    title: "UCSF School of Medicine",
    alt: "UCSF Image",
    role: "Software Engineer Intern",
    desc: "Worked with Professor Nhung Nguyen to reduce tobacco and cannabis among the youth population. Programmed and tested mobile health application and surveys to investigate and collect data on real-time predictors of tobacco and cannabis vaping behaviors with the goal of developing remote substance abuse interventions.",
    period: "Feb 2023 – Jun 2023",
    logo: UCSFLogo
  },
  {
    title: "UCSB Computer Architecture Lab",
    alt: "UCSB image",
    role: "Undergraduate Research Assisstant",
    desc: "As cloud systems grow in complexity, more layers in the stack use of technologies like containerization and virtualization. Function-as-a-Service (FaaS) /serverless systems take advantage of these technologies to provide developers with convenient new programming paradigm where language-agnostic applications can be deployed at cloud scale without any need for DevOps. Unfortunately, we have found that FaaS applications violate common architectural wisdom by exhibiting extremely poor temporal locality. To achieve faster FaaS runtimes, I ported profiler functions onto a modified a RISC-V Debian-Linux system using OpenFaaS, a framework for building and deploying serverless functions using Docker and Kubernetes (sadly OpenFaaS did not work natively with RISC-V), to finally benchmark the functions.",
    period: "Jun 2022 – Present",
    logo: UCSBLogo
  },
  {
    title: "Johns Hopkins University Applied Physics Lab",
    alt: "JHUAPL image",
    role: "Software Engineer Intern",
    desc: "One of less than 20 students out of thousands of students accepted to CIRCUIT-ASPIRE program to conduct develop faster algorithms for subneuron analysis computation. Though the fundamental computational unit in the brain is often analyzed at the level of the individual neuron, simulating the activation of each neuron using an entire skeleton with tens of thousands of segments each is computationally burdensome at the network level and yields challenges for interpretability of information processing at the subneuron level. Using recent synapse-level fruit-fly connectome data from Python module neuprint, we developed methodologies to automate segmenting neuron skeletons into several functional compartments to simulate a network at the subneuron level.",
    period: "Jun 2020 - Nov 2020",
    logo: JhuaplLogo
  }
];
{/*

export const institutes = [
  {
    short_title: "FAST - NUCES",
    title: "National University of Computer and Emerging Sciences",
    alt: "Nuces image",
    role: "Bachelor's Degree in Computer Science",
    skills :["project management", "web development", "data structures"],
    period: "2013 - 2017",
    startingYear: "2013",
    logo: UniLogo,
    awards: [
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "May 1, 2015"
      },
      {
        title: "Silver Medal",
        description:
          "This medal was awarded to me by FAST - NUCES for getting a CGPA of 3.9 in 2nd semester.",
        date: "May 1, 2014"
      },
      {
        title: "Speed Programming Battle",
        description:
          "Won speed programming battle which held at FAST - NUCES.",
        date: "Nov 1, 2013"
      }
    ]
  },
  {
    short_title: "Govt Degree College",
    title: "Govt Degree College",
    alt: "college image",
    role: "FSC",
    skills :["mathematic", "chemistry", "physics"],
    period: "2011 - 2013",
    startingYear: "2011",
    logo: ""
  }
];

export const skills = [
  {
    name: "Ruby on Rails",
    description: "Web development",
    link: "https://rubyonrails.org/",
    type: "development",
    image: rails
  },
  {
    name: "React",
    description: "Web development",
    link: "https://reactjs.org/",
    type: "development",
    image: react
  },
  {
    name: "Ruby",
    description: "Web development, scrapping",
    link: "https://www.ruby-lang.org/en/",
    type: "development",
    image: ruby
  },
  {
    name: "Python",
    description: "Web development, scrapping",
    link: "https://www.python.org/",
    type: "development",
    image: python
  },
  {
    name: "Javascript",
    description: "Web development",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    type: "development",
    image: javascript
  },
  {
    name: "Typescript",
    description: "Web development",
    link: "https://www.typescriptlang.org/",
    type: "development",
    image: typescript
  },
  {
    name: "Html5",
    description: "Web layouts",
    link: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5",
    type: "development",
    image: html5
  },
  {
    name: "Css3",
    description: "Web design",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
    type: "design",
    image: css3
  },
  {
    name: "Bootstrap",
    description: "Web design",
    link: "https://getbootstrap.com/",
    type: "design",
    image: bootstrap
  },
  {
    name: "Postgres",
    description: "Database",
    link: "https://www.postgresql.org/",
    type: "database",
    image: postgres
  },
  {
    name: "Mysql",
    description: "Database",
    link: "https://www.mysql.com/",
    type: "database",
    image: mysql
  },
  {
    name: "Redis",
    description: "Database",
    link: "https://redis.io/",
    type: "database",
    image: redis
  },
  {
    name: "Heroku",
    description: "Devops",
    link: "https://www.heroku.com/",
    type: "devops",
    image: heroku
  },
  {
    name: "AWS",
    description: "Devops",
    link: "https://aws.amazon.com/",
    type: "devops",
    image: aws
  },
  {
    name: "Digital Ocean",
    description: "Devops",
    link: "https://www.digitalocean.com/",
    type: "devops",
    image: docean
  },
  {
    name: "Nginx",
    description: "Web server",
    link: "https://www.nginx.com/",
    type: "devops",
    image: nginx
  },
  {
    name: "Visual Studio Code",
    description: "Code editor of choice",
    link: "https://code.visualstudio.com/",
    type: "development",
    image: vscode
  },
  {
    name: "Figma",
    description: "Collaborative Design",
    link: "https://www.figma.com/",
    type: "design",
    image: figma
  }
];*/}
