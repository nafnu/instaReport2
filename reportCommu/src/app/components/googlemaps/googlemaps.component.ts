import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { GooglemapsService } from 'src/app/components/googlemaps/googlemaps.service';

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {

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
}