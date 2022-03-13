import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, Inject, Input, OnInit, Renderer2, ViewChild } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Geolocation } from '@capacitor/geolocation';
import { ModalController } from '@ionic/angular';
import { LocationService } from '../../services/location.service';

declare var google: any;

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss'],
})
export class LocationComponent implements OnInit {
  
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
  
  @ViewChild('map') divMap:ElementRef;

  title = 'angularCapacitor'; 
  image = '';

  constructor(private renderer: Renderer2, 
    @Inject(DOCUMENT) private document, 
    private localService: LocationService,
    public modalController: ModalController) {  }

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

    // this.clickHandleEvent();

    // this.infowindow = new google.maps.InfoWindow();
    // if(this.label.title.length){
    //   this.addMarker(position);
    //   this.setInfoWindow(this.marker, this.label.title, this.label.subtitle);
    // }

  }

  clickHandleEvent(){

  }

///**** CAPTURE IMAGE */
  
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
