import React, { useState, useEffect } from "react";
import PokemonPhoto from "./PokemonPhoto";
import PokemonStats from "./PokemonStats";
import PokemonType from "./PokemonType";
import PokemonSize from "./PokemonSize";
// import { Figure } from "react-bootstrap";

export default function PokemonInfo({ name }) {
	const [pokemon, setPokemon] = useState([]);

	useEffect(() => {
		fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw new Error("Ups...");
			})
			.then((data) => {
				// console.log(data);
				setPokemon(data);
			})
			.catch((err) => console.log(err));
	}, [name]);

	const { id, types, stats } = pokemon;

	return (
		<div className="container">
			<div className="pokemon-info m-3 p-3">
				<div className="pokemon-name m-2 p-2 text-center h5">{name}</div>
				<div className="pokemon-info-container row m-2">
					<div className="pokemon-info-col col-6 text-center">
						<PokemonPhoto id={id} name={name} />
					</div>
					<div className="pokemon-info-col col-6 text-center">
						<PokemonStats data={stats} />
						<PokemonType data={types} />
					</div>
				</div>
				<div className="pokemon-info-col row m-2">
					<PokemonSize data={pokemon} />
				</div>
			</div>
		</div>
	);
}
