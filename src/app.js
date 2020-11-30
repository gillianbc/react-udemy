"use strict";

//JSX  Javascript XML - extends the JS language

// There can only be one element, but it can have children so we enclose what we need in a div.  
// The brackets are just for readability - conventional, but not mandatory
var app = {
    title: 'Indecision Application',
    subtitle: 'Have a computer make decisions for you',
    options: ['One', 'Two']
}

var template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <h2>{app.options.length > 0 ? 'Here are your options' : 'No options'}</h2>
    </div>
);
var user = {
    name: '',
    age: 17,
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
        <h1>{user.name ? user.name.toUpperCase() : 'Anon'}</h1> 
        {user.age > 18 && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);