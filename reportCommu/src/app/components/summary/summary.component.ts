import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/models';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {

  // report: Report = {
  //   uid: '',
  //   idRep: '',
  //   location: null,
  //   imagen: null,
  //   idfield: '',
  //   description: '',
  //   authority: '',
  // }


  constructor() { }

  ngOnInit() {}

}
