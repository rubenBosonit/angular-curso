import { Injectable } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Injectable()
export class DbzService {
  private _personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15000,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
    {
      nombre: 'Bills',
      poder: 80000000,
    },
  ];

  get personajes(): Personaje[] {
    //En JavaScript los objetos se mandan por referencia
    //Para evitar la manipulación inintencionada del objeto
    //se enviará de la siguiente forma:
    return [...this._personajes];
  }

  constructor() {}

  agregarPersonaje(personaje: Personaje) {
    this._personajes.push(personaje);
  }
}
