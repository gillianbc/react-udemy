# react-udemy

Learning react on udemy.  My second course from Andrew Mead.
https://www.udemy.com/course/react-2nd-edition.  Quite a long course - 39 hours so I estimate it will take me several months to complete it.


# Installation
Assumes you have yarn installed globally

`npm install -g yarn`

'yarn --version'

On windows, you will need to reboot.

Install live-server:

`yarn global add live-server`

Install babel cli:

`yarn global add babel-cli`

Install babel react standard presets:

`yarn add babel-preset-react@6.24.1 babel-preset-env@1.5.2`

NB I prefer npm as that means I can easily run via intellij so I switched the above yarn to npm e.g. npm install -g

# Running the App
You need to run two processes so open two terminal windows if running from the shell:  
- One to transpile the code and watch for changes to the source code
- One to watch for changes to the transpiled code and serve it up to the browser

The app will be launched on http://127.0.0.1:8080/ in your default browser.
For some of the exrecises, just view the console logs in the Chrome dev tools F12

## Update
I've put the app scripts in package.json, so just start the live server in a terminal:
`live-server public`
and you can start the app scripts in the usual way
## Babel
Transpiled with Babel into public/scripts/app.js using the env and react presets (i.e. collections of library files).
--watch will re-transpile whenever the src file changes.

`babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`

## Live Server 
Globally installed.  Will serve up whatever is in public and reload it if it changes i.e. public/app.js

`live-server public`

# How Does It Work?
We have a very simple `index.html` that has a `<div>` in the body with an id of `app`.  This is where our react application will be rendered.

index.html uses two scripts for react:
- react.development.js
- react-dom.development.js
plus our react application script - app.js

Our app.js renders our main React component (IndecisionApp) which renders the other React components.
A React component is simply a class that inherits from React.Component. Each React component has a render() method.

`ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))`

# Notes
## If / Then  (no Else)
I use the ternary where I need two options, x ? a : b  which reads as "if some condition then a else b"
but I didn't know about the logical and operator && for when I have one option or nothing
x && a which reads as "if some condition then a" e.g. `age > 0 && (adult = true)`

## Double Logical Not !!
For booleans we can use !! so that we can use a positive function name e.g. for a function called hasName() `return !!this.name`
i.e. !this.name will return false when name and true when no name. Fine if the function is called hasNoName(). 
But it's better to do !!this.name which will return true when name and false when no name 

## State
![image](https://user-images.githubusercontent.com/20191662/103410834-13267680-4b65-11eb-8981-dda1aa69b490.png)

## Props and State Compared
![image](https://user-images.githubusercontent.com/20191662/103426343-b2249000-4bb0-11eb-9e90-b4d368c52e7e.png)



# Useful Docs
Elements - https://reactjs.org/docs/dom-elements.html
Events - https://reactjs.org/docs/events.html

#Primer
![Untitled](https://user-images.githubusercontent.com/20191662/102872117-33548800-4437-11eb-9caa-62b0367142d6.png)


