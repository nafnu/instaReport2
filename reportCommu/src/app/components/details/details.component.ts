import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DbService, Type} from 'src/app/services/db.service';
import { Router, NavigationExtras } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  @Input() id: string;
  type: Type = null;

  constructor(private db: DbService, public router: Router, private alertContrl: AlertController) { }

  ngOnInit() {}

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
