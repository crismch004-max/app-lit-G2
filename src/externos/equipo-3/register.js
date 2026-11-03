// PLACEHOLDER: reemplazar por la copia EXACTA del register.js del otro equipo
// (commit fijado). Solo sirve para probar el flujo mientras no se copia el real.
import { LitElement, html } from "lit-element";

class Register extends LitElement {
  submit(event) {
    event.preventDefault();
    const f = event.target;
    this.dispatchEvent(
      new CustomEvent("personRegister", {
        detail: {
          name: f.nombre.value,
          lastName: f.apellido.value,
          age: f.edad.value,
        },
        bubbles: true,
        composed: true,
      })
    );
    f.reset();
  }

  render() {
    return html`
      <form @submit="${this.submit}">
        <input name="nombre" placeholder="Nombre" required />
        <input name="apellido" placeholder="Apellido" required />
        <input name="edad" type="number" min="0" placeholder="Edad" required />
        <button type="submit">Registrar</button>
      </form>
    `;
  }
}

window.customElements.define("wc-form-register", Register);
