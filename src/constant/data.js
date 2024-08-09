import Logo from "../assets/images/umar-logo.png";
import LuckyRushHome from "../assets/images/lucky-rush.png";
import CalendarPro from "../assets/images/calendar-pro.png";
import WorkEat from "../assets/images/work-eat.png";
import CryptoRolls from "../assets/images/crypto-rolls.png";

export const menuList = [
  { id: "1", icon: Logo, title: "Home", url: "/", ref: "intro" },
  { id: "2", icon: Logo, title: "Experience", url: "/", ref: "experience" },
  { id: "3", icon: Logo, title: "Hire Me", url: "/", ref: "hireme" },
  { id: "4", icon: Logo, title: "Umar", url: "/", ref: "" },
  { id: "5", icon: Logo, title: "Resume", url: "/", ref: "" },
  { id: "6", icon: Logo, title: "Project", url: "/", ref: "portfolio" },
  { id: "7", icon: Logo, title: "Contact", url: "/", ref: "hireme" },
];

export const myExperience = [
  {
    id: "1",
    company: "Websultanate Software Technologies",
    duration: "July 2021- July 2024",
    experience: "Full Stack Developer",
    description: [
      "Honed skills in creating robust and scalable web applications.",
      "Developed REST APIs and designed scalable schemas using MongoDB and SQL.",
      "Ensured efficient data management and seamless backend operations.",
      "Crafted reusable components with React, enhancing development speed and maintainability.",
      "Successfully delivered projects such as Lucky Rush and Work Eat.",
      "Used Redux and React Context API for state management",
    ],
  },
  {
    id: "2",
    company: "College Student & Self Employed",
    duration: " August 2019 - June 2021",
    experience: "Learning Full Stack Development",
    description: [
      "During my fourth year of engineering, I chose to focus on building web applications with JavaScript.",
      "I self-taught the basics of JavaScript, CSS, and Node.js, and built several web applications for my portfolio. This proactive approach and hands-on experience helped me land a job in the industry.",
    ],
  },
];

export const portfolio = [
  {
    id: "1",
    title: "Lucky Rush",
    url: "https://luckyrush.io/",
    img: LuckyRushHome,
    category: "Online Casino",
    descriptions: [
      `Build, style, and ship high-quality websites`]
  },
  {
    id: "2",
    title: "Calendar-Pro",
    url: "https://app.calendar-pro.com/",
    img: CalendarPro,
    category: "Online Appointment Booking System",
    descriptions:[
      `Build, style, and ship high-quality websites`]
  },
  {
    id: "3",
    title: "Work Eat",
    url: "https://workeat.co.il/en/",
    img: WorkEat,
    category: "Food Order",
    descriptions:[
      `Build, style, and ship high-quality websites`]
  },
  {
    id: "4",
    title: "Crypto Rolls",
    url: "https://www.cryptorolls.com/",
    img: CryptoRolls,
    category: "Online Casino & Gaming",
    descriptions:[
      `Build, style, and ship high-quality websites`]
  },
];
