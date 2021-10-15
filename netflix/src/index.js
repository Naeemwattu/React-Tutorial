import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import ArrayCard from "./ArrayCard";

// function ncard(val) {
//   console.log(val)
// return (
//   <>
//     <Card
//       imgsrc={val.imgsrc}
//       title={val.title}
//       sname={val.sname}
//       link={val.link}
//     />
//   </>
//   );
// }

ReactDOM.render(
  <>
    <h1 className="heading">Top 5 Netflix Series with Links</h1>
    {/* {ArrayCard.map(ncard)} */}
    {ArrayCard.map((val) =>  {
      return (
        <>
          <Card
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        </>
      );
    })}
  </>,
  document.getElementById('root')
);