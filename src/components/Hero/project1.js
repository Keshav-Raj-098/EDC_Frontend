import React from 'react'
import "./project1.css"

const Button = ({ x }) => {
    return (

        <span className=' flex rounded-2xl text-sm m-2 justify-center'
            style={{ backgroundColor: "#374151", height: "30px", width: "60px", alignItems: "center" }}>{x}</span>
    )
}





const project1 = ({first,second,desc,title,mode,img}) => {



    return (
        <div className='flex flex-col w-full back mt-10 rounded-3xl max-w-5xl lg:flex-row'
            style={{ boxShadow:"black 5px 8px 19px 1px"}}>
                
            {/* left part */}

            <div className='h-full p-4 lg:p-8  w-full lg:w-1/2 flex flex-row justify-center align-middle  rounded-t-2xl  lg:rounded-s-2xl lg:rounded-e-none'
              style={{
               

                backgroundColor: mode === "dark" ? "#374151" : "#f9fafb" }}>

                    <img src={img} alt="project.img" 
                    // style={{height:"350px",width:"550px"}}
                    className='project w-56 sm:w-64 md:w-96 lg:w-full'
                    />




            </div>

            {/* right part */}
            <div className='w-full py-3 px-5 flex flex-col justify-left lg:w-1/2
             rounded-b-2xl lg:rounded-e-2xl lg:rounded-s-none'
            style={{
                
            
                backgroundColor: mode === "dark" ? "#1f2937" : "white" }}
            
            >


                <span className='text-2xl font-semibold pl-3'
                    style={{ alignSelf: "start",
                color: mode === "dark" ? "rgb(168 168 168)" : "black"
                     }}
                >{title}</span>

                <div className='my-4 text-sm lg:text-base text-left' 
                 style={{ color: mode === "dark" ? "white" : "black"}}
                >{desc}</div>

                <div className='flex flex-col' >

                    <div className='flex flex-row flex-wrap' style={{ alignSelf: "start" }}>

                    {first.map((e) => (<Button x={e} />))}

                    </div>

                    <div className='flex flex-row flex-wrap' style={{ alignSelf: "start" }}>
                        {second.map((e) => (<Button x={e} />))}
                    </div>

                </div>





            </div>


        </div>
    )
}

export default project1
