import React from 'react';
import  ReactPlayer  from  'react-player'
function Videojardin(){
    return(
       <>
       <ReactPlayer url={"https://youtu.be/D9OrQMP9o9g"}
       controls
       loop
       playing
       volume={0.5}
       width="50%"
       height="100%"/>
         </>
    )
    
}
export default Videojardin;