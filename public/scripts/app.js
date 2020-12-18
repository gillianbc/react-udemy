"use strict";

//JSX  Javascript XML - extends the JS language

console.log('MAIN APP IS RUNNING');
// There can only be one element in a template, but it can have children so we enclose what we need in a div.
// The brackets are just for readability - conventional, but not mandatory
var app = {
    title: 'Indecision Application',
    subtitle: 'Have my computer make decisions for you',
    options: ['One', 'Two']
};

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
        'h2',
        null,
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);

var count = 10;
var myId = "btn1";

var addOne = function addOne() {
    count++;
    console.log('Added one', count);
};
var minusOne = function minusOne() {
    count--;
    console.log('Subtracted one', count);
};

var reset = function reset() {
    count = 0;
    console.log('Reset', count);
};

var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Count: ',
        count
    ),
    React.createElement(
        'button',
        { id: myId, className: 'button', onClick: addOne },
        'Option One'
    ),
    React.createElement(
        'button',
        { id: 'btn_one', className: 'button', onClick: minusOne },
        'Option Two'
    ),
    React.createElement(
        'button',
        { id: 'reset', className: 'button', onClick: reset },
        'Reset'
    )
);console.log(templateTwo);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
