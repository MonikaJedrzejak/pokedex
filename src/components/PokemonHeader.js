import React from 'react'
import {Link} from 'react-router-dom';

export default function PokemonHeader() {
    return (
		<Link className="header-link" to="/">
        <header className="header sticky-top text-center">
			<div className="container d-flex justify-content-center align-items-center">
				<span>POKEDEX</span>
			</div>
		</header>
		</Link>
    )
}
