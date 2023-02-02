import React from 'react';
import  ReactPlayer  from  'react-player'
function Videoprimaria(){
    return(
       <>
       <ReactPlayer 
       url={"https://youtu.be/zUReOEYDiew"} 
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