// Portfolio constants

export const NAV_LINKS = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#project" },
  { name: "Skills", href: "#skills" },
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

const words = [
  { text: "Ideas", imgPath: "/images/Assets/ideas.svg" },
  { text: "Concepts", imgPath: "/images/Assets/concepts.svg" },
  { text: "Designs", imgPath: "/images/Assets/designs.svg" },
  { text: "Code", imgPath: "/images/Assets/code.svg" },
  { text: "Ideas", imgPath: "/images/Assets/ideas.svg" },
  { text: "Concepts", imgPath: "/images/Assets/concepts.svg" },
  { text: "Designs", imgPath: "/images/Assets/designs.svg" },
  { text: "Code", imgPath: "/images/Assets/code.svg" },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

export { cocktailLists, mockTailLists, words, techStackIcons };

