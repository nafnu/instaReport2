import { Component, OnInit, ChangeDetectorRef,} from '@angular/core';
import { incidentType } from 'src/app/models/models';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DbService} from 'src/app/services/db.service';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {

  incidentType: incidentType[] = [];
  selectType: string = ''; 

  constructor(private db: DbService, private alertCtrl: AlertController,private cd: ChangeDetectorRef) { 
    this.db.getType();
  }

  ngOnInit() {

  }

  
  saveIncident(){

  }
}
