import React from 'react';
import video from '../videos/VideoJardin.mp4'
import  ReactPlayer  from  'react-player'
function Videojardin(){
    return(
       <>
       <ReactPlayer url={video} controls loop />
         </>
    )
    
}
export default Videojardin;