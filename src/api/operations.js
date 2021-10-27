const API_URL_ALL_POKEMON = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=1118";

export function getAllPokemon(cb) {
    fetch(`${API_URL_ALL_POKEMON}`)
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error("Ups...");
    })
    .then(data => {
        cb(data);
    })
    .catch((err) => console.log(err));
}

export function getIdPokemon(name) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
    .then((res) => {
        if (res.ok) {
            return res.json();
        }
        throw new Error("Ups...");
    })
    .then((data) => {
        // console.log(data);
        return data.id
    })
    .catch((err) => console.log(err));
}
