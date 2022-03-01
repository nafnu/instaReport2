import { Injectable } from '@angular/core';
import { collectionData, Firestore, doc, getFirestore ,addDoc, collection, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { docData } from 'rxfire/firestore';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  private users = [
    {
      email: null,
      password: null    
    },
  ];

  constructor() { }

  showUsers(): any[] {
    return this.users;
  }  

  addUser(user: any){
    this.users.push(user);
  }

  deleteUser(pos: number){
    this.users.splice(pos, 1);
  }

}
