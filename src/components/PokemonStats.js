import React from 'react'

export default function PokemonStats({data}) {
    return (
		<div>
      <span>Stats:</span>
			<ul className="text-center">
      {data && data.map((stateInfo) => {
        const { base_stat } = stateInfo;
        const { stat } = stateInfo;
        const { name } = stat;
        return <li className="d-flex justify-content-between" key={name}> <h6>{name}</h6><h6>{base_stat}</h6></li>; })}
      </ul>
		</div>
	);
}
//return <li key={name}> {`${name} ${base_stat}` }</li>; })}