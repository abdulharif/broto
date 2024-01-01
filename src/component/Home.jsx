import React from "react"
import Nave from "./Nave"
import image1 from '../image/image1.png'




export default function Home() {
  return (
    <div>
      
      <Nave/>
      <div style={{overflow:'hidden'}}>
      <img src={image1} alt="service" width={'900px'} height={'800px'}></img>
      </div>
    </div>
  )
}

