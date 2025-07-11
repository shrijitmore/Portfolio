import React from 'react'
import ModelExperience from './ModelExperience'
import { words } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const About = () => {
    useGSAP(() => {
        gsap.fromTo(
          ".hero-line",
          { y: -80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "bounce.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: "#about",
              start: "top center",
              toggleActions: "play none none none"
            }
          }
        );
      }, []);
  return (
    <section id="about" className="hero-layout relative overflow-hidden">
        
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
          <div className="flex flex-col gap-7">
            <div className="hero-text">
              <h1 className="hero-line">
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
                          className="xl:size-15 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
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
            Welcome! This isn't just a bunch of projects on a page — it's a collection of things I've designed, built, and obsessed over as a full-stack developer.

From 3D digital twins and real-time dashboards to AI-powered interfaces and slick UI designs, this portfolio brings together the tools I love — React, Flask, Three.js, MongoDB, and more — wrapped up in clean code and thoughtful UX.

Everything you see here was created with a lot of curiosity, late-night debugging, a bit of caffeine, and a constant drive to make things look good and work even better.

Think of it as my digital handshake. If you like what you see, let's build something cool together. 👋
            </p>
        <div className="hidden lg:flex justify-start mt-6">
          <a
            href="#projects"
            className="relative inline-block px-8 py-3 font-semibold rounded-full bg-gradient-to-r from-[#d90429] to-[#ff6f61] text-white shadow-lg overflow-hidden group transition-all duration-300"
          >
            <span className="absolute inset-0 w-full h-full bg-white opacity-0 group-hover:opacity-10 transition-all duration-300"></span>
            <span className="relative z-10 flex items-center gap-2">
              <svg
                className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1"
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
              See My Projects
            </span>
            <span className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 translate-y-2"></span>
          </a>
        </div>
          </div>
        </header>



        <figure>
            <div className="hero-3d-layout">
                <ModelExperience />
            </div>
        </figure>
    </section>
  )
}

export default About