import React, { useState, useEffect } from "react";
import { Spinner, ListGroup } from "react-bootstrap";
import Header from "./Header.js";
import ListItem from "./ListItem.js";

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
				//console.log(results);
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

			<div className="container d-flex justify-content-center">
				<ListGroup className="w-100 font-weight-bold">
					{pokemons.length ? (
						newList.map((el) => (
								<li className="list-item" key={el.url}><ListItem data={el} className="d-flex justify-content-around"/></li>
						))
					) : (
						<div className="d-flex justify-content-center py-5">
							<Spinner animation="grow" variant="primary" />
							<Spinner animation="grow" variant="danger" />
							<Spinner animation="grow" variant="warning" />
						</div>
					)}
				</ListGroup>
			</div>
		</>
	);

}
