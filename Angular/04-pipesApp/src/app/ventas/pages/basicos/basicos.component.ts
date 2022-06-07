import { Component } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [],
})
export class BasicosComponent {
  nombreLower: string = 'rubén';
  nombreUpper: string = 'RUBÉN';
  nombreCompleto: string = 'RubÉn PlaZaS';
  fecha: Date = new Date();
}
