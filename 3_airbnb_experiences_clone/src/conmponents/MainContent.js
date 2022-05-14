import React from "react";
import gridphoto from "../images/photo_grid.png";

import Slider from "./Slider";


export default function MainContent() {
    return (
        <main>
            <img src={gridphoto} alt="photos" width="400" />
            <h1>Online Experiences</h1>
            <p>
                Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
            <Slider />
        </main>
    );
}