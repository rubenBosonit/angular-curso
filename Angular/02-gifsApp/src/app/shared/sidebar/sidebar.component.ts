import { Component } from '@angular/core';
import { GifsService } from 'src/app/gifs/services/gifs.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
})
export default class SidebarComponent {
  constructor(private gifsService: GifsService) {}

  get historial() {
    return this.gifsService.historial;
  }

  buscar(consulta: string) {
    this.gifsService.buscarGifs(consulta);
  }
}
