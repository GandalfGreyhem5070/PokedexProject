//POKEDEX PROJECT

const pokeContainer = document.querySelector("#container");
// Number of Pokemon (objects) in the PokeAPI
const numOfPokemon = 150;

//The createPokeCard function creates a new card (section element) and adds the new card to the webpage/documnet inside of the div with the id of container
//NOTE: The value/argument that will be passed in for the "pokemon" paramenter will be the response received from an Axios request to the PokeAPI

function createPokeCard(pokemon) {
  const pokeCard = document.createElement("section");
  pokeCard.classList.add("pokemon");
  pokeContainer.append(pokeCard);
  //Setting the innerHTML for the new cars using the data/object that is passed into the "pokemon" parameter. Also, usig the toUpperCase method on the pokemon name so it will display in UPPERCASE text.
  pokeCard.innerHTML = `
    <div class="img-container">
    <img src="${pokemon.data.sprites.front_shiny}"
    alt="${pokemon.data.name}">
    </div>
    <h3 class="name">${pokemon.data.name.toUpperCase()}
    <h3>
    `;
}

// The getPokemonData fucntion makes an Axios GET request to the PokeApi using a specific pokemone ID/Number then takes the return data and passes it into the createPokeCard fucntion
// NOTE: The argument/value passed into the "id" paramenter will be a number creates in the loop in the nxt function (The getPokemon function)
async function getPokemonData(id) {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const pokemonData = await axios.get(url);
  console.log(pokemonData);
  console.log(pokemonData.data.sprites.front_shiny);
  console.log(pokemonData.data.name);
  createPokeCard(pokemonData);
}

//The getPokemon fucntion loops through all the pokemon IDs and runds/executes the getPokemonData function for each ID
//NOTE: Using async/await on this fucntion b/c the code in the getPokemonData function is asynchronus(there is an Axios request in that function)
async function getPokemon() {
  for (i = 1; i <= numOfPokemon; i++) {
    console.log(i);
    await getPokemonData(i);
  }
}
//Running/Executing the getPokemon function which runs/executes the getPokemonData function each time through the loop
getPokemon();
