import React from 'react';
import project1Image from '../../assets/images/eCommerce-logo-1.jpg';
import project2Image from '../../assets/images/new.avif';
import mongo from '../../assets/images/mongo.png';
import expressjs from '../../assets/images/expressjs.png';
import reactjs from '../../assets/images/reactjs.png';
import nodejs from '../../assets/images/nodejs.png';
import htmljs from '../../assets/images/htmljs.png';
import tailwind from '../../assets/images/tailwind.png';
import javascript from '../../assets/images/javascript.png';
import css from '../../assets/images/css.png';

function Project() {

  const projects = [
    {
      id: 1,
      image: project1Image,
      name: "E-Commerce Website",
      description: "A fully functional e-commerce platform with payment gateway integration.",
      technologies: [
        { name: 'MongoDB', icon: mongo },
        { name: 'Express.js', icon: expressjs },
        { name: 'React.js', icon: reactjs },
        { name: 'Node.js', icon: nodejs },
        { name: 'HTML5', icon: htmljs },
        { name: 'CSS3', icon: css },
        { name: 'JavaScript', icon: javascript }
      ],
      link: 'https://mern-e-commerce-frontend-7x8m.vercel.app/'
    },
    {
      id: 2,
      image: project2Image,
      name: "Portfolio Website",
      description: "Personal portfolio website built to showcase projects and skills.",
      technologies: [
        { name: 'HTML5', icon: htmljs },
        { name: 'JavaScript', icon: javascript },
        { name: 'React.js', icon: reactjs },
        { name: 'Node.js', icon: nodejs },
        { name: 'CSS3', icon:css }
      ],
      link: 'http://13.211.202.99/'
    },
  ];

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-20'>
      {/* Title Section */}
      <div className="text-center mb-16">
        <h1 className='text-5xl font-bold mb-4'>My Projects</h1>
        <p className='text-lg text-gray-600'>Here are a few projects I have worked on, showcasing my skills and experience.</p>
      </div>

      {/* Projects Grid */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-12'>
        {projects.map(({ id, image, name, description, technologies, link }) => (
          <div key={id} className='border-2 rounded-lg shadow-lg hover:shadow-2xl p-6 transition duration-300'>
            {/* Project Image */}
            <img src={image} alt={name} className='w-full h-56 object-cover rounded-t-lg' />
            
            {/* Project Content */}
            <div className='mt-4'>
              <h2 className='text-2xl font-bold'>{name}</h2>
              <p className='text-gray-700 mt-2'>{description}</p>

              {/* Project Link */}
              <a
                href={link}
                target='_blank'
                rel='noopener noreferrer'
                className='text-blue-500 underline mt-2 block'
              >
                View Project
              </a>
              
              {/* Technologies Used */}
              <div className='mt-4'>
                <h3 className='text-lg font-semibold mb-2'>Technologies Used:</h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-4'>
                  {technologies.map(({ name, icon }, index) => (
                    <div key={index} className='flex items-center space-x-2'>
                      <img src={icon} alt={name} className='w-10 h-10' />
                      <span className='text-gray-700'>{name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
