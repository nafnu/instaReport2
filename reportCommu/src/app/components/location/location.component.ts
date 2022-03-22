import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
//import { GooglemapsService } from 'src/app/components/googlemaps/googlemaps.service';

import { Report } from 'src/app/models/models';

//import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { GooglemapsComponent } from 'src/app/components/googlemaps/googlemaps.component';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  
  report: Report = {
    uid: '',
    idRep: '',
    location: null,
    imagen: null,
    idfield: '', 
    description: '',
    authority: '',
}


   @ViewChild('map') mapView:ElementRef;
  
  constructor(public modalCtrl: ModalController,) { }

  ngOnInit() { }

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

async addLocation(){

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
    cssClass:'small-modal'
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


  

///**** CAPTURE IMAGE */
  
title = 'angularCapacitor'; 
image = '';

async captureImage(){
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Prompt,
      resultType: CameraResultType.Base64
    });
  }

  if(image){
    this.image = `data:image/jpeg;base64,${image.base64}`!;
  }
  
}
