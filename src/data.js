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
import Project7 from "./assets/img/projects/p7.jpg";

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
import TestiImage7 from "./assets/img/testimonials/testimonial-7.jpg";
import TestiImage8 from "./assets/img/testimonials/testimonial-8.jpg";

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
    category: "HTML/CSS/JS",
    href: "https://conference-page.vercel.app/",
    code: "https://github.com/TahenyBELGUITH/conferencePage",
    description:
      "This project is based on an online website for EXPO DUBAI 2K20. The about-page can be accessed from the homepage with the 'About' link. The homepage can be accessed from the main logo, or the 'home' icon on the about-page. Also, on the mobile version , both these pages can be accessed through the 'hamburger menu'",
  },
  {
    id: "2",
    image: Project2,
    name: "E commerce product",
    category: "Front-End (REACT)",
    href: "https://to-dos-list-react-cp99.vercel.app/",
    code: "https://github.com/TahenyBELGUITH/E-commerce-product-page",
    description:
      "In this challenge, I'll build a beautiful product page. I'll be putting my JS skills to the test with a lightbox product gallery and cart functionality!",
  },
  {
    id: "3",
    image: Project3,
    name: "Math magician",
    category: "Front-End (REACT)",
    href: "https://calculator-84ha.vercel.app/",
    code: "https://github.com/TahenyBELGUITH/math-magicians-app",
    description:
      "This is a website for all fans of mathematics. It is a Single Page App (SPA) that allows users to: make simple calculations and read math-related quotes.",
  },
  {
    id: "4",
    image: Project4,
    name: "Product management system",
    category: "HTML/CSS/JS",
    href: "https://tahenybelguith.github.io/CRUD/",
    code: "https://github.com/TahenyBELGUITH/CRUD",
    description:
      "In this challenge, create, read, update, and delete are the four basic operations of persistent storage.",
  },
  {
    id: "5",
    image: Project1,
    name: "Space traveler's hub",
    category: "Front-End (REACT)",
    href: "https://prismatic-lokum-46fd79.netlify.app/",
    code: "https://github.com/TahenyBELGUITH/REACT-CAPSTONE-PROJECT",
    description:
      "This is a React app working with the real live data from the SpaceX API. The application will allow users to book rockets and join selected space missions.",
  },
  {
    id: "6",
    image: Project6,
    name: "Netflix App",
    category: "Front-End (REACT)",
    href: "https://redux-movie-app-seven.vercel.app/",
    code: "https://github.com/TahenyBELGUITH/redux_movie_app",
    description:
      "This is a project movie rating application from scratch and along with that I used Axios for API calls, React Router DOM for Routing and Node-SASS for our SCSS compile to CSS.",
  },
  {
    id: "7",
    image: Project7,
    name: "JCI Khniss",
    category: "Front-End (REACT)",
    href: "https://jci-khniss-official.vercel.app/",
    code: "https://github.com/TahenyBELGUITH/my_jci",
    description:
      "A representative website for an independent, not-for-profit organization, Joint Commission International (JCI) accredits and certifies health care organizations and programs across the globe.",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "HTML/CSS/JS",
  },
  {
    name: "Front-End (REACT)",
  },
  {
    name: "Back-End (RUBY)",
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
    authorName: "Elisha Tetteyfio",
    authorPosition: "Full-Stack Developer",
    href: "https://www.linkedin.com/in/belguith-taheny/details/recommendations/?detailScreenTabIndex=0",
  },
  {
    authorImg: TestiImage7,
    authorName: "Elisha Tetteyfio ",
    authorPosition: "Full-Stack Developer",
    href: "https://www.linkedin.com/in/belguith-taheny/details/recommendations/?detailScreenTabIndex=0",
    authorText:
      "Taheny Belguith is one of the brightest software developers I've ever ...",
  },
  ,
  {
    authorImg: TestiImage8,
    authorName: " Ranjit Luwang ",
    authorPosition: "Full-Stack Developer",
    href: "https://www.linkedin.com/in/belguith-taheny/details/recommendations/?detailScreenTabIndex=0",
    authorText:
      "On checked I had the pleasure of working with Taheny Belguith as a frontend...",
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
