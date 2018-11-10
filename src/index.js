import React from 'react';
import ReactDOM from 'react-dom';


function luckyNumber () {
    return Math.floor(Math.random() * 1000);
};

function greeting (user) {
    return <div className="container">
                <h1>Hello {user.name}</h1>
                <h2 className="text-muted"> Your lucky number is {user.luckyNumber} </h2>
           </div>
};

var user = {
    name: 'Will',
    luckyNumber: luckyNumber(),
};

ReactDOM.render(
    greeting(user),
    document.getElementById('root')
);