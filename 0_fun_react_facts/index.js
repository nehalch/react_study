// import React from "react";
// import ReactDOM from "react-dom";

const Page = () => {
    return (
        <div>
            <img src="./react.png" alt="React logo" width="40px"/>
            <h1>Facts about react</h1>
            <ol>
                <li>Whole site in one react app.</li>
                <li>Cross platform apps.</li>
                <li>Easy to use.</li>
            </ol>
        </div>
    );
}

ReactDOM.render(<Page />, document.getElementById("root"));