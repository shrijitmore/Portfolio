import React from 'react'
import ModelExperience from './ModelExperience'
import { words } from '../../constants'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import Button from './Button'

const About = () => {
    useGSAP(() => {
        gsap.fromTo(
          ".hero-text h1",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.inOut" }
        );
      });
  return (
    <section id="about" className="hero-layout relative overflow-hidden">
        
        <header className="flex flex-col justify-center md:w-full w-screen md:px-20 px-5">
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
                          className="xl:size-15 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50"
                        />
                        <span>{word.text}</span>
                      </span>
                    ))}
                  </span>
                </span>
              </h1>
              <h1>into Real Projects</h1>
              <h1>that Deliver Results</h1>
            </div>

            <p className="text-white-50 md:text-xl relative z-10 pointer-events-none text-justify max-w-2xl min-h-[120px]">
              I'm Shrijit More, a full-stack developer who blends clean code, real-time tech, and 3D experiences to build smooth, scalable web apps. I’ve worked on digital twins, AI-powered dashboards, and interactive UIs — all crafted with precision and a bit of creative flair.
            </p>

            <Button
              text="See My Work"
              className="md:w-80 md:h-16 w-60 h-12"
              id="counter"
            />
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