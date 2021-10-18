import React from "react";
import CardSong from './CardSong';


class GridCardsSongs extends React.Component{
   


    render(){
       return (
           
           <div className="grid-cards" style={{display: "grid", gridTemplateColumns:"repeat(3, 1fr)", gap:"10px"}}>
               { this.props.songs.map((e)=>(
                
                <CardSong song={e}/>
               ))}
           </div>
       );
    }
}

export default GridCardsSongs;