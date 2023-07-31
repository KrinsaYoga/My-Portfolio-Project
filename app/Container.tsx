import React from 'react'
import {AiOutlineGithub} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"
import {AiOutlineWhatsApp} from "react-icons/ai"


type Props = {}

const Container = (props) => {
    return (
      <div className='lg:pt-16 pt-4 relative w-10/12 mx-auto'>
        <div className='md:flex items-center justify-between flex-row-reverse'>
          <div className='flex justify-end items-end max-pt-4'>
            <div className='relative'>
              <img className='w-[90%] h-[90%] transform' width={100} src="avatar.png" alt="Hero Image" />
              <div className='w-[95%] overflow-hidden h-[96%] z-[-1] top-[3%] left-[0%] rounded-full bg-gradient-to-r from-slate-600 via-slate-500 to-slate-400 absolute'></div>
            </div>
          </div>
          <div>
            <h1 className='text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl pt-2 lg:pt-6 font-serif'>Bringing imagination <br /> to <span className='text-red-600'>live website</span>
            </h1>
            <p style={{ fontSize: '18px', }}>"To capture imagination into an idea and turn the idea into a future project" <br/> Well, the key is.. I need to learn more to make it happen! 😁</p>
                <div className='flex items-center mt-6 md:mt-14'>
                    <ul className='flex items-center space-x-2 sm:space-x-5 mr-6 my-4'>
                        <li><a href="https://github.com/KrinsaYoga" className='hover:opacity-100 opacity-75 transition ease-in duration-150'>
                            <AiOutlineGithub size={24}/></a></li>
                        <li><a href="https://www.instagram.com/dharumaaaa/" className='hover:opacity-100 opacity-75 transition ease-in duration-150'>
                            <GrInstagram size={24}/></a></li>
                        <li><a href="https://wa.me/6287703274250" className='hover:opacity-100 opacity-75 transition ease-in duration-150'>
                            <AiOutlineWhatsApp size={26}/></a></li>
                    </ul>
                    <a href='#ContactMe' className='px-4 py-[5px] whitespace-nowrap transition ease-in duration-150 
                    bg-neutral-700 hover:bg-neutral-600 rounded-2xl border-[0.5] border-[#363636]'>Email me</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Container