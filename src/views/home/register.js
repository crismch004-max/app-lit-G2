import { LitElement, html, css } from "lit-element";
class Register extends LitElement {
    static get properties() {
        return {
            name: { type: String },
            lastName: { type: String },
            age: { type: Number },
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
            input {
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
            input:focus {
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
        this.name = this.lastName = this.age = "";

    }

    handler(name) {
        return (event) => {
            let value = event.target.value;
            this[name] = value;

        }
    }

    register(){
        let data = {
            name: this.name,
            lastName: this.lastName,
            age: this.age
        }
        console.log(data);
    }

    render() {
        return html`
      <form action="#" method="post">
        <fieldset>
          <legend>Registro de usuario</legend>
 
          <div>
            <label for="nombre">Nombre:</label>
            <input
            @input="${this.handler('name')}"
              .value="${this.name}"
              type="text"
              id="nombre"
              name="nombre"
              required
            />
          </div>
 
          <div>
            <label for="apellido">Apellido:</label>
            <input
            @input="${this.handler('lastName')}"
              .value="${this.lastName}"
              type="text"
              id="apellido"
              name="apellido"
              required
            />
          </div>
 
          <div>
            <label for="edad">Edad:</label>
            <input
            @input="${this.handler('age')}"
              .value="${this.age}"
              type="number"
              id="edad"
              name="edad"
              min="0"
              required
            />
          </div>
 
          <button type="submit">Registrar</button>
        </fieldset>
      </form>
    `;
    }
}
window.customElements.define('wc-form-register', Register);
