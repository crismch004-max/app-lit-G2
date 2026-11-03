import { LitElement, html } from "lit-element";
import "../../externos/equipo-3/register.js"; // formulario del otro equipo (<wc-register>)
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

  // Adaptador: convierte el detail del otro equipo al formato de nuestra tabla.
  // Equipo 3 emite { nombre, origen, precio, cantidad, total }; nuestra tabla
  // espera { name, lastName, age }.
  agregar(event) {
    const detail = event.detail || {};
    const name = String(detail.nombre ?? "").trim();
    const lastName = String(detail.origen ?? "").trim();
    const age = Number(detail.cantidad);
    // Datos inesperados: no se agrega una fila rota a la tabla
    if (!name || !lastName || detail.cantidad === "" || Number.isNaN(age)) {
      console.warn("[wc-integracion] detail incompleto, se ignora:", detail);
      return;
    }
    const fila = { name, lastName, age };
    // Arreglo nuevo: así Lit detecta el cambio y vuelve a renderizar
    this.lista = [...this.lista, fila];
  }

  render() {
    return html`
      <wc-register @cafeRegister="${this.agregar}"></wc-register>
      <wc-table .studentList="${this.lista}"></wc-table>
    `;
  }
}

window.customElements.define("wc-integracion", Integracion);
