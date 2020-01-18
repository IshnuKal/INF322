/**
@license
Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/* En este archivo se escriben las aciones que serán llamadas por la vista, en general se debería obtener
 * datos de una API, pero acá, como ejemplo están escritos directamente. */

import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { RootState } from '../store.js';
import { DatosPersonales} from '../reducers/datospersonales';
export const GET_DATOS = 'GET_DATOS';

export interface ActionGetDatos extends Action<'GET_DATOS'> {datos: DatosPersonales};
export type DatosAction = ActionGetDatos;

type ThunkResult = ThunkAction<void, RootState, undefined, DatosAction>;

const DATOS_LISTA =
[ {
    "id" : 1,
    "Nombre": "Negro Matapacos",
    "RUT": '77.777.777-7',
    "Fecha de nacimiento": '1/07/1996',
    "Celular": 123456789 ,
    "Sexo": "Si",
    "Nacionalidad": "Chilena"
    },
  { 
    "id" : 2,
    "RUT": '66.666.666-6',
    "Nombre": "Negron Matamilicos"
    }
  ];

export const getAllDatos: ActionCreator<ThunkResult> = () => (dispatch) => {
  const datos = DATOS_LISTA.reduce((obj, dato) => {
    obj[dato.id] = dato;
    return obj
  }, {} as DatosPersonales);

  dispatch({
    type: GET_DATOS,
    datos
  });
};
