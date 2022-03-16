import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs'
import { DbService } from './db.service';

import { 
  Auth, 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword,
  signOut 
} from '@angular/fire/auth';
import { User } from '../models/models';
import { authState } from 'rxfire/auth';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private auth: Auth) { }

  //Allow to register unique users by emails and password. With unique ID ***Feature security
  async register(data: User){
    return await createUserWithEmailAndPassword(this.auth,data.email, data.password);
  }

  //Allow to login unique users by emails and password. ***Feature security
  async login(email:string, password:string){
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  //Monitoring user - This method gets invoked in the UI thread on changes in the authentication state.
 stateUser(){
   return this.auth.onAuthStateChanged;
  }

  logout(){
    return signOut(this.auth);
  }
 
}
