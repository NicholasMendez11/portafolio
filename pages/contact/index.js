import React, { useState } from 'react';
import axios from 'axios';

// icons
import { BsArrowRight } from 'react-icons/bs';

// framer
import { motion } from 'framer-motion';

// variants
import { fadeIn } from '../../variants';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [emailSent, setEmailSent] = useState(false)

  const [errors, setErrors] = useState({
    email: false,
    message: false
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(formData.email);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.email) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: true
      }));
      return;
    }

    if (!formData.message) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        message: true
      }));
      return;
    }

    try {
      const response = await axios.post('https://hook.us1.make.com/t3kmq1hqvnuwq5s77hr518fhv2m9qxiu', formData);
      console.log(response.data); // Maneja la respuesta si es necesario
      // Reset form and errors after successful submission
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({
        email: false,
        message: false
      });
      setEmailSent(true);
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };

  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        {/* text & form */}
        <div className='flex flex-col w-full max-w-[700px]'>
          {/* text */}
         {emailSent == true?  <motion.h2
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
          Will get to you shortly<span className='text-accent'> Thanks!.</span>
          </motion.h2>: <motion.h2
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='h2 text-center mb-12'
          >
            Let&apos;s <span className='text-accent'>connect.</span>
          </motion.h2>}
          {/* form */}
      {emailSent? null:<motion.form
          onSubmit={handleSubmit}
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            animate='show'
            exit='hidden'
            className='flex-1 flex flex-col gap-6 w-full mx-auto'
          >
            {/* input group */}
            <div className='flex gap-x-6 w-full'>
              <input type='text' placeholder='name' className='input' value={formData.name} onChange={handleChange} name='name' />
              <input type='email' placeholder='email' className='input lowercase' value={formData.email} onChange={handleChange} name='email' />
            </div>
            <input type='text' placeholder='subject' className='input' value={formData.subject} onChange={handleChange} name='subject' />
            <textarea placeholder='message' autoCapitalize='false'  className='textarea' value={formData.message} onChange={handleChange} name='message'></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>
                Let&apos;s talk
              </span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]' />
            </button>
          </motion.form>}
        </div>
      </div>
    </div>
  );
};

export default Contact;
