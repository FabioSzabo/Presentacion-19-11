import React from 'react';
import  ReactPlayer  from  'react-player'
function Videosecundaria(){
    return(
       <ReactPlayer url={"https://youtube.com/shorts/9EWg9aNjeNA"} controls playing volume={0.5} loop width="100%" height="100%"/>
    )
    
}
export default Videosecundaria;