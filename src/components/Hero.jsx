import { useGSAP } from '@gsap/react'
import React from 'react'
import gsap from 'gsap'
import SplitText from 'gsap/SplitText'

gsap.registerPlugin(SplitText);

const Hero = () => {
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

    },[])
  return (
    <>
    <section id="hero" className="noisy">
    <h1 className="title">DEVELOPER</h1>
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
    </>
  )
}

export default Hero