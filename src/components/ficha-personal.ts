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
 
  @property({type: Boolean})
  private _edit : boolean = false;
 
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
    ${this._edit ? html`
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
      <button @click="${() => {this._edit = !this._edit}}">
        Toggle
      </button>
      
      
      ` : html`
    <style>
    th {
      align: left;
    }
  </style>
  <h2>Editar</h2>
  <table>
    <tbody  align="left">
      <tr>
        <th>Nombre Completo ${this.datos[1].infPersonal.nombre} </th>  
      </tr>
      <tr>
        <th>RUT: ${this.datos[1].infPersonal.rut} </th>
        <th>Sexo: ${this.datos[1].infPersonal.sexo} </th>
      </tr>
      <tr>
        <th>Fecha de nacimiento: ${this.datos[1].infPersonal.fechaNacimiento}</th>
        <th>Estado Civil: 
          <select name="estadocivil">
            <option value="Casado" selected>Casado</option> 
            <option value="Soltero">Soltero</option>
            <option value="Viudo">Viudo</option>
            <option value="Separado">Separado</option>
            <option value="Divorciado">Divorciado</option>
            <option value="ConvivienteCivil">Conviviente Civil</option>
          </select>
        </th>
      </tr>
      <tr>
        <th>Pasaporte: <input type="text" value=${this.datos[1].infPersonal.pasaporte} id="pasaporte" name="pasaporte" placeholder="Ingrese pasaporte"></input> </th>
        <th>Nacionalidad: ${this.datos[1].infPersonal.nacionalidad}</th>
      </tr>
      <tr>
        <th>Celular: <input type="text" id="celular" name="celular" placeholder="Ingrese número" value=${this.datos[1].infPersonal.celular}> </th>
        <th>Prevision: 
            <select name="prevision">
              <option value="8">Aetna</option>
              <option value="2">Banmedica</option>
              <option value="13">CAPREDENA</option>
              <option value="26">Chuquicamata</option>
              <option value="22">CIGNA</option>
              <option value="6">Colmena</option>
              <option value="12">Compensación</option>
              <option value="5">Consalud</option>
              <option value="1">Cruz Blanca</option>
              <option value="15">DIPRECA</option>
              <option value="17">DISTEL</option>
              <option value="25">Esfera</option>
              <option value="14">FERROSALUD</option>
              <option value="4" selected>Fonasa</option>
              <option value="11">Fundación</option>
              <option value="20">FUSAT</option>
              <option value="27">ING</option>
              <option value="24">Isamérica</option>
              <option value="18">MAS VIDA</option>
              <option value="21">NAVAL</option>
              <option value="7">Promepart</option>
              <option value="19">RIOBLANCO</option>
              <option value="28">San Lorenzo</option>
              <option value="9">Sigma</option>
              <option value="23">Sin Previsión</option>
              <option value="29">SISAE</option>
              <option value="30">SISAN</option>
              <option value="16">UNIMED</option>
              <option value="10">Vida Plena</option>
              <option value="3">Vida Tres</option>
          </select>
        </th>
      </tr>
      <tr>
        <th>Email: ${this.datos[1].infPersonal.email}</th>
        <th>Matrícula Militar: ${this.datos[1].infPersonal.matriculaMilitar}</th>
      </tr>
      <tr>
        <th>Grupo Sanguineo: ${this.datos[1].infPersonal.grupoSanguineo}</th>
        <th>N° Hijos: <input type="text" id="hijos" name="hijos" placeholder="Ingrese número de hijos" value=${this.datos[1].infPersonal.numHijos}></th>
      </tr>
    </tbody>
  </table>
      <button @click="${() => {this._edit = !this._edit}}">
        Toggle
      </button>
    `}
    `;
 
  }
}



