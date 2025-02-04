import React, { useState } from 'react';
import axios from 'axios';

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState({}); // State for validation errors
  const [success, setSuccess] = useState(false);

  const validate = () => {
    const newErrors = {};

    // Name validation
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Message validation
    if (!message.trim()) {
      newErrors.message = "Message is required";
    } else if (message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const userDetails = { name, email, message };

      axios.post("http://localhost:3001/user/save", userDetails)
        .then(() => {
          setSuccess(true);
          setName("");
          setEmail("");
          setMessage("");
          setErrors({});
        })
        .catch((error) => {
          console.log(error);
          setSuccess(false);
          alert("There was an error while submitting your message.");
        });
    }
  };

  return (
    <div className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-16'>
      <h1 className='text-3xl font-bold mb-4'>Contact me</h1>
      <span>Please fill out the form below to contact me</span>

      {success && (
        <div className="mt-4 flex flex-col items-center">
          <div className="text-5xl text-green-600">✔</div>
          <p className="text-green-600 text-lg font-bold mt-2">Thank you! Your message has been sent successfully.</p>
        </div>
      )}

      {!success && (
        <div className='flex flex-col items-center justify-center mt-5'>
          <form className="bg-slate-200 w-96 px-8 py-6 rounded-xl" onSubmit={handleSubmit}>
            <h1 className='text-xl font-semibold mb-4'>Send Your Message</h1>

            {/* Full Name Field */}
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>Full Name</label>
              <input
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                name="name"
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Enter your full name"
              />
              {errors.name && <span className="text-red-500 text-sm">{errors.name}</span>}
            </div>

            {/* Email Field */}
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>Email Address</label>
              <input
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                name="email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter your email address"
              />
              {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
            </div>

            {/* Message Field */}
            <div className='flex flex-col mb-4'>
              <label className='block text-gray-700'>Message</label>
              <textarea
                className='shadow rounded-lg appearance-none border py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                placeholder="Enter your message"
              />
              {errors.message && <span className="text-red-500 text-sm">{errors.message}</span>}
            </div>

            <button
              type="submit"
              className='bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300'>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Contact;
