import React from 'react'
import { ListGroup } from "react-bootstrap";
import LazyLoad from 'react-lazyload';

export default function ListItem({data}) {
    const {name, url} = data;
    const id = url.slice(34,-1);
    const photo_url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

    return (
            <a href={`/pokemons/${name}`} className="pokemon-link" key={url}>
                <ListGroup.Item key={url} className="d-flex justify-content-around align-items-center">
					<span>{`#${id}`}</span>
					<span className="text-center text-capitalize">{name}</span>
					<LazyLoad> <img className="list-image img-thumbnail" alt={name} src={photo_url} /></LazyLoad>
                </ListGroup.Item>
			</a>
        
    )
}
