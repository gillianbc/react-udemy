# react-udemy

Learning react on udemy.  My second course from Andrew Mead.

# Running the App
You need to run two processes so open two terminal windows:  
- One to transpile the code and watch for changes to the source code
- One to watch for changes to the transpiled code and serve it up to the browser

The app will be launched on http://127.0.0.1:8080/ in your default browser.

## Babel
Transpiled with Babel into public/scripts/app.js using the env and react presets (i.e. collections of library files).
--watch will re-transpile whenever the src file changes.

`babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch`

## Live Server 
Globally installed.  Will serve up whatever is in public and reload it if it changes i.e. public/app.js

`live-server public`

# Notes

I use the ternary where I need two options, x ? a : b  which reads as "if some condition then a else b"
but I didn't know about the logical and operator && for when I have one option or nothing
x && a which reads as "if some condition then a"


