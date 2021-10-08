// import react from "react";
// var React = require("react");

// import ReactDOM from "react-dom";
// var ReactDOM = require("react-dom");

// ReactDOM.render(<h1> Hello World!!! </h1>, document.getElementById('root'));


// BABEL CONVERT THE CODE

// ReactDOM.render(React.createElement("h1", 
//   null, 
//   " Hello World!!! "), 
//   document.getElementById('root'));


// PURE JAVASCRIPT CODE

// var h1 = document.createElement('h1');
// h1.innerHTML = "NOMIWATTU FRONTEND DEVELOPER";
// document.getElementById('root').appendChild(h1);





//6.. How to Render Multiple Elements inside ReactDOM.render() in ReactJS
// In React v16 its possible for render()
// to return an array of an element

// ReactDOM.render(
//   <div>
//   <h1> Hello Dear!!! </h1> 
//   <p>My name is MUHAMMAD NAEEM ABBAS</p>
//   </div>
//   , document.getElementById('root'));

//   ReactDOM.render(
//     [
//       <h1> Hello World!!! </h1>, 
//       <p>My name is MUHAMMAD NAEEM ABBAS</p>,
//       <h2>I live in Sambrial Sialkot Mohallah Rasool pura Street no.4</h2>
//     ]
//     , document.getElementById('root'));



// ------------------React Fragment------------
// ReactDOM.render(
//   <React.Fragment>
//     <h1>Muhammad Naeem Abbas</h1>
//     <h2>Tahir abbas</h2>
//     <h2>+923086498146</h2>
//     <h2>naeemwattu6@gmail.com</h2>
//   </React.Fragment>,
//   document.getElementById('root')
// );

// ReactDOM.render(
//   <>
//     <h1>Network Administrator with holistic knowledge in CCNA R&S. Also Experience in Front-end Designing and Data Operator.</h1>
//   </>,
//   document.getElementById('root')
// );



// -----------1st Challange in React App-----------

import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <>
    <h1>Nomi Technical Netflix Series</h1>
    <p>List of Best 5 Series</p>
    <ol>
      <li>Money Hiest</li>
      <li>Venom</li>
      <li>SpiderMAn</li>
      <li>Avengers</li>
      <li>Captain America</li>
    </ol>
  </>,
  document.getElementById('root')
);