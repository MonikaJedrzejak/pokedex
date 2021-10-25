import React from "react";
import SearchBar from "./SearchBar";

export default function Header({ searchQuery, setSearchQuery }) {
	return (
		<header className="header sticky-top">
			<div className="container d-flex justify-content-between">
				<span>POKEDEX</span>
				<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			</div>
		</header>
	);
}
