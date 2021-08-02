import "./Navigation.css";
const Navigation = () => {
    return (
        <nav>
            <img src="logo.png" alt="" />
            <div class="flex">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/destinations">Destinations</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/partner">Partner</a></li>
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