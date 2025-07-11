import gsap from 'gsap';
import { SplitText} from 'gsap/all'
import { useGSAP } from '@gsap/react'

const Project = () => {
 useGSAP(() => {
	const titleSplit = SplitText.create('#project h2', {
	 type: 'words'
	})
	
	const scrollTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#project',
		start: 'top center'
	 }
	})
	
	scrollTimeline
	 .from(titleSplit.words, {
		opacity: 0, duration: 1, yPercent: 100, ease: 'expo.out', stagger: 0.02
	})
	 .from('.top-grid div, .bottom-grid div', {
		opacity: 0, duration: 1, ease: 'power1.inOut', stagger: 0.04,
	}, '-=0.5')
 })
 
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
	 
	 <div className="top-grid">
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
	 
	</div>
 )
}
export default Project