import { Injectable } from '@angular/core';
import {Material} from "../models/Material";

@Injectable({
  providedIn: 'root'
})
export class MaterialService {
listadoMaterial: Material[] = [
  {id:1,nombre:"Lapiz",descripcion:"Se usa para pintar",precio:1},
  {id:2,nombre:"Cuaderno",descripcion:"Para poner tus apuntes",precio:5},
  {id:3,nombre:"Calcualdora",descripcion:"Maquina para hacer calculos",precio:10},
  {id:4,nombre:"Pack reglas",descripcion:"Escuadra y cartabon",precio:6}
]
  constructor() { }
}
