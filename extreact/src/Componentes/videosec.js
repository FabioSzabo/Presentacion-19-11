import React from 'react';
import video from "../videos/secundaria.mp4"
import  ReactPlayer  from  'react-player'
function Videosecundaria(){
    return(
       <>
       <ReactPlayer 
       url={video} 
       controls
       playing
       volume={0.5}
       loop
       width="100%"
       height="100%"/>
         </>
    )
    
}
export default Videosecundaria;