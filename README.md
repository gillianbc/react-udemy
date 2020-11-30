# react-udemy

Learning react on udemy.  My second course from Andrew Mead.

* Babel
Transpiled with Babel into public/scripts/app.js using the env and ract presets (i.e. collections of library files).
--watch will re-transpile whenever the src file changes.

babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch

* Live Server 
Globally installed.  Will serve up whatever is in public and reload it if it changes i.e. public/app.js

live-server public

* Notes

I use the ternary where I need two options, x ? a : b  => if some condition then a else b
but I didn't know about the logical and operator && for when I have one option or nothing
x && a ==> if some condition then a


