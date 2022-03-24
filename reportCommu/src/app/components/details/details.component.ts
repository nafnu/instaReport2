import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

import { AlertController } from '@ionic/angular';
import { DbService, Type} from 'src/app/services/db.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {

  passedIdD:string;
  lat:string;
  long:string;
  incident: string;

  constructor(
    private authService: AuthService,
    private router: Router,
    private db: DbService, 
    private alertContrl: AlertController,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.passedIdD = this.activatedRoute.snapshot.paramMap.get('uid');
    this.lat = this.activatedRoute.snapshot.paramMap.get('lat');
    this.long = this.activatedRoute.snapshot.paramMap.get('long');
    this.incident = this.activatedRoute.snapshot.paramMap.get('type.incident');
    console.log( this.passedIdD);
  }

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('login', { replaceUrl: true });
  }

}
