import React from "react";

export default function Card(props) {

    let text = "";

    if (props.quantity === 0) {
        text = "SOLD OUT";
    }
    if (props.type === "online") {
        text = "ONLINE"
    }


    return (
        <div className="card">
            {text && <div className="badge">{text}</div>}
            <img className="card" src={process.env.PUBLIC_URL + "/images/items/" + props.photo} alt="props card." />
            <h2 className="card" >{props.name}</h2>
            <p className="card" > {props.quantity} pcs.</p>
            <p className="card" > {props.price} USD</p>
            <p className="card" > {props.rate} stars</p>
            <p className="card" > {props.country} </p>
            <p className="card" > Description: {props.description} </p>
        </div >
    )
};