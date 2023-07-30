import React, {useState} from 'react';

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaBootstrap,
  FaReact,
} from 'react-icons/fa';

import {
  SiTailwindcss,
} from 'react-icons/si'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='w-10/12 mx-auto'>
        <h1 className='md:text-4xl text-3xl lg:text-5xl font-bold mb-10'>My Skills</h1>
        <div className='flex flex-wrap justify-between gap-7 max-md:grid max-md:grid-cols-1 max-md:gap-7 max-md:justify-start md:grid md:grid-cols-2 md:gap-7 md:justify-between lg:grid-cols-3'>
  <div className='d p-5 relative overflow-hidden mt-5'>
    <h1 className='text-center mt-5'>HTML</h1>
    <div className='flex justify-center mt-4'>
      <FaHtml5 className='text-yellow-500' size={28} />
    </div>
    <p className='text-center mt-10 text-neutral-300'><span className='text-xl font-bold'>HTML</span>  Foundational web markup language.</p>
    <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0'></span>
    <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-yellow-600 absolute top-[27%]'></span>
    <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-yellow-600 absolute bottom-0'></span>
    <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-yellow-600 absolute bottom-0'></span>
  </div>
  
  <div className='d p-5 relative overflow-hidden mt-5'>
    <h1 className='text-center mt-5'>CSS</h1>
    <div className='flex justify-center mt-4'>
      <FaCss3 className='text-blue-500' size={28} />
    </div>
    <p className='text-center mt-10 text-neutral-300'><span className='text-xl font-bold'>CSS</span>  Styling language for web design.</p>
    <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0'></span>
    <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-blue-600 absolute top-[27%]'></span>
    <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0'></span>
    <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-blue-600 absolute bottom-0'></span>
  </div>
  
  <div className='d p-5 relative overflow-hidden mt-5'>
    <h1 className='text-center mt-5'>Bootstrap</h1>
    <div className='flex justify-center mt-4'>
      <FaBootstrap className='text-purple-600' size={28} />
    </div>
    <p className='text-center mt-10 text-neutral-300'><span className='text-xl font-bold'>Bootstrap</span> Responsive and customizable CSS framework.</p>
    <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0'></span>
    <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-purple-600 absolute top-[27%]'></span>
    <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-purple-600 absolute bottom-0'></span>
    <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-purple-600 absolute bottom-0'></span>
  </div>
  
  <div className='d p-5 relative overflow-hidden mt-5'>
    <h1 className='text-center mt-5'>JavaScript</h1>
    <div className='flex justify-center mt-4'>
      <FaJs className='text-orange-600' size={28} />
    </div>
    <p className='text-center mt-10 text-neutral-300'><span className='text-xl font-bold'>JavaScript</span>  Interactive web programming language</p>
    <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0'></span>
    <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-orange-600 absolute top-[27%]'></span>
    <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-orange-600 absolute bottom-0'></span>
    <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-orange-600 absolute bottom-0'></span>
  </div>
  
  <div className='d p-5 relative overflow-hidden mt-5'>
    <h1 className='text-center mt-5'>TypeScript</h1>
    <div className='flex justify-center mt-4'>
      <FaReact className='text-blue-700' size={28} />
    </div>
    <p className='text-center mt-10 text-neutral-300'><span className='text-xl font-bold'>TypeScript</span> Typed superset of JavaScript</p>
    <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0'></span>
    <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-blue-600 absolute top-[27%]'></span>
    <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0'></span>
    <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-blue-600 absolute bottom-0'></span>
  </div>
  
  <div className='d p-5 relative overflow-hidden mt-5'>
    <h1 className='text-center mt-5'>Tailwind CSS</h1>
    <div className='flex justify-center mt-4'>
      <SiTailwindcss className='text-blue-400' size={28} />
    </div>
    <p className='text-center mt-10 text-neutral-300'><span className='text-xl font-bold'>Tailwind CSS</span> Utility-first CSS framework with built-in classes.</p>
    <span className='w-[60px] h-[60px] z-[-2] blur-[100px] left-[45%] bg-white absolute top-0'></span>
    <span className='w-[20px] h-[20px] z-[-2] blur-[20px] left-[48%] bg-blue-600 absolute top-[27%]'></span>
    <span className='w-[50px] h-[50px] z-[-2] blur-[70px] right-0 bg-blue-600 absolute bottom-0'></span>
    <span className='w-[25px] h-[25px] z-[-2] blur-[40px] top-[75%] left-[40%] bg-blue-600 absolute bottom-0'></span>
  </div>
</div>

    </div>
  )
}

export default Skills