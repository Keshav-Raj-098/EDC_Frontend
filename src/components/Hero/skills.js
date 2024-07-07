import React from 'react'
import js from  "../../assets/js.svg"
import css from  "../../assets/tailwind-css.svg"
import react from  "../../assets/react.svg"
import  db from  "../../assets/Mongo.svg"
import node from  "../../assets/nodejs.svg"
import git from  "../../assets/git.svg"

const Card = ({img,title,img1,title1,mode})=>(

  <div className='flex flex-col justify-left p-0 mt-2 lg:flex-row'
  style={{ color: mode === "dark" ? "#9ea1a4" : "black"}}
  >




    <div className='flex flex-col gap-6 w-full p-3 rounded-xl m-2 lg:w-1/2 sm:flex-row' 
    style={{boxShadow:"black 0px 0px 16px 1px",
      border: mode === "dark" ? "1px solid" : "none"
    }}>

      <div className='flex flex-col justify-center align-middle  mb-4' 
      style={{color: "#9ea1a4" }}>
        <img src={img} alt="" width="50px" style={{alignSelf:"center",fontWeight:"500"}}/>
        <span >{title}</span>
      </div>

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ut, molestias at, praesentium blanditiis aperiam dolore ex architecto ullam ipsum iste recusandae veritatis error sapiente cumque beatae? Vel molestias fuga obcaecati quasi. Dolor, incidunt illum? </div>



    <div className='flex flex-col gap-6 w-full p-3 rounded-xl m-2 lg:w-1/2 sm:flex-row' 
    style={{boxShadow:"black 0px 0px 16px 1px",
      border: mode === "dark" ? "1px solid" : "none"
    }}>

      <div className='flex flex-col justify-center align-middle  mb-4' 
      >
        <img src={img1} alt="" width="50px" style={{alignSelf:"center",fontWeight:"500"}}/>
        <span>{title1}</span>
      </div>

      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magni, ut, molestias at, praesentium blanditiis aperiam dolore ex architecto ullam ipsum iste recusandae veritatis error sapiente cumque beatae? Vel molestias fuga obcaecati quasi. Dolor, incidunt illum? </div>
      
      
      
      
      
      
      </div>

  )


const skills = ({mode}) => {
  return (
    <div className=" px-16 pt-5 w-full"
     style={{
      backgroundColor: mode === "dark" ? "#111827" : "#f9fafb" 
     }}>

         <div className="flex flex-row justify-center">
        <div
          style={{ backgroundColor: "#374151" }}
          className="px-5 py-2 rounded-3xl mb-2">Skills</div>
          
      </div>
         <div className="flex flex-row justify-center "
         style={{ color: mode === "dark" ? "white" : "black"}}
         >
            the skills,tools and technologies i am really good at
      </div>





      
      <div className='flex flex-col justify-left pb-8 mt-10'>




   <Card img={js} title={"Javascript"} img1={css} title1={"Tailwindcss"} mode={mode} />
   <Card img={react} title={"React"} img1={node} title1={"Node"} mode={mode}/>
   <Card img={db} title={"MongoDB"} img1={git} title1={"Git"} mode={mode}/>

      </div>
      </div>)
}

export default skills
