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

import SkillBar from './Others/SkillBar'; // adjust the path if needed
import socialLinks from './Others/socialLink';

const Home = () => {
  return (
    <div className='flex flex-col w-full hide-scrollbar'>
        {/* This is Navbar */}
        <div className="fixed top-0 left-0 w-full h-16 z-50 flex justify-between items-center
                   px-6 bg-white/80 backdrop-blur border-b border-gray-300">
            <div className="flex gap-5 items-center">
                {["Home", "About", "Education", "Capstone Project", "Contact"].map((label) => (
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
            <a className="w-auto flex items-center mr-5 group cursor-pointer"
                href="mailto:cabarrubias.nevinharold@gmail.com"
            >
                <CiMail 
                    className="w-6 h-6 border-1 rounded duration-500 group-hover:bg-black group-hover:text-white" 
                />
                <h1 className="relative text-md duration-500 text-gray-400 p-2 rounded group-hover:text-black">
                    <span className="relative after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100">
                        cabarrubias.nevinharold@gmail.com
                    </span>
                </h1>
            </a>
        </div>
        {/* This is Navbar */}

        {/* This is Body */}
        <div className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-hide px-5">            
            {/* Left Upper Body*/}
            <section 
                id="sec1" 
                className="h-screen snap-start flex justify-center text-white"
            >                
                <div className="flex flex-col p-2 border-r-1 border-gray-400 w-1/2 ">
                    {/* Home */}
                    <div className="flex flex-col">
                        <h1 className='gap-1 text-5xl text-left mt-20 font-bold text-black'>
                            I'm a Front-end | Fullstack Web Developer
                        </h1>
                        <p className='text-xl mt-20 text-gray-600'>
                        Hi, I’m Nevin Harold D. Cabarrubias — a full-stack web developer who enjoys building clean, responsive websites and mobile apps. I've worked with technologies like React, Laravel, and React Native, and I love turning complex problems into intuitive solutions.
                        </p>
                    </div>
                    <div className="mt-20 w-full gap-x-15 flex align-center justify-center">
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
                                "Let's create something amazing together 👌"
                            </h1>
                        </div>
                        {/* links */}
                        <div className="flex  justify-center gap-5 mt-25">
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
                className="h-screen snap-start flex justify-center"
            >
                <div className="flex flex-col border-r-1 border-gray-400 w-1/2">
                    <div className="flex flex-col p-2 mt-20">
                        <h1 className='gap-1 text-5xl text-left font-bold text-black'>
                            About Me
                        </h1>
                        <p className='text-xl mt-20 text-gray-600'>
                            Hey! I’m Nevin — a passionate developer with a degree in Information Technology from the University of Science and Technology of Southern Philippines, graduating with Latin honors, and a fresh graduate. 
                            <br /><br />
                            I’m deeply interested in building fast, user-focused web apps with meaningful design and solid architecture. My workflow often involves <i>React, Laravel, and the occasional sprint through mobile development with React Native.</i>
                            I also have experience integrating RESTful APIs into both web and mobile apps, handling everything from data fetching to error handling and UI updates using platform like <i>Insomnia and Postman</i>.
                            <br /><br />
                            Beyond code, I value clear communication, collaboration, and doing all things with intention — and yes, I firmly believe debugging is 70% detective work and 30% caffeine. ☕
                        </p>
                    </div>

                </div>
                <div className="flex flex-col p-2 px-20 mt-20 border-gray-400 w-1/2">
                    <h1 className='flex gap-1 text-5xl text-left font-bold text-black'>
                        Skill Meter
                    </h1>

                    <SkillBar name="HTML" percent={50} color="bg-green-500" />
                    <SkillBar name="CSS" percent={50} color="bg-blue-400" />
                    <SkillBar name="ReactJS" percent={50} color="bg-red-500" />
                    <SkillBar name="JavaScript" percent={40} color="bg-yellow-400" />
                    <SkillBar name="Tailwind" percent={40} color="bg-violet-600" />
                    <SkillBar name="Laravel" percent={45} color="bg-orange-400" />
                    <SkillBar name="React Native" percent={30} color="bg-pink-400" />
                    <SkillBar name="Native Wind (Mobile Tailwind CSS)" percent={30} color="bg-gray-600" />
                </div>
            </section>
        </div>
    </div>
  )
}

export default Home