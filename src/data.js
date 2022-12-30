//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiFacebook,
  FiLinkedin,
  FiTwitter,
} from "react-icons/fi";

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import Project1 from "./assets/img/projects/p1.png";
import Project2 from "./assets/img/projects/p2.png";
import Project3 from "./assets/img/projects/p3.png";
import Project4 from "./assets/img/projects/p4.png";
import Project5 from "./assets/img/projects/p5.png";
import Project6 from "./assets/img/projects/p6.png";

// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg5 from "./assets/img/skills/nextjs.png";
import SkillImg6 from "./assets/img/skills/postman.svg";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/testimonial-1.jpg";
import TestiImage2 from "./assets/img/testimonials/testimonial-2.jpg";
import TestiImage3 from "./assets/img/testimonials/testimonial-3.jpg";
import TestiImage4 from "./assets/img/testimonials/testimonial-4.jpg";
import TestiImage5 from "./assets/img/testimonials/testimonial-5.jpg";
import TestiImage6 from "./assets/img/testimonials/testimonial-6.jpg";

// navigation
export const navigation = [
  {
    name: "Home",
    href: "home",
  },
  {
    name: "About",
    href: "about",
  },
  {
    name: "Portfolio",
    href: "portfolio",
  },
  {
    name: "Services",
    href: "services",
  },
  {
    name: "Testimonials",
    href: "testimonials",
  },
  {
    name: "Contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiGithub />,
    href: "https://github.com/TahenyBELGUITH",
  },
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/belguith-taheny/",
  },
  {
    icon: <FiTwitter />,
    href: "https://twitter.com/BelguithTaheny",
  },
  {
    icon: <FiFacebook />,
    href: "https://www.facebook.com/taheni.belguith.71",
  },
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/belguith_tahenyy/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: Project5,
    name: "Expo Dubai Summit",
    category: "web development",
    href: "https://conference-page.vercel.app/",
    code: "https://github.com/TahenyBELGUITH/conferencePage",
  },
  {
    id: "2",
    image: Project2,
    name: "E commerce product",
    category: "web development",
    href: "",
    code: "https://to-dos-list-react-cp99.vercel.app/",
  },
  {
    id: "3",
    image: Project3,
    name: "Math magician",
    category: "UI/UX design",
    href: "https://calculator-84ha.vercel.app/",
    code: "https://github.com/TahenyBELGUITH/math-magicians-app",
  },
  {
    id: "4",
    image: Project4,
    name: "Product management system",
    category: "branding",
    href: "https://tahenybelguith.github.io/CRUD/",
    code: "https://github.com/TahenyBELGUITH/CRUD",
  },
  {
    id: "5",
    image: Project1,
    name: "Space traveler's hub",
    category: "UI/UX design",
    href: "https://prismatic-lokum-46fd79.netlify.app/",
    code: "https://github.com/TahenyBELGUITH/REACT-CAPSTONE-PROJECT",
  },
  {
    id: "6",
    image: Project6,
    name: "project name",
    category: "web development",
    href: "",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
  {
    name: "branding",
  },
];

// skill
export const skills = [
  {
    name: "ReactJS",
    level: 90,
    color: "#cd853f ",
  },
  {
    name: "Redux",
    level: 85,
    color: "#cd853f ",
  },
  {
    name: "Tailwind",
    level: 82,
    color: "#cd853f ",
  },
  {
    name: "Ruby",
    level: 90,
    color: "#cd853f ",
  },
  {
    name: "JavaScript",
    level: 85,
    color: "#cd853f ",
  },
  {
    name: "Rails",
    level: 89,
    color: "#cd853f ",
  },
  {
    name: "PostgreSQL",
    level: 78,
    color: "#cd853f ",
  },
  {
    name: "mySQL",
    level: 85,
    color: "#cd853f ",
  },
  {
    name: "Jest",
    level: 89,
    color: "#cd853f",
  },
  {
    name: "Oracle",
    level: 85,
    color: "#cd853f",
  },
  {
    name: "Postman",
    level: 99,
    color: "#cd853f",
  },
  {
    name: "Git",
    level: 90,
    color: "#cd853f",
  },
  {
    name: "Bootstrap",
    level: 97,
    color: "#cd853f",
  },
  {
    name: "Java",
    level: 50,
    color: "#cd853f",
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Web design encompasses many different skills and disciplines in the production and maintenance of websites.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Web development is the work involved in developing a website for the Internet or an intranet.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Branding is the process of creating a strong, positive perception of a company, its products or services in the customer's mind. ",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Search engine optimization is the process of improving the quality and quantity of website traffic to a website or a web page from search engines",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText: "Taheny is Great either in person or in technical aspects...",
    authorName: "Seth Bizimana",
    authorPosition: "Full-Stack Web Developer",
    href: "https://www.linkedin.com/in/belguith-taheny/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    authorImg: TestiImage2,
    authorText: "During my time at Microverse, Taheny and I have met on...",
    authorName: "Jauhari Alafi",
    authorPosition: "Frontend Web Developer",
    href: "https://www.linkedin.com/in/belguith-taheny/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    authorImg: TestiImage3,
    authorText: "Taheny is very intelligent and very qualified...",
    authorName: "Imen Kefi",
    authorPosition: "Senior Product Designer ( UX | UI Designer )",
    href: "https://www.linkedin.com/in/belguith-taheny/details/recommendations/?detailScreenTabIndex=0",
  },

  {
    authorImg: TestiImage4,
    authorText: "Taheny has passion for web development...",
    authorName: "Mavericks De Leon Balitaan",
    authorPosition: "Full-Stack Web Developer",
    href: "https://www.linkedin.com/in/belguith-taheny/details/recommendations/?detailScreenTabIndex=0",
  },

  {
    authorImg: TestiImage5,
    authorText: "We meet many people every day but only some leave a mark...",
    authorName: "Simba Wangulu",
    authorPosition: "Front-End Developer",
    href: "https://www.linkedin.com/in/belguith-taheny/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    authorImg: TestiImage6,
    authorText: "Taheny is a great person to work with.At Microverse... ",
    authorName: "Elisha Tetteyfio profile",
    authorPosition: "Full-Stack Developer",
    href: "https://www.linkedin.com/in/belguith-taheny/details/recommendations/?detailScreenTabIndex=0",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "taheny.belguith@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    description: "Serving clients worldwide",
  },
];
