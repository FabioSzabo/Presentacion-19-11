import React from 'react';
import video from "../videos/primaria.mp4"
import  ReactPlayer  from  'react-player'
function Videoprimaria(){
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
export default Videoprimaria;