import React from "react";

const photo = process.env.PUBLIC_URL + "/images/location.svg";

const Card = (props) => {
	return (
		<div className="card">
			<img className="card" src={props.image} width="200" alt={props.title} />

			<div className="data">
				<div className="map">
					<img className="location" src={photo} alt="location" width="25" />
					<p className="location">{props.location}</p>

					<a className="link" href={props.link}>
						{" "}
						View on Google Maps{" "}
					</a>
				</div>
				<h2>{props.title}</h2>
				<h6>
					{props.start_date} - {props.end_date}
				</h6>
				<p>{props.description}</p>
			</div>
		</div>
	);
};

export default Card;
