import { Component, OnInit } from '@angular/core';
import { ContactManagerService } from '../../services/contact-manager.service';
import { Contact } from '../../@models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent  {

  contatList: Set<Contact> = new Set();
  searcheTerme = '';

  constructor(private contactService: ContactManagerService) {
    this.contatList = this.contactService.collection;
  }

  onNewRecipient(recipient: Contact) {
    this.contactService.setRecipientUser(recipient);
    console.log(recipient);
  }

  onGetMotCle(motCle: string) {
    this.searcheTerme = motCle;
  }


}
