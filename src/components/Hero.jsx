import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { useMediaQuery } from 'react-responsive'

gsap.registerPlugin(SplitText, ScrollTrigger);

const Hero = () => {
    const videoRef = useRef();
    const isMobile = useMediaQuery({ maxWidth: 767 })
    useGSAP(()=>{
        const heroSplit = new SplitText('.title', {type:'chars, words'});
        const paragraphs = new SplitText('.subtitle', {type:'lines'});

        heroSplit.chars.forEach((char)=> char.classList.add('text-gradient'))
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphs.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out",
            stagger: 0.06,
            delay: 1
        })

        gsap.timeline({
            scrollTrigger: {
                trigger: '#hero',
                start: 'top top',
                end: 'bottom top',
                scrub: true,
            }
        })
        .to('.right-leaf', { y: 200 }, 0)
        .to('.left-leaf', { y: -200 }, 0);

        gsap.from('.right-leaf',{y:-200},0)
        gsap.from('.left-leaf',{y:200},0)

        const startValue = isMobile ? 'top 50%' : 'center 60%';
        const endValue = isMobile ?  '120% top' : 'bottom top'

       const tl = gsap.timeline({
            scrollTrigger: {
              trigger: 'video',
              start: startValue,
              end: endValue,     
              scrub: true,
              pin: true,
            }
          });
           videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
           }
        // Cleanup (optional, for React strict mode)
        return () => {
            heroSplit.revert();
            paragraphs.revert();
        };
    },[])
  return (
    <>
    <section id="hero" className="noisy">
    <h1 className="title">{isMobile ? 'CODER' : 'DEVELOPER'}</h1>
    <img src="/images/hero-left-leaf.png" alt="left-leaf" className='left-leaf'/>
    <img src="/images/hero-right-leaf.png" alt="right-leaf" className='right-leaf'/>

    <div className='body'>
        <div className='content'>
            <div className="space-y-5 hodden md:block">
            <p>Clean. Scalable. Efficient.</p>
            <p className="subtitle">
            Code that feels good <br/>Designs that work
            </p>
            </div>
            <div className="view-cocktails">
                <p className="subtitle">
                Code is my cocktail. And yes, I like it smooth, clean, and served with style.
                </p>
                <a href="#About">Get to Know Me</a>
            </div>
        </div> 
    </div>

    </section>

    <div className='video absolute inset-0'>
        <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload='auto' ></video>
    </div>
    </>
  )
}

export default Hero