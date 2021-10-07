import React from "react";
import { createElement } from "react";
// var React = require("react");

import ReactDOM from "react-dom"
// var ReactDOM = require("react-dom");

// ReactDOM.render(<h1> Hello World!!! </h1>, document.getElementById('root'));


// BABEL CONVERT THE CODE

ReactDOM.render(React.createElement("h1", 
  null, 
  " Hello World!!! "), 
  document.getElementById('root'));


// PURE JAVASCRIPT CODE

var h1 = document.createElement('h1');
h1.innerHTML = "NOMIWATTU FRONTEND DEVELOPER";
document.getElementById('root').appendChild(h1);