import Link from 'next/link'
import React, { ReactElement } from 'react'
import {Cursor, useTypewriter} from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
interface Props {
    
}

export default function Profil({}: Props): ReactElement {
    const [text, count] = useTypewriter({
        words: ["Bonjour"," Je suis TABET Alaaddine","Developer web","Designer"],
        loop: true,
        delaySpeed: 2000
    })

    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
            <BackgroundCircles/>
            <img className="relative rounded-full h-32 w-32 mx-auto object-cover" src="" alt=""/>
            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
                    Software Engineer
                </h2>

                <h1 className="text-5xl lg:text-6xl font-semibold px-10">
                    <span>
                        {text}
                    </span>
                    <Cursor cursorColor="#F7AB0A"/>
                </h1>

                <div className="pt-5">
                    <Link href="#about">
                    <button className="profilButton">About</button>
                    </Link>
                    <Link href="skills">
                    <button className="profilButton">Skills</button>
                    </Link>
                    <Link href="projects">
                    <button className="profilButton">Projects</button>
                    </Link>
                    <Link href="contact">
                    <button className="profilButton">Contact</button>
                    </Link>
                </div>
            </div>            
        </div>
    )
}
