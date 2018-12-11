import { Component, OnInit } from '@angular/core';
import { ContactManagerService } from '../../services/contact-manager.service';
import { Contact } from '../../@models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent  {

  searcheTerme = '';

  get contatList(): Set<Contact> {
    return this.contactService.collection;
  }

  constructor(private contactService: ContactManagerService) {
  }

  onNewRecipient(recipient: Contact) {
    this.contactService.setRecipientUser(recipient);
    console.log(recipient);
  }

  onGetMotCle(motCle: string) {
    this.searcheTerme = motCle;
  }


}
