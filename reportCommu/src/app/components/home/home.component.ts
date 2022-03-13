import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(
    private authService: AuthService,
    private router: Router,
    private loadingController: LoadingController, 
    private alertController: AlertController
  ) { }

  ngOnInit() {}

  async logout(){
    await this.authService.logout();
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
}
