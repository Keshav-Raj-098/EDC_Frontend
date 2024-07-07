import React from 'react'
import mail from "../assets/mail.svg"
import phone from "../assets/phone.svg"
import insta from "../assets/instagram.svg"
import linkedien from "../assets/linkedien.svg"
import github from "../assets/github.svg"

const footer = ({mode}) => {
  return (
   
    <div className='h-96 w-full px-16 py-5'
    style={{
      backgroundColor: (mode==="dark"?"#030712" : "#f9fafb")}}
    >

<div className="flex flex-row justify-center">
                <div
                    style={{ backgroundColor: "#374151" }}
                    className="px-5 py-2 rounded-3xl mb-2">Get in touch</div>

            </div>

            <div className="flex flex-row justify-center my-2"
              style={{ color: mode === "dark" ? "white" : "black",fontSize:"18px"}}
            >
                What’s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.
            </div>

            <div className="flex flex-row justify-center my-5 align-middle"
              style={{ color: mode === "dark" ? "white" : "black",fontSize:"18px"}}
            >

              <img src={mail} alt="mail" /> 
              <span style={{fontSize:"30px",fontWeight:"bold",marginLeft:"10px"}}>

              keshavraj09898@gmail.com
              </span>
               
            </div>


            <div className="flex flex-row justify-center my-4"
              style={{ color: mode === "dark" ? "white" : "black",fontSize:"18px"}}
            >
               <img src={phone} alt="phone" /> 
               <span>

               +918797807957
               </span>
            </div>


            <div className="flex flex-row justify-center my-6"
              style={{ color: mode === "dark" ? "white" : "black",fontSize:"18px"}}
            >
                    
                    <div>
                      
              <div> You may also find me on these platforms!</div>

                <div class="flex flex-row align- justify-center gap-2 mt-2">
                <a href="https://github.com/Keshav-Raj-098"> 
                    <img src={github} alt="git" width="25px"  ></img></a>
                <a href="">
                     <img src={linkedien} alt="link"width="25px"  ></img></a>
                <a href="">
                     <img src={insta} alt="insta" width="25px"  ></img></a>
               
                    </div>
            </div>
            </div>

    
    
    
    
    
    
    
    
    </div>
  )
}

export default footer
