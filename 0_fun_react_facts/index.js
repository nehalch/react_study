// import React from "react";
// import ReactDOM from "react-dom";

// FIXME react library is not found

// import Header from "./Components/Header";
// import MainContent from "./Components/MainContent";
// import Footer from "./Components/Footer";

// FIXME import components modules not working



function Header() {
    return (
        <header>
            <img className="header" src="./react.png" alt="React logo" />
            <nav>
                <ul className = "nav">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contacts</li>
                </ul>
            </nav>
        </header>
    );
}

function MainContent() {
    return (
        <main>
            <h1>Reasons I'm excited to learn React</h1>
            <ol>
                <li>Whole site in one react app.</li>
                <li>Cross platform apps.</li>
                <li>Easy to use.</li>
                <li>React is fast.</li>
                <li>TypeScript template.</li>
            </ol>
        </main>
    );
}

function Footer() {
    return (
        <footer>
            © 2022 Nehalchuk development. All right reserved.
        </footer>
    );
}

function App() {
    return (
        <div>
            <Header/>
            <MainContent/>
            <Footer/>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));