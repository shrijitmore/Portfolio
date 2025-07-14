import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "./TitleHeader";
import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
import { techStackIcons } from "../../constants";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: .5, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.3, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <section id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-6 mt-16 mb-16">
          {/* Loop through the techStackIcons array and create a component for each item. 
              The key is set to the name of the tech stack icon, and the classnames are set to 
              card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
              classes are only applied on larger screens. */}
          {techStackIcons.map((techStackIcon) => (
            <div
              key={techStackIcon.name}
              className="relative card-border tech-card overflow-hidden group rounded-2xl shadow-2xl bg-gradient-to-br from-gray-800 to-gray-900 hover:shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] transform hover:-translate-y-2 transition-all duration-300 w-full h-96"
            >
              {/* Glossy overlay */}
              <div className="absolute top-0 left-0 w-full h-full pointer-events-none z-10">
                <div className="absolute top-0 left-0 w-full h-1/3 bg-white/20 rounded-t-2xl blur-sm" />
                <div className="rounded-full blur-md opacity-60" />
              </div>
              {/* The tech-card-animated-bg div is used to create a background animation when the 
                  component is hovered. */}
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content relative z-20 h-full flex flex-col justify-center items-center gap-3">
                {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
                    which renders the 3D model of the tech stack icon. */}
                <div className="w-40 h-40 flex justify-center items-center">
                  <TechIconCardExperience model={techStackIcon} />
                </div>
                {/* The padding-x and w-full classes are used to add horizontal padding to the 
                    text and make it take up the full width of the component. */}
                <div className="w-full px-2 text-center">
                  {/* The p tag contains the name of the tech stack icon. */}
                  <p className="text-base md:text-lg font-semibold text-white">{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;