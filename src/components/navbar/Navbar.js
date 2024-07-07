import React from 'react'
import './navbar.css'
import { useState } from 'react'
import day from "../../assets/day.svg"
import night from "../../assets/night.svg"

 export const styled = {
  

  textlight:{color:"black"},
  textdark:{color:"#9ea1a4"}
  
} 


const Navbar = ({setOn,mode,setMode}) => {
  
 
  const [img, setimg] = useState(day)




  return (
    
    <div 
    className="navbar  px-3 w-full flex 
    flex-row justify-end align-middle gap-2" 
     style={
      
      {height:"50px",
         border : (mode==="dark") ? "1px solid rgb(31 41 55)" : "none",
         borderLeft:"none",
         borderRight:"none",
        backgroundColor:"transparent",
        backdropFilter:"blur(10px)"


      }}>

        <div class="navbtn flex flex-row gap-5 align-middle px-5">

            <span 
              style={{  color: mode === "dark" ? "white" : "black"}}
            onClick={()=>{setOn("About")}}>About</span>
            <span
              style={{  color: mode === "dark" ? "white" : "black"}}
            onClick={()=>{setOn("Skills")}}>Skill</span>
            <span
              style={{  color: mode === "dark" ? "white" : "black"}}
               onClick={()=>{setOn("Projects")}}>Projects</span>
        </div>

        <img class="hover:cursor-pointer" src={img} alt="bright" width="30px"

        onClick={()=>{
          if(mode==="dark"){setimg(night); setMode("light")}
          else{setimg(day); setMode("dark")}
        }}
        
        
        >
        </img>

    </div>
  )
}

export default Navbar
