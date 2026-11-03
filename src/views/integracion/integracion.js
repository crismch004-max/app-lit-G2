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
  // Equipo 3 emite { nombre, origen, precio, cantidad, total } (4 campos de entrada);
  // nuestra tabla de servicios espera { servicio, categoria, precio } (3 campos):
  //   nombre -> servicio, origen -> categoria, total (precio x cantidad) -> precio
  agregar(event) {
    const detail = event.detail || {};
    const servicio = String(detail.nombre ?? "").trim();
    const categoria = String(detail.origen ?? "").trim();
    const precio = Number(detail.total);
    // Datos inesperados: no se agrega una fila rota a la tabla
    if (!servicio || !categoria || detail.total === "" || Number.isNaN(precio)) {
      console.warn("[wc-integracion] detail incompleto, se ignora:", detail);
      return;
    }
    const fila = { servicio, categoria, precio };
    // Arreglo nuevo: así Lit detecta el cambio y vuelve a renderizar
    this.lista = [...this.lista, fila];
  }

  render() {
    return html`
      <wc-register @cafeRegister="${this.agregar}"></wc-register>
      <wc-table .list="${this.lista}"></wc-table>
    `;
  }
}

window.customElements.define("wc-integracion", Integracion);
