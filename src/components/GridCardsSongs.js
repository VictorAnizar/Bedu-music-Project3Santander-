import React from "react";
import CardSong from './CardSong';


const GridCardsSongs = (props)=>{
   
       return (
           
           <div className="grid-cards" style={{display: "grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"10px"}}>
               { props.songs.map((e)=>(
                
                <CardSong song={e}/>
               ))}
           </div>
       );
   
}

export default GridCardsSongs;