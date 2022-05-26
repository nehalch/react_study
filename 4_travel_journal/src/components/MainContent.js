import React from "react";

import items from "../data/items";
import Card from "./Card";


const cards_spacer = (cards) => { 
    let cards_with_spaces = [];
    for (let card of cards) {
        if (card === cards[cards.length-1]) {
            cards_with_spaces.push(card);
        } else {
            cards_with_spaces.push(card,<hr/>);            
        }
    }
    return cards_with_spaces;
}


const MainContent = () => {
    let cards = cards_spacer(items.map(item => <Card {...item} />));
    
    return (
        <main>
            <div className="cards_box">
                {cards}
            </div>
        </main>
    );
}

export default MainContent;