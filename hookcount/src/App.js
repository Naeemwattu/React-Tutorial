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


// import React, { useState } from "react";
// const App = () => {

//   let time = new Date().toLocaleTimeString();
//   const [ctime, newCtime] = useState(time);

//   const UpdateTime = () => {
//     time = new Date().toLocaleTimeString();
//     newCtime(time);
//   }

//   let date = new Date().toLocaleDateString();
//   const [cdate, newCdate] = useState(date);

//   const UpdateDate = ()=>{
//     date = new Date().toLocaleDateString();
//     newCdate(date);
//   }
//   setInterval(UpdateTime,1000);
//   return (
//     <>
//       <div>
//         <h1>{ctime}</h1>
//         <h5>{cdate}</h5>
//       </div>
//     </>
//   )
// };
// export default App;

import React, { useState } from "react";

const App = () =>{

  const color = "#0066ff";
  const [bg, newBg] = useState(color);
  const [name, setName] = useState('Yesterday PAK vs AFG Match Result Here... ✅')

  const setBg = () =>{
    let newcolor = "#009933";
    newBg(newcolor);
    setName("Hurrah!! Pakistan Win the Match against Afghanistan 🥇 🏆")

  };

  const setNewbg = () =>{
    newBg(color);
    setName("Boht Boht Mubarak ho pakistan Jeet gya ha.. ❤️  🥰");
  };
  return(
    <>
      <div style={{backgroundColor: bg}}>
        <button onClick={setBg} onDoubleClick={setNewbg}> {name} </button>
      </div>
    </>
  )
};

export default App;