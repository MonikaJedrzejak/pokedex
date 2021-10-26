import React from "react";
// import { Figure } from "react-bootstrap";

export default function PokemonPhoto({ data }) {
	// const pokeInfo = {
	// 	stats: data.stats,
	// 	types: data.types,
	// 	weight: data.weight,
	// 	height: data.height,
	// 	id: data.id,
	// 	name: data.name,
	// };

	return (
		<>
			<img
				className="card-img-top"
				src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
				alt={`${data.name}`}
			/>
		</>
	);
}
