import React from "react";

// const json = '{{"result":true, "count":42},{"result":true, "count":42}}';
// const obj = JSON.parse(json);

// console.log(obj.count);
// // expected output: 42

// console.log(obj.result);
// expected output: true

const card1 = {
    photo: "#",
    quantity: 21,
    name: "123",
    price: 123,
    rate: 2.1,
    country: "USA",
    description: "123",
};
const card2 = {
    photo: "#",
    quantity: 21,
    name: "123",
    price: 123,
    rate: 2.1,
    country: "USA",
    description: "123",
};

const cards = [card1, card2];

function CreateCard(card) {
    console.log("createcard");
    return (
        <li>
            <img src={card.photo} alt="Product card." />
            <h2>{card.name}</h2>
        </li>
    );
}

export default function Slider() {
    console.log("slider");
    return (
        <div className="slider">
            <ul>
                {cards.forEach(card => { return CreateCard(card) })}
            </ul>
        </div>
    );
}