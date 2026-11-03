import { LitElement, html, css } from "lit-element";

class Register extends LitElement {
    static get properties() {
        return {
            servicio: { type: String },
            categoria: { type: String },
            precio: { type: Number },
        };
    }

    static get styles() {
        return css`
            :host {
                display: block;
                margin-bottom: 24px;
                color-scheme: light;
                font-family: system-ui, sans-serif;
            }
            form {
                background: #ffffff;
                border: 1px solid #cfd8e3;
                border-radius: 12px;
                padding: 24px;
                max-width: 520px;
                margin: auto;
                box-shadow: 0 4px 16px -2px rgba(20, 40, 70, 0.08);
            }
            fieldset {
                border: none;
                padding: 0;
                margin: 0;
            }
            legend {
                font-size: 1.25rem;
                font-weight: 700;
                color: #1f3a5f;
                margin-bottom: 20px;
            }
            div {
                display: grid;
                grid-template-columns: 110px 1fr;
                align-items: center;
                gap: 12px;
                margin-bottom: 16px;
            }
            label {
                font-weight: 600;
                color: #1f2937;
            }
            input,
            select {
                width: 100%;
                box-sizing: border-box;
                padding: 10px 14px;
                border: 1px solid #cfd8e3;
                border-radius: 8px;
                background: #ffffff;
                color: #1f2937;
                font-size: 0.95rem;
                outline: none;
            }
            input:focus,
            select:focus {
                border-color: #2f6fed;
                box-shadow: 0 0 0 3px rgba(47, 111, 237, 0.2);
            }
            button {
                width: 100%;
                padding: 12px;
                border: none;
                border-radius: 8px;
                background: #1f3a5f;
                color: #ffffff;
                font-size: 1rem;
                font-weight: 600;
                cursor: pointer;
            }
            button:hover {
                background: #2f6fed;
            }
        `;
    }

    constructor() {
        super();
        this.servicio = this.categoria = this.precio = "";
    }

    handler(name) {
        return (event) => {
            this[name] = event.target.value;
        };
    }

    register(event) {
        event.preventDefault();
        let data = {
            servicio: this.servicio,
            categoria: this.categoria,
            precio: Number(this.precio),
        };
        this.dispatchEvent(
            new CustomEvent("serviceRegister", {
                detail: data,
                bubbles: true,
                composed: true,
            })
        );
        this.servicio = this.categoria = this.precio = "";
    }

    render() {
        return html`
      <form @submit="${this.register}">
        <fieldset>
          <legend>Registro de servicio tecnológico</legend>

          <div>
            <label for="servicio">Servicio:</label>
            <input
              @input="${this.handler("servicio")}"
              .value="${this.servicio}"
              type="text"
              id="servicio"
              name="servicio"
              placeholder="Ej: Soporte técnico remoto"
              required
            />
          </div>

          <div>
            <label for="categoria">Categoría:</label>
            <select
              @change="${this.handler("categoria")}"
              .value="${this.categoria}"
              id="categoria"
              name="categoria"
              required
            >
              <option value="" disabled>Seleccione...</option>
              <option>Soporte técnico</option>
              <option>Desarrollo web</option>
              <option>Redes</option>
              <option>Seguridad</option>
              <option>Nube</option>
            </select>
          </div>

          <div>
            <label for="precio">Precio (USD):</label>
            <input
              @input="${this.handler("precio")}"
              .value="${this.precio}"
              type="number"
              id="precio"
              name="precio"
              min="0"
              step="0.01"
              required
            />
          </div>

          <button type="submit">Registrar servicio</button>
        </fieldset>
      </form>
    `;
    }
}

window.customElements.define("wc-form-register", Register);
