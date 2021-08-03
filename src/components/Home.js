import ImageText from "./ImageText"
const Home = () => {
    return (
        <section className="home">
            <ImageText
                img="/img/thousand-02.png"
                headline="A new way to explore the world"
                text="For decades travellers have reached for Lonely Planet books when looking to plan and execute their perfect
                trip, but now, they can also let Lonely Planet Experiences lead the way"
                btn="Learn more"
                direction={false} />
        </section>
    );
}

export default Home;