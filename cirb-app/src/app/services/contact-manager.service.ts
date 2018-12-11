import { Injectable, EventEmitter, Inject } from '@angular/core';
import { Manager } from '../@models/manager';
import { Contact } from '../@models/contact';
import { Storage } from '../@models/storage';
import { ContactStorage } from './applications';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactManagerService implements Manager<Contact> {

  currentUser: Contact;
  recpientUser = new EventEmitter;

  collection: Set<Contact> = new Set(  );

  constructor(@Inject(ContactStorage) private appStore: Storage<Contact>) {
    this.read().subscribe();
  }

  setCurrentUser(user: Contact) {
    this.currentUser = user;
  }

  setRecipientUser(user: Contact) {
    this.recpientUser.emit(user);
  }

  create(value: Contact): Observable<Contact> {
    throw new Error("Method not implemented.");
  }

  read(id?: number): Observable<Contact[]>{
    return new Observable(obs => {
      this.appStore.read().subscribe(data => {
        this.collection = new Set(data);
      });
    }) ;
  }
  update(target: Contact, updates: any): Observable<Contact> {
    throw new Error("Method not implemented.");
  }
  delete(target: Contact): Observable<boolean> {
    throw new Error("Method not implemented.");
  }

}
