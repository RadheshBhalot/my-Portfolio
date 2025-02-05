import React, { useState, useEffect } from 'react';
import { FaSquareFacebook, FaLinkedin, FaSquareInstagram, FaTelegram, FaArrowUp } from "react-icons/fa6";

function Footer() {
  const [showScroll, setShowScroll] = useState(false);

  // Show 'Back to Top' button when user scrolls down
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 300) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 300) {
      setShowScroll(false);
    }
  };

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <>
      {/* Back to Top Button */}
      <div
        className={`fixed bottom-8 right-8 bg-blue-500 p-3 rounded-full text-white shadow-lg cursor-pointer transition-all duration-300 ${showScroll ? 'block' : 'hidden'}`}
        onClick={scrollTop}
      >
        <FaArrowUp size={24} />
      </div>

      {/* Footer Section */}
      <hr />
      <footer className='py-8 bg-gray-100'>
        <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
          <div className='flex flex-col items-center justify-center'>
            {/* Social Icons */}
            <div className='flex space-x-6'>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FaSquareFacebook size={28} className='text-blue-600 hover:text-blue-800 transition duration-300' />
              </a>
              <a href="https://www.linkedin.com/in/radhesh-bhalot-ab3b79312" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin size={28} className='text-blue-500 hover:text-blue-700 transition duration-300' />
              </a>
              <a href="https://www.instagram.com/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <FaSquareInstagram size={28} className='text-pink-600 hover:text-pink-800 transition duration-300' />
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
                <FaTelegram size={28} className='text-blue-400 hover:text-blue-600 transition duration-300' />
              </a>
            </div>

            {/* Footer Text */}
            <div className='mt-8 border-t border-gray-300 pt-8 text-center'>
              <p className='text-sm text-gray-600'> &copy;2024 All Rights Reserved. Design by Radhe🎀🖤.</p>
              <p className='text-sm text-gray-600'>Supportive Partner 💖 Mee 😊</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
