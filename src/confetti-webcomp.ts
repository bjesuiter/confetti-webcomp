import confetti from 'canvas-confetti';

// uses https://www.npmjs.com/package/canvas-confetti

class ConfettiWebcomp extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    // const confetti = document.createElement(`canvas-confetti`);
    // this.appendChild(confetti);

    const button = document.createElement('button');
    button.textContent = `Confetti!`;
    button.classList.add('fire-confetti')
    button.addEventListener(`click`, () => confetti());

    const container = document.createElement(`div`);
    container.style.width = '100%';
    container.style.height = '100vh';
    container.style.display = 'flex';
    container.style.flexFlow = 'column nowrap';
    container.style.alignItems = 'center';
    container.style.justifyContent = 'center';
    container.appendChild(button);

    this.appendChild(container);

    confetti();
  }
}

customElements.define('confetti-webcomp', ConfettiWebcomp);
