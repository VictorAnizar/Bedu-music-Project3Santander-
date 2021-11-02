import React, { Component } from 'react';
import '../css/MusicItems.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

function MusicItems(props) {
    const items= props.items;
    const musicItems = items.map(item => 
    {
        return <div className='list' key={item.key}>
                <p>
                    <input type='text'
                    id={item.key}
                    value={item.text}
                    onChange = {
                        (e)=> {props.setUpdate(e.target.value, item.key)}
                    }
                    />
                    <span>
                        <FontAwesomeIcon className='faicons' icon='trash'
                        onClick={() => props.deleteItem(item.key)}></FontAwesomeIcon>
                    </span>
                </p>
               
        </div>
    })

    return(
       <div>
         <FlipMove duration={500} easing='ease-in-out'>
        {musicItems}
        </FlipMove>
        </div>
    )
    }

export default MusicItems;