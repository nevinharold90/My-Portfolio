import React from 'react'

     const projects = [
        {
            title: "FMV (Fullstack with Mobile App)",
            slug: "fmv",
            description:
            "A full-stack web application that manages inventory, deliveries, and walk-in sales using customer purchase orders and CRUD operations. Built with ReactJS, Laravel, and integrated with a mobile app for real-time delivery management.",
            links: [
                { label: "Frontend Source Code", target: "_blank", href: "https://github.com/nevinharold90/FMV-WEB" },
                { label: "Backend Source Code", target: "_blank", href: "https://github.com/nevinharold90/FMV-Backend-Project" },
                { label: "Mobile App Source Code", target: "_blank", href: "https://github.com/nevinharold90/FMV-ReactNative" },
            ]
        },
        {
            title: "Rentago",
            slug: "rentago",
            description: "A full-stack web application for managing rental properties, including tenant management, payment tracking, and maintenance requests. Built with Laravel,  ReactNative and  NativeWindCSS (Mobile version of TailwindCSS).",
            links: [
                { label: "Frontend Source Code", target: "_blank", href: "https://github.com/nevinharold90/RentagoProject" }
            ]
        },
        {
            title: "Portfolio Website",
            slug: "portfolio",
            description: "Project Created with ReactJS, TailwindCSS, and Vite. This portfolio showcases my skills, projects, and experience as a web developer.",
            // image: someOtherImage,
            links: [
                { label: "Website (Live | Vercel)", target: "_blank", href: "https://titoy.vercel.app/" },
                { label: "Source Code", target: "_blank", href: "https://github.com/nevinharold90/My-Portfolio" },
            ]
        },
        // {
        //     title: "Another Project 4",
        //     description: "Description for the second project…",
        //     // image: someOtherImage,
        //     linkLabel: "View Repo",
        //     linkHref: "#",
        // },
    ];

export default projects