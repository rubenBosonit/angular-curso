import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root', //así el servicio será global para toda la aplicación
})
export class GifsService {
  private apiKey: string = 'MqZEG6EFCJsST0q5OqumvS6I1CPnyTDZ';
  private servicioUrl: string = 'https://api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return [...this._historial];
  }

  constructor(private http: HttpClient) {
    //Los constructores de los servicios solo se van a
    //ejecutar una vez porque trabajan como si fueran un Singleton
    // if (localStorage.getItem('historial')) {
    //   this._historial = JSON.parse(localStorage.getItem('historial')!);
    // }
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('ultimaBusqueda')!) || [];
  }

  buscarGifs(query: string = '') {
    query = query.trim().toLowerCase();
    if (!this._historial.includes(query)) {
      this._historial.unshift(query);
      this._historial = this._historial.splice(0, 10);

      localStorage.setItem('historial', JSON.stringify(this._historial));
    }

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(`${this.servicioUrl}/search?${params}`)
      .subscribe((resp) => {
        this.resultados = resp.data;
        localStorage.setItem('ultimaBusqueda', JSON.stringify(this.resultados));
      });

    // fetch(
    //   'https://api.giphy.com/v1/gifs/search?api_key=MqZEG6EFCJsST0q5OqumvS6I1CPnyTDZ&q=dragon ball z&limit=10'
    // ).then((resp) => {
    //   resp.json().then((data) => console.log(data));
    // });
  }
}
