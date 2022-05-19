import React from "react";

import Card from "./Card";
import items from "../data/items";

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