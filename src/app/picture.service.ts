import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PictureService {
  obtenerImagen() {
    throw new Error('Method not implemented.');
  }
  obtenerTitulo(): string {
    throw new Error('Method not implemented.');
  }
  guardarTitulo(tituloTarjeta: string) {
    throw new Error('Method not implemented.');
  }
  private imagenesTomadas: any[] = [];

  constructor() {}

  guardarImagen(imagen: any) {
    this.imagenesTomadas.push(imagen);
  }

  obtenerImagenes(): any[] {
    return this.imagenesTomadas;
  }
}
