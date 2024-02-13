import Pokemon from './Pokemon.js';

class App {
  constructor() {
    this.pokemons = [];
    this.visiblePokemons= [];
    this.types = [];
    this.container = document.querySelector('.js-cards');
    this.select = document.querySelector('.js-select');
  }

  async getPokemons() {
    const response = await fetch('./data/pokemon.json');
    const json = await response.json();
  
    return json;
  }

  getPokemonTypes () {
    this.pokemons.forEach((pokemon) => {
      pokemon.types.forEach((type) => {
        if (!this.types.includes(type)) {
          this.types.push(type);
        }
      });
    });
  }

  fillSelect () {
    this.types.forEach((type) => {
      const option = document.createElement('option');
      option.value = type;
      option.textContent = type;
      this.select.appendChild(option);
    });
  }

  displayAllPokemons () {
    this.pokemons.forEach((pokemon) => {
      const card = pokemon.getTemplateCard();
      this.container.appendChild(card);
    });
  }

  async main () {
    const data = await this.getPokemons();
    const pokemonsData = data.slice(0, 52);
    this.container.innerHTML = '';
    console.log(pokemonsData);
    pokemonsData.forEach((pokemonData) => {
      const pokemon = new Pokemon(pokemonData);
      this.pokemons.push(pokemon);
      const card = pokemon.getTemplateCard();
      this.container.appendChild(card);
    });

    this.getPokemonTypes();
    this.fillSelect();

    this.select.addEventListener('change', () => {
      const value = this.select.value;
      this.container.innerHTML = '';
      if (value) {
        this.pokemons.forEach((pokemon) => {
          const types = pokemon.types;
          if (types.includes(value)) {
            const card = pokemon.getTemplateCard();
            this.container.appendChild(card);
          }
        });
      } else {
        this.displayAllPokemons();
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.main();
});