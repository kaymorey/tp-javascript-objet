import colors from './typesColor.js';

export default class Pokemon {
  constructor(data) {

  }

  getTemplateCard() {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.setProperty('--color', colors[/* 1er item du tableau types */]);
    card.innerHTML = `
      <!-- Le code HTML de la card -->
    `;

    return card;
  }
}