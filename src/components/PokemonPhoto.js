import React from "react";

export default function PokemonPhoto({ id, name }) {
	const urlImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`

	return (
		<>
			{id && <img
				className="card-img-top"
				src={urlImg}
				alt={`${name}`}
			/>}
		</>
	);
}
