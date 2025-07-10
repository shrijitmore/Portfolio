import React from 'react'
import { NAV_LINKS } from '../../constants'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Navbar = () => {
    useGSAP(()=>{
        const navtween = gsap.timeline({
            scrollTrigger: {
                trigger: '.nav',
                start: 'bottom top',
            }
        })
        navtween.fromTo('.nav', {
            backgroundColor: 'transparent',
        }, {
            backgroundColor: '#00000050',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
        })
    })
  return (
    <nav className="nav">
        <div>
            <a href="#home" className="flex items-center gap-2">
                <img src="/images/logo.png" alt="logo" className="w-10 h-10" />
                <p>Shrijit</p>
            </a>

            <ul>
                {NAV_LINKS.map((link) => (
                    <li key={link.name}>
                        <a href={link.href}>{link.name}</a>
                    </li>
                ))}
            </ul>
        </div>
            
    </nav>
  )
}

export default Navbar