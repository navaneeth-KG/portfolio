import React from 'react';
import Button from './Button';
import { useAnimate } from 'framer-motion';
import { useEffect } from 'react';

const Hero = () => {
  const [scope,animate] = useAnimate()
  const handleAnimate=async()=>{
    await animate('h2',{opacity:1},{duration:2})
    await animate('h1',{opacity:1},{duration:0.5})
    await animate('p',{opacity:1},{duration:0.5})
    await animate('a',{opacity:1})
  }
  useEffect(()=>{handleAnimate()},[])



  return (
    <main className='width-full bg-primary min-h-screen flex justify-center items-center flex-col max-sm:px-2 px-8' ref={scope}>
      <h2 className='text-4xl font-bold text-[#BC8CF2] max-sm:text-2xl text-center opacity-0'><span className='text-slate-500'>HI! I'M</span> NAVANEETH </h2>
      <h1 className='text-7xl font-bold text-[#FF204E] max-sm:text-3xl text-center opacity-0'>FULL STACK WEB DEVELOPER</h1>
      <p className='text-slate-500 opacity-0'>based in India</p>
      <a href="https://www.linkedin.com/in/navaneeth-k-g" target='_blank' className='opacity-0'><Button><p id='btn-text' className='opacity-0'>CONNECT</p></Button></a>
    </main>
  );
};

export default Hero;
