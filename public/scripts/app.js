"use strict";

//JSX  Javascript XML - extends the JS language

console.log('MAIN APP IS RUNNING');
// There can only be one element in a template, but it can have children so we enclose what we need in a div.
// The brackets are just for readability - conventional, but not mandatory

var app = {
    title: 'Indecision Application',
    subtitle: 'Have my computer make decisions for you',
    options: []
};

var onFormSubmit = function onFormSubmit(e) {
    console.log('Form submitted');
    e.preventDefault(); // stop the whole form from refreshing
    var selectedOption = e.target.elements.option.value;
    if (selectedOption) {
        app.options.push(selectedOption);
    }
    console.log(app.options);
    e.target.elements.option.value = '';
    render();
};

var removeAll = function removeAll() {
    app.options = [];
    console.log('All removed');
    render();
};

// index.html has a <div id="app"> </div> where we want our react code to appear
var appRoot = document.getElementById('app');

function displayOptionsArray() {
    return function (option) {
        return React.createElement(
            'li',
            { key: option },
            'Option: ',
            option
        );
    };
}

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        app.subtitle && React.createElement(
            'p',
            null,
            app.subtitle
        ),
        React.createElement(
            'p',
            null,
            app.options.length > 0 ? 'Here are your options' : 'No options'
        ),
        React.createElement(
            'p',
            null,
            'Number of options: ',
            app.options.length
        ),
        React.createElement(
            'button',
            { onClick: removeAll },
            'Remove all'
        ),
        React.createElement(
            'ol',
            null,
            app.options.map(displayOptionsArray())
        ),
        React.createElement(
            'ol',
            null,
            React.createElement(
                'li',
                null,
                'One'
            ),
            React.createElement(
                'li',
                null,
                'Two'
            )
        ),
        React.createElement(
            'form',
            { onSubmit: onFormSubmit },
            React.createElement('input', { type: 'text', name: 'option' }),
            React.createElement(
                'button',
                null,
                'Add option'
            )
        )
    );

    ReactDOM.render(template, appRoot);
};

// Run the application
render();
