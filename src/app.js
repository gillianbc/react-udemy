"use strict";

//JSX  Javascript XML - extends the JS language
console.log('MAIN APP IS RUNNING')
// There can only be one element in a template, but it can have children so we enclose what we need in a div.
// The brackets are just for readability - conventional, but not mandatory
const  app = {
    title: 'Indecision Application',
    subtitle: 'Have my computer make decisions for you',
    options: ['One', 'Two']
}

const template = (
    <div>
        <h1>{app.title}</h1> 
        {app.subtitle && <p>{app.subtitle}</p>}
        <h2>{app.options.length > 0 ? 'Here are your options' : 'No options'}</h2>
    </div>
);

let count = 10;
const myId = "btn1"

const addOne = () => {
    count++;
    console.log('Added one', count)
}
const minusOne = () => {
    count--;
    console.log('Subtracted one', count)
}

const reset = () => {
    count = 0;
    console.log('Reset', count)
}

const templateTwo = (
    <div>
        <h1>Count: {count}</h1>
        <button id={myId} className="button" onClick={addOne}>Option One</button>
        <button id="btn_one" className="button" onClick={minusOne}>Option Two</button>
        <button id="reset" className="button" onClick={reset}>Reset</button>
    </div>
);console.log(templateTwo)
const appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);