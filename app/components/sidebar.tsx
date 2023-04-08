import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
export default function Sidebar({}) {
  return (
    <main>
        <div>
 <div className="flex flex-col bg-black text-white p-10 h-auto sm:h-screen content-between w-full sm:justify-around sm:w-1/3 sm:fixed">
  
  <Image priority src="/mypic.jpeg" alt="about image" width="300" height="300" className='rounded-full h-full mb-6'/>
    
        <h1 className='mb-2 text-yellow-300 text-4xl sm:text-6xl font-bold'>Asad Naqvi</h1>
        <h2 className="mb-2 text-2xl">Software Engineer</h2>
   <h3 className="mb-2 text-base">BS in Computer Sciences 2012</h3>
 
   <h4 className="mb-2 text-base">MS/M.Phil in Computer Sciences Specialization in Software Engineering 2018</h4>
   <h5 className="mb-4 mt-4 text-center sm:mt-8 font-bold">CONTACT ME</h5>
   <div className='flex justify-around mt-4'>
    <Image src="facebook.svg" alt="about image" width="30" height="20" className=""></Image>
   <Image src="Twitter.svg" alt="about image" width="30" height="20" className=""></Image>
   <Image src="github.svg" alt="about image" width="30" height="20" className=""></Image>
   <Image src="linkedin.svg" alt="about image" width="30" height="20" className=""></Image>
 </div>
   </div>
    </div>

 
  </main>
  )
}
