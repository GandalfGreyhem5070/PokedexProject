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

