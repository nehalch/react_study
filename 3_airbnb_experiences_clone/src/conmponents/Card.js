import React from "react";

export default function Card(props) {

    let text = "";

    if (props.item.quantity === 0) {
        text = "SOLD OUT";
    }
    if (props.item.type === "online") {
        text = "ONLINE"
    }


    return (
        <div className="card">
            {text && <div className="badge">{text}</div>}
            <img className="card" src={process.env.PUBLIC_URL + "/images/items/" + props.item.photo} alt="props.item card." />
            <h2 className="card" >{props.item.name}</h2>
            <p className="card" > {props.item.quantity} pcs.</p>
            <p className="card" > {props.item.price} USD</p>
            <p className="card" > {props.item.rate} stars</p>
            <p className="card" > {props.item.country} </p>
            <p className="card" > Description: {props.item.description} </p>
        </div >
    )
};