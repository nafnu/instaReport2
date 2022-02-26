import { Injectable } from '@angular/core';
import { collectionData, Firestore, doc, getFirestore ,addDoc, collection, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { docData } from 'rxfire/firestore';
import { Observable, BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  
}
