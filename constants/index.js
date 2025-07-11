// Portfolio constants

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const SOCIAL_LINKS = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github", // You can map this to an icon in your component
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
  },
];

export const PROFILE = {
  name: "Shrijit",
  tagline: "Full Stack Developer & Designer",
  description:
    "I build beautiful and performant web applications with a focus on user experience and modern technologies.",
  location: "Your City, Country",
  email: "your.email@example.com",
};

export const PROJECTS = [
  {
    title: "Project One",
    description: "A brief description of your project goes here.",
    tech: ["React", "Node.js", "MongoDB"],
    link: "https://github.com/yourusername/project-one",
    demo: "https://project-one-demo.com",
    image: "/images/project-one.png",
  },
  {
    title: "Project Two",
    description: "Another project description.",
    tech: ["Vue", "Firebase"],
    link: "https://github.com/yourusername/project-two",
    demo: "https://project-two-demo.com",
    image: "/images/project-two.png",
  },
  // Add more projects as needed
];


const cocktailLists = [
  {
    name: "Languages",
    country: "JavaScript, TypeScript",
    detail: "🧠 Fluent",
    rating: "★★★★★"
  },
  {
    name: "UI",
    country: "React.js, Tailwind, GSAP",
    detail: "⚛️ Interactive",
    rating: "★★★★★"
  },
  {
    name: "Modeling and Animation",
    country: "Three.js, Blender",
    detail: "🧊 Immersive",
    rating: "★★★★☆"
  },
  {
    name: "Design",
    country: "Figma, Responsive UI",
    detail: "✏️ Creative",
    rating: "★★★★★"
  },

];

const mockTailLists = [
  {
    name: "Backend",
    country: "Node.js, Express, Flask, FastAPI",
    detail: "🚀 Robust",
    rating: "★★★★☆"
  },
  {
    name: "DB/Cloud",
    country: "MongoDB, Firebase, Azure",
    detail: "☁️ Scalable",
    rating: "★★★★☆"
  },
  {
    name: "Code Languages",
    country: "Java, C, C++",
    detail: "💻 Versatile",
    rating: "★★★☆☆"
  },
  
  {
    name: "APIs/Realtime",
    country: "WebSockets, REST",
    detail: "⚡ Live",
    rating: "★★★★☆"
  }
];

export { cocktailLists, mockTailLists };

