import React from 'react'
import hand from "../../assets/hand.svg"
import github from "../../assets/github.svg"
import insta from "../../assets/instagram.svg"
import linkedien from "../../assets/linkedien.svg"
import location from "../../assets/location.png"
import profile from "../../assets/profile.jpg"
import "./header.css"



const Header = ({mode}) => {

   

  return (


    <div class="Header pb-10 px-16 pt-12 w-full flex flex-col-reverse
     justify-center lg:flex-row"
      style={{backgroundColor: mode === "dark" ? "#030712" : "#f9fafb" }}>

        


    <div class="flex w-full mt-20 lg:w-3/5">


        <div>


            <span className="title flex flex-row text-white w-full justify-center lg:justify-start"
           style={{
            fontSize: "35px",fontWeight:"bolder",
            color: mode === "dark" ? "white" : "black"
          }}
          
             
             >Hi,I'm Keshav
                <img src={hand} alt="hand"style={{marginLeft:"7px"}} className='Hand' ></img>
            </span>

            <div class="mt-3 subtitle w-full flex"
             style={{fontSize:"medium",marginLeft:"-18px",
                 color: mode === "dark" ? "#9ea1a4" : "black"
             }}>
                I'm a full stack developer(React.js & Node.js) with a focus on creating exceptional digital
                experiences that are fast,accessible,visually appealing, and responsive.Even though i have been
                creating web applications for 1 year, i still love it as if it was something new.</div>


            <div class="flex flex-row gap-3 align-middle mt-12">
               <img src={location} alt="location" className='locate' width="25px"/>
                <span class="font-semibold" 
                style={{fontSize:"15px",    
                color: mode === "dark" ? "#9ea1a4" : "black"}}>
                  New Delhi,India</span>
            </div>

            <div class="flex flex-row gap-3 align-middle mt-2">

                <div class="flex flex-row justify-center align-middle py-2"
                style={{width:"25px"}}>

                    <div class="Active flex h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <span class="font-semibold" style={{fontSize:"15px",  
                      color: mode === "dark" ? "#9ea1a4" : "black"}}>
                    Available for New Projects
                </span>
            </div>

            <div class="flex flex-row align-middle justify-start gap-2 mt-10">
                <a href="https://github.com/Keshav-Raj-098"> 
                    <img src={github} alt="git" width="25px"  ></img></a>
                <a href="http://www.linkedin.com/in/keshav-raj-118a74248">
                     <img src={linkedien} alt="link"width="25px"  ></img></a>
                <a href="https://www.instagram.com/keshav_yadaav_0405?utm_source=qr&igsh=ZTZwem53d2tzMXlr">
                     <img src={insta} alt="insta" width="25px"  ></img></a>
               
            </div>




        </div>


    </div>
    <div className='flex mt-20 justify-center lg:w-2/5 '> 

      <div style={{height:"fit-content",width:"fitcontent",
        boxShadow: (mode==="dark") ? "#374151 30px 30px " : "#e5e7eb 30px 30px"
      }}>

      
     <img src={profile} alt="myimg" height="250px" width="250px" 
     style={{
      boxShadow: (mode==="dark") ? "#030712 6px 6px 0px 4px" : "#f9fafb 6px 6px 0px 4px"}}
     />
      
      </div>
      
      
      </div>


</div>
  )
}

export default Header
