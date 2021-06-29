import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

/* 
* the following code is added between main.chunk.js on npm run start ...
* this js file is appended to index.html and then executed on browser 
*/

console.log("how is this been logged");
console.log("this is another log and this log is main.chunk.js")

const myOwnVariable = "my string";



console.log(myOwnVariable)

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
