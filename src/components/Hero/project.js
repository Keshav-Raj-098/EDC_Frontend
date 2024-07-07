import React from 'react'
import First from './project1'
import { useState } from 'react'
import fiskil from "../../assets/fiskil.png"
import wingie from "../../assets/wing.png"
import house from "../../assets/house.png"
import unipace from "../../assets/unipace.png"
import left from "../../assets/left.svg"
import right from "../../assets/right.svg"







const Project = ({mode}) => {

    const [project, setproject] = useState(1)

    const first = ["React.js", "Tailwind", "Node.js", "SQL"]
    const second = ["php", "Express", "OAuth"]
    const des = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, quae eum atque harum quia corrupti facere odio consequatur laboriosam! Eveniet, quo blanditiis ipsam eum porro temporibus maxime. Dolorem cum sint earum error."
  

    const first1 = ["Node.js", "Bootstrap", "react.js", "MySQL"]
    const second1 = ["python", "Express"]
    const des1 = "Musketeer ipsum dolor sit amet, consectetur adipisicing elit. Nobis explicabo animi dolorum ab consequuntur adipisci dignissimos rerum eaque ipsum ratione deserunt debitis excepturi, accusantium ullam nam."
  

    const first2 = ["React.js", "Tailwind", "Node.js", "Mongo","Tscript"]
    const second2 = ["php", "Express", "Auth","JWT"]
    const des2 = "Golam ipsum, dolor sit amet consectetur adipisicing elit. Facilis ut nam culpa ex necessitatibus, quis consequatur ipsa eveniet. Sint nesciunt, assumenda fuga provident ipsa nam in eaque, possimus voluptates enim natus eum harum deserunt perferendis."
  

    const first3 = ["React.js", "Native"]
    const second3 = ["python"]
    const des3 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id asperiores illo assumenda expedita quae, labore molestiae! Culpa nisi minima maxime rerum nobis saepe laudantium, veniam ea adipisci et? Maiores sequi illo beatae voluptatibus velit incidunt consequatur impedit veniam placeat sit."
  

    return (

        <div className="px-16 md:px-24 lg:px-20 pt-5 pb-8" style={{ 
            backgroundColor: mode === "dark" ? "#111827" : "white" 
        }}>

            <div className="flex flex-row justify-center">
                <div
                    style={{ backgroundColor: "#374151" }}
                    className="px-5 py-2 rounded-3xl mb-2">Projects</div>

            </div>
            <div className="flex flex-row justify-center my-2"
              style={{ color: mode === "dark" ? "white" : "black"}}
            >
                some of the noteworthy projects i have built:
            </div>

           


          <div className='flex justify-center my-3'>

          { (project===1) && <First first={first} second={second} 
          desc={des} title={"Fiskil"}  mode={mode} img={fiskil} />}
          { (project===2) && <First first={first1} second={second1} 
          desc={des1} title={"Wingie"}  mode={mode} img={wingie}/>}
          { (project===3) && <First first={first2} second={second2} 
          desc={des2} title={"HandyLocals"} mode={mode} img={house}/>}
          { (project===4) && <First first={first3} second={second3} 
          desc={des3} title={"Unipace"}  mode={mode} img={unipace}/>}


          </div>




            <div className='my-3 flex flex-row justify-between align-middle'>
                <span className='p-2 rounded-full hover:cursor-pointer'
                    style={{ backgroundColor: "#9ea1a4" }}

                    onClick={
                        () => { if (project > 1) setproject(project - 1) }
                    }
                    ><img src={left} alt="left" /></span>

                
                <span className='p-2 rounded-full hover:cursor-pointer'
                    style={{ backgroundColor: "#9ea1a4" }}

                    onClick={
                        () => { if (project < 4) setproject(project + 1) }
                    }
                ><img src={right} alt="right" /></span>
            </div>




        </div>
    )
}

export default Project
