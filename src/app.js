"use strict";

//JSX  Javascript XML - extends the JS language
console.log('MAIN APP IS RUNNING')
// There can only be one element in a template, but it can have children so we enclose what we need in a div.
// The brackets are just for readability - conventional, but not mandatory



const  app = {
    title: 'Indecision Application',
    subtitle: 'Have my computer make decisions for you',
    options: []
}

const onFormSubmit = (e) => {
    console.log('Form submitted')
    e.preventDefault();  // stop the whole form from refreshing
    const selectedOption = e.target.elements.option.value;
    if (selectedOption){
        app.options.push(selectedOption)
    }
    console.log(app.options)
    e.target.elements.option.value = '';
    render()
}

const removeAll = () => {
    app.options = [];
    console.log('All removed')
    render()
}

// index.html has a <div id="app"> </div> where we want our react code to appear
const appRoot = document.getElementById('app');

const render = () => {
    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
            <p>Number of options: {app.options.length}</p>
            <button onClick={removeAll}>Remove all</button>
            <ol>
                <li>One</li>
                <li>Two</li>
            </ol>
            <form onSubmit={onFormSubmit}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
}

// Run the application
render();

