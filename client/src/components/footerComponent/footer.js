// // import React from 'react'

// // import { FaSquareFacebook } from "react-icons/fa6";
// // import { FaLinkedin } from "react-icons/fa6";
// // import { FaSquareInstagram } from "react-icons/fa6";
// // import { FaTelegram } from "react-icons/fa";

// // function footer() {
// //   return (
// //   <>
// //   <hr />
// //     <footer className='py-12'>
// //     <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'> 
// //     <div className=' flex flex-col items-center justify-center'>
// //       <div className='flex space-x-4'>
// //           <FaSquareFacebook size={24}/>
// //           <FaLinkedin   size={24}/>
// //           <FaSquareInstagram  size={24} />
// //           <FaTelegram   size={24}/>
// //        </div>
// //        <div className='mt-8 border-t-border-gray-700 pt-8 flex flex-col items-center'>
// //         <p className='text-sm'>&copy; 2024 Your Company .All rights reserved.</p>
// //         <p className='text-sm'>Supportive Partner  Mee 😊</p>
// //        </div>
// //     </div>
// //     </div>
// //     </footer>
// //   </>
// //   )
// // }

// // export default footer
// import React from 'react';
// import { FaSquareFacebook, FaLinkedin, FaSquareInstagram, FaTelegram } from "react-icons/fa6";

// function Footer() {
//   return (
//     <>
//       <hr />
//       <footer className='py-8 bg-gray-100'>
//         <div className='max-w-screen-2xl container mx-auto px-4 md:px-20'>
//           <div className='flex flex-col items-center justify-center'>
//             {/* Social Icons */}
//             <div className='flex space-x-6'>
//               <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
//                 <FaSquareFacebook size={28} className='text-blue-600 hover:text-blue-800 transition duration-300'/>
//               </a>
//               <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 <FaLinkedin size={28} className='text-blue-500 hover:text-blue-700 transition duration-300'/>
//               </a>
//               <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
//                 <FaSquareInstagram size={28} className='text-pink-600 hover:text-pink-800 transition duration-300'/>
//               </a>
//               <a href="https://telegram.org" target="_blank" rel="noopener noreferrer" aria-label="Telegram">
//                 <FaTelegram size={28} className='text-blue-400 hover:text-blue-600 transition duration-300'/>
//               </a>
//             </div>

//             {/* Footer Text */}
//             <div className='mt-8 border-t border-gray-300 pt-8 text-center'>
//               <p className='text-sm text-gray-600'>&copy; 2024 Your Company. All rights reserved.</p>
//               <p className='text-sm text-gray-600'>Supportive Partner 💖 Mee 😊</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;
import React, { useState, useEffect } from 'react';
import { FaSquareFacebook, FaLinkedin, FaSquareInstagram, FaTelegram, FaArrowUp } from 'react-icons/fa';

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
            {/* Social Icons and Tech Stack */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start mt-8 space-y-6 md:space-y-0">
              {/* Social Icons */}
              <div className="text-center md:text-left">
                <h3 className="font-bold text-lg md:text-xl text-gray-700">Connect with Me</h3>
                <ul className="flex justify-center md:justify-start space-x-5 mt-4">
                  <li><a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaSquareFacebook className="text-4xl text-blue-600 hover:text-blue-800 transition duration-300" /></a></li>
                  <li><a href="https://in.linkedin.com/" target="_blank" rel="noreferrer"><FaLinkedin className="text-4xl text-blue-500 hover:text-blue-700 transition duration-300" /></a></li>
                  <li><a href="https://www.instagram.com/?next=%2F&hl=en" target="_blank" rel="noopener noreferrer"><FaSquareInstagram className='text-4xl text-pink-600 hover:text-pink-800 transition duration-300' /></a></li>
                  <li><a href="https://web.telegram.org/a/" target="_blank" rel="noreferrer"><FaTelegram className="text-4xl text-blue-400 hover:text-blue-600 transition duration-300" /></a></li>
                </ul>
              </div>
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
