import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbarComponent/navbar';
import Home from './components/homeComponent/home';
import About from './components/aboutComponent/about';
import Project from './components/projectComponent/project'
import Experience from './components/Experience/experience';
import Contact from './components/contactComponent/contact';
import Service from './components/ServiceComponent/service';
import Footer from './components/footerComponent/footer';

function App() {
  return (
    <>
      <Navbar />

      {/* Routes will determine which component to show */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
