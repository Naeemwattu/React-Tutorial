// import React, { useState } from "react";

// const App = () =>{
//   const state =useState();
//   const [count, setCount] = useState(0)

//   const IncNum = () =>{
//     setCount(count + 1);
//   }
//   return(
//     <>
//       <div>
//         <h1>{count}</h1>
//         <button onClick={IncNum}> Click Me </button>
//       </div>
//     </>
//   );
// }


// export default App;


import React, { useState } from "react";
const App = () => {

  let time = new Date().toLocaleTimeString();
  const [ctime, newCtime] = useState(time);

  const UpdateTime = () => {
    time = new Date().toLocaleTimeString();
    newCtime(time);
  }
  setInterval(UpdateTime,1000);
  return (
    <>
      <div>
        <h1>{ctime}</h1>
        {/* <button onClick={UpdateTime}>Get Time</button> */}
      </div>
    </>
  )
};
export default App;