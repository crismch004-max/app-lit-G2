import { LitElement, html } from "lit-element";
import "../../externos/equipo-3/register.js"; // formulario del otro equipo
import "../home/table.js"; // tabla de nuestro equipo

class Integracion extends LitElement {
  static get properties() {
    return {
      lista: { type: Array },
    };
  }

  constructor() {
    super();
    this.lista = [];
  }

  // Adaptador: convierte el detail del otro equipo al formato de nuestra tabla
  agregar(event) {
    const detail = event.detail || {};
    const fila = {
      name: detail.name,
      lastName: detail.lastName,
      age: Number(detail.age),
    };
    // Arreglo nuevo: así Lit detecta el cambio y vuelve a renderizar
    this.lista = [...this.lista, fila];
  }

  render() {
    return html`
      <wc-form-register @personRegister="${this.agregar}"></wc-form-register>
      <wc-table .studentList="${this.lista}"></wc-table>
    `;
  }
}

window.customElements.define("wc-integracion", Integracion);
