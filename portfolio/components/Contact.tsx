import React, { ReactElement } from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    nom: string,
    email: string,
    sujet: string,
    message: string
};

function Contact(): ReactElement {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = data => {
        window.location.href = `mailto:alae.tabet02@gmail.com?subject={}&body=Hi, my name is ${data.nom}. ${data.message} . ( ${data.email})
        }`
    }
    return (
        <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
            <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
                Contacter Moi
            </h3>

            <div className="flex flex-col space-y-10">
                <h4 className="text-2xl font-light text-center mt-16">
                    Vous méritez plus qu'une simple application Web . Vous méritez une application Web <span className="decoration-[#F7AB0A]/50 underline">rapide </span> et
                    <span className="decoration-[#F7AB0A]/50 underline"> fiable</span> . Vous méritez un <span className="decoration-[#F7AB0A]/50 underline">développeur</span> qui peut fournir exactement ce que vous méritez.{" "}
                </h4>
                <div className="flex pt-12">

                    {/* Contact Info */}
                    <div className="space-y-10">
                        <div className="flex items-center  space-x-5 ">
                            <PhoneIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-2xl">+212 679516776</p>
                        </div>
                        <div className="flex items-center space-x-5 ">
                            <EnvelopeIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-2xl">alae.tabet02@gmail.com</p>
                        </div>
                        <div className="flex items-center space-x-5 ">
                            <MapPinIcon className="text-[#F7AB0A] h-7 w-7 animate-pulse" />
                            <p className="text-2xl">Mers Sultan , Casablanca</p>
                        </div>
                        </div>



                        {/* formulaire  */}

                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2 w-fit mx-auto">
                            <div className="flex space-x-2">
                                <input
                                    {...register('nom')}
                                    placeholder="Nom/Prenom "
                                    className="contactInput"
                                    type="text"
                                />
                                <input
                                    {...register('email')}
                                    placeholder="Email"
                                    className="contactInput"
                                    type="text"
                                />
                            </div>
                            <input
                                {...register('sujet')}
                                placeholder="Sujet"
                                className="contactInput"
                                type="text"
                            />
                            <textarea
                                {...register('message')}
                                placeholder="Message"
                                className="contactInput"
                                name=""
                            />
                            <button type="submit" className="bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold">Submit </button>

                        </form>

                </div>
            </div>
        </div>
    )
}

export default Contact
