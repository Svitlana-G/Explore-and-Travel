import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <img src="logo.png" alt="" />
            <div class="flex">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/destinations">Destinations</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/partner">Partner</Link></li>
                </ul>
                <div>
                    <button>Login</button>
                    <button>Register</button>
                </div>
            </div>

        </nav>
    );
}

export default Navigation