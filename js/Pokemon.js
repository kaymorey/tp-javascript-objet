import colors from './typesColor.js';

export default class Pokemon {
  constructor(data) {
    this.id = data.pokedexId;
    this.name = data.name.fr;
    this.img = data.sprites.regular;
    this.types = [];
    data.types.forEach((type) => {
      this.types.push(type.name);
    });
    this.hp = data.stats.hp;
    this.stats = {
      attack: data.stats.atk,
      defense: data.stats.def,
      speed: data.stats.vit,
    }
  }

  getTemplateCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.setProperty('--color', colors[this.types[0]]);
    card.innerHTML = `
      <span class="card__label">HP <strong>${this.hp}</strong></span>
      <img src="${this.img}" alt="" class="card__img">
      <h2>${this.name}</h2>
      <div class="card__types"></div>
      <div class="card__stats">
        <p>
          attaque<br>
          <strong class="card__number">${this.stats.attack}</strong>
        </p>
        <p>
          défense<br>
          <strong class="card__number">${this.stats.defense}</strong>
        </p>
        <p>
          vitesse<br>
          <strong class="card__number">${this.stats.speed}</strong>
        </p>
      </div>
    `;

    const types = card.querySelector('.card__types');
    this.types.forEach((type) => {
      const span = document.createElement('span');
      span.classList.add('card__type');
      span.textContent = type;
      span.style.setProperty('--color', colors[type]);
      types.appendChild(span);
    });

    return card;
  }
}