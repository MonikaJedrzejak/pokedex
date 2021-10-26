import React from 'react'

export default function PokemonSize({data}) {
    const pokeInfo = {
		weight: data.weight,
		height: data.height,
        id: data.id,
	};
    return (
        <div>
            <p>ID: {pokeInfo.id}</p>
            <p>WEIGHT: {pokeInfo.weight / 10} kg</p>
            <p>HEIGHT: {pokeInfo.height / 10} m</p>
        </div>
    )
}
