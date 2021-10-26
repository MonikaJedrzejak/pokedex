import React, { useState, useEffect } from "react";
// import { getAllPokemon } from "../api/operations";
import { Spinner, ListGroup } from "react-bootstrap";
import Header from "./Header.js";

export default function List() {
	const [pokemons, setPokemons] = useState([]);
	const [searchQuery, setSearchQuery] = useState("");

	// useEffect(() => {
	// 	getAllPokemon(setPokemons);
	// }, [])

	useEffect(() => {
		fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118")
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
				throw new Error("Ups...");
			})
			.then(({ results }) => {
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
				<ListGroup className="w-100">
					{pokemons.length ? (
						newList.map(({ name, url }, idx) => (
							<a href={`/pokemon/${name}`} className="pokemon-link" key={url}>
								<ListGroup.Item key={url}>
								{name}
								</ListGroup.Item>
							</a>
						))
					) : (
						<>
							<Spinner animation="grow" variant="primary" />
							<Spinner animation="grow" variant="danger" />
							<Spinner animation="grow" variant="warning" />
						</>
					)}
				</ListGroup>
			</div>
		</>
	);

}
