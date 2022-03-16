import { Injectable } from '@angular/core';
import { user } from '@angular/fire/auth';
import { collectionData, Firestore, doc, getFirestore ,addDoc, collection, deleteDoc, updateDoc, docData } from '@angular/fire/firestore';

import { Observable, BehaviorSubject} from 'rxjs';

export interface Profile {
  uid?: string,
  lname: string,
  fname: string,
  phone: number, 
  city: string,
 street: string,
 eircode:string
}


@Injectable({
  providedIn: 'root'
})
export class DbService {

 

  constructor(private firestore: Firestore) { }


  //Get all the information of the users
  getProfile(): Observable<Profile[]> {
    const profileRef = collection(this.firestore, 'users');
    return collectionData(profileRef, { idField: 'id' }) as Observable<Profile[]>;
  }

  //Get all the information of one users by ID
  getProfileById(id): Observable<Profile[]> {
    const profileDocRef = doc(this.firestore, `users/${id}`);
    return docData(profileDocRef, { idField: 'id' }) as Observable<Profile[]>;
  }

  addProfile(profile: Profile){
    const profileRef = collection(this.firestore, 'users');
    return addDoc(profileRef, profile);
  }

  deleteProfile(profile: Profile){
    const profileDocRef = doc(this.firestore, `users/${profile.uid}`);
    return deleteDoc(profileDocRef);
  }
  


}
