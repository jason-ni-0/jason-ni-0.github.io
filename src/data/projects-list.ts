import surfwell from "assets/images/projects/surfwell.png";
import groshare from "assets/images/projects/groshare.jpeg";
import soapscribe from "assets/images/projects/soapScribe.png";
import arthub from "assets/images/projects/arthub.png";
import featWear from "assets/images/projects/featWear.png";
import feat from "assets/images/projects/feat.png";
import soapTemplates from "assets/images/projects/soapTemplates.png"
import realismGraphics from "assets/images/projects/realismGraphics.png"

export const projectsList = [
  {
    id: 0,
    title: "SOAPScribe Templates",
    link: "https://soapscribe.web.app/",
    logo: soapTemplates,
    desc: `Building on SOAPScribe's success in optimizing medical clinics, my aim was to further enhance the service's impact and assist a wider range of clinics. Addressing 
    a common concern, the delay in template generation, particularly when accessing previous templates, was identified. To streamline this, I implemented multi-threaded API calls 
    and introduced a template persistence and search feature. This enhancement empowers users to save templates, facilitating quick access to past ones, resulting in a significantly 
    more efficient process.`,
    gitlink: "https://github.com/jason-ni-0/soapscribe-templates"
  },
  {
    id: 0,
    title: "Realism Graphics",
    link: "https://github.com/jason-ni-0/realism_graphics",
    logo: realismGraphics,
    desc: `Fueled by my passion for video games and their stunning graphics, I ventured beyond avid playing and delved into creation out of curiosity. I crafted a graphics engine capable of 
    rendering multi-object 3D scenes with ray tracing. It incorporates advanced elements like gamma correction, true Lambertian reflection, defocus effects, custom camera angles, 
    and texture mapping, just like many games. The engine also supports path tracing for glass, metal, and diffuse surfaces. This journey allowed me to turn my gaming interest into a tangible tool for lifelike 
    visual experiences. However, it's definitely not fast enough to render moving scenes in real time, maybe yet... `,
    gitlink: "https://github.com/jason-ni-0/realism_graphics"
  },
  {
    id: 1,
    title: "SOAPScribe",
    link: "https://soapscribe.web.app/",
    logo: soapscribe,
    desc: `In a world where healthcare costs continue to rise, the need for efficient and cost-effective solutions becomes paramount. Recognizing the inefficiencies in medical 
    practices, particularly in the time-consuming task of writing SOAP documentation, I developed a tool that leverages the OpenAI API to apply the capabilities of artificial 
    intelligence to generate SOAP note templates. The tool is currently in use by three clinics in southern California, saving them significant amounts of money and 
    time.`,
    gitlink: "https://github.com/jason-ni-0/soapscribe"
  },
  {
    id: 2,
    title: "ArtHub",
    logo: arthub,
    link: "",
    // https://drive.google.com/file/d/1ElT_udfwmpvpWnt-qbQJAHVq4MjG6lGD/view
    desc: `Version control for media creation options are expensive. Github is free, however the file size cap is only a couple gigabytes while movies can easily range up to the tens of gigabytes. With ArtHub, artists are able to share verifiable credit on contributions that they make on with projects and create new versioned projects where collaborators are able to use ArtHub as a central source of truth for changes that they make to their projects. Using the a decentralized storage provider (Estuary), ArtHub also raises the file size cap to over 30 gigabytes. The project won the Best Art Hack, Best Use of Estuary, and the 1517 Fund grant at the HackPrinceton 2022 hackathon. Big shoutout to my teammates Alayna, Aminah, and Nori!`,
    gitlink: "https://github.com/Aminah-Aliu/ArtHub"
  },
  {
    id: 3,
    title: "FeatWear",
    logo: featWear,
    link: "https://featwear.herokuapp.com/",
    desc: `Due to the popularity Feat gained among students, 
    I realized there were numerous other decisions to be optimzed. One such area was the daily dilemma of deciding what to wear, 
    so I expanded Feat to create a service to assist user outfit decisions by putting useful informaton in an all-in-one dashboard. 
    The information is obtained by leveraging a weather API and a webscraper service for the "lucky" color that corresponds to users astrology signs. 
    A login service to persist user birthday and location was also implemented for instantaneous retreival of suggestions. And confession, I use this service daily.`,
    gitlink: "https://github.com/jason-ni-0/featwear"
  },
  {
    id: 4,
    title: "Feat",
    logo: feat,
    link: "https://feat.vercel.app/",
    desc: `Feeling indecisive? My friends and I sure did, wasting hours every week deciding where to eat. We just wanted the dining decision made for us. But as broke college kids without 
    cars, we needed distance, price, and other decisions to factor into our choice. Feat decides where to eat by harnessing the power of "fate", 
    considering factors from cuisine types to distance, then presenting you with a curated selection of three dining options tailored to your group's preferences 
    that you must choose from. Hundreds of decisions narrowed down to potentially one!`,
    gitlink: "https://github.com/jason-ni-0/feat"
  },
  {
    id: 5,
    title: "Surfwell",
    logo: surfwell,
    link: "",
    desc: `Multi-student initiative focused on creating a community powered service to better forecast surf conditions on beaches. Get more accurate surf forecasts and other surfers'
     opinions on the surfs condition, as well as share your own experiences all through one mobile application. This is also me being super invested after just one week of trying 
     to learn how to surf.`,
    gitlink: "https://github.com/jason-ni-0/surfwell/"
  },
  {
    id: 6,
    title: "GroShare",
    link: "",
    logo: groshare,
    desc: `Navigating the world of grocery shopping as a college student living off-campus can be quite the hassle. The best deals often come in bulk, but the challenge lies in 
    what to do with the surplus that you simply can't consume on your own. GroShare enables users to share their extra food products with their local communities, minimizing waste 
    and fostering a spirit of sharing and cooperation. Built at SBHacks with teammates Yuji and Shialan.`,
    gitlink: "https://github.com/jason-ni-0/groshare"
  },
];
