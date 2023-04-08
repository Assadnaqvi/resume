"use client"
import { useState } from "react"
import React from 'react'

import Link from "next/link"
function Skills() {
 
  return (
   <main>
   <div className='flex rounded-lg m-3'>
   
        <button type="button" className='w-1/2 h-12 bg-yellow-400 text-black font-bold uppercase text-xl rounded-lg'>Soft Skills</button>
      
        <button type="button" className='w-1/2 h-12 bg-blue-500 text-black font-bold uppercase text-xl round>Hard Skills</button'>Hard Skills</button>
   
    </div>
    <div>
  


    </div>

      
      
        
<span className="font-black text-3xl">Personal Experience</span>
<div>
<div className="text-2xl font-bold">Role:</div>
 <div className="font-bold">SoftWare Engineer,Panaverse(2022-Present)</div>
		<div className="text-2xl font-bold">	Description:</div>
			<div className="font-medium ml-6">	Design and implement machine learning models to analyze large datasets and drive business decisions. Collaborate with cross-functional teams to develop and launch new products and features. Provide technical guidance and mentorship to junior Software Developers. Conduct regular presentations to stakeholders on the findings and insights generated from developments.
			</div>
	<div className="text-2xl font-bold">Role:</div>
  <div className="font-bold">Software Engineer, CTPL Corp. (2019-2021),
		</div>
    <div className="text-2xl font-bold">	Description:</div>
    <div className="font-medium ml-6">As a Software Engineer at CTPL startup, I was responsible for designing and implementing a scalable backend architecture using microservices and containerization technologies, which improved the overall performance and reliability of the product.</div>
	
	
			


      </div>
    </main>
  )
}

export default Skills