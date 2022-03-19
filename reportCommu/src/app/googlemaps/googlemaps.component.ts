import { Component, OnInit, Input, Renderer2, ElementRef, Inject, ViewChild } from '@angular/core';
import { GooglemapsService } from './googlemaps.service';
import { ModalController } from '@ionic/angular';
//import { Plugins } from 'protractor/built/plugins';
import { Plugin } from '@capacitor/core' 
import { DOCUMENT } from '@angular/common';

//const {Geolocation} = Plugins;
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
    tittle:'Location', 
    subtitle:'The location of the incident'
  };

  map: any;
  marker: any;
  infowindow: any;
  positionSet: any;  //the variable to save the location

  @ViewChild('map') divMap: ElementRef; //refer were it will be open the map

  constructor(private renderer: Renderer2,
    @Inject(DOCUMENT)private document, 
    private googlemapsService: GooglemapsService, 
    public modalController: ModalController) { }

  ngOnInit(): void {
    this.init();
  }

  async init(){
    this.googlemapsService.init(this.renderer, this.document).then( () => {
      this.initMap();
    }).catch( (err) => {
      console.log(err);
    });
  }

  initMap(){
    const position = this.position;

    let latLng = new google.maps.LatLng(position.lat, position.lng);
    
  }
}
