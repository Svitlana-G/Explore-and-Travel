import ImageText from "./ImageText"

const About = () => {
    return (
        <section className="about">
            <ImageText
                img="/img/thousand-03.png"
                headline="Guides by Thousand 
                Sunny"
                text="Packed with tips and advice from our on-the-ground experts, our city guides app (iOS and Android) is the ultimate resource before and during a trip."
                btn="Download"
                direction={true} />
        </section>
    );
}

export default About;