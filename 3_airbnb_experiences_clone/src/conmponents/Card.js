import React from "react";

export default function Card(product) {
    return (
        <div className="card">
            <img className="card" src={process.env.PUBLIC_URL + "/images/products/" + product.photo} alt="Product card." />
            <h2 className="card" >{product.name}</h2>
            <p className="card" > {product.quantity} pcs.</p>
            <p className="card" > {product.price} USD</p>
            <p className="card" > {product.rate} stars</p>
            <p className="card" > {product.country} </p>
            <p className="card" > Description: {product.description} </p>
        </div>
    )
};