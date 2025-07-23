import React from 'react'
import { CiMail } from "react-icons/ci";

// image below
import meImg from "../assets/pictures/me.webp";
// import gitHubIcon from "../assets/pictures/Github.png";
// import gmailIcon from "../assets/pictures/gmail.png";
// import { SiGmail } from "react-icons/si";
// import { FaFacebook } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { CiInstagram } from "react-icons/ci";

import socialLinks from './Others/socialLink';

const Home = () => {
  return (
    <div className='flex flex-col w-full hide-scrollbar'>
        {/* This is Navbar */}
        <div className="fixed top-0 left-0 w-full h-16 z-50 flex justify-between items-center
                   px-6 bg-white/80 backdrop-blur border-b border-gray-300">
            <div className="flex gap-5 items-center">
                {["Home", "About", "Capstone Project", "Contact"].map((label) => (
                    <span
                        key={label}
                        className="relative group text-gray-500 hover:text-black"
                        href="#"
                    >
                        <span className="after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full
                                        after:bg-black after:scale-x-0 after:origin-left
                                        after:transition-transform after:duration-300
                                        group-hover:after:scale-x-100">
                            {label}
                        </span>
                    </span>
                ))}
            </div>
            {/* <div className="flex items-center"> */}
            <div className="w-auto flex items-center mr-5 group cursor-pointer">
                <CiMail 
                    className="w-6 h-6 border-1 rounded duration-500 group-hover:bg-black group-hover:text-white" 
                />
                <h1 className="relative text-md duration-500 text-gray-400 p-2 rounded group-hover:text-black">
                    <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        cabarrubias.nevinharold@gmail.com
                    </span>
                </h1>
            </div>
        </div>
        {/* This is Navbar */}

        {/* This is Body */}
        <div className="pt-16 h-screen overflow-y-scroll snap-y snap-mandatory scroll-hide px-5">            
            {/* Left Upper Body*/}
            <section 
                id="sec1" 
                className="h-screen snap-start flex justify-center text-white"
            >                
                <div className="flex flex-col p-2 border-r-1  border-gray-400 w-1/2 ">
                    <div className="flex flex-col">
                        <h1 className='flex gap-1 text-5xl text-left mt-20 font-bold text-black'>
                            I'm a Fullstack Web Developer
                        </h1>
                        <h3 className='text-xl mt-10 text-gray-600'>
                            Hi, I’m Nevin Harold D. Cabarrubias. I’m a full-stack web developer who enjoys building clean and responsive websites and mobile apps. I’ve worked with tools like React, Laravel, and React Native, and have helped create projects like Rentago and an inventory system for managing sales and deliveries. 
                            I’m comfortable working on both the front-end and back-end, and I like turning complex ideas into simple and user-friendly interfaces. I also have experience with APIs, mobile apps, and UI design using Figma.
                            More than just coding, I value working well with others, clear communication, and doing everything with purpose. My goal is to build useful and meaningful software — all while honoring God in the work I do.
                        </h3>
                    </div>
                    <div className="mt-15 w-full gap-x-15 flex align-center justify-center">
                        <div className="justify-center flex items-center">
                            <h1 className='h-[0.5px] w-[200px] bg-black'>
                            </h1>
                        </div>
                        <h1 className='duration-500 hover:text-black hover:border hover:bg-white bg-black  p-2 border-1 rounded-4xl text-3xl text-left font-bold'>
                            Connect with me 
                        </h1>
                        <div className="justify-center flex items-center">
                            <h1 className='h-[0.5px] w-[200px] bg-black'>
                            </h1>
                        </div>
                    </div>
                    <div className="flex-col ">
                        <div className="flex justify-center mt-20">
                            <h1 className='text-2xl text-gray-500 font-bold italic'>
                                "Let's create something amazing together!"
                            </h1>
                        </div>
                        {/* links */}
                        <div className="flex  justify-center gap-5 mt-20">
                            {socialLinks.map((link) => (
                                <a 
                                    key={link.name}
                                    className={`flex gap-5 rounded-full hover:shadow-2xl border duration-300 cursor-pointer p-3 items-center ${link.classname}`}
                                    href={link.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {link.icon}
                                    <h2 className='text-2xl font-bold'>
                                        {link.name}
                                    </h2>
                                </a>    
                            ))}
                        </div>
                       
                    </div>
                </div>
            {/* Right upper Body*/}
                <div className="w-1/2 flex flex-col items-center px-2 duration-200 justify-center">
                    {/* My Image */}
                    <img 
                        className='w-[650px] rounded-xl border-gray-400 shadow-xl hover:scale-105 duration-100'
                        src={meImg} 
                        alt='Image not found'
                    />
                </div>
            </section>

            <section
                id="sec2"
                className="h-screen snap-start flex items-center justify-center"
            >
                <div className="flex flex-col p-2 border-gray-400 w-1/2">
                   Sample
                </div>
                <div className="flex flex-col p-2 border-gray-400 w-1/2">

                </div>
            </section>
        </div>
    </div>
  )
}

export default Home