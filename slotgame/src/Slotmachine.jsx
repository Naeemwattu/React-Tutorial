import React from "react";

const SlotM = (props) => {
    // let x = '😄';
    // let y = '😄';
    // let z = '😄';
  
  let {x, y, z} = props;
  
    if(x===y && y===z){
      return(
        <>
          <div className= "inner-html">
            <h1> {x} {y} {z}</h1>
            <h1>This Slot is Matching</h1>
            <hr/>
          </div>
        </>
      )
    }else{
      return(
        <>
          <div className= "inner-html">
            <h1> {x} {y} {z}</h1>
            <h1>This Slot is not Matching</h1>
            <hr/>
          </div>
        </>
      )
    }
  }

  export default SlotM;