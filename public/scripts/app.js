"use strict";

//JSX  Javascript XML - extends the JS language

// var template = <p>This is JSX from app.js</p>;
var appRoot = document.getElementById('app');




var template = /*#__PURE__*/ React.createElement(
  "p",
  {
    id: "abc"
  },
  "Hello from React"
);

ReactDOM.render(template, appRoot);