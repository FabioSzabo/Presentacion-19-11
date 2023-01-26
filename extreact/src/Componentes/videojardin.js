import React from 'react';
import  ReactPlayer  from  'react-player'
function Videojardin(){
    return(
       <>
       <ReactPlayer 
       url={require('../videos/VideoJardin.mp4')}
       controls
       loop
       playing
       volume={0.5}
       width="100%"
       height="100%"/>
         </>
    )
    
}
export default Videojardin;