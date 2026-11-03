import { LitElement, html, css } from 'lit-element';

class Table extends LitElement {
    static get styles() {
        return css`
            :host {
                display: block;
                max-width: 520px;
                margin: 0 auto;
                font-family: system-ui, sans-serif;
            }
            h1 {
                font-size: 1.5rem;
                color: #1f3a5f;
                text-align: center;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                background: #ffffff;
                color: #1f2937;
                border: 1px solid #cfd8e3;
                border-radius: 12px;
                overflow: hidden;
            }
            th {
                background: #1f3a5f;
                color: #ffffff;
                text-align: left;
            }
            th,
            td {
                padding: 10px 14px;
            }
            tbody tr:nth-child(even) {
                background: #f3f6fa;
            }
        `;
    }

    constructor() {
        super();
        this.studentList = [];
    }
    render() {
        return html`
            <h1>Listado de estudiantes</h1>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Edad</th>
                    </tr>
                </thead>
                <tbody>
                    ${(this.studentList || []).map((student) => {
                        return html` <tr>
                            <td>${student.name}</td>
                            <td>${student.lastName}</td>
                            <td>${student.age}</td>
                        </tr>`;
                    })}
                </tbody>
            </table>
        `;
    }
}

window.customElements.define('wc-table', Table);