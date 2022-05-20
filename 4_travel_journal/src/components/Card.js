import React from "react";

const Card = (props) => {
    return (
        <div className="card">
            <img className="card" src={props.image} width="200" alt={props.title} />
            
            <div className="data">
                <div className="map">
                    <h4 className="location">{props.location}</h4>
                    <h6 className="link">
                        <a href={props.link}> View on Google Maps </a>
                    </h6>
                </div>
                <h2>{props.title}</h2>
                <h6>{ props.start_date } - { props.end_date }</h6>
                <p>{ props.description }</p>
            </div>
        </div>
    );
}

export default Card;