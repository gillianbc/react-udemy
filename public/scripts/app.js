"use strict";

//JSX  Javascript XML - extends the JS language

console.log('MAIN APP IS RUNNING');
// There can only be one element in a template, but it can have children so we enclose what we need in a div.
// The brackets are just for readability - conventional, but not mandatory

var count = 10;
var myId = "btn1";

var addOne = function addOne() {
    count++;
    console.log('Added 1', count);
    renderCounterApp();
};
var minusOne = function minusOne() {
    count--;
    console.log('Subtracted 1', count);
    renderCounterApp();
};

var reset = function reset() {
    count = 0;
    console.log('Reset', count);
    renderCounterApp();
};

// index.html has a <div id="app"> </div> where we want our react code to appear
var appRoot = document.getElementById('app');

// Eventually, we'll do this with a React component
var renderCounterApp = function renderCounterApp() {
    var templateTwo = React.createElement(
        "div",
        null,
        React.createElement(
            "h1",
            null,
            "Count: ",
            count
        ),
        React.createElement(
            "button",
            { id: myId, className: "button", onClick: addOne },
            "Add One"
        ),
        React.createElement(
            "button",
            { id: "btn_one", className: "button", onClick: minusOne },
            "Minus One"
        ),
        React.createElement(
            "button",
            { id: "reset", className: "button", onClick: reset },
            "Reset"
        )
    );
    ReactDOM.render(templateTwo, appRoot);
};

// Run the application
renderCounterApp();
