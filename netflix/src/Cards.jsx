import React from "react";

function Card(props) {
    // console.log(props)
    return (
        <>
            <div className="cards">
                <div className="card">
                    <img src={props.imgsrc} alt="alt-imges" className="card-img" />
                    <div className="card-info">
                        <span className="card-title">{props.title}</span>
                        <h3 className="card-category">{props.sname}</h3>
                        <a href={props.link} target="_blank">
                            <button>Watch Now</button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Card;