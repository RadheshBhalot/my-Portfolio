import React from 'react';
import html from '../../assets/images/html.jpg';
import css from '../../assets/images/css.png';
import reactjs from '../../assets/images/reactjs.png';
import nodejs from '../../assets/images/nodejs.png';
import javascript from '../../assets/images/javascript.png';

function Experience() {

  const cardItem = [
    {
      id: 1,
      logo: html,
      name: "HTML",
      link: "https://www.interviewbit.com/html-interview-questions/"
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
      link: "https://www.interviewbit.com/css-interview-questions/"
    },
    {
      id: 3,
      logo: reactjs,
      name: "ReactJS",
      link: "https://www.interviewbit.com/react-interview-questions/"
    },
    {
      id: 4,
      logo: nodejs,
      name: "NodeJS",
      link: "https://www.interviewbit.com/node-js-interview-questions/"
    },
    {
      id: 5,
      logo: javascript,
      name: "JavaScript",
      link: "https://www.interviewbit.com/javascript-interview-questions/"
    }
  ];

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-10 md:my-20'>
      {/* Title Section */}
      <div className='text-center mb-10'>
        <h1 className='text-4xl font-bold mb-5'>Experience</h1>
        <p className='text-lg text-gray-600'>Six months of hands-on experience with the following technologies:</p>
      </div>

      {/* Technology Cards */}
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-10 my-10'>
        {cardItem.map(({ id, logo, name, link }) => (
          <a 
            key={id} 
            href={link} 
            target='_blank' 
            rel='noopener noreferrer' 
            className='flex flex-col items-center justify-center border-2 rounded-lg shadow-lg p-4 hover:shadow-xl hover:scale-105 transition-transform duration-300'
          >
            <img 
              src={logo} 
              alt={name} 
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mb-4"
            />
            <h3 className='text-xl font-semibold'>{name}</h3>
            <p className='text-sm text-blue-500 mt-2'>Best Interview Questions</p>
          </a>
        ))}
      </div>
    </div>
  );
}

export default Experience;
