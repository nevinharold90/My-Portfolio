import React, { use, useEffect } from 'react'
import { CiMail } from "react-icons/ci";

// image below
import meImg from "../assets/pictures/me.webp";
import meCumLaudeImg from "../assets/pictures/Cumlaude Image.webp";
import meDiplomaImg from "../assets/pictures/Diploma.webp";
import fmvImage from "../assets/pictures/Projects/FMV/Logo.png";
import { IoMdDownload } from "react-icons/io";

// import gitHubIcon from "../assets/pictures/Github.png";
// import gmailIcon from "../assets/pictures/gmail.png";
// import { SiGmail } from "react-icons/si";
// import { FaFacebook } from "react-icons/fa";
// import { FaGithub } from "react-icons/fa";
// import { CiInstagram } from "react-icons/ci";

import loadingEffect from './Others/loadingEffect';
import SkillBar from './Others/SkillBar'; // adjust the path if needed
import socialLinks from './Others/socialLink';
import LoadingEffect from './Others/loadingEffect';
import Carousel from './Others/Carousel';
import projects from './Projects/Details'; // adjust the path if needed



const Home = () => {

    const ProjectData = projects
    // console.log(ProjectData);

    const navbarLinks = [
        "HOME", "ABOUT", "SKILL", "PROJECTS", "CONTACT"
    ]

    const softSkills = [
        "Problem-solving and debugging", "Strong work ethic and discipline", "Team collaboration and communication",
        "Leadership and organization", "Adaptability", "Project Manager", "Time Management","Critical Thinking"
    ]

    // Images for the graduation section
    const images = [
        meCumLaudeImg,
        meDiplomaImg
    ]

    // Image for Project

    const [currentIndex, setCurrentIndex] = React.useState(0);

    const handleNavBarClick = (label) => {
        console.log(label);
        if (label === "HOME") {
            document.getElementById("sec1").scrollIntoView({ behavior: "smooth" });
        }
        else if (label === "ABOUT") {
            document.getElementById("sec2").scrollIntoView({ behavior: "smooth" });
        } else if (label === "SKILL") {
            document.getElementById("sec3").scrollIntoView({ behavior: "smooth" });
        } else if (label === "PROJECTS") {
            document.getElementById("sec4").scrollIntoView({ behavior: "smooth" });
        } 
    }

    useEffect(() => {
        
        const interval = setInterval(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, 3000); // Change every 3 seconds

        return () => clearInterval(interval); // Cleanup on unmount
    }, [images.length]);

  return (
        <div className='flex flex-col w-full bg-gray-50'>
            {/* This is Navbar */}
            <div className="fixed top-0 left-0 w-full h-16 z-50 flex justify-between items-center px-6 bg-white/90 backdrop-blur border-b border-gray-300">
                <nav className="flex gap-5 items-center">
                    {navbarLinks.map((label) => (
                        <span
                            key={label}
                            className="relative group text-gray-600 hover:text-black cursor-pointer"
                            href="#"
                            onClick={() => handleNavBarClick(label)}
                        >
                            <span
                                className="after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full
                                        after:bg-black after:scale-x-0 after:origin-left
                                        after:transition-transform after:duration-400
                                        group-hover:after:scale-x-100"
                            >
                                {label}
                            </span>
                        </span>
                    ))}
                </nav>
                {/* <div className="flex items-center"> */}
                <a
                    href="mailto:cabarrubias.nevinharold@gmail.com"
                    className="flex items-center gap-2 group cursor-pointer mr-5"
                >
                    <CiMail className="w-6 h-6 duration-300 group-hover:bg-black group-hover:text-white rounded" />
                    <span className="text-md text-gray-400 duration-300 group-hover:text-black relative p-2">
                        <span className="after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:bg-black after:scale-x-0 after:origin-left after:transition-transform after:duration-300 group-hover:after:scale-x-100 ">
                            cabarrubias.nevinharold@gmail.com
                        </span>
                    </span>
                </a>
            </div>
            {/* This is Navbar */}

            {/* This is Body */}
            <div className="h-screen overflow-y-scroll snap-start snap-both px-5">            
                {/* Left Upper Body*/}
                <section 
                    id="sec1" 
                    className="h-screen snap-start flex justify-center text-white "
                >                
                    <div className="flex flex-col p-2 border-r-1 border-gray-400 w-1/2 ">
                        {/* Home */}
                        <div className="flex flex-col fade-in ">
                            <h1 className='fade-in delay-1 gap-1 text-5xl text-left mt-20 font-bold text-gray-900'>
                                FRONT-END | FULL STACK WEB DEVELOPER
                            </h1>
                            <p className='fade-in delay-1 text-xl mt-20 text-gray-700  '>
                                Welcome, I’m Nevin Harold D. Cabarrubias — a full-stack web developer who enjoys building clean, responsive websites and mobile apps. I've worked with technologies like React, Laravel, and React Native, and I love turning complex problems into intuitive solutions.
                            </p>
                        </div>
                        <div className="mt-30 w-full gap-x-15 flex align-center justify-center">
                            <div className="justify-center flex items-center">
                                <h1 className='h-[0.5px] w-[200px] bg-black'>
                                    
                                </h1>
                            </div>
                            <h1 className='fade-in delay-2 duration-500 p-2 text-3xl  text-gray-900 font-bold cursor-default  '>
                               CONNECT WITH ME
                            </h1>
                            <div className="justify-center flex items-center">
                                <h1 className='h-[0.5px] w-[200px] bg-black'>
                                    
                                </h1>
                            </div>
                        </div>
                        <div className="flex-col ">
                            {/* links */}
                            <div className="fade-in delay-3 flex justify-center gap-5 mt-40">
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
                            className='fade-in delay-4 w-[650px] rounded-xl border-gray-400 shadow-xl hover:scale-105 duration-100'
                            src={meImg} 
                            alt='Image not found'
                        />
                    </div>
                </section>

                <section
                    id="sec2"
                    className="h-screen snap-start flex justify-center scroll-smooth"
                >
                    <div className="flex flex-col border-r-1 border-gray-400 w-1/2">
                        <div className="flex flex-col p-2 mt-20">
                            <h1 className='gap-1 text-5xl text-left font-bold text-gray-900'>
                                ABOUT ME
                            </h1>
                            <p className='text-xl mt-35 text-gray-800 '>
                                Hey! I’m Nevin — a passionate developer with a degree in Information Technology from the University of Science and Technology of Southern Philippines, graduating with Latin honors, and a fresh graduate. 
                                <br /><br />
                                I’m deeply interested in building fast, user-focused web apps with meaningful design and solid architecture. My workflow often involves React, Laravel, and the occasional sprint through mobile development with React Native.
                                I also have experience integrating RESTful APIs into both web and mobile apps, handling everything from data fetching to error handling and UI updates using platform like Insomnia and Postman.
                                <br /><br />
                                Beyond code, I am a christian serving Jesus Christ as part of a choir member here at my local church in the Philippines, I was saved and will forever honor Jesus. <i>"A shepherd will never abandon a lost lamb."</i>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col p-2 px-20 border-gray-400 w-1/2 ">
                        <img 
                            className='w-[800px] mt-30 h-[600px] rounded-xl border-gray-400 shadow-xl hover:scale-105 duration-100 transition'
                            src={images[currentIndex]} 
                            alt='Image not found'
                        />
                            <div className="flex justify-center p-2 mt-10">
                                    {images.map((image) => (
                                        <img 
                                            key={image}
                                            className='w-40 h-30 ml-10 rounded-2xl duration-300 bg-blue-500 p-1 transition hover:opacity-80 hover:scale-105 shadow-xl'
                                            src={image} 
                                            alt="Graduation Images"
                                            onClick={() => setCurrentIndex(images.indexOf(image))}
                                        />
                                    ))}
                            </div>
                    </div>
                </section>
                <section
                    id='sec3'
                    className="h-screen snap-start flex justify-center border-b-1 border-gray-400"
                >
                    <div className="flex flex-col border-r-1 border-gray-400 w-1/2">
                        <h1 className=' gap-1 text-5xl text-left font-bold mt-20 text-gray-800'>
                            SKILL METER
                        </h1>
                    <div className="px-10">
                            <div className="flex flex-col">
                                <h1 className='text-gray-700 mt-10'>
                                    FRONT END
                                </h1>
                                    <SkillBar name="HTML" percent={55} color="bg-green-400" />
                                    <SkillBar name="ReactJS" percent={45} color="bg-red-400" />
                                    <SkillBar name="JavaScript" percent={30} color="bg-yellow-300" />
                            <div className="flex flex-col mt-5">
                                <h1 className='text-gray-700 mt-10'>
                                    MOBILE 
                                </h1>
                                <SkillBar name="React Native (EXPO)" percent={25} color="bg-pink-400" />
                            </div>
                            <div className="flex flex-col mt-5">
                                <h1 className='text-gray-700 mt-10'>
                                    BACK END
                                </h1>
                                <SkillBar name="Laravel (PHP & MySQL)" percent={40} color="bg-orange-400" />
                            </div>
                                <h1 className='text-gray-700 mt-10'>
                                    DESIGN
                                </h1>
                                <SkillBar name="CSS" percent={55} color="bg-blue-400" />
                                <SkillBar name="Tailwind" percent={40} color="bg-violet-600" />
                                <SkillBar name="Native Wind (Mobile Tailwind CSS)" percent={25} color="bg-gray-600"/>
                            </div>

                        </div>
                    </div>
                    <div className="w-1/2 ">
                        <div className="flex flex-col p-2 mt-20 px-20">
                            <div className=" mb-5 ">
                                <h1 className=' gap-1 text-5xl text-left font-bold text-gray-800'>
                                    DESIGNING SKILLS
                                </h1>
                                <p className="text-xl pl-5 mt-6 text-gray-600">
                                        UI/UX design with <a
                                        href="https://www.figma.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-yellow-500 hover:text-yellow-700 duration-300"
                                    >
                                        Figma
                                    </a>
                                    <br /><br />
                                    Diagramming and flowchart creation with <a
                                        href="https://www.drawio.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold text-yellow-500 hover:text-yellow-700 duration-300"
                                    >
                                        Draw.io
                                    </a>
                                </p>
                            </div>
                            <h1 className=' gap-1 text-5xl text-left font-bold mt-15 text-gray-800'>
                                SOFT SKILLS
                            </h1>
                                {softSkills.map((skill, index)=> (
                                    <p 
                                        key={index} 
                                        className='text-xl mt-5 pl-5 flex text-gray-600'
                                    >
                                        {skill}
                                    </p>
                                ))}
                        </div>
                    </div>
                </section>
                <section id="sec4" className="h-screen snap-start flex ">
                    <div className="flex flex-col w-full  items-center px-4 mt-20">
                        <h1 className="text-5xl font-bold text-black">Projects (WIP)</h1>
                        <Carousel projects={ProjectData} />
                    </div>
                </section>
            </div>
            {/* This is Body */}

            {/* This is Footer for resume*/}  
            <a
                href="./resume/Cabarrubias, Nevin Harold, D  - Resume.pdf"
                className="fixed animate-bounce bottom-5 right-5 flex items-center gap-3 px-4 py-2 bg-black text-white rounded-full shadow-lg hover:bg-white hover:text-black transition duration-500 z-50" 
            >
                <IoMdDownload 
                    className="w-5 h-5"
                />
                <span className="text-lg">Resume.pdf</span>
            </a>
        </div>
  )
}

export default Home