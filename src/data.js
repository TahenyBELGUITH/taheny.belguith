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
import Project1 from "./assets/img/projects/p1.webp";
import Project2 from "./assets/img/projects/p2.webp";
import Project3 from "./assets/img/projects/p3.webp";
import Project4 from "./assets/img/projects/p4.webp";
import Project5 from "./assets/img/projects/p5.webp";
import Project6 from "./assets/img/projects/p6.webp";

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
    name: "1.home",
    href: "home",
  },
  {
    name: "2.about",
    href: "about",
  },
  {
    name: "3.portfolio",
    href: "portfolio",
  },
  {
    name: "4.services",
    href: "services",
  },
  {
    name: "5.testimonials",
    href: "testimonials",
  },
  {
    name: "6.contact",
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
    image: Project1,
    name: "project name 1",
    category: "UI/UX design",
  },
  {
    id: "2",
    image: Project2,
    name: "project name 2",
    category: "web development",
  },
  {
    id: "3",
    image: Project3,
    name: "project name 3",
    category: "UI/UX design",
  },
  {
    id: "4",
    image: Project4,
    name: "project name 4",
    category: "branding",
  },
  {
    id: "5",
    image: Project5,
    name: "project name 5",
    category: "web development",
  },
  {
    id: "6",
    image: Project6,
    name: "project name 6",
    category: "web development",
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
    color: "#1AA7EC",
  },
  {
    name: "Redux",
    level: 85,
    color: "#A202FF",
  },
  {
    name: "Tailwind",
    level: 82,
    color: "#4ADEDE",
  },
  {
    name: "Ruby",
    level: 90,
    color: "#FF0000",
  },
  {
    name: "JavaScript",
    level: 85,
    color: "#e9d700",
  },
  {
    name: "Rails",
    level: 89,
    color: "#cc0000",
  },
  {
    name: "PostgreSQL",
    level: 78,
    color: "#0b5394",
  },
  {
    name: "mySQL",
    level: 85,
    color: "#fa6c08",
  },
  {
    name: "Jest",
    level: 89,
    color: "#741b47",
  },
  {
    name: "Oracle",
    level: 85,
    color: "#fd1504",
  },
  {
    name: "Postman",
    level: 99,
    color: "#fa6c08",
  },
  {
    name: "Git",
    level: 90,
    color: "#999999",
  },
  {
    name: "Bootstrap",
    level: 97,
    color: "#674ea7",
  },
  {
    name: "Java",
    level: 50,
    color: "#0b5394",
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
    authorText:
      "Taheny is Great either in person or in technical aspects, she is someone who can not rest until she pushes all boundaries and get the desired outcomes, I was touched by how she demonstrated her ability to grasp a new concept in a such short period of time. personally, I would like to work with Taheny as frequently as possible, because when I am working with her I feel confident to tackle any challenge. I can not recommend her enough",
    authorName: "Seth Bizimana",
    authorPosition: "Full-Stack Web Developer",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "During my time at Microverse, Taheny and I have met on a couple of occasions and have worked together on a group project. Throughout all that time, I have always enjoyed working and interacting with her.Taheny is a dedicated person, who will make sure that every task is carried out professionally and that everybody in the team is involved and engaged. She is also someone who loves to build good relationships with her teammates and make the most out of her time.If you are looking for a smart, professional, dedicated, and yet affable software developer, she is your person!",
    authorName: "Jauhari Alafi",
    authorPosition: "Frontend Web Developer",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Taheny is very intelligent and very qualified. She's talented and she keeps always her motivation up .Her personality is full of kindness and enthousiasm. Good luck for your professionnal career ! ",
    authorName: "Imen Kefi",
    authorPosition: "Senior Product Designer ( UX | UI Designer )",
  },

  {
    authorImg: TestiImage4,
    authorText:
      "Taheny has passion for web development. She likes exploring and learning things at her own pace. She is open-minded and has a good eye for styling her projects. She knows when to reach out for help and listen attentively to others. She acts professionally and is a good team player. I'm sure she will be able to handle any projects assigned to her because she is determined to excel in the tech industry.",
    authorName: "Mavericks De Leon Balitaan",
    authorPosition: "Full-Stack Web Developer",
  },

  {
    authorImg: TestiImage5,
    authorText:
      "We meet many people every day but only some leave a mark. One of them is Taheny. She was my partner at Microverse for a block during the second module. I was more than impressed by Taheny’s technical ability to craft efficient solutions to the problems we faced. This natural skill helped me grow as a developer since she facilitated the growth of my ability to think outside the box. I surely did enjoy my time working with Taheny and look forward to collaborating again. Taheny will be a valuable asset to any company.",
    authorName: "Simba Wangulu",
    authorPosition: "Front-End Developer",
  },
  {
    authorImg: TestiImage6,
    authorText:
      "Taheny is a great person to work with.At Microverse, I worked with Taheny on a project and I must commend her eagerness to learn new things and try new solutions.Another commendable thing about Tahney is that she is a team player who shares victories with her teammates and accepts the faults of a team, whether she was directly involved or not. ",
    authorName: "Elisha Tetteyfio profile",
    authorPosition: "Full-Stack Developer",
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
