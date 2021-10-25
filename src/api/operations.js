const API_URL_ALL_POKEMON = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118";

export function getAllPokemon(cb) {
    fetch(`${API_URL_ALL_POKEMON}`)
        .then(res =>
            res.json())
        .then(data => {
            cb(data)
        })
        .catch((error) => {
            console.log(error);
        })
}