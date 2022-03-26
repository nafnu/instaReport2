import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.scss'],
})

export class TypeComponent implements OnInit {

  ionicForm: FormGroup;

  isFormSubmitted = false;
  
  masterCheck: boolean;

  passedIdD:string;
  lat: string;
  long: string;
  data: string;

  CHECK_LIST = [
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
 

  constructor(
    private formBuilder: FormBuilder,
    private nav: NavController,
    private activatedRoute: ActivatedRoute) {
    
  }

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

  onLoadCheckboxStatus() {
    const checkboxArrayList: FormArray = this.ionicForm.get('checkboxArrayList') as FormArray;
    this.CHECK_LIST.forEach(o => {
      this.updateCheckControl(checkboxArrayList, o);
    })
  }

  onSelectionChange(e, i) {
    const checkboxArrayList: FormArray = this.ionicForm.get('checkboxArrayList') as FormArray;
    this.CHECK_LIST[i].checked = e.target.checked;
    this.updateCheckControl(checkboxArrayList, e.target);

    this.checkMaster();

  }

  checkMaster(){
    this.masterCheck = false;
    
    setTimeout(()=>{
      this.CHECK_LIST.forEach(obj => {
        obj.checked = this.masterCheck;
      });
    });
  }

  submitForm() {
    this.isFormSubmitted = true;
    if (!this.ionicForm.valid) {
      console.log('Please provide all the required values!')
      return false;
    } else {
      console.log('Form Submitted', this.ionicForm.value)
      this.data = this.ionicForm.value;
      console.log(this.data)
    }
  }

  pushPage(){
    this.nav.navigateForward(`/details/${this.passedIdD}/${this.lat}/${this.long}/item.value`);
  }
}

