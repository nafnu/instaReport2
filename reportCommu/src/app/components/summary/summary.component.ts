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
    this.dataService.getReports().subscribe(res => {
      this.reports = res;
    });
    
  }

  async summary(){

  }

  ngOnInit() {
    console.log(this.uid);
  }

}
