"use strict";

//JSX  Javascript XML - extends the JS language

console.log('MAIN APP IS RUNNING');
// There can only be one element in a template, but it can have children so we enclose what we need in a div.
// The brackets are just for readability - conventional, but not mandatory

var app = {
    title: 'Visibility Toggle'

    // index.html has a <div id="app"> </div> where we want our react code to appear
};var appRoot = document.getElementById('app');

var visible = false;

var toggleDetails = function toggleDetails() {
    visible ? visible = false : visible = true;
    console.log('Visible ', visible);
    render();
};

var render = function render() {
    var template = React.createElement(
        'div',
        null,
        React.createElement(
            'h1',
            null,
            app.title
        ),
        React.createElement(
            'button',
            { onClick: toggleDetails },
            visible ? 'Hide details' : 'Show details'
        ),
        visible && React.createElement(
            'p',
            null,
            "Here are the details"
        )
    );

    ReactDOM.render(template, appRoot);
};

// Run the application
render();
