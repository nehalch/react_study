// import { Navbar } from "./nav";

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}

const page =(
    <div>
        <Navbar />
    </div>
);


ReactDOM.render(page, document.getElementsById("root"));

