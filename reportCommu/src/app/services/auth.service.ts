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

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private auth: Auth) { }

  async register(data: User){
    return await createUserWithEmailAndPassword(this.auth,data.email, data.password);
  }

  async login(email:string, password:string){
    return await signInWithEmailAndPassword(this.auth, email, password)
  }

  logout(){
    return signOut(this.auth);
  }
 
}
