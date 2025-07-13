import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Project = () => {
 useGSAP(() => {
	if (document.fonts) {
		document.fonts.ready.then(() => {
			const titleSplit = SplitText.create('#project h2', {
				type: 'words'
			});
			
			const scrollTimeline = gsap.timeline({
				scrollTrigger: {
					trigger: '#project',
					start: 'top center'
				}
			})
			
			scrollTimeline
			 .from(titleSplit.words, {
				opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
			});
		})
	} else {
		const titleSplit = SplitText.create('#project h2', {
			type: 'words'
		});
		
		const scrollTimeline = gsap.timeline({
			scrollTrigger: {
				trigger: '#project',
				start: 'top center'
			}
		})
		
		scrollTimeline
		 .from(titleSplit.words, {
			opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
		});
	}
 }, []);

 const sectionRef = useRef(null);
  const rydeRef = useRef(null);
  const libraryRef = useRef(null);
  const ycDirectoryRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each app showcase
    const cards = [rydeRef.current, libraryRef.current, ycDirectoryRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);
 
 return (
	<div id="project">
	 <div className="mb-16 md:px-0 px-5">
		<div className="content">
		 <div className="md:col-span-8">
			<p className="badge">Featured Project</p>
			<h2>
            Where Every Line of Code <span className="text-white">-</span>
            Brings Ideas to Life 
			</h2>
		 </div>
		 
		 <div className="sub-content">
			<p>
            I build projects that are both functional and visually engaging. From frontend to backend, I focus on clean code, efficiency, and a user-first approach.			</p>
			
			<div>
			 <p className="md:text-3xl text-xl font-bold">
				<span>0</span>
			 </p>
			 <p className="text-sm text-white-100">
              Bugs (okay, maybe just a few 🐞)
			 </p>
			</div>
		 </div>
		</div>
	 </div>

	 {/* Grids */}

	 {/* <div className="top-grid">
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src="/images/abt1.png" alt="grid-img-1" />
		</div>
		
		<div className="md:col-span-6">
		 <div  className="noisy" />
		 <img src="/images/abt2.png" alt="grid-img-2" />
		</div>
		
		<div className="md:col-span-3">
		 <div  className="noisy" />
		 <img src="/images/abt5.png" alt="grid-img-5" />
		</div>
	 </div>
	 
	 <div className="bottom-grid">
		<div className="md:col-span-8">
		 <div  className="noisy" />
		 <img src="/images/abt3.png" alt="grid-img-3" />
		</div>
		
		<div className="md:col-span-4">
		 <div  className="noisy" />
		 <img src="/images/abt4.png" alt="grid-img-4" />
		</div>
	 </div>
	  */}


    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        <div className="showcaselayout">
          <div ref={rydeRef} className="first-project-wrapper">
            <div className="image-wrapper">
              <img src="/images/DigitalTwin.png" alt="Ryde App Interface" />
            </div>
            <div className="text-content">
              <h2>
                3D Smart Factory Digital Twin (Blender, ThreeJS, Reactjs, Websockets, Flask)
              </h2>
              <p className="text-white-50 md:text-xl">
                Developed a comprehensive 3D Digital Twin system for smart factory visualization with real time data integration and interactive dashboard for Industry 4.0.<br />
                Demo Frontend Git URL: <a href="https://github.com/shrijitmore/Digital-Twin-of-iFactory" target="_blank" rel="noopener noreferrer">https://github.com/shrijitmore/Digital-Twin-of-iFactory</a>
              </p>
            </div>
          </div>

          <div className="project-list-wrapper overflow-hidden">
            <div className="project" ref={libraryRef}>
              <div className="bg-[#FFEFDB] inline-block rounded-3xl overflow-hidden">
                <img
                  src="/images/hotel.png"
                  alt="Hotel Management Platform"
                  className="rounded-3xl"
                />
              </div>
              <h2>Hotel Management Platform (Backend)</h2>
            </div>

            <div className="project" ref={ycDirectoryRef}>
              <div className="bg-[#FFE7EB] inline-block rounded-3xl overflow-hidden">
                <img
                  src="/images/dashboard.png"
                  alt="Ai powered Dashboard Application"
                  className="rounded-3xl"
                />
              </div>
              <h2>Ai powered Dashboard Application (FullStack)</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

	</div>
 )
}
export default Project