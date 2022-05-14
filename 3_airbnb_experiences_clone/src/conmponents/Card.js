import React from "react";

export default function Card(product) {
    return (
        <div className="card">
            <img src={process.env.PUBLIC_URL + "/images/products/" + product.photo} alt="Product card." />
            <h2>{product.name}</h2>
            <p> {product.quantity} pcs.</p>
            <p> {product.price} USD</p>
            <p> {product.rate} stars</p>
            <p> {product.country} </p>
            <p> Description: {product.description} </p>
        </div>
    )
};