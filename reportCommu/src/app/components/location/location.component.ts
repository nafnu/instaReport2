import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { LocationService } from '../../services/location.service';

import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  
   @ViewChild('map') mapView:ElementRef;
  
  constructor() { }

  ngOnInit() { }

  ionViewDidEnter(){
    this.createMap();
  }

  createMap(){
    const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
    console.log("createMap", boundingRect)

    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      latitude: 53.350140,
      longitude: -6.266155,
      zoom: 5
    })
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
