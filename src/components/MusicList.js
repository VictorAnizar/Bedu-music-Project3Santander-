import React, { Component } from 'react';
import '../MusicList.css';
import MusicItems from './MusicItems';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTrash} from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);

class MusicList extends Component {
    state = {
       items: [],
       currentItem: {
           text: '',
           key: ''
       } 
    }
    render() {
    return (
       <div className='background'>
        <header>
            <form id='musicForm' onSubmit={this.addItem}>
                <input value={this.state.currentItem.text}
                onChange= {this.handleInput}
                type='text' placeholder='Song - Artist'></input>
                <button type='submit'>Add</button>
            </form>
            <MusicItems items = {this.state.items} deleteItem =
            {this.deleteItem} setUpdate={this.setUpdate}/>
        </header>
       </div>
    )
}


//Methods:

handleInput= (e) =>{
    this.setState({
        currentItem: {
            text: e.target.value,
            key: Date.now()
        }
    })
}

addItem =(e) =>{
    e.preventDefault();
    const newItem = this.state.currentItem;
    console.log(newItem)
    if (newItem.text !== ''){
        const newItems= [...this.state.items, newItem];
        this.setState({
            items: newItems,
            currentItem: {
                text: '',
                key: ''
            }
        })
    }
}
deleteItem = (key)=>{
    const filteredItems = this.state.items.filter(item => 
        item.key!== key);
        this.setState({items:filteredItems})
}

setUpdate= (text, key)=>{
    const items = this.state.items;
    items.map(item => {
        if (item.key===key){
            item.text=text;
        }
    })
    this.setState({
        items:items
    })
}
};




export default MusicList;