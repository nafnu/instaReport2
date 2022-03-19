import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { DbService} from 'src/app/services/db.service';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {

  types = [];

  constructor(private db: DbService, public router: Router, private alertContrl: AlertController) { 
    this.db.getType().subscribe(res => {
      console.log(res);
      this.types = res;
    });

  }

  ngOnInit() { }

  openType(incident){}

  // Manage propagation in a much more efficient way and only update the content inside of the component rather than re-create the component altogether
  trackIncident(index: number, itemObject: any) {
    return itemObject.id;
  }
}
