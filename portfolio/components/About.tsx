import React, { ReactElement } from 'react'
import {motion} from "framer-motion"
interface Props {
    
}

export default function About({}: Props): ReactElement {
    return (
        <motion.div
            initial={{
                opacity: 0
            }}
            transition={{
                duration : 1.5
            }}
            whileInView={{
                opacity: 1
            }}
            className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl pb-[40px]">About</h3>
            <motion.img 
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration : 1.2
                }}
                whileInView={{
                    x:0 ,
                    opacity: 1
                }}
                className="space-y-32 mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg 
                md:w-64 md:h-95 xl:w-[350px] xl:h-[450px]"
                src="https://alaaddine-tabet.web.app/assets/imgAlaa2.jpg"
            />

            <div className="w-[600px] px-0 md:px-10">
                <p className="text-base font-bold text-sm leading-loose">
                    Développeur passionné par les nouvelles technologies et l’univers du web, je suis spécialisé 
                    dans le développement web . Polyvalent, je maîtrise plusieurs langages de programmation dont
                    HTML/CSS ,JavaScript , TypeScript  sur le frontend .
                    je suis assez à l'aise avec ReactJS, NextJs , Django , MongoDB, Firebase , Sanity .
                    Pour plus de détails sur mes projets terminés, consultez mon  Github .  
                    Je sais identifier et comprendre les besoins des utilisateurs pour de meilleurs résultats.
                    <br/>
                    Contactez -nous et nous ferons passer votre site Web au niveau supérieur !
                </p>
            </div>
        </motion.div>
    )
}
