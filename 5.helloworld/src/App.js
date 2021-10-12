// ----------------using Component Design Greeting Card------

// import React from "react";

// function App(){
//   let currDate = new Date()
//   currDate = currDate.getHours()
//   let greeting = "";
//   const cssStyle = {};

//   if (currDate >= 1 && currDate < 12) {
//     greeting = "Good Morning";
//   } else if(currDate >=12 && currDate <19) {
//     greeting = "Good Afternoon";
//   }else{
//     greeting = "Good Night";
//   }
//  return (
//   <>
//     <div>
//       <h1>Hello Mr. Muhammad Naeem Abbas <span style = {cssStyle}> {greeting} </span></h1>
//     </div>
//   </>
// )
// }
// export default App;





const nomi = "nomiwattu";
const age = 23;

 function name(){
   let name = "naeem"
   return name;
  }
  
  function names(){
    let names = "wattu"
    return names;
  }
 

export default nomi;
export {age, name, names};