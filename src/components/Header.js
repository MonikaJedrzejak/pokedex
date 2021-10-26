import React from "react";
import SearchBar from "./SearchBar";

export default function Header({ searchQuery, setSearchQuery }) {
	return (
		<header className="header sticky-top text-center">
			<div className="container d-sm-flex justify-content-center justify-content-sm-between align-items-center">
				<span>POKEDEX</span>
				<SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
			</div>
		</header>
	);
}
