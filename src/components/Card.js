import './Card.css'

const Card = (props) => {
    return (
        <div className="card">
            <figure>
                <img src={props.img} alt="" />
                <figcaption>
                    <h4>{props.headline}</h4>
                    <p>{props.text}</p>
                    <p>{props.reference}</p>
                </figcaption>
            </figure>
        </div>
    );
}

export default Card;