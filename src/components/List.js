import React, { useState, useEffect } from "react";
// import { getAllPokemon } from "../api/operations";
import { Spinner } from "react-bootstrap";
import Header from "./Header.js";

export default function List() {
	const [pokemons, setPokemons] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118")
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw new Error("Ups...");
			})
			.then(({ results }) => {
				console.log(results);
				setPokemons(results);
			})
			.catch((err) => console.log(err));
	}, []);

	let newList = [];
	newList = pokemons;
	const filterList = (list, query) => {
		if (!query) {
			return list;
		}
		return list.filter((el) => {
			const itemName = el.name.toLowerCase();
			return itemName.includes(query);
		});
	};
	newList = filterList(pokemons, searchQuery);

	return (
		<>
			<Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			<div className="container">
				<ul className="list">
					{pokemons.length ? (
						newList.map(({ name, url }, idx) => (
							<li key={url}>
								#{idx + 1} {name}
							</li>
						))
					) : (
						<>
							<Spinner animation="grow" variant="primary" />
							<Spinner animation="grow" variant="danger" />
							<Spinner animation="grow" variant="warning" />
						</>
					)}
				</ul>
			</div>
		</>
	);

	// const [pokemonList, setPokemonList] = useState([]);

	// useEffect(() => {
	// 	getAllPokemon(setPokemonList);
	// }, []);

	// // console.log(pokemonList);
	// const lll = pokemonList.results;
	// // const ddd = lll.results;
	// console.log(typeof lll);
	// console.log(lll);

	// return (
	// 	<>
	// 		{/* <ul>
	//         {lll.map((el,idx) => {
	//             <li key={idx}>{el.name}</li>
	//         })}
	//     </ul> */}
	// 	</>
	// );
}
