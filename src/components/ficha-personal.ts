/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

import { LitElement, html, css, property, customElement } from 'lit-element';
import { connect } from 'pwa-helpers/connect-mixin.js';
import { store } from '../store.js';
import { ButtonSharedStyles } from './button-shared-styles.js';
import { DatosPersonales } from '../reducers/datospersonales';

@customElement('ficha-personal')
export class FichaPersonal extends connect(store)(LitElement) {
  @property({type: Object})
  public datos: DatosPersonales = {};

  static get styles() {
    return [
      ButtonSharedStyles,
      css`
        :host {
            display: block;
        }
        .left{
            text-align: left;
        }
      `
    ];
  }
  
  handleClick() {
    console.log(this.datos);
  }

  protected render() {
    return html`
    <style>
      th {
        align: left;
      }
    </style>
    <h2>Datos Personales</h2>
    <table>
      <tbody  align="left">
        <tr>
          <th>Nombre Completo: ${this.datos[1].infPersonal.nombre} </th>  
        </tr>
        <tr>
          <th>RUT: ${this.datos[1].infPersonal.rut} </th> 
          <th>Sexo: ${this.datos[1].infPersonal.sexo} </th>
        </tr>
        <tr>
          <th>Fecha de nacimiento: ${this.datos[1].infPersonal.fechaNacimiento}</th> 
          <th>Estado Civil: ${this.datos[1].infPersonal.estadoCivil}</th>
        </tr>
        <tr>
          <th>Pasaporte: ${this.datos[1].infPersonal.pasaporte}</th>
          <th>Nacionalidad: ${this.datos[1].infPersonal.nacionalidad}</th>
        </tr>
        <tr>
          <th>Celular: ${this.datos[1].infPersonal.celular}</th>
          <th>Prevision: ${this.datos[1].infPersonal.prevision}</th>
        </tr>
        <tr>
          <th>Email: ${this.datos[1].infPersonal.email}</th>
          <th>Matrícula Militar: ${this.datos[1].infPersonal.matriculaMilitar}</th>
        </tr>
        <tr>
          <th>Grupo Sanguineo: ${this.datos[1].infPersonal.grupoSanguineo}</th> 
          <th>N° Hijos: ${this.datos[1].infPersonal.numHijos}</th>
        </tr>
      </tbody>
    </table>


    `;
  
  }
}
