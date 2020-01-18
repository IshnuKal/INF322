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
[{ 
  "id":1,

  "infPersonal":
  {
    "id" : 1,
    "nombre": "Negro Matapacos",
    "rut": '77.777.777-7',
    "fechaNacimiento": '1/07/1996',
    "pasaporte": "" ,
    "celular": 123456789 ,
    "email": "matapacos@gmail.com",
    "grupoSanguineo": "Rh- A",
    "sexo": "Masculino",
    "estadoCivil": "Casado",
    "nacionalidad": "Chilena",
    "prevision": "Fonasa",
    "matriculaMilitar": "",
    "numHijos": 60
    },

  "infApoderado": 
  { 
    "id" : 1,
    "rut": '66.666.666-6',
    "nombre": "Negro Matamilicos"
    },

  "infFamilia":
  { 
    "id" : 1,
    "direccion": "Avenida Los Melones",
    "comuna": "Melon",
    "telefono": 12345678,
    "ubicacion": "Hawaii",
    "fax": ""
    },

  "infPeriodoAcademico":
  { 
    "id": 1,
    "direccion": "Avenida Las Sandias",
    "comuna": "Sandia",
    "telefono": 12345678,
    "ubicacion": "Papua Nueva Guinea",
    "tipoDireccion": "Pension"
    },

  "infAcademica":
    {
    "id": 1,
    "carrera": "Ing. Civil Informatica",
    "situacionAcademica": "Regular",
    "ultimaPrioridad": 5000,
    "ultimaMatricula": "2019-2",
    "ingresoPregrado": 2015,
    "estadoCarrera": "Vigente",
    "rol": "201573xxx-x",
    "anioIngreso": 2015,
    "planCarrera": 7313,
    "situacionFinanciera": "Al dia",
    "fechaArancel": "01/01/2015"
    }
}];

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
