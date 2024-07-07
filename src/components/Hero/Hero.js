import React from 'react'
import About from './about'
import Skill from "./skills"
import Project from "./project"

const Hero = ({on,mode}) => {

  return (

    
<div className='w-full'>
{
  (on==="About") && <About mode={mode}/>}
  
  {(on==="Skills") && <Skill mode={mode}/>}

 { (on==="Projects") && <Project mode={mode}/>}

{/* <Skill/> */}


</div>

     

   
  )
}

export default Hero
