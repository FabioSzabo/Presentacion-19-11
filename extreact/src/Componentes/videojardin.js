import React from "react";
import video from '../videos/VideoJardin.mp4'
function VideoJardin(){
    return(
        <video width="100%" height="100%" controls playing volume={0.5} loop>
        <source src={video} type="video/mp4" />
        </video>  
    )
}
export default VideoJardin