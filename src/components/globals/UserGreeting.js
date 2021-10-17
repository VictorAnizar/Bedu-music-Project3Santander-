import React, {Component} from 'react';

class UserGreeting extends Component {
    state = {
        isLoggedIn: false
    }
    
    render() { 
        return (
            this.state.isLoggedIn ? 
            <h1 style={messageStyles}>Welcome to BEDU Music</h1> :
            <h1 style={messageStyles}>U ready to listen to some good music?</h1>
        )
    }
}
 


/* style */
const messageStyles = {
    background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
    textAlign: 'center',
    color: 'white'
}


export default UserGreeting;