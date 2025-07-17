import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { words } from "../../constants";
import ModelExperience from "./ModelExperience";
import { useMediaQuery } from 'react-responsive';

const About = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  // useGSAP(() => {
  //   gsap.fromTo(
  //     ".hero-text h1",
  //     { y: 50, opacity: 0 },
  //     { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
  //   );
  // });

  useGSAP(() => {
    gsap.fromTo(
      ".hero-text h1",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: "#about",      // The section to watch
          start: "top 80%",       // When the top of #about hits 80% from the top of the viewport
        },
      }
    );
  });

  return (
    <section id="about" className="relative overflow-hidden">

      <div className="hero-layout">
        {/* LEFT: Hero Content */}
        <header className="container mx-auto relative z-10 flex md:flex-row flex-col justify-between items-start gap-20 pt-4 md:pt-40 2xl:px-0 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1>
                Shaping
                <span className="slide">
                  <span className="wrapper">
                    {words.map((word, index) => (
                      <span
                        key={index}
                        className="flex items-center md:gap-3 gap-1 pb-2"
                      >
                        <img
                          src={word.imgPath}
                          alt="person"
                          className="xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1 className="hero-line">into Real Projects</h1>
              <h1 className="hero-line">that Deliver Results</h1>
             </div>
             <p className="text-white-50 md:text-xl relative z-10 pointer-events-none text-justify max-w-2xl min-h-[120px]">
  Hi, I'm Shrijit—a full-stack developer passionate about turning ideas into interactive, real-world solutions. I love building everything from 3D digital twins to AI-powered Fullstack App, always focusing on clean code and great user experiences. Whether it's React, Flask, Three.js, or MongoDB, I enjoy exploring new tech and pushing boundaries. If you're looking for someone who's curious, creative, and ready to collaborate, let's connect and make something awesome together! 👋
</p>
<div className="z-10 lg:flex justify-start ">
          <a
            href="#project"
            className="relative inline-block px-5 py-2 md:px-8 md:py-3 text-sm md:text-base font-semibold rounded-full bg-gradient-to-r from-[#d90429] to-[#ff6f61] text-white shadow-lg overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-all duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-4 h-4 md:w-5 md:h-5 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <span className="block xl:hidden">Projects</span>
              <span className="hidden xl:block">See My Projects</span>
            </span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-2"></span>
          </a>
        </div>            
          </div>
        </header>

        {/* RIGHT: 3D Model or Visual */}
        <figure>
          {!isMobile && (
            <div className="hero-3d-layout ">
              <ModelExperience />
            </div>
          )}
        </figure>
      </div>

    </section>
  );
};

export default About;