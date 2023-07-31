import React from 'react';

const ContactMe = () => {
  return (
    <div>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold mb-10'>Contact Me</h1>
      <form
        className='flex flex-col text-center bg-gradient-to-tr bg-gray-900 rounded-xl'
        action={'https://getform.io/f/9f3f6229-1e79-4caa-a595-d52d6b35d85f'}
        method='POST'
        encType='multipart/form-data'
      >
        <div className='pt-6 rounded-xl m-4 w-full flex justify-center text-black'>
          <input
            type='text'
            name='name'
            className='w-[80%] p-2 outline-none bg-white'
            placeholder='Name'
          />
        </div>
        <div className='pt-6 rounded-xl m-4 w-full flex justify-center text-black'>
          <input
            type='email'
            name='email'
            className='w-[80%] p-2 outline-none bg-white'
            placeholder='Email'
          />
        </div>
        <div className='pt-6 rounded-xl m-4 w-full flex justify-center text-black'>
          <input
            type='text'
            name='subject'
            className='w-[80%] p-2 outline-none bg-white'
            placeholder='Subject'
          />
        </div>
        <div className='pt-6 rounded-xl m-4 w-full flex justify-center text-black'>
          <textarea
            name='message'
            className='w-[90%] p-2 outline-none bg-white'
            placeholder='Message'
            rows={4}
          />
        </div>
        <div className='pt-6 rounded-xl m-4 w-[80%] flex justify-center'>
          <button
            type='submit'
            className=' px-4 py-2 bg-blue-500 text-white rounded-xl hover:bg-blue-600'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
