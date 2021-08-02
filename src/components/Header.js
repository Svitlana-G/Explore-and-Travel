import "./Header.css"

const Header = () => {
    return (
        <header>

            <section>
                <h1>Explore and <br /> Travel</h1>
                <h3>Holiday finder</h3>
                <div className="grid">
                    <select id="location">
                        <option value="locationValue">Location</option>
                    </select>
                    <select id="activity">
                        <option value="activityValue">Activity</option>
                    </select>
                    <select id="grade">
                        <option value="gradeValue">Grade</option>
                    </select>
                    <select id="date">
                        <option value="dateValue">Date</option>
                    </select>
                </div>
                <button>Explore</button>

            </section>
            <img src="thousand.png" alt="" />
        </header>
    );
}

export default Header;