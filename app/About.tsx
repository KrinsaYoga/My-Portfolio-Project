import React from 'react';

type Props = {}

const About = (props: Props) => {
  return (
    <div className='w-full container mx-auto px-4 py-8'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        <div>
          <h1 className='text-4xl font-bold mb-6'>About Me</h1>
          <p className='text-lg'>
          Hi there! My name is Krisna, maybe its too common, so call me Krisna Yoga.
          </p>
          <p className='text-lg mt-4'>
          I am a student at SMK TI Bali Global Denpasar, and I started learning programming just one year ago.
          </p>
          <p className='text-lg mt-4'>
          Why did I learn programming? Its because I got motivated when I saw the rapid development in the IT technology field.
          </p>
          <p className='text-lg mt-4'>
          Regarding IT knowledge, Im still a beginner, but I have a strong determination to learn and compete 😉
          </p>
        </div>
        <div>
          <h2 className='text-2xl font-bold mb-4'>Education</h2>
          <div className='h-4'></div>
          <div className='flex'>
            <div className='w-1/4'>
              <p className='font-bold'>Year</p>
            </div>
            <div className='w-3/4'>
              <p>SMK TI Bali Global Denpasar, [Location]</p>
            </div>
          </div>
          <div className='flex'>
  <div className='w-1/4'>
    <p className='font-bold'>2022 - 2023</p>
  </div>
  <div className='w-3/4'>
    <p >Its a high school focused on Information Technology (IT).  <a href="https://goo.gl/maps/hbhx13LZoayBoQt58" className='px-4 py-2 rounded-sm text-blue-700 hover:text-green-500'>[Location]</a></p>
  </div>
</div>

{/* Spasi */}

    <div className='h-8'></div>

    <div className='flex'>
            <div className='w-1/4'>
              <p className='font-bold'>Year</p>
            </div>
            <div className='w-3/4'>
              <p>SMP NEGERI 1 SERIRIT</p>
            </div>
    </div>

    <div className='flex'>
  <div className='w-1/4'>
    <p className='font-bold'>2019 - 2022</p>
  </div>
  <div className='w-3/4'>
    <p>Its a favorite school in my district,  <a href="https://goo.gl/maps/gvYwNUc3VfZDgDqL8" className='px-4 py-2 rounded-sm text-blue-700 hover:text-green-500'>[Location]</a></p>
  </div>
</div>

{/* Spasi */}
<div className='h-8'></div>

        <div className='flex'>
            <div className='w-1/4'>
              <p className='font-bold'>Year</p>
            </div>
            <div className='w-3/4'>
              <p>SD NEGERI 1 SERIRIT</p>
            </div>
        </div>

<div className='flex'>
  <div className='w-1/4'>
    <p className='font-bold'>2013 - 2019</p>
  </div>
  <div className='w-3/4'>
    <p>Its just regular elementary shcool</p>
  </div>
</div>

 
        </div>
      </div>
    </div>
  );
};

export default About;
