import React from 'react';
import umar from '../assets/images/umar-hire.png'

const WhyhireMe = () => {
  return (
    <>
    <div className="pt-32 md:py-28 bg-gray-100" >
    <div className="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0">
<div className="mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12">
    <div className="relative md:w-1/2 flex flex-col">
        <div aria-hidden="true" className="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60">
            <div className="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
            <div className="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] dark:to-indigo-600"></div>
        </div>
        <div className='flex-grow m-20 mb-0 bg-white relative z-10 rounded-t-3xl'>
        <img src={umar} alt='umar' className='-mt-28 grayscale'/>
        </div>
        
       {/*  */}
    </div>
    <div className="ml-auto h-full md:w-1/2">
    <h3 className="md:text-6xl xl:text-5xl font-black text-gray-900 dark:text-white">Why <span className="text-orange-600">Hire me</span>?</h3>
        <p className="my-8 text-gray-600 dark:text-gray-300">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus nunc, posuere in justo vulputate, bibendum sodales 
        </p>
        <div className='flex gap-4 mb-8'>
            <div className='p-[1px] bg-gradient-to-r from-orange-200 via-purple-200 to-blue-300 rounded-md drop-shadow-md'>
            <div className='backdrop-sepia-0 bg-white/70  rounded-md p-4'>
                <h4 className='font-black text-xl'>450+</h4>
                <p className='opacity-50 text-sm'>Project Completed</p>
            </div>
            </div>
            <div className='p-[1px] bg-gradient-to-r bg-gradient-to-r from-orange-200 via-purple-300 to-blue-300 rounded-md drop-shadow-md'>
            <div className='backdrop-sepia-0 bg-white/70 rounded-md p-4'>
                <h4 className='font-black text-xl'>450+</h4>
                <p className='opacity-50 text-sm'>Project Completed</p>
            </div>
            </div>
        </div>
        <div className='flex'>
        <a href="/register" className="bg-orange-400 rounded-s-full px-10 py-3 rounded-e-full"><span className="text-white astro-Z4ZYBUMP">Hire me</span></a>
        </div>

    </div>
</div>
</div>
</div>
    </>
  )
}

export default WhyhireMe