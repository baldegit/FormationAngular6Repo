import { Injectable } from '@angular/core';
import { Manager } from '../@models/manager';
import { Contact } from '../@models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactManagerService implements Manager<Contact>{

  currentUser: Contact;
  recpientUser: Contact;

  collection: Set<Contact> = new Set(
    [
      {
        firstname: 'BALDE',
        lastname: 'Ibrahima',
        avatar: '',
        status: null,
        mood: ''
      },
      {
        firstname: 'DIALLO',
        lastname: 'Binta',
        avatar: '',
        status: null,
        mood: ''
      },
      {
        firstname: 'CAMARA',
        lastname: 'Alpha',
        avatar: '',
        status: null,
        mood: ''
      }
    ]
  );

  setCurrentUser(user: Contact){
    this.currentUser = user;
  }

  setRecipientUser(user: Contact){
    this.recpientUser = user;
  }

  create(value: Contact): Promise<Contact> {
    throw new Error("Method not implemented.");
  }
  read(id: number): Promise<Contact> {
    throw new Error("Method not implemented.");
  }
  update(target: Contact, updates: any): Promise<Contact> | Promise<Error> {
    throw new Error("Method not implemented.");
  }
  delete(target: Contact): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  constructor() { }
}
