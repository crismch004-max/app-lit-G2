import { LitElement, html, css } from 'lit-element';

class Table extends LitElement {
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