import { LitElement, html, css } from 'lit-element';
import './table.js';
import './register.js';

class Home extends LitElement {
    constructor() {
        super();
        this.studentList = [
            { name: "Paulo", lastName: "Galarza", age: 30 },
            { name: "Julian", lastName: "Galarza", age: 2 },
            { name: "Karol", lastName: "Gilces", age: 27 },
            { name: "Karol", lastName: "Gilces", age: 27 }
        ];
    }
    render() {
        return html`
        <wc-form-register></wc-form-register>  
            <wc-table .studentList="${this.studentList}"></wc-table>
        `;
    }
}

window.customElements.define('wc-home', Home);
