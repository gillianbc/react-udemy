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

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);