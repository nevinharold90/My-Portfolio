// Sociallink.jsx
import { FaGithub, FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { CiInstagram } from "react-icons/ci";

const socialLinks = [
  {
    name: "GitHub",
    icon: <FaGithub className="w-6 h-6" />,
    href: "https://github.com/nevinharold90",
    classname:
      "bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 text-white",
  },
  {
    name: "Gmail",
    icon: <SiGmail className="w-6 h-6 text-red-600 " />,
    href: "mailto:cabarrubias.nevinharold@gmail.com",
    classname:
      "border border-gray-200 text-green-500 group hover:bg-gray-50 hover:text-green-400",
  },
  {
    name: "Facebook",
    icon: <FaFacebook className="w-6 h-6" />,
    href: "https://www.facebook.com/nevin.cabarrubias",
    classname:
      "bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-600 hover:to-blue-400 text-white",
  },
  {
    name: "Instagram",
    icon: <CiInstagram className="w-6 h-6" />,
    href: "https://www.instagram.com/nevin.cabarrubias/",
    classname:
      "bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600 text-white",
  },
];

export default socialLinks;

//! Old code for in its readable state
    {/* <a 
        className="flex gap-5 rounded-full hover:shadow-2xl border duration-300 cursor-pointer p-3 items-center bg-gradient-to-r from-violet-600 to-pink-600 hover:from-violet-500 hover:to-pink-500 "
        href="https://github.com/nevinharold90"
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaGithub
            className='w-10 h-10 text-white'
        />
        <h2 className='text-white text-2xl font-bold'>
            Github
        </h2>
    </a>
    <a 
        className="flex gap-5 rounded-full hover:shadow-2xl border-gray-200 border duration-300 cursor-pointer p-3 group items-center "
        href="mailto:cabarrubias.nevinharold@gmail.com"
    >
        <SiGmail
            className='w-10 h-10 text-red-600'
        />

        <h2 className='text-green-500 text-2xl font-bold'>
            Gmail
        </h2>
    </a>
    <a 
        className="flex gap-5 rounded-full hover:shadow-2xl border-gray-200 border duration-300 cursor-pointer p-3 items-center bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600"
        href="https://www.facebook.com/nevin.cabarrubias"
        target="_blank"
        rel="noopener noreferrer"
    >
        <FaFacebook
            className='w-10 h-10'
            />
        <h2 className='text-white text-2xl font-bold'>
            Facebook
        </h2>
    </a>
    <a 
        className="flex gap-5 rounded-full hover:shadow-2xl border-gray-200 border duration-300 cursor-pointer p-3 items-center bg-gradient-to-r from-pink-500 to-yellow-500 hover:from-pink-600 hover:to-yellow-600"
        href="https://www.instagram.com/nevin.cabarrubias/"
    >
        <CiInstagram
            className='w-10 h-10'
            />
        <h2 className='text-white text-2xl font-bold'>
            Instagram
        </h2>
    </a> */}