import { Component, OnInit } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { NavController } from '@ionic/angular';
import { PictureService } from '../picture.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  imagenParaMostrar: any;

  constructor(
    private navCtrl: NavController,
    private pictureService: PictureService
  ) {}

  ngOnInit(): void {
    Camera.requestPermissions();
    this.getLastImage();
  }

  async getPicture() {
    const imagenTomada = await Camera.getPhoto({
      quality: 90,
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera
    });
    if (imagenTomada) {
      this.pictureService.guardarImagen(imagenTomada);
      this.imagenParaMostrar = imagenTomada.webPath;
      // Guardar en el almacenamiento local
      localStorage.setItem('lastImage', this.imagenParaMostrar);
    }
  }

  getLastImage() {
    const lastImage = localStorage.getItem('lastImage');
    if (lastImage) {
      this.imagenParaMostrar = lastImage;
    }
  }

  goToGallery() {
    this.navCtrl.navigateForward('/galeria');
  }
}
