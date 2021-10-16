import React from "react";
import Card from "./Cards";
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

const App = () =>(
  <>
    <h1 className="heading">Top 5 Netflix Series with Links</h1>
    {/* {ArrayCard.map(ncard)} */}
    {ArrayCard.map((val, index) =>  {
      console.log(index)
      return (
        <>
          <Card
            key={val.id}
            imgsrc={val.imgsrc}
            title={val.title}
            sname={val.sname}
            link={val.link}
          />
        </>
      );
    })}
  </>
);

export default App;