import React, { ReactElement } from 'react'
import { SocialIcon } from 'react-social-icons'

interface Props {

}

function Projects({ }: Props): ReactElement {
    return (

        <div className="h-screen relative flex flex-col px-10 justify-evenly mx-auto items-center">

            <h1 className="absolute top-24 text-2xl text-gray-500 uppercase tracking-[20px]"> Projects</h1>


            <div className="flex space-x-5 items-center ">
                <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=815&q=80"
                    alt=""
                    className="object-cover w-full mx-6 lg:h-72 w-1/2 rounded-xl"
                />
                <div className="">
                    <p className="text-sm uppercase">Nom Projet</p>

                    <a href="" className="inline-block hover:underline lg:mt-8">Voir Projet {' > '} </a>

                    <SocialIcon url="https://github.com/TABET-Alaa/home-app"
                        fgColor="gray"
                        bgColor="transparent"
                    />
                    <div className="mt-3 border border-blue-100 rounded-2xl h-[120px] w-[350px] p-4 bg-[#F7AB0A] ">
                        <p className="text-sm text-black font-bold">A house location website  built with React, NextJs ,Tailwind CSS ,
                        And Django Rest Framework for the backend
                            </p>
                    </div>

                    <div className="flex space-x-4 mt-4">
                        <p>Django</p>
                        <p>NextJS</p>
                        <p>Tailwind</p>
                    </div>

                </div>

            </div>

        </div>
    )
}



export default Projects
