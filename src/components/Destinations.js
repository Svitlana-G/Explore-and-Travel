import "./Destinations.css";

const Destinations = () => {
    return (
        <section className="destinations">
            <div className="flex">
                <h2>Featured destinations</h2>
                <a href="/">View all &rsaquo;</a>
            </div>
            <div className="gallery">
                <img src="/img/Raja ampat.png" alt="" />
                <img src="/img/Fanjingshan.png" alt="" />
                <img src="/img/Vevey.png" alt="" />
                <img src="/img/Vevey.png" alt="" />
            </div>

        </section>
    );
}

export default Destinations;