import React from "react";
import { useParams } from "react-router";
import PokemonHeader from "./PokemonHeader";
import PokemonInfo from "./PokemonInfo";

export default function Pokemon() {
	let { pokemonName } = useParams();

	return (
		<>
			<PokemonHeader />
			<PokemonInfo name={pokemonName}/>
		</>
	);
}
