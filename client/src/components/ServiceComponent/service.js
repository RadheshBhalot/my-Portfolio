import React from 'react';
import { FaLaptopCode, FaMobileAlt, FaPalette, FaDatabase } from "react-icons/fa";

function Services() {
  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Building responsive and modern websites with the latest technologies.",
      icon: <FaLaptopCode size={50} className="text-green-500" />
    },
    {
      id: 2,
      title: "Mobile App Development",
      description: "Creating seamless mobile experiences on iOS and Android platforms.",
      icon: <FaMobileAlt size={50} className="text-blue-500" />
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Designing intuitive and user-friendly interfaces for a smooth user experience.",
      icon: <FaPalette size={50} className="text-pink-500" />
    },
    {
      id: 4,
      title: "Backend Development",
      description: "Building robust server-side applications with secure database systems.",
      icon: <FaDatabase size={50} className="text-purple-500" />
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-100 py-16 text-center">
        <h1 className="text-4xl font-bold mb-4">My Services</h1>
        <p className="text-gray-600 text-lg">Crafting web and mobile experiences that bring value to businesses and users.</p>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div key={service.id} className="p-8 bg-gray-50 shadow-lg rounded-lg hover:shadow-2xl transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {service.icon}
                </div>
                <h2 className="text-2xl font-semibold text-center mb-4">{service.title}</h2>
                <p className="text-gray-600 text-center">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
{/* 
      {/* CTA Section */}
      {/* <section className="bg-green-500 py-12 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Let’s work together!</h2>
        <p className="text-lg mb-6">Interested in any of my services? Let’s create something amazing together.</p>
        <button className="px-6 py-3 bg-white text-green-500 font-semibold rounded-md hover:bg-gray-100 transition duration-300" >
          Get in Touch
        </button>
    
      </section> 
     */}
    </>
  );
}

export default Services;
