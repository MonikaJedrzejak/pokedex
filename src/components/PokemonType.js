import React from "react";

export default function PokemonType({ data }) {

	return (
		<div>
			<ul> Types:
       {data && data.map((typeInfo) => {
        const { type } = typeInfo;
        const { name } = type;
        return <li key={name}> {`${name}`}</li>; })}
</ul>
		</div>
	);
}