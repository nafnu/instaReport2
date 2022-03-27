import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { DbService } from 'src/app/services/db.service';
import { Report, User } from 'src/app/models/models';

import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  passedIdD: string;
  lat: string;
  long: string;
  incident: string;
  notes: string;

  council: string;

  users = [];


  // summary: Report = {
  //   uid: null,
  //   lat: null,
  //   lng: null,
  //   imagen: null,
  //   incident: null, 
  //   description: null,
  //   authority: null,
  // }

  usermailData = {
    username:'',
    email:'',  //user email address to send email 
    date:'',
    mesage:''
  }
  constructor(
    private dataService: DbService,
    public router: Router,
    private alertContrl: AlertController,
    private activatedRoute: ActivatedRoute,
    private auth: Auth
  ) {
    this.dataService.getType().subscribe(res => {
      console.log(res);
      this.users = res;
    });
  }

  openUser(incident) { }

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


  getConuncil() {
    this.long;

    const fingal: string = "-6.057170";
    const dunla: string = "-6.244754";
    const dcity: string = "30.204670";

    if (this.long <= fingal && this.long < dunla && this.long < dcity) {
      this.council = "Fingal County Council";
    } else if (this.long > fingal && this.long <= dunla && this.long < dcity) {
      //this.council = "Dún Laoghaire County Council";
    } else if (this.long > fingal && this.long > dunla && this.long >= dcity) {
      this.council = "Dublin City Council";
    }
    return this.council;
  }

  /*** part to send email */

  sendEmail(){
    
  }

// $scope.sendFeedback = function () {
//     if (window.plugins & amp;& amp; window.plugins.emailComposer) {
//       window.plugins.emailComposer.showEmailComposerWithCallback(function (result) {
//         console.log("Respuesta -&gt; " + result);
//       },
//         "Asunto del Mensaje", // Subject
//         "", // Body
//         ["hola@ejemplo.com"], // To
//         null, // CC
//         null, // BCC
//         false, // isHTML
//         null, // Attachments
//         null // Attachment Data
//       );
//     }
//   }

}
