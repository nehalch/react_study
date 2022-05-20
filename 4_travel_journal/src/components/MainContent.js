import React from "react";

import items from "../data/items";
import Card from "./Card";

const MainContent = () => {

    const cards = items.map(item => <Card key={item.id} {...item} />);
    
    return (
        <main>
            {cards}
        </main>
    );
}

export default MainContent;