import './ImageText.css'

const ImageText = (props) => {
    console.log(props)
    return (
        <div className="imageText" style={{ flexDirection: props.direction ? "row-reverse" : "" }}>
            <img src={props.img} alt="" />
            <div>
                <h2>{props.headline} </h2>
                <p>{props.text}</p>
                <button>{props.btn}</button>
            </div>
        </div>
    );
}

export default ImageText;