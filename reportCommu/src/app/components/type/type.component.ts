import { Component, OnInit, Input } from '@angular/core';
import { AlertController, NavController} from '@ionic/angular';
import { DbService} from 'src/app/services/db.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})
export class TypeComponent implements OnInit {

  value:string;

  ionicForm: FormGroup;

  isFormSubmitted = false;
  
  masterCheck: boolean;

  passedIdD:string;
  lat: string;
  long: string;
  data: string;


  constructor(
    private db: DbService,
    public router: Router, 
    private alertContrl: AlertController,
    private formBuilder: FormBuilder,
    private nav: NavController,
    private activatedRoute: ActivatedRoute
    ) { 
    this.db.getType().subscribe(res => {
      console.log(res);
      //this.types = res;
    });
    
  }

  types = [
    { name: 'Community', value: 'Community', checked: false },
    { name: 'Abandoned trolleys or bikes', value: 'Abandoned trolleys or bikes' },
    { name: 'Noise or Pollution', value: 'Noise or Pollution' },
    { name: 'Parking or Cars', value: 'Parking or Cars' },
    { name: 'Graffiti or Vandalism', value: 'Graffiti or Vandalism' },
    { name: 'Pavement or Footpath', value: 'Pavement or Footpath' },
    { name: 'Rubbish or Bins', value: 'Rubbish or Bins' },
    { name: 'Fallen Tree', value: 'Fallen Tree' },
    { name: 'Potholes or Broke lights', value: 'Potholes or Broke lights' }
  ];

  ngOnInit() { 
    this.ionicForm = this.formBuilder.group({
      checkboxArrayList: this.formBuilder.array([], [Validators.required])
    });

    this.onLoadCheckboxStatus();

    this.passedIdD = this.activatedRoute.snapshot.paramMap.get('uid');
    this.lat = this.activatedRoute.snapshot.paramMap.get('lat');
    this.long = this.activatedRoute.snapshot.paramMap.get('long');
    console.log(this.passedIdD);
    console.log(this.lat);
    console.log(this.long);

  }

  onLoadCheckboxStatus() {
    const checkboxArrayList: FormArray = this.ionicForm.get('checkboxArrayList') as FormArray;
    this.types.forEach(o => {
      this.updateCheckControl(checkboxArrayList, o);
    })
  }

  updateCheckControl(cal, o) {
    if (o.checked) {
      cal.push(new FormControl(o.value));
    } else {
      cal.controls.forEach((item: FormControl, index) => {
        if (item.value == o.value) {
          cal.removeAt(index);
          return;
        }
      });
    }

    
  }

  onSelectionChange(e, i) {
    const checkboxArrayList: FormArray = this.ionicForm.get('checkboxArrayList') as FormArray;
    this.types[i].checked = e.target.checked;
    this.updateCheckControl(checkboxArrayList, e.target);

    // this.data = this.ionicForm.setValue.toString();
    // console.log(this.data);
    
    this.checkMaster();

  }

  checkMaster(){
    this.masterCheck = false;
    
    setTimeout(()=>{
      this.types.forEach(obj => {
        obj.checked = this.masterCheck;
      });
    });
  }
  openType(incident){}

  // Manage propagation in a much more efficient way and only update the content inside of the component rather than re-create the component altogether
  trackIncident(index: number, itemObject: any) {
    return itemObject.id;
  }
}

