import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ModalController } from '@ionic/angular';
import { LocationService } from '../../services/location.service';

declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  
   //@ViewChild('map') divMap:ElementRef;
   @ViewChild('Map', {static: false}) divMap: ElementRef;

  @Input() position = {
    lat:53.350140,
    lng:-6.266155
  };
  
  label = { 
    title:'My current location',
    subtitle: 'Incident location'
  }

  map: any;
  marker: any;
  infowindow: any; 
  positionSet: any;
  

  constructor(private renderer: Renderer2, 
    @Inject(DOCUMENT) private document, 
    private localService: LocationService,
    public modalController: ModalController,
    public geolocation: Geolocation) { 
     }

  ngOnInit(): void {
    this.init();
  }

  async init(){

    this.localService.init(this.renderer, this.document).then( () => {
      this.initMap();
    }).catch( (err) => {
      console.log(err);
    });
  }

  initMap(){

    const position = this.position;

    let latLng = new google.maps.LatLng(position.lat, position.lng);

    let mapOptions = {
      center: latLng, 
      zoom:15, 
      disableDefaultUI: false, 
      clickableIcons: false
    };

    this.map = new google.maps.Map(this.divMap.nativeElement.mapOptions);

    this.marker = new google.maps.Marker({
        map: this.map, 
        animation: google.maps.Animation.DROP,
        draggable: true,
    });

    this.clickHandleEvent();

    this.infowindow = new google.maps.InfoWindow();
    if(this.label.title.length){
      this.addMarker(position);
      this.setInfoWindow(this.marker, this.label.title, this.label.subtitle);
    }

  }

  clickHandleEvent(){

    this.map.addLister('click', (event: any) => {
      const position = {
        lat: event.latLng.lat(),
        lng: event.latLng.lng(),
      };
      this.addMarker(position);
    });

  }

  addMarker(position: any): void {
    let latLng = new google.maps.LatLng(position.lat, position.lng);

    this.marker.setPosition(latLng);
    this.map.panTo(position);
    this.positionSet = position;
  }

  setInfoWindow(marker: any, title: string, subtitle: string){
    const contentString = '<div id="contentInsideMap">' +
                          '<div>'+
                          '</div>' +
                          '<p style="font-wight: bold; margin-bottom: 5px;">'
                          '<div id="bodyContent">' +
                          '<p class="normal m-0">'
                          + subtitle + '</p>' +
                          '</div>' +
                          '</div>';
    this.infowindow.setContent(contentString);
    this.infowindow.open(this.map, marker);
}

async mylocation(){
  console.log('mylocation() click')

        /*Get Current location*/
        this.geolocation.getCurrentPosition().then((position) =>  {
          this.position.lat = position.coords.latitude;
          this.position.lng = position.coords.longitude;
          this.addMarker(position);
      });
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
