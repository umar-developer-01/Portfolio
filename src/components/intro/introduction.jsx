import React from 'react'
import { useAuth } from "../../context/appContext";


const Introduction = () => {
    const { scrollToComponent } = useAuth();
    return (
        <div className="text-center flex flex-col justify-center md:ps-12 md:w-6/12 md:text-left lg:w-6/12">
            <h1 className="font-black dark:text-white text-4xl md:text-4xl xl:text-5xl">
                <span className="md:text-4xl xl:text-6xl"> I’m <span className="text-orange-600">Umar</span></span>, <br />Full Stack Developer
            </h1>
            <div className="">
                <p className="mt-4 xl:mt-8 text-lg text-gray-700 dark:text-gray-100">
                    Making the world a better place by building quality software!<br />
                    React, Node, NextJS, SQL , MongoDB & Microservice

                </p>
                <div className="mt-4 xl:mt-8 flex justify-center gap-4 sm:gap-4 md:justify-start">
                    <button
                        className="btn btn-orange"
                        onClick={() => scrollToComponent("portfolio")}
                    >
                        Projects
                    </button>

                    <button
                        className="btn btn-lighter"
                        onClick={() => scrollToComponent("hireme")}
                    >

                        Hire me

                    </button>
                </div>
            </div>
        </div >
    )
}

export default Introduction