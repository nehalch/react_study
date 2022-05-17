import React from "react";

import Card from "./Card";
import items from "../data/items";

// const json = '{{"result":true, "count":42},{"result":true, "count":42}}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// expected output: true

export default function Slider() {
    const cards = items.map(item => {
        return <Card
            key={item.id}
            item={item}
        />
    });
    return (
        <div className="slider">
            {cards}
        </div>
    );
}