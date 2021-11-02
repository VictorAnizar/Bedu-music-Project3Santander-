import React, { Component } from 'react';
import '../css/MusicList.css';
import MusicItems from './MusicItems';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import useState from 'react'
library.add(faTrash);

const MusicList = (props) => {
    const [items, setItems] = React.useState([]);
    const [currentItem, setCurrentItem] = React.useState({text: '',key: ''})
    
    const handleInput = (e) => {
        setCurrentItem({
            text: e.target.value,
            key: Date.now()
        })
    }

    const addItem = (e) => {
        e.preventDefault();
        const newItem = currentItem;
        console.log(newItem);
        if (newItem.text !== '') {
            const newItems = [...items, newItem];
            setItems(newItems)
            setCurrentItem({
                text: '',
                key: ''
            })
        }
    }
    const deleteItem = (key) => {
        const filteredItems = items.filter(item =>
            item.key !== key
        );
        setItems(filteredItems);
    }

    const setUpdate = (text, key) => {
        const items = items;
        items.map(item => {
            if (item.key === key) {
                item.text = text;
            }
        })
        setItems(items);
    }

<<<<<<< HEAD
setUpdate= (text, key)=>{
    const items = this.state.items;
    items.filter(item =>item.key===key).map(item=>item.text=text)
    this.setState({
        items:items
    })
}
};
=======
    return (
        <div className='background'>
            <header>
                <form id='musicForm' onSubmit={addItem}>
                    <input value={currentItem.text}
                        onChange={handleInput}
                        type='text' placeholder='Song - Artist'></input>
                    <button type='submit'>Add</button>
                </form>
                <MusicItems items={items} deleteItem=
                    {deleteItem} setUpdate={setUpdate} />
            </header>
        </div>
    );

>>>>>>> 72aecf97ba135201d5eb6666de029fbe1345af68



   

}


export default MusicList;