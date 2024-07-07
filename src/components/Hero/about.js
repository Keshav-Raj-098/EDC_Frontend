import React from 'react'
import body from "../../assets/body.jpg"

const about = ({mode}) => {
  return (
    <div className="Hero py-5 " style={{

       backgroundColor: mode === "dark" ? "#111827" : "#f9fafb" }}>

      <div className="flex flex-row justify-center">
        <div
          style={{ backgroundColor: "#374151" }}
          className="px-5 py-2 rounded-3xl mb-10">About me</div>
      </div>

      <div className=" px-16 flex flex-row pb-10">


        <div className="" >


          <span className="text-2xl font-semibold "
          style={{ color: mode === "dark" ? "white" : "black"}}
          
          >Curious About me? Here you have it</span>

          <div className='w-full flex flex-col-reverse mt-8 lg:flex-row'>

          <div
            style={{color: mode === "dark" ? "#9ea1a4" : "black" }}

            className="mt-5 w-full lg:w-1/2"
            
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, est? Sapiente consequuntur perferendis laboriosam autem dolor. Soluta est quasi reprehenderit adipisci nesciunt et quae, veritatis repellendus voluptates nostrum in consequuntur quibusdam doloremque excepturi, maiores illo. Minima minus voluptate reprehenderit at tenetur eos, in et ratione odit quisquam ut quod facere, tempora ad repudiandae ex doloremque quis. Quam hic iure velit fugiat praesentium ad eum, vel ut earum deserunt, dolorem corporis mollitia sapiente labore, voluptas explicabo. Reiciendis expedita quibusdam pariatur enim rem labore maxime rerum, illum eos corporis alias veniam voluptatem doloremque earum doloribus aperiam vel. Reprehenderit ducimus praesentium ipsa labore rem quia officia dicta quas et, exercitationem quos est, illum, excepturi doloribus hic odit fugiat nobis harum facere ipsum. Eveniet at quae ratione laudantium amet natus optio, temporibus ex omnis cupiditate accusantium. Inventore nam quibusdam aliquid in sit impedit quod sunt libero adipisci assumenda qui, quas voluptates facilis, rem omnis.</div>

            <div className=' w-full flex justify-center align-middle m-5 lg:w-1/2 '>

            <div style={{height:"fit-content",width:"fitcontent",
                         boxShadow:(mode==="dark")? "#374151 30px 30px " :"#e5e7eb 30px 30px"
      }}>

      
     <img src={body} alt="myimg"
     className='h-40 lg:h-96 w-40 lg:w-72'
     style={{
      boxShadow: (mode === "dark") ? "#111827 6px 6px 0px 4px" : "white 6px 6px 0px 4px"}}
     /></div></div>




        </div>

            </div>
      </div>
      
    </div>
  )
}

export default about
