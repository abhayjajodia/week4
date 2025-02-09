import Greeting from './Greeting';
import './App.css'; // Import CSS file
import React from 'react';
import UserGreeting from './UserGreeting';

function App() {
    return (
        // <div className="App">
        //     <Greeting name="Alice" message="Welcome to the lab!" />
        //     <Greeting name="Bob" message="Good morning!" />
        // </div>
        <div className='AppGreeting'>
            <UserGreeting isLoggedIn={true} />
            <UserGreeting isLoggedIn={false} />
        </div>
    );
}

export default App;