import './Partner.css'
import Card from './Card';

const Partner = () => {
    return (
        <section className="partner">
            <h2>Testimonials</h2>
            <div className="flex">
                <div>
                    <img src="/img/stars.png" alt="" />
                    <p>“Quisque in lacus a urna fermentum euismod. Integer mi nibh, dapibus ac scelerisque eu, facilisis quis purus. Morbi blandit sit amet turpis nec”</p>
                    <h4>Edward Newgate</h4>
                    <span>Founder Circle</span>
                </div>
                <div>
                    <img src="/img/photo.png" alt="" />
                </div>
            </div>
            <div className="flexH2">
                <h2>Trending stories</h2>
                <a href="/">View all &rsaquo;</a>
            </div>
            <div className="cards">
                <Card
                    img="/img/image-12.png"
                    headline="The many benefits of
                taking a healing holiday"
                    text="‘Helaing holidays’ are on the rise 
                tohelp maximise your health and happines..."
                    reference="Read more" />
                <Card
                    img="/img/image-13.png"
                    headline="The best Kyoto restaurant
                    to try Japanese food"
                    text="From tofu to teahouses, here’s our guide to Kyoto’s best restaurants
                    to visit..."
                    reference="Read more" />
                <Card
                    img="/img/image-14.png"
                    headline="Skip Chichen Itza and head
                    to this remote Yucatan"
                    text="It’s remote and challenging to get,
                    but braving the jungle and exploring
                    these ruins without the..."
                    reference="Read more" />
                <Card
                    img="/img/image-15.png"
                    headline="Surf’s up at these beginner
                    spots around the world"
                    text="If learning to surf has in on your to-
                    do list for a while, the good news
                    is: it’s never too late..."
                    reference="Read more" />
            </div>

        </section>
    );
}

export default Partner;