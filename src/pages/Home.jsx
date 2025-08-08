import React, { useEffect } from 'react'
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

const Home = () => {

    const navbarLinks = [
        "Home", "About", "Skill", "Projects", "Contact"
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
                <div className="flex gap-5 items-center">
                    {navbarLinks.map((label) => (
                        <span
                            key={label}
                            className="relative group text-gray-500 hover:text-black cursor-pointer"
                            href="#"
                        >
                            <span className="after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-full
                                            after:bg-black after:scale-x-0 after:origin-left
                                            after:transition-transform after:duration-400
                                            group-hover:after:scale-x-100">
                                {label}
                            </span>
                        </span>
                    ))}
                </div>
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
                            <h1 className='fade-in delay-1 gap-1 text-5xl text-left mt-20 font-bold text-black'>
                                I'm a Front-end | Fullstack Web Developer
                            </h1>
                            <p className='fade-in delay-1 text-xl mt-20 text-gray-600  '>
                                Welcome, I’m Nevin Harold D. Cabarrubias — a full-stack web developer who enjoys building clean, responsive websites and mobile apps. I've worked with technologies like React, Laravel, and React Native, and I love turning complex problems into intuitive solutions.
                            </p>
                        </div>
                        <div className="mt-30 w-full gap-x-15 flex align-center justify-center">
                            <div className="justify-center flex items-center">
                                <h1 className='h-[0.5px] w-[200px] bg-black'>
                                </h1>
                            </div>
                            <h1 className='fade-in delay-2 duration-500 hover:text-black hover:border hover:bg-white bg-black p-2 border-1 rounded-4xl text-3xl text-left font-bold cursor-default  '>
                                Connect with me 
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
                            <h1 className='gap-1 text-5xl text-left font-bold text-black'>
                                About Me
                            </h1>
                            <p className='text-xl mt-40 text-gray-600 '>
                                Hey! I’m Nevin — a passionate developer with a degree in Information Technology from the University of Science and Technology of Southern Philippines, graduating with Latin honors, and a fresh graduate. 
                                <br /><br />
                                I’m deeply interested in building fast, user-focused web apps with meaningful design and solid architecture. My workflow often involves <i>React, Laravel, and the occasional sprint through mobile development with React Native. </i>
                                I also have experience integrating RESTful APIs into both web and mobile apps, handling everything from data fetching to error handling and UI updates using platform like <i>Insomnia and Postman</i>.
                                <br /><br />
                                Beyond code, I value clear communication, collaboration, and doing all things with intention — and yes, I firmly believe debugging is 70% detective work and 30% caffeine. ☕
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
                        <h1 className=' gap-1 text-5xl text-left font-bold mt-20 text-black'>
                            Skill Meter
                        </h1>
                    <div className="p-1 px-10">
                            <SkillBar name="HTML" percent={55} color="bg-green-500" />
                            <SkillBar name="CSS" percent={55} color="bg-blue-400" />
                            <SkillBar name="ReactJS" percent={45} color="bg-red-500" />
                            <SkillBar name="JavaScript" percent={30} color="bg-yellow-400" />
                            <SkillBar name="Tailwind" percent={40} color="bg-violet-600" />
                            <SkillBar name="Laravel (PHP & MySQL)" percent={40} color="bg-orange-400" />
                            <SkillBar name="React Native" percent={25} color="bg-pink-400" />
                            <SkillBar name="Native Wind (Mobile Tailwind CSS)" percent={25} color="bg-gray-600"/>
                        </div>
                    </div>
                    <div className="w-1/2 ">
                        <div className="flex flex-col p-2 mt-20 px-20">
                            <div className=" mb-5 ">
                                <h1 className='gap-1  text-5xl text-left font-bold text-black'>
                                    Designing Skills
                                </h1>
                                <p className="text-xl pl-5 mt-6 text-gray-600">
                                    ✅ UI/UX design with <a
                                        href="https://www.figma.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold underline text-blue-600 hover:text-blue-800"
                                    >
                                        Figma
                                    </a>
                                    <br /><br />
                                    ✅ Diagramming and flowchart creation with <a
                                        href="https://www.drawio.com/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold underline text-blue-600 hover:text-blue-800"
                                    >
                                        Draw.io
                                    </a>
                                </p>
                            </div>
                            <h2 className='gap-1 text-5xl mt-15 text-left font-bold text-black'>
                                Soft Skills
                            </h2>
                                {softSkills.map((skill, index)=> (
                                    <p 
                                        key={index} 
                                        className='text-xl mt-5 pl-5 flex text-gray-600'
                                    >
                                        ✅ {skill}
                                    </p>
                                ))}
                        </div>
                    </div>
                </section>

                <section
                    id='sec4'
                    className="h-screen snap-start flex"
                >
                    <div className="flex flex-col p-2 px-20 w-full mt-20 items-center">
                        <h1 className=' gap-1 text-5xl text-left font-bold text-black'>
                            Proud Projects
                        </h1>
                        <div className="flex w-full gap-1">
                            <div className="flex mt-5 flex-col w-1/3 ">
                                <div className="border-1 border-gray-400 rounded p-3">
                                    <h1 className='text-2xl text-black text-left'>
                                        My Portfolio
                                    </h1>
                                    <p>
                                        This portfolio website showcases my skills and projects, built with React and Tailwind CSS. It features a responsive design, smooth animations, and a user-friendly interface.
                                    </p>
                                </div>
                            </div>
                            <div className="flex mt-5 flex-col w-1/3  ">
                                <div className="flex flex-col rounded-4xl p-3">
                                    <h1 className='text-2xl text-black text-left font-bold'>
                                        FMV (Fullstack with Mobile App)
                                    </h1>
                                    <p className='mask-linear-from-inherit-to-inherit mt-'>
                                        A full-stack web application that manages inventory, deliveries, and walk-in sales using customer purchase orders and CRUD operations. Built with Laravel and integrated with a mobile app for real-time delivery management. 
                                    </p>
                                </div>
                                <div className="mt-3 p-3">
                                    <h1>
                                        Frontend Source Code
                                    </h1>
                                    <img 
                                        className='w-20 h-20'
                                        src={fmvImage} 
                                        alt="" 
                                    />
                                </div>
                            </div>
                            <div className="flex-col w-1/3">
                            </div>
                        </div>
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