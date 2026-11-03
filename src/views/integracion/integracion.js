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
    const name = String(detail.name ?? "").trim();
    const lastName = String(detail.lastName ?? "").trim();
    const age = Number(detail.age);
    // Datos inesperados: no se agrega una fila rota a la tabla
    if (!name || !lastName || detail.age === "" || Number.isNaN(age)) {
      console.warn("[wc-integracion] detail incompleto, se ignora:", detail);
      return;
    }
    const fila = { name, lastName, age };
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
