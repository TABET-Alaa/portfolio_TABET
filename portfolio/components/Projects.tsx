import React, { ReactElement } from 'react'

interface Props {

}

function Projects({ }: Props): ReactElement {
    return (
        <div className="h-screen ">
            <div className="px-6 py-10 mx-auto">
                <h1 className="text-2xl text-gray-500 uppercase tracking-[20px]"> Projects</h1>

                <div className="mt-8 lg:flex lg:items-center lg:-mx-6">
                    <img src=""
                        alt=""
                        className="object-cover w-full h-72 lg:mx-6 lg:h-96 lg:w-1/2 rounded-xl"
                    />
                    <div className="">
                        <p className="text-sm uppercase">Nom Projet</p>

                        <a href="" className="inline-block hover:underline lg:mt-8">Voir Projet {' > '} </a>

                        <div className="mt-3 border border-blue-100 rounded-2xl h-[120px] w-[350px] p-4 bg-[#F7AB0A] ">
                            <p className="text-sm text-black font-bold">A house location website  built with React, NextJs ,Tailwind CSS ,
                            And Django Rest Framework for the backend
                            </p>
                        </div>

                        <div className="grid grid-cols-3 mt-4">
                            <p>Django</p>
                            <p>React/NextJS</p>
                            <p>Tailwind</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    )
}



export default Projects
