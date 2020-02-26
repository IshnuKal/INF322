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
import '@polymer/paper-card/paper-card.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/iron-image/iron-image.js';
import '@polymer/paper-input/paper-input.js';
 
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
    ${!this._edit ? html`
    <style>
      th {
        align-text: left;
      }
      paper-card{
        width: auto;
        margin: auto;
      }
      div.card-content {
        margin-left: 20px;
        margin-right: 20px;
      }
      .paper-button{
        color: red;
        background: blue;
      }
      .paper-button:hover{
        color: blue;
        background: red;
      }
    </style>
    <paper-card heading="Datos Personales" elevation="3" alt="datos_personales">
      <div class="card-content">
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
        <paper-button @click="${() => {this._edit = !this._edit}}">
          Editar
        </paper-button>
      </div>
    </paper-card>
      
      
      ` : html`
    <style>
      th {
        align: left;
      }
      paper-card{
        width: auto;
        margin: auto;
      }
      div.card-content {
        margin-left: 20px;
        margin-right: 20px;
      }
      .body {
        position: relative;
        font-family:
          'Roboto','Helvetica','Arial',sans-serif;
      }
      
      .wrap {
        position: absolute;
        right: 0;
        top: 40%;
        width: 350px;
        left: 0;
        margin: 0 auto;
      }
      
      /* select starting stylings ------------------------------*/
      .select {
        font-family:
          'Roboto','Helvetica','Arial',sans-serif;
        position: relative;
        width: 350px;
        border:1px solid black;
        border-radius: 5px;
      }
      
      .select-text {
        position: relative;
        font-family: inherit;
        background-color: transparent;
        width: 350px;
        padding: 10px 10px 10px 10px;
        font-size: 18px;
        border-radius: 0;
        border: none;
        border-bottom: 1px solid rgba(0,0,0, 0.12);
      }
      
      /* Remove focus */
      .select-text:focus {
        outline: none;
        border-bottom: 1px solid rgba(0,0,0, 0);
      }
      
        /* Use custom arrow */
      .select .select-text {
        appearance: none;
        -webkit-appearance:none
      }
      
      .select:after {
        position: absolute;
        top: 18px;
        right: 10px;
        /* Styling the down arrow */
        width: 0;
        height: 0;
        padding: 0;
        content: '';
        border-left: 6px solid transparent;
        border-right: 6px solid transparent;
        border-top: 6px solid rgba(0, 0, 0, 0.12);
        pointer-events: none;
      }
      
      
      /* LABEL ======================================= */
      .select-label {
        color: rgba(0,0,0, 0.26);
        font-size: 18px;
        font-weight: normal;
        position: absolute;
        pointer-events: none;
        left: 10px;
        top: 10px;
        transition: 0.2s ease all;
      }
      
      /* active state */
      .select-text:focus ~ .select-label, .select-text:valid ~ .select-label {
        color: #2F80ED;
        background-color: white;
        padding-left: 10px;
        padding-right: 10px;
        top: -9px;
        transition: 0.2s ease all;
        font-size: 14px;
      }
      
      /* BOTTOM BARS ================================= */
      .select-bar {
        position: relative;
        display: block;
        width: 350px;
      }
      
      .select-bar:before, .select-bar:after {
        content: '';
        height: 2px;
        width: 0;
        bottom: 1px;
        position: absolute;
        background: #2F80ED;
        transition: 0.2s ease all;
        
      }
      
      .select-bar:before {
        left: 50%;
      }
      
      .select-bar:after {
        right: 50%;
      }
      
      /* active state */
      .select-text:focus ~ .select-bar:before, .select-text:focus ~ .select-bar:after {
        width: 50%;
      }
      
      /* HIGHLIGHTER ================================== */
      .select-highlight {
        position: absolute;
        height: 60%;
        width: 100px;
        top: 25%;
        left: 0;
        pointer-events: none;
        opacity: 0.5;
      }
  </style>
  <paper-card heading="Editar Datos" elevation="3" alt="editar_datos">
    <div class="card-content">
      <table>
        <tbody  align="left">
          <tr>
            <th>
              <div class="select">
                <select class="select-text" name="estadocivil" required>
                  <option value="Casado" selected>Casado</option> 
                  <option value="Soltero">Soltero</option>
                  <option value="Viudo">Viudo</option>
                  <option value="Separado">Separado</option>
                  <option value="Divorciado">Divorciado</option>
                  <option value="ConvivienteCivil">Conviviente Civil</option>
                </select>
                <span class="select-highlight"></span>
                <span class="select-bar"></span>
                <label class="select-label">Estado Civil</label>
				      </div>
            </th>
            <th> 
              <div class="select">
                <select class="select-text" name="prevision" required>
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
                <span class="select-highlight"></span
                <span class="select-bar"></span>
                <label class="select-label">Prevision</label>
              </div>
            </th>
          <tr>
            <th><paper-input label="Celular" id="celular" name="celular" value=${this.datos[1].infPersonal.celular}> </th>
            <th><paper-input label="Pasaporte" value=${this.datos[1].infPersonal.pasaporte} id="pasaporte" name="pasaporte"> </th>
          </tr>
          <tr>
            <th><paper-input label="N° de Hijos" type="text" id="hijos" name="hijos" value=${this.datos[1].infPersonal.numHijos}></th>
          </tr>
        </tbody>
      </table>
      <paper-button @click="${() => {this._edit = !this._edit}}">
        Aplicar Cambios
      </paper-button>
    </div>
  </paper-card>
    `}
    `;
 
  }
}



