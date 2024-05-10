import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  ngOnInit(): void {
    Camera.requestPermissions();
  }

  imagenParaMostrar: string = "";
  imagenTomada: any;  

  async getPicture() {
    this.imagenTomada = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    if (this.imagenTomada) {
      this.imagenParaMostrar = this.imagenTomada;
    }
  }  
}
