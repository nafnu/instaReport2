// import { Component, OnInit, Input, Renderer2, ElementRef, Inject, ViewChild } from '@angular/core';
// import { GooglemapsService } from './googlemaps.service';
// import { ModalController } from '@ionic/angular';
// //import { Plugins } from 'protractor/built/plugins';
// import { Plugin, Plugins } from '@capacitor/core'
// import { DOCUMENT } from '@angular/common';

// import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
// //import { Geolocation } from '@ionic-native/geolocation/ngx';   //** this is for phone */

// // const {Geolocation} = Plugins; //@deprecated //**** I FOUND THE UPDATED DOC ON IONIC */

import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@ionic-native/geolocation/ngx';
//import { Geolocation } from '@awesome-cordova-plugins/geolocation/ngx';
import { ModalController } from '@ionic/angular';
//import { LocationService } from '../../services/location.service';
import { CapacitorGoogleMaps } from '@capacitor-community/capacitor-googlemaps-native';
import { GooglemapsService } from 'src/app/components/googlemaps/googlemaps.service';

declare var google: any;

@Component({
  selector: 'app-googlemaps',
  templateUrl: './googlemaps.component.html',
  styleUrls: ['./googlemaps.component.scss'],
})
export class GooglemapsComponent implements OnInit {

  //Dublin coordanates - open this location by default.
  @Input() position = {
    lat: 53.34807,
    lng: -6.24827
  };

  //Message in the marker of infoWindow
  label = {
    tittle: 'Location',
    subtitle: 'The location of the incident'
  };

  map: any;
  marker: any;
  infowindow: any;
  positionSet: any;  //the variable to save the location

  @ViewChild('map') divMap: ElementRef; //refer were it will be open the map

  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT) private document,
    private googlemapsService: GooglemapsService,
    public modalController: ModalController,
    private geolocation: Geolocation) { }

  ngOnInit(): void {
    //this.init();
    this.initMap();
  }

  async init() {
    this.googlemapsService.init(this.renderer, this.document).then(() => {
      this.initMap();
    }).catch((err) => {
      console.log(err);
    });
  }

  initMap() {
    // const position = this.position;

    // let latLng = new google.maps.LatLng(position.lat, position.lng);

    // let mapOptions = {
    //   center: latLng,
    //   zoom: 15,
    //   disableDefaultUI: true,
    //   clickableIcons: false,
    // };

    //this.map = new google.map.Map(this.divMap.nativeElement, mapOptions);

    const boundingRect = this.divMap.nativeElement.getBoundingClientRect() as DOMRect;
    console.log("createMap", boundingRect)
    CapacitorGoogleMaps.create({
      width: Math.round(boundingRect.width),
      height: Math.round(boundingRect.height),
      x: Math.round(boundingRect.x),
      y: Math.round(boundingRect.y),
      latitude: 53.350140,
      longitude: -6.266155,
      zoom: 5
    });

  //   this.marker = new google.map.Marker({
  //     map: this.map,
  //     animation: google.maps.Animation.DROP,
  //     draggable: true, //posibilite to move the marker in the map in differents spotts
  //   });

  //   this.clickHandleEvent();

  //   this.infowindow = new google.maps.InfoWindow();

  //   if (this.label.tittle.length) {
  //     this.addMarker(position);
  //     this.setInfoWindow(this.marker, this.label.tittle, this.label.subtitle)
  //   }


  // }

  // clickHandleEvent() {
  //   this.map.addLister('click', (event: any) => {
  //     const position = {
  //       lat: event.latLng.lat(),
  //       lng: event.latLng.lng(),
  //     };
  //     this.addMarker(position); //save the position of the marker
  //   });
  }

  // addMarker(position: any): void {
  //   let latLng = new google.maps.LatLng(position.lat, position.lng);

  //   this.marker.setPosition(latLng);
  //   this.map.panTo(position);
  //   this.positionSet = position; //save the location in a variable
  // }

  // //the small window how discribe the marker
  // setInfoWindow(marker: any, title: string, subtittle: string) {
  //   const contentString = '<div id="contentInsideMap">' +
  //     '<div>' +
  //     '</div>' +
  //     '<p style="font-weight:bold, margin-bottom: 5px;">' + title + '</p>' +
  //     '<div id="bodyContent">' +
  //     '<p class="normal m-0">' +
  //     subtittle + '</p>' +
  //     '</div>' +
  //     '</div>';
  //   this.infowindow.setContent(contentString);
  //   this.infowindow.open(this.map, marker);
  // }

  // async mylocation() {

  //   console.log('mylocation() click');

  //   this.geolocation.getCurrentPosition().then((res) => {

  //     console.log('mylocation() => get' , res); //print if it is working

  //     const position = {
  //       lat: res.coords.latitude,
  //       lng: res.coords.longitude,
  //     }
  //     this.addMarker(position);

  //   }).catch((error) => {
  //     console.log('Error getting location', error);
  //   });

  //   let watch = this.geolocation.watchPosition();
  //   watch.subscribe((error) => {
  //     // data can be a set of coordinates, or an error (if an error occurred).
  //     // data.coords.latitude
  //     // data.coords.longitude
  //     console.log('Error getting location', error);
  //   });

  // }

  aceptar(){
    console.log('click aceptar -> ', this.positionSet);
    this.modalController.dismiss({pos: this.positionSet});
  }
}
