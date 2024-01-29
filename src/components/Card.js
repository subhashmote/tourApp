import { useState } from "react";

function Card({ id, name, image, price, info, removeTour }) {
    console.log("ID:", id);
    console.log("Name:", name);
    console.log("Image:", image);
    console.log("Price:", price);
    console.log("Info:", info);

    const [readmore, setReadmore] = useState(false);

    const description = readmore ? info : `${(info ?? '').substring(0, 200)}...`;

    function readmoreHandler() {
        setReadmore(!readmore);
    }

    return (
        <div className="card">
            <img src={image} className="image" alt={`${name} Tour`} />
            <div className="tour-info">
                <div className="tour-details">
                    <h4 className="tour-price">₹{price}</h4>
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore ? `show less` : `read more`}
                    </span>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Interested
            </button>
        </div>
    );
}

export default Card;
