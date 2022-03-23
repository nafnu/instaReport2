import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs'

import {  Firestore, doc, docData } from '@angular/fire/firestore';

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

  constructor(
    private auth: Auth,
    private firestore: Firestore
    ) { }

  //Allow to register unique users by emails and password. With unique ID ***Feature security
  async register(data: User){
    return await createUserWithEmailAndPassword(this.auth,data.email, data.password);
  }

  //Allow to login unique users by emails and password. ***Feature security
  async login(email:string, password:string){
    return await signInWithEmailAndPassword(this.auth, email, password);
  }

  //Get the current user and the firebase reference
  // getUserProfile(){
  //   const user = this.auth.currentUser;
  //   const userDocRef = doc(this.firestore, `users/${user.uid}`);
  //   return docData(userDocRef);
  // }
  
  logout(){
    return signOut(this.auth);
  }
 
}
