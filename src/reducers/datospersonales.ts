/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/* Este es el reductor, acá se definen los tipos de datos, se le da forma al store y 
 * se define como las acciones lo modifican */

import { Reducer } from 'redux';
import {
  GET_DATOS
} from '../actions/datospersonales';
import { RootAction } from '../store.js';

export interface DatosState {
  datos: DatosPersonales;
}

export interface DatosPersonales {
  [index:string]: Bloque;
}

export interface Bloque {
  Nombre: String;
  RUT: String;
}

const INITIAL_STATE: DatosState = {
  datos: {},
};

const datos: Reducer<DatosState, RootAction> = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case GET_DATOS:
      return {
        ...state,
        datos: action.datos
      };
    default:
      return state;
  }
};

export default datos;
