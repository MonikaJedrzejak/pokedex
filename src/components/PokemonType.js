import React from "react";
import { Badge } from "react-bootstrap";

export default function PokemonType({ data }) {

	function colorBadge(name) {
		switch(name) {
			case 'grass':
				return "success"
			case 'bug':
				return "success"
			case 'dragon':
				return "danger"
			case 'fire':
				return "danger"
			case 'fairy':
				return "primary"
			case 'ghost':
				return "light"
			case 'psychic':
				return "light"
			case 'ground':
				return "warning"
			case 'electric':
				return "warning"
			case 'normal':
				return "secondary"
			case 'steel':
				return "secondary"
			case 'rock':
				return "secondary"
			case 'dark':
				return "dark"
			case 'fighting':
				return "dark"
			case 'poison':
				return "dark"
			case 'fyling':
				return "info"
			case 'ice':
				return "info"
			case 'water':
				return "primary"
			default:
				return "dark"
		}
	}

	return (
		<div className="d-flex flex-column align-items-center">
			<span className="text-center">Types:</span>
			<ul className="d-flex"> {data && data.map((typeInfo) => {
			const { type } = typeInfo;
        	const { name } = type;
        	return <li className="mx-2" key={name}> <h3><Badge bg={colorBadge(name)} text="light">{`${name}`}</Badge></h3></li>; })}
			</ul>
		</div>
	);
}