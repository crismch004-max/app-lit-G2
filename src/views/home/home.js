import { LitElement, html, css } from 'lit-element';
import './table.js';
import './register.js';

class Home extends LitElement {
    static get properties() {
        return {
            serviceList: { type: Array },
        };
    }

    constructor() {
        super();
        this.serviceList = [];
    }

    addService(event) {
        this.serviceList = [...this.serviceList, event.detail];
    }

    render() {
        return html`
        <wc-form-register @serviceRegister="${this.addService}"></wc-form-register>
        <wc-table .list="${this.serviceList}"></wc-table>
        `;
    }
}

window.customElements.define('wc-home', Home);
