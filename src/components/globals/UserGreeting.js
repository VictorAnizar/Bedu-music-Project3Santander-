import React, {Component, useState} from 'react';

const UserGreeting = () => {
    // state = {
    //     isLoggedIn: false
    // }
    
    const [isLoggedIn, setisLoggedIn] = useState(false);

        return (
            isLoggedIn ? 
            <h1 style={messageStyles}>Welcome to BEDU Music</h1> :
            <h4 style={messageStyles}>Are you ready to listen to some good music?</h4>
        )

}
 


/* style */
const messageStyles = {
    background: 'radial-gradient(circle, rgba(31,37,41,1) 0%, rgba(31,37,41,1) 100%)',
    textAlign: 'center',
    color: 'white'
}


export default UserGreeting;