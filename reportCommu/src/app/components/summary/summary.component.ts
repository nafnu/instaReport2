import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';
import { Report } from 'src/app/models/models';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

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
    private alertContrl: AlertController
  ) { 
       
  }

  async summary(){

  }

  ngOnInit() {
    this.getConuncil();
    // : number = -6.2217166;
  }

 
  getConuncil(){
    let long;
    let council;

    const fingal: number = -6.057170;
    const dunla: number= -6.244754;
    const dcity: number = 30.204670;
  
    if( long <= fingal && long < dunla && long < dcity){
      council = "Fingal County Council";
    }else if( long > fingal && long <= dunla && long < dcity){
      council = "Dún Laoghaire-Rathdown County Council";
    }else if( long > fingal && long > dunla && long >= dcity ){
      council = "Dublin City Council";
    }
    return council;
  }

}
