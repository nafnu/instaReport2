import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 
  logingForm: FormGroup;

  constructor(
    public formBuilder: FormBuilder,
    private loadingController: LoadingController,
    private alertController: AlertController,
    private authService: AuthService,
    private router: Router
  ) { }

  goToRegister(){
    this.router.navigateByUrl('/register', { replaceUrl: true });
  }

  //Easy access for form fields
  get email() {
    return this.logingForm.get('email');
  }

  get password() {
    return this.logingForm.get('password');
  }

  ngOnInit() { 
    this.logingForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.pattern('^[a-zA-A-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')]],
      password: ['', [Validators.required, Validators.pattern('(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}')]]
    });
  }

  async login() {
    const loading = await this.alertController.create();
    await loading.present();

    const user = await this.authService.login(this.logingForm.value);
    await loading.dismiss();

    if (user){
      this.router.navigateByUrl('/home', { replaceUrl: true });
    }else{
      this.showAlert('Login failed', 'Please try again');
    }
   }

  async showAlert(header, message){
    const alert = await this.alertController.create({
      header, 
      message, 
      buttons: ['OK'],
    });
    await alert.present();
  }

  public errorMessagesText = {
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' },
    ],
    password: [
      { type: 'required', message: 'Password is required' },
      { type: 'pattern', message: 'Please enter a valid password. At least 8 characters in lengt.Lowercase or/and Uppercase letters. Numbers and special characters. ' },
    ]
  }


  public submitLog() {
    console.log(this.logingForm.value); //test the work the form

    this.login();
  }



}
