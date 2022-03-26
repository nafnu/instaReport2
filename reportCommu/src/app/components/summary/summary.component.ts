import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';
import { Report } from 'src/app/models/models';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  passedIdD:string;
  lat:string;
  long:string;
  incident: string;
  notes: string;

  council:string;

  reports = [];
  uid = null;

  // summary: Report = {
  //   uid: null,
  //   lat: null,
  //   lng: null,
  //   imagen: null,
  //   incident: null, 
  //   description: null,
  //   authority: null,
  // }

  constructor(
    private dataService: DbService, 
    public router: Router, 
    private alertContrl: AlertController,
    private activatedRoute: ActivatedRoute
  ) { 
       
  }

  async summary(){

  }

  ngOnInit() {
    this.passedIdD = this.activatedRoute.snapshot.paramMap.get('uid');
    this.lat = this.activatedRoute.snapshot.paramMap.get('lat');
    this.long = this.activatedRoute.snapshot.paramMap.get('long');
    this.incident = this.activatedRoute.snapshot.paramMap.get('data');
    this.notes = this.activatedRoute.snapshot.paramMap.get('notes');
    console.log(this.passedIdD);
    console.log(this.lat);
    console.log(this.long);
    console.log(this.incident);

    this.getConuncil();
    // : number = -6.2217166;
    console.log(this.council);
  }

 
  getConuncil(){
    this.long;

    const fingal: string = "-6.057170";
    const dunla: string = "-6.244754";
    const dcity: string  = "30.204670";
  
    if( this.long <= fingal && this.long < dunla && this.long < dcity){
      this.council = "Fingal County Council";
    }else if( this.long > fingal && this.long <= dunla && this.long < dcity){
      this.council = "Dún Laoghaire County Council";
    }else if( this.long > fingal && this.long > dunla && this.long >= dcity ){
      this.council = "Dublin City Council";
    }
    return this.council;
  }

}
