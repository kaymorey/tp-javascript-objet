import Pokemon from './Pokemon.js';

class App {
  constructor() {
    this.pokemons = [];
    this.types = [];
    this.container = document.querySelector('.js-cards');
    this.select = document.querySelector('.js-select');
  }

  async getPokemons() {
    const response = await fetch('./data/pokemon.json');
    const json = await response.json();
  
    return json;
  }

  async main () {
    const data = await this.getPokemons();
    const pokemonsData = data.slice(0, 52);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const app = new App();
  app.main();
});