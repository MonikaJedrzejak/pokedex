import React from 'react'

export default function PokemonStats({data}) {
    return (
		<div>
			<ul> Stats:
       {data && data.map((stateInfo) => {
        const { base_stat } = stateInfo;
          const { stat } = stateInfo;
         const { name } = stat;
         return <li key={name}> {`${name} ${base_stat}` }</li>; })}
</ul>
		</div>
	);
}
