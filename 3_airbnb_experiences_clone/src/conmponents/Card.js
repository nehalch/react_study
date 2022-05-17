import React from "react";

export default function Card(product) {

    let text = "";

    if (product.quantity === 0) {
        text = "SOLD OUT";
    }
    if (product.type === "online") {
        text = "ONLINE"
    }


    return (
        <div className="card">
            {text && <div className="badge">{text}</div>}
            <img className="card" src={process.env.PUBLIC_URL + "/images/products/" + product.photo} alt="Product card." />
            <h2 className="card" >{product.name}</h2>
            <p className="card" > {product.quantity} pcs.</p>
            <p className="card" > {product.price} USD</p>
            <p className="card" > {product.rate} stars</p>
            <p className="card" > {product.country} </p>
            <p className="card" > Description: {product.description} </p>
        </div >
    )
};