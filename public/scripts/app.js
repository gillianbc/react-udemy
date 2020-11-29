"use strict";

//JSX  Javascript XML - extends the JS language

// There can only be one element, but it can have children so we enclose what we need in a div.  
// The brackets are just for readability - conventional, but not mandatory

var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Indecision App"
    ),
    React.createElement(
        "p",
        null,
        "This is a paragraph"
    )
);

var template2 = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        "Gillian Bladen-Clark"
    ),
    React.createElement(
        "p",
        null,
        "Age: 55"
    ),
    React.createElement(
        "p",
        null,
        "Location: UK"
    )
);

var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
