import React from "react";
// var React = require("react");

import ReactDOM from "react-dom"
// var ReactDOM = require("react-dom");

ReactDOM.render(<h1> Hello World!!! </h1>, document.getElementById('root'));


// BABEL CONVERT THE CODE

ReactDOM.render(React.createElement("h1", 
  null, 
  " Hello World!!! "), 
  document.getElementById('root'));


// PURE JAVASCRIPT CODE

var h1 = document.createElement('h1');
h1.innerHTML = "NOMIWATTU FRONTEND DEVELOPER";
document.getElementById('root').appendChild(h1);





//6.. How to Render Multiple Elements inside ReactDOM.render() in ReactJS
// In React v16 its possible for render()
// to return an array of an element

ReactDOM.render(
  <div>
  <h1> Hello Dear!!! </h1> 
  <p>My name is MUHAMMAD NAEEM ABBAS</p>
  </div>
  , document.getElementById('root'));

  ReactDOM.render(
    [
      <h1> Hello World!!! </h1>, 
      <p>My name is MUHAMMAD NAEEM ABBAS</p>,
      <h2>I live in Sambrial Sialkot Mohallah Rasool pura Street no.4</h2>
    ]
    , document.getElementById('root'));