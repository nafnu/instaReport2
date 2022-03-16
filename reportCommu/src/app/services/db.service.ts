import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
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

  private users: Observable<Profile[]>

  constructor(private firestore: Firestore, private auth: Auth ) {  }

 


  //Get all the information of the users
  getProfile(): Observable<Profile[]> {
    const profileRef = collection(this.firestore, 'users');
    return collectionData(profileRef, { idField: 'id' }) as Observable<Profile[]>;
  }

  //Get all the information of one users by ID
  getProfileById(id): Observable<Profile[]> {
    const profileDocRef = doc(this.firestore, `users/${id}`);
    return docData(profileDocRef, { idField: 'idField' }) as Observable<Profile[]>;
  }

  addProfile(profile: Profile){
    const profileRef = collection(this.firestore, 'users');
    return addDoc(profileRef, profile);
  }

  createDoc(data: any, path: string, id: string){
    const group = doc(this.firestore, path);
    return docData(group, {idField: 'idField' }) as Observable<Profile[]>;
  }


  


}
