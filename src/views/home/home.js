import { LitElement, html, css } from 'lit-element';
import './table.js';
import './register.js';

class Home extends LitElement {
    constructor() {
        super();
        this.studentList = [];
    }
    render() {
        return html`
        <wc-form-register></wc-form-register>  
            <wc-table .studentList="${this.studentList}"></wc-table>
        `;
    }
}

window.customElements.define('wc-home', Home);
