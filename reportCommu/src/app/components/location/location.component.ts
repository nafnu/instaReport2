import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ModalController, LoadingController, AlertController } from '@ionic/angular';

//Imports to save the information in the database
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';


//Imports for the camera
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

//Imports for the map
import { GooglemapsComponent } from 'src/app/components/googlemaps/googlemaps.component';
import { loadingController } from '@ionic/core';
//import { GooglemapsService } from 'src/app/components/googlemaps/googlemaps.service';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {

  profile = null;
  
  @ViewChild('map') mapView: ElementRef;

  constructor(
    public modalCtrl: ModalController,
    public loadingController: LoadingController,
    public alertController: AlertController,
    private authService: AuthService,
    private db: DbService
  ) { 
    // this.authService.getUserProfile().subscribe(data => {
    //   this.profile = data;
    // })
  }

  ngOnInit() {  }



 ///**** CAPTURE IMAGE */

 title = 'angularCapacitor';
 image = '';

 async captureImage() {
   const image = await Camera.getPhoto({
     quality: 90,
     allowEditing: true,
     source: CameraSource.Prompt, //Camera, photos or prompt!
     resultType: CameraResultType.Base64,
   });

   console.log(image);

  //  if (image){
  //   const loading = await this.loadingController.create();
  //   await loading.present();

  //   const result = await this.db.uploadImage(image);
  //   loading.dismiss();

  //   if(!result){
  //     const alert = await this.alertController.create({
  //       header: 'Upload failed', 
  //       message: 'There was a problem uploading your image.', 
  //       buttons: ['OK'],
  //     });
  //     await alert.present();
  //   }
  //  }

 }

//  if(image) {
//    this.image = `data:image/jpeg;base64,${image.base64}`!;
//  }
  // ///**** GEOLOCATION WITH ERROR */
  //   ionViewDidEnter(){
  //     this.createMap();
  //   }

  //   createMap(){
  //     const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
  //     console.log("createMap", boundingRect)

  //     CapacitorGoogleMaps.create({
  //       width: Math.round(boundingRect.width),
  //       height: Math.round(boundingRect.height),
  //       x: Math.round(boundingRect.x),
  //       y: Math.round(boundingRect.y),
  //       latitude: 53.350140,
  //       longitude: -6.266155,
  //       zoom: 5
  //     })
  //   }

  async addLocation() {

    // const ubicacion = this.report.location;
    // let position = {
    //   lat: 53.34807,
    //   lng: -6.24827
    // };
    // if(ubicacion !== null){
    //   position = ubicacion;
    // }

    const modalAdd = await this.modalCtrl.create({
      component: GooglemapsComponent,
      cssClass: 'small-modal'
      // mode: 'ios',
      // swipeToClose: true, 
      // componentProps: {position} 
    });

    await modalAdd.present();

    // const {data} = await modalAdd.onWillDismiss();

    // if(data){
    //   console.log('data ->', data);
    //   this.report.location = data.pos;
    //   console.log('this.report ->', this.report);
    // }
  }




 

}
