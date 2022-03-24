import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { DbService } from 'src/app/services/db.service';
import { getAuth, onAuthStateChanged  } from "firebase/auth";
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  value: string;

  constructor(
    private authService: AuthService,
    public router: Router,
    private nav: NavController,
 
  ) { }

  ngOnInit() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid); //review with the firebase

        this.value = uid;

        console.log(this.value); //review if it is save correct to the variable
        // ...
      } else {
        // User is signed out
        // ...
      }
    });

  }

  
  pushPage(){
    this.nav.navigateForward(`/location/${this.value}`);
  }

  async logout() {
    await this.authService.logout();
    this.router.navigateByUrl('login', { replaceUrl: true });
  }

}
