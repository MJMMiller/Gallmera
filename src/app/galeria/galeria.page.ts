import { Component, OnInit } from '@angular/core';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.page.html',
  styleUrls: ['./galeria.page.scss'],
})
export class GaleriaPage implements OnInit {

  imagenesParaMostrar: string[] = [];

  constructor(private pictureService: PictureService) {}

  ngOnInit() {
    this.imagenesParaMostrar = this.pictureService.obtenerImagenes().map(imagen => imagen.webPath);
  }
}
