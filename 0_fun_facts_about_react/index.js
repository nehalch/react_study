const Navbar = () => {
    return (
        <nav>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </nav>
    );
}

const page = (
    <div>
        <img src="./react.png" alt="123" width="40px" />
        <h1>Fun facts about React</h1>
        <ul>
            <li>Was first released in 2013</li>
            <li>Was originally created by Jordan Walke</li>
            <li>Has well over 100K stars on Github</li>
            <li>Is maintained by Facebook</li>
            <li>Powers thousands of enterprise apps, include mobile apps</li>
        </ul>
    </div>
);


ReactDOM.render(page, document.getElementById("root"));