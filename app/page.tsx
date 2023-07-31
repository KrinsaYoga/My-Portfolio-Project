import Navbar from './Navbar'
import Container from './Container'
import Skills from './Skills'
import About from './About'
import ContactMe from './ContactMe'

export default function Home() {
  return (
    <div className='max-w-[1280px] mx-auto  '>
      <div className='w-11/12 mx-auto pt-4 mt-8'>
        <Navbar/>
      </div>
      <div id='Container' className=' mx-auto max-md:mt-[20px] mt-16 ' >
      <Container/></div>
      <div id='services' className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8 mb-[-20px]'></div>
      <div id='About' className=' mx-auto max-md:mt-[20px] mt-16 ' >
      <About/></div>
      <div id='tools' className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8'></div>
      <div id='Skills' className=' mx-auto max-md:mt-[20px] mt-16 ' >
      <Skills/></div>
      <div id='tools' className='box w-10/12 mx-auto max-md:mt-[-50px] mt-8'></div>
      <div id='ContactMe' className=' mx-auto max-md:mt-[20px] mt-16 ' >
      <ContactMe/></div>
      <div className='w-10/12 mx-auto my-10'>
        <div className='flex items-start text-2xl text-neutral-300'><p className='text-5xl mr-2 mt-[2px]'>&#169;</p> Perfect Code <small className='mt-[2px] ml-2'>2023</small> </div>
      </div>
    </div>
  )
}