import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { collectionData, Firestore, doc, getFirestore ,addDoc, collection, deleteDoc, updateDoc, docData } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';


import { Observable, BehaviorSubject} from 'rxjs';
import { incidentType, User } from '../models/models';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  

  constructor(private firestore: Firestore, private auth: Auth ) {  }

  //Add user - with authentificacion email/password - also add as collection with uid
  createDoc(user: User): Promise<void>{
    const group = doc(collection(this.firestore, 'users'));
    return setDoc(group, user);
  }

  
  getType(): Observable<incidentType[]> {
    const typeRef = collection(this.firestore, 'incidentType');
    return collectionData(typeRef, { idField: 'id'}) as Observable<incidentType[]>;
  }

  // //Get all the information of the users
  // getProfile(): Observable<Profile[]> {
  //   const profileRef = collection(this.firestore, 'users');
  //   return collectionData(profileRef, { idField: 'id' }) as Observable<Profile[]>;
  // }

  // //Get all the information of one users by ID
  // getProfileById(id): Observable<Profile[]> {
  //   const profileDocRef = doc(this.firestore, `users/${id}`);
  //   return docData(profileDocRef, { idField: 'idField' }) as Observable<Profile[]>;
  // }

  // addProfile(profile: Profile){
  //   const profileRef = collection(this.firestore, 'users');
  //   return addDoc(profileRef, profile);
  // }

 

  


}
