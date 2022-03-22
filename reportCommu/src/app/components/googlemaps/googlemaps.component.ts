import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
//import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
//import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { GooglemapsService } from 'src/app/components/googlemaps/googlemaps.service';
import { Geolocation } from '@capacitor/geolocation';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {

  @ViewChild('map') mapView:ElementRef;
  
  constructor() { }
 
  ngOnInit() { }

  // ionViewDidEnter(){
  //   this.createMap();
  // }

  // createMap(){
  //   const boundingRect = this.mapView.nativeElement.getBoundingClientRect() as DOMRect;
  //   console.log("createMap", boundingRect)
  //   CapacitorGoogleMaps.create({
  //     width: Math.round(boundingRect.width),
  //     height: Math.round(boundingRect.height),
  //     x: Math.round(boundingRect.x),
  //     y: Math.round(boundingRect.y),
  //     // latitude: 53.350140,
  //     // longitude: -6.266155,
  //     zoom: 5
  //   });

  //   CapacitorGoogleMaps.addListener('onMapReady', async () => {
  //     CapacitorGoogleMaps.setMapType({
  //       type: 'hybrid'
  //     });

  //     //this.showCurrentPosition();
  //   });
  // }

  // showCurrentPosition(){
  //  Geolocation.requestPermissions().then(async permission => {
  //    const coordinates = await Geolocation.getCurrentPosition();

  //    CapacitorGoogleMaps.addMarker({
  //      latitude: coordinates.coords.latitude,
  //      longitude: coordinates.coords.longitude,
  //      title: 'Location',
  //      snippet: 'The location of the incident'
  //    });

  //    CapacitorGoogleMaps.setCamera({
  //     latitude: coordinates.coords.latitude,
  //     longitude: coordinates.coords.longitude,
  //     zoom: 12, 
  //     bearing: 0
  //    });

  //  });
  // }
}