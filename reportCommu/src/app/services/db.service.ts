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

    


}
