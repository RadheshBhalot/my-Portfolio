import React from 'react';

function About() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-16">
        <div className="space-y-8">
          
          {/* About Section */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">About Me</h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              I am a dynamic, aspiring Full Stack Web Developer with a passion for creating engaging, responsive web applications. I thrive in team environments and excel at working collaboratively on goal-oriented projects. Currently, I am seeking a Software Developer position to enhance product experiences through my technical expertise.
            </p>
          </div>
          
          {/* Education Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Education & Training</h2>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Bachelor of Computer Applications (Pursuing)</span> 
              <br/>
              Arihant Institute of Management, Indore
            </p>
          </div>

          {/* Skills Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Skills</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li><span className="font-semibold">Technical Skills:</span> ReactJS, HTML, CSS, ExpressJS, RestAPI, MongoDB</li>
              <li><span className="font-semibold">Soft Skills:</span> Excellent problem-solving abilities, effective communication, and collaboration skills</li>
            </ul>
          </div>

          {/* Professional Experience Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Professional Experience</h2>
            <p className="text-lg font-medium text-gray-700">
              <span className="font-semibold">Full Stack MERN Developer Intern</span> 
              <br/>
              Ypsilon IT Solutions (December 2023 – June 2024)
            </p>
            <p className="text-lg text-gray-600 mt-2">
              During my internship, I developed web applications using the MERN stack, focusing on both front-end and back-end technologies. I collaborated with teams to create efficient, scalable web solutions.
            </p>
          </div>

          {/* Certificates Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Certificates</h2>
            <ul className="list-disc list-inside space-y-2 text-lg text-gray-700">
              <li>C/C++ Certification from Universal Informatics</li>
              <li>MERN Stack Certification from Universal Informatics</li>
              <li>Internship Certificate from Ypsilon IT Solutions</li>
            </ul>
          </div>

          {/* Mission Statement Section */}
          <div>
            <h2 className="text-2xl font-semibold text-blue-600 mb-3">Mission Statement</h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              My mission as a web developer is to create web-based applications and services that provide an outstanding user experience. I strive to be a versatile developer who masters multiple programming languages and tools, helping to solve real-world problems through technology.
            </p>
          </div>

        </div>
      </div>
    </>
  );
}

export default About;
