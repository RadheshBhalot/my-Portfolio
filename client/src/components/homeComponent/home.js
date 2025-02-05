import React from 'react';
import '../homeComponent/home.css';
import About from '../../components/aboutComponent/about';
import Project from '../projectComponent/project';
import Experience from '../Experience/experience';
import Service from '../ServiceComponent/service';
import Contact from '../contactComponent/contact';

import rr from '../../assets/images/rr.jpg';

import { FaSquareFacebook, FaLinkedin } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";

import { DiMongodb } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { FaReact, FaNodeJs } from "react-icons/fa6";

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-100 to-gray-200 py-16 md:py-32">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
          
          {/* Text Section */}
          <div className="md:w-1/2 text-center md:text-left space-y-6 animate-fade-in order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">Welcome to My Portfolio</h1>
            <div className="flex justify-center md:justify-start items-center space-x-3 text-2xl md:text-4xl">
              <h2 className="text-gray-700">Hello, I'm a</h2>
              <span className="font-bold text-blue-500 animate-slide-in">Developer</span>
            </div>
            <p className="text-gray-600 text-lg md:text-xl leading-relaxed max-w-lg mx-auto md:mx-0">
              Passionate about web development, I specialize in building dynamic and responsive applications using modern technologies. My work bridges creativity and technical expertise to bring ideas to life.
            </p>

            {/* Social and Tech Stack */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8 space-y-6 md:space-y-0">
              
              {/* Social Icons */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg md:text-xl text-gray-700">Connect with Me</h3>
                <ul className="flex justify-center md:justify-start space-x-5 mt-4">
                  <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaSquareFacebook className="text-4xl text-blue-600 hover:text-blue-800 transition duration-300" /></a></li>
                  <li><a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin className="text-4xl text-blue-500 hover:text-blue-700 transition duration-300" /></a></li>
                  <li><a href="https://web.telegram.org/a/" target="_blank" rel="noreferrer"><FaTelegram className="text-4xl text-blue-400 hover:text-blue-600 transition duration-300" /></a></li>
                </ul>
              </div>

              {/* Tech Stack Icons */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg md:text-xl text-gray-700">Technologies I Use</h3>
                <ul className="flex justify-center md:justify-start space-x-5 mt-4">
                  <li><DiMongodb className="text-4xl text-green-500 hover:scale-110 transition duration-300" /></li>
                  <li><SiExpress className="text-4xl text-gray-500 hover:scale-110 transition duration-300" /></li>
                  <li><FaReact className="text-4xl text-blue-500 hover:scale-110 transition duration-300" /></li>
                  <li><FaNodeJs className="text-4xl text-green-500 hover:scale-110 transition duration-300" /></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="md:w-1/2 md:ml-16 flex justify-center md:justify-end order-1 md:order-2 animate-fade-in">
            <img src={rr} className="rounded-full w-72 h-72 md:w-96 md:h-96 shadow-lg hover:shadow-2xl transition duration-300" alt="Profile" />
          </div>
        </div>
      </div>

      <hr className="my-12" />

      {/* Other Sections */}
      <About />
      <Project />
      <Experience />
      <Service />
      <Contact />
    </>
  );
}

export default Home;
