import React from "react";
import ReactDOM from "react-dom";
import Card from "./Cards";
import "./index.css";
import ArrayCard from "./ArrayCard";



ReactDOM.render(
  <>
    <Card 
      imgsrc={ArrayCard[0].imgsrc}
      title={ArrayCard[0].title}
      sname={ArrayCard[0].sname}
      link={ArrayCard[0].link}
    />
    <Card 
      imgsrc={ArrayCard[1].imgsrc}
      title={ArrayCard[1].title}
      sname={ArrayCard[1].sname}
      link={ArrayCard[1].link}
    />
    <Card 
      imgsrc={ArrayCard[2].imgsrc}
      title={ArrayCard[2].title}
      sname={ArrayCard[2].sname}
      link={ArrayCard[2].link}
    />
    <Card 
      imgsrc={ArrayCard[3].imgsrc}
      title={ArrayCard[3].title}
      sname={ArrayCard[3].sname}
      link={ArrayCard[3].link}
    />
    <Card 
      imgsrc={ArrayCard[4].imgsrc}
      title={ArrayCard[4].title}
      sname={ArrayCard[4].sname}
      link={ArrayCard[4].link}
    />
  </>,
  document.getElementById('root')
);