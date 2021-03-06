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

// import React from "react";
// import ReactDOM from "react-dom";

// ReactDOM.render(
//   <>
//     <h1>Nomi Technical Netflix Series</h1>
//     <p>List of Best 5 Series</p>
//     <ol>
//       <li>Money Hiest</li>
//       <li>Venom</li>
//       <li>SpiderMAn</li>
//       <li>Avengers</li>
//       <li>Captain America</li>
//     </ol>
//   </>,
//   document.getElementById('root')
// );



// --------------JavaScript Expressions &  ES6 Template Literal in JSX in ReactJs-----

// import React from "react";
// import ReactDom from "react-dom";

// const fname = "Muhammad";
// const lname = "Naeem Abbas";
// const faname ="Tahir Abbas";

// ReactDom.render(
//   <>
//     <h1>1-My Name is {fname}  {lname} </h1>

//     <h1>2-My Name is {fname + " " + lname}</h1>

//     <h1>3-My Name is {`${fname} ${lname}`}</h1>

//     <h1>{`4-My name is ${fname} ${lname}`}</h1>

//     <h1>{`5--My First Name is "${fname}" and My last Name is "${lname}".`}</h1>

//     <h2>My Father Name is {faname} </h2>
//     <p>I am live in Sambrial Mohallah Rasool Pura Street No.4</p>
//     <p>My lucky Number is {Math.random()} </p>
//   </>,
//   document.getElementById('root')
// );


// import React from "react";
// import ReactDOM from "react-dom";

// const flname = "Muhammad Naeem Abbas";
// const currDate = new Date().toLocaleDateString();
// const currTime = new Date().toLocaleTimeString();

// ReactDOM.render(
//   <>
//     <h1>My Name is {flname}.</h1>
//     <p>Today date is = {currDate}</p>
//     <p>Today Current Time is = {currTime}</p>
//   </>,
//   document.getElementById('root')
// );

// -----------------JSX Attributes in ReactJS---------------

// import React from "react";
// import ReactDom from "react-dom";

// const name ="Muhammad Naeem Abbas";
// const img1 ="https://picsum.photos/200/200";
// const img2 ="https://picsum.photos/300/300";
// const img3 ="https://picsum.photos/400/400";
// const link ="https://analyticalblog.com"

// const heading = {
//   color:'green',
//   textAlign:'center',
//   margin:'60px 0',
//   textTransform:'capitalize',
//   fontWeight:'bold',
//   textShadow:'2px 3px 15px red',
//   fontFamily: '"Akronim", cursive'
// }

// const image = {
//   display: 'flex',
//   justifyContent: 'center'
// }

// ReactDom.render(
//   <>
//     <h1 style={heading}>My Name is {name}</h1>
//     <div style={image}>
//       <img src={img1} />
//       <img src={img2} />
//       <a href={link} target="_blank">
//       <img src={img3} />
//       </a>
//     </div>
//   </>,
//   document.getElementById('root')
// );




// ---------------Greeting Card Challange---------

// import React from "react";
// import ReactDom from "react-dom";
// import './index.css';

// let curDate = new Date();
// curDate = curDate.getHours();
// let greeting = "";
// const cssStyle = { }

// if (curDate >= 1 && curDate < 12) {
//   greeting ="Good Morning";
//   cssStyle.color ="green"
// } else if(curDate >= 12 && curDate < 19) {
//   greeting ="Good Afternoon";
//   cssStyle.color ="orange"
// }else{
//   greeting ="Good Night";
//   cssStyle.color ="blue"
// }

// ReactDom.render(
//   <>
//   <div>
//     <h1>Hello Mr. MNA Wattu, <span style={cssStyle}> {greeting} </span> </h1>
//   </div>
//   </>,
//   document.getElementById('root')
// );



// ------------using Component design Greeting Card--------
// import React from "react";
// import ReactDom from "react-dom";
// import App from "./App";
// import "./index.css";


// ReactDom.render( <App />, document.getElementById('root'));



// import React from "react";
// import ReactDom from "react-dom";
// import nomi, {age, name,names} from "./App";

// ReactDom.render(
//   <>
//     <ol>
//       <li>{nomi}</li>
//       <li>{age}</li>
//       <li>{name()}</li>
//       <li>{names()}</li>
//     </ol>
//   </>,
//   document.getElementById('root')
// );




// ---------------Create Simple Calculator App in React JS------

import React from "react";
import ReactDom from "react-dom";
import Calculator from "./Calculator";

ReactDom.render(
  <Calculator />,
  document.getElementById('root')
);