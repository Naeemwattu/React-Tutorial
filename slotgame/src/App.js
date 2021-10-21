import React from "react";
import SlotM from "./Slotmachine";



const App = () => {
  return (
    <>
      <h1 className="heading"> 🎰 Wellcome to <span style={{ fontWeight: "bold" }}> Slot Machine Game </span>🎰 </h1>
      <div className="slotmachine">
      <SlotM  x='😄' y='😄' z='😄'/>
      <SlotM  x='❤️' y='👫' z= '❤️'/>
      <SlotM  x='🍅' y='🌴' z='🚜'/>
      </div>
    </>
  );
}

export default App;