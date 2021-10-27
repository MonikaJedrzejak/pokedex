import React from 'react'

export default function PokemonSize({data}) {
    const pokeInfo = {
		weight: data.weight,
		height: data.height,
	};
    return (
        <>
        <span>Size:</span>
        <div className="d-flex justify-content-between py-3">
            <h6>Weight: {pokeInfo.weight / 10} kg</h6>
            <h6>Height: {pokeInfo.height / 10} m</h6>
        </div>
        </>
    )
}
