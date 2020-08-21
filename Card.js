import React from 'react';
import './Card.css';

const Card = ({name,mail,id}) => {

	return(
		<div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 tc">
			<img alt="robots" src={`https://robohash.org/${id}`}/>
			<div>
				<h2>{name}</h2>
				<p>{mail}</p>
			</div>
		</div>
		);
}

export default Card;