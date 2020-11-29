"use strict";

//JSX  Javascript XML - extends the JS language

// There can only be one element, but it can have children so we enclose what we need in a div.  
// The brackets are just for readability - conventional, but not mandatory
var template = (
    <div>
        <h1>Indecision App</h1> 
        <p>This is a paragraph</p>
    </div>
);
var userName = 'Gillian';
var userAge = '55';
var template2 = (
    <div>
        <h1>{userName.toUpperCase()}</h1> 
        <p>Age: {userAge}</p>
        <p>Location: UK</p>
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);