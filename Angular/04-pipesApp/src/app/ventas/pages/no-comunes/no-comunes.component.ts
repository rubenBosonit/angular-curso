import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [],
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = 'Rubén';
  genero: string = 'masculino';
  invitacionMapa = {
    masculino: 'invitarlo',
    femenino: 'invitarla',
  };
  //i18nPlural
  clientes: string[] = ['María', 'Pedro', 'Rubén', 'Pepe', 'Carlos'];
  clientesMapa = {
    '=0': 'no tenemos ningún cliente esperando. ',
    '=1': 'tenemos 1 clientes esperando.',
    other: 'tenemos # clientes esperando.',
  };

  cambiarCliente() {
    this.nombre = 'Marta';
    this.genero = 'femenino';
  }
  borrarCliente() {
    this.clientes.pop();
    console.log(this.clientes);
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Fernando',
    edad: 35,
    direccion: 'Ottawa, Canadá',
  };

  //JsonPipe
  heroes = [
    {
      nombre: 'Superman',
      value: true,
    },
    {
      nombre: 'Robin',
      value: false,
    },
    {
      nombre: 'Aquaman',
      value: false,
    },
  ];

  //Async Pipe
  //Un observable se va a ejecutar hasta que tenga una suscripción
  miObservable = interval(5000); //0,1,2,3,4,5,6,7,...

  valorPromesa = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data de promesa');
    }, 3500);
  });
}
