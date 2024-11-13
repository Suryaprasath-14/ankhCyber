import React from 'react'
import {movie} from "../assets"
const BgVideo = () => {
  return (
    <div className="video-background-container mt-10">
      <video 
        autoPlay 
        muted 
        loop 
        id="background-video"
      >
        <source src={movie} type="video/mp4" />
        {/* You can also add other video formats for better cross-browser support */}
        {/* <source src="background.webm" type="video/webm" /> */}
        {/* <source src="background.ogv" type="video/ogg" /> */}
        Your browser does not support the video tag.
      </video>
    </div>
  )
}

export default BgVideo