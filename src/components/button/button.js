import { LitElement, html, css } from 'lit';

class Button extends LitElement {
    static get properties() {
        return {
            text: { type: String, attribute: true }
        }
    }
    constructor() {
        super();
        this.text = "Save";
    }

    static get styles() {
        return css`
        :host {
            display: inline-block;
        }

        button {
            background-color: green;    
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            font-weight: bold;
            transition: background-color 0.3s ease, transform 0.1s ease;
        }

        button:hover {
            background-color: #218838;
        }

        button:active {
            transform: scale(0.98);
        }
        `
    }

    mouseDownListener(event) {
        this.button.style.backgroundColor = "red";
    }

    mouseUpListener(event) {
        this.button.style.backgroundColor = "green";
    }

    firstUpdated() {
        this.button = this.shadowRoot.querySelector('button');
    }

    render() {
        return html`<button @mousedown="${this.mouseDownListener}" @mouseup="${this.mouseUpListener}">${this.text}</button>`
    }

}

window.customElements.define('wc-button', Button); 