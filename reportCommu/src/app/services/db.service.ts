import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject} from 'rxjs';
import { Auth } from '@angular/fire/auth';

import { collectionData, Firestore, doc, getFirestore ,addDoc, collection, deleteDoc, updateDoc, docData } from '@angular/fire/firestore';
import { setDoc } from 'firebase/firestore';

import { type, User } from '../models/models';

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
  getType(): Observable<type[]> {
    const typeRef = collection(this.firestore, 'type');
    return collectionData(typeRef, { idField: 'id'}) as Observable<type[]>;
  }

   //Get incident type by Id form the Firebase
  getTypeById(id): Observable<type> {
    const typeRef = doc(this.firestore, `type/${id}`);
    return docData(typeRef, { idField: 'id'}) as Observable<type>;
  }


    


}
