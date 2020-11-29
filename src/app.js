"use strict";

//JSX  Javascript XML - extends the JS language

// There can only be one element, but it can have children so we enclose what we need in a div.  
// The brackets are just for readability - conventional, but not mandatory
var app = {
    title: 'Indecision Application',
    subtitle: 'Have a computer make decisions for you'
}

var template = (
    <div>
        <h1>{app.title}</h1> 
        <p>{app.subtitle}</p>
    </div>
);
var user = {
    name: 'Gillian BC',
    age: 55,
    location: 'England'
}

function getLocation(location){
    if (location){
        return <p>Location: {location}</p>
    }
        
    return 'Unknown'
}

var template2 = (
    <div>
        <h1>{user.name.toUpperCase()}</h1> 
        <p>Age: {user.age}</p>
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);