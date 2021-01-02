import React from 'react'
import ReactDOM from 'react-dom'

console.log('OK')

const template = React.createElement('p', {}, "Hello")

ReactDOM.render(template, document.getElementById('app'))