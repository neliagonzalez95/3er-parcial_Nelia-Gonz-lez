class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Nelia Jazmín González Aguilar.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
