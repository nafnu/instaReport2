import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DetailsComponent } from './components/details/details.component';
import { LocationComponent } from './components/location/location.component';
import { RestartComponent } from './components/restart/restart.component';
import { SummaryComponent } from './components/summary/summary.component';
import { TypeComponent } from './components/type/type.component';

import { LoginComponent } from './components/login/login.component';
import{ redirectUnauthorizedTo, redirectLoggedInTo, canActivate } from '@angular/fire/auth-guard';

const redirectUnauthorizedToLogin = () => redirectUnauthorizedTo(['']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['home']);

const routes: Routes = [
  {path:'', component:LoginComponent,
  ...canActivate(redirectLoggedInToHome)},
  {path:'home', component:HomeComponent,
  ...canActivate(redirectUnauthorizedToLogin)},
  {path:'location', component: LocationComponent},
  {path:'type', component: TypeComponent},
  {path:'details', component: DetailsComponent},
  {path:'summary', component:SummaryComponent},
  {path:'restart', component:RestartComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
