import { Component, OnInit, Input } from '@angular/core';
import { AlertController} from '@ionic/angular';
import { DbService} from 'src/app/services/db.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {

  passedIdL:string;
  lat:string;
  long:string;

  types = [];

  constructor(
    private db: DbService, 
    public router: Router, 
    private alertContrl: AlertController,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder,
    ){ 
    this.db.getType().subscribe(res => {
      console.log(res);
      this.types = res;
    });

  }

  ngOnInit() { 
    this.passedIdL = this.activatedRoute.snapshot.paramMap.get('uid');
    this.lat = this.activatedRoute.snapshot.paramMap.get('lat');
    this.long = this.activatedRoute.snapshot.paramMap.get('long');
    console.log(this.passedIdL);
    console.log(this.lat);
    console.log(this.long);
  }

  

  openType(incident){}

  // Update the content inside of the component rather than re-create the component altogether
  trackIncident(index: number, itemObject: any) {
    return itemObject.id;
  }
}

