"use strict";

//JSX  Javascript XML - extends the JS language
console.log('MAIN APP IS RUNNING')
// There can only be one element in a template, but it can have children so we enclose what we need in a div.
// The brackets are just for readability - conventional, but not mandatory

const  app = {
    title: 'Visibility Toggle'
}



// index.html has a <div id="app"> </div> where we want our react code to appear
const appRoot = document.getElementById('app');

let visible = false

const toggleDetails = () => {
    visible ? visible = false : visible = true
    console.log('Visible ', visible)
    render()
}

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            <button onClick={toggleDetails}>{visible ? 'Hide details' : 'Show details'}</button>
            {visible && <p>{"Here are the details"}</p>}
        </div>
    );

    ReactDOM.render(template, appRoot);
}

// Run the application
render();

