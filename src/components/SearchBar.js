import React from "react";

export default function SearchBar({ searchQuery, setSearchQuery }) {
	return (
		<form className="search-bar d-flex align-items-center px-auto">
			<label htmlFor="header-search">
				<span>
					<i className="fa fa-search px-1"></i>
				</span>
			</label>
			<input
				value={searchQuery}
				onInput={(e) => setSearchQuery(e.target.value)}
				type="text"
				id="header-search"
				placeholder="Quick search"
				className="search-input border-light"
			/>
		</form>
	);
}
