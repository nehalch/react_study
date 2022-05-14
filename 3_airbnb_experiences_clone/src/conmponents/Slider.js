import React from "react";

import Card from "./Card";
import products from "../data/products";

// const json = '{{"result":true, "count":42},{"result":true, "count":42}}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// expected output: true

export default function Slider() {
    const cards = products.map(product => {
        return <Card
            photo={product.photo}
            quantity={product.quantity}
            name={product.name}
            price={product.price}
            rate={product.rate}
            country={product.country}
            description={product.description}
        />
    });

    return (
        <div className="slider">
            {cards}
        </div>
    );
}