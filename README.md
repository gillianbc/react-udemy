# react-udemy

Learning react on udemy.  My second course from Andrew Mead.
https://www.udemy.com/course/react-2nd-edition.  Quite a long course - 39 hours so I estimate it will take me several months to complete it.

# Installation
npm install

NB I prefer npm to yarn as that means I can easily run via intellij 

# Running the App
You need to run two processes so open two terminal windows if running from the shell:  
- One to transpile the code and watch for changes to the source code
- One to watch for changes to the transpiled code and serve it up to the browser

The app will be launched on http://127.0.0.1:8080/ in your default browser.
For some of the exrecises, just view the console logs in the Chrome dev tools F12

## Update
I've put the app scripts in package.json

## Babel
Transpiled with Babel into public/scripts/app.js using the env and react presets (i.e. sets of plugins).
- The env preset takes care of producing JS suitable for a variety of browsers.
- The react preset takes care of transpiling JSX into React e.g. createElement.

--watch will re-transpile whenever the src file changes.

`babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`

## Live Server 
Will serve up whatever is in public and reload it if it changes i.e. public/app.js

`live-server public`

## Running App from Section 6 Onwards
Run the scripts:
- build
- dev-server
Go to localhost:8080

# How Does It Work?
When we run `live-server public`, it finds `index.html` in the public folder.  It then launches the js scripts define in index.html e.g. app.js or bundle.js.

We have a very simple `index.html` that has a `<div>` in the body with an id of `app`.  This is where our react application will be rendered.

index.html uses two scripts for react:
- react.development.js
- react-dom.development.js
plus our react application script - app.js

Our app.js renders our main React component (IndecisionApp) which renders the other React components.
A React component is simply a class that inherits from React.Component. Each React component has a render() method.

`ReactDOM.render(<IndecisionApp/>, document.getElementById('app'))`

(From Section 6 onwards, we use webpack so we only need one script - bundle.js)

We have babel-cli installed so that we can use babel from scripts or the shell.  

## State
![image](https://user-images.githubusercontent.com/20191662/103410834-13267680-4b65-11eb-8981-dda1aa69b490.png)

## Props and State Compared
![image](https://user-images.githubusercontent.com/20191662/103426343-b2249000-4bb0-11eb-9e90-b4d368c52e7e.png)

## Stateless Functional Components
You don't need a subclass of React.Component if you're only doing some presentation stuff that doesn't depend on state.
To convert an existing subclass of React.Component to a stateless functional component, 
- use the same name as your class component
- return the same stuff as the render() method
- you cannot use `this.props` as we're not dealing with an instance of a class. Just use a normal argument: `props`. Look out for any `this.props.blahblah` and change to `props.blahblah`

## Webpack
![image](https://user-images.githubusercontent.com/20191662/103445945-e0b66f80-4c71-11eb-958f-6ab07761af31.png)

In webpack.config.js, for the output file, it has to be an absolute path so that will vary depending on where the project has been installed locally.
So, we use __dirname rather than ./ to give us the current directory.  

Since the app may be installed on windows, linux etc, we cannot just use slashes - so we use the built in node module `path`

To watch for changes to source code, use --watch in the package.json script:
`"build": "webpack --watch",`

For webpack, we need babel-core so that tools such as webpack can use babel.  
Webpack also needs babel-loader so that it can behave appropriately based on file types.
In the package.json build scripts, we used `--presets=env,react`.  For webpack to use these same presets, we need to define this in `.babelrc` i.e.
```$xslt
{
    "presets": ["env", "react"]
}
```
Note that a bundle.js file created from a dev build will be huge - it's much smaller when we do a production build (later)

`devtool` options have changed since the course was recorded - see https://webpack.js.org/configuration/devtool/#devtool.
I found `eval-cheap-module-source-map` worked just fine

## .babelrc - plugin - transform-class-properties
This plugin allows us to: 
- define instance properties in a class based component without using a constructor
- call arrow function instance methods without having to manually bind `this` in the constructor 
See examples and explanations in `classSyntax.js` and also the commits in Lec 58 branch.

(I think this plugin may have a new name in latest babel)

### dev-server
When using webpack's **dev-server** rather than live-server, we no longer need to explicitly `--watch` for src changes in the package.json script.
The url is different - http://localhost:8080 (it was `http://127.0.0.1:8080/ for live-server)

**dev-server** does not create a bundle.js on disk - just in memory, so that's why it's fast at processing src changes on the fly.  
For production, we would need a bundle.js created, so we still need to keep our standard build script.

# Chrome Developer Tools
## React Developer Tools
Install the Chrome extension - React Developer Tools.

Click the purple *Components* icon to see state, props etc
### $r - global variable of current element
- Select an element
- Enter `$r` in the console to view the details of the selected element

## Rendering
- Click the gear icon in the chrome dev tools
- More tools - Rendering
- Paint Flashing

This will flash the dom elements that have been re-rendered

## Elements
Useful for seeing the actual HTML markup that React has created

## Device Toolbar
Useful for seeing what at app would look like on different devices e.g. iPhone

![image](https://user-images.githubusercontent.com/20191662/104135409-2bc63600-5388-11eb-9eca-4193089b8181.png)


# Useful Docs
Elements - https://reactjs.org/docs/dom-elements.html

Events - https://reactjs.org/docs/events.html

Webpack - https://webpack.js.org/

Cheatsheet - https://devhints.io/react

#Primer
![Untitled](https://user-images.githubusercontent.com/20191662/102872117-33548800-4437-11eb-9caa-62b0367142d6.png)

# Notes
## If / Then  (no Else)
I use the ternary where I need two options, x ? a : b  which reads as "if some condition then a else b"
but I didn't know about the logical and operator && for when I have one option or nothing
x && a which reads as "if some condition then a" e.g. `age > 0 && (adult = true)`

## Double Logical Not !!
For booleans we can use !! so that we can use a positive function name e.g. for a function called hasName() `return !!this.name`
i.e. !this.name will return false when name and true when no name. Fine if the function is called hasNoName(). 
But it's better to do !!this.name which will return true when name and false when no name 

## Object Returned from Arrow Func
When an arrow function has a single line in its body, the curly brackets can be omitted e.g.
```$xslt
const myfunc = () => {
    return 12
}
const myfunc = () => 12
```
However, if we want to return an object such as `{'apple', 1}`, we need to use curly braces so that would confuse JS.
Therefore, we must surround the body with an extra set of round brackets i.e.
```$xslt
const myfunc = () => ({'apple', 1})
```
# Styling Using SCCS

We use webpack to create normal CSS from SCSS via style-loader and css-loader.  Note:  `use` in the webpack.config.js is what lets us enter an array of items.
http://sass-lang.com

(Sass and Scss are much the same - Scss has curly braces and semi-colons)

Our webpack config looks for files ending .scss or .css, it finds /src/styles/styles.scss and uses the configured loaders to convert it into normal css.
It then injects a style tag and the css into our index.html.
We use normalize.css to do the work of overriding various browser built in styles so that our app will look the same in IE, Chrome, Safari etc

##BEM - Block Element Modifier
block--modifier-value

.block represents the higher level of an abstraction or component.

.block__element represents a descendent of .block that helps form .block as a whole.

.block--modifier represents a different state or version of .block.

e.g.
```
.person {}
.person__hand {}
.person--female {}
.person--female__hand {}
.person__hand--left {}
```

https://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/


# Progress
Started:  29-11-2020

Lec 10/200 completed by => 30/11/2020

Lec 20/200 completed by => 19/12/2020

Lec 30/200 completed by => 30/12/2020

Lec 40/200 completed by => 31/12/2020

Lec 50/200 completed by => 02/01/2021

Lec 60/200 completed by => 04/01/2021

Lec 70/200 completed by => 09/01/2021

Lec 80/200 completed by =>

Lec 90/200 completed by =>

Lec 100/200 completed by =>