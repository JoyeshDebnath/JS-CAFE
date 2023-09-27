const URL = `https://pokeapi.co/api/v2/pokemon/`;
let pokemonName = "ditto";

async function getPokemonData(name) {
	const response = await fetch(URL + name);
	const data = await response.json();
	console.log(data);
}

getPokemonData(pokemonName);
