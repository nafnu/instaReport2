import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { Auth } from '@angular/fire/auth';

import { collectionData, Firestore, doc, getFirestore ,addDoc, collection, deleteDoc, updateDoc, docData } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';



export interface Type{
  id: number;
  incident: string
  options: {
      a: string, 
      b: string, 
      c: string
    }
}

export interface User {
  uid?: string;
  lname: string;
  fname: string;
  email: string;
  phone: number; 
  city: string;
  state: string;
 street: string;
 eircode:string;
 password: string
}


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

  //Get incident type form the Firebase
  getType(): Observable<Type[]> {
    const typeRef = collection(this.firestore, 'type');
    return collectionData(typeRef, { idField: 'idField'}) as Observable<Type[]>;
  }

   //Get incident type by Id form the Firebase
  getTypeById(id): Observable<Type> {
    const typeRef = doc(this.firestore, `type/${id}`);
    return docData(typeRef, { idField: 'idField'}) as Observable<Type>;
  }

  //Get the current user and the firebase reference
  getUserProfile(){
    const user = this.auth.currentUser;
    const userDocRef = doc(this.firestore, `users/${user.uid}`);
    return docData(userDocRef);
  }


    


}
