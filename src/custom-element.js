class MyFooter extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({mode: 'open'});
    const footer = document.createElement('footer');
    footer.textContent = 'Aulia Augusta, 2023';
    shadow.appendChild(footer);

    const style = document.createElement('style');
    style.textContent = `
      footer {
        background-color: #f8f8f8;
        padding: 10px;
        text-align: center;
      }
    `;
    shadow.appendChild(style);
  }
}

customElements.define('my-footer', MyFooter);
