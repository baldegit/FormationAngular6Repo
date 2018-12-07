import { Component, OnInit } from '@angular/core';
import { ContactManagerService } from '../../services/contact-manager.service';
import { Contact } from '../../@models/contact';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contatList: Set<Contact> = new Set();

  constructor(private contactService: ContactManagerService) {
    this.contatList = this.contactService.collection;
  }

  onNewrecipient(recipient: Contact) {
    this.contactService.setRecipientUser(recipient);
  }

  ngOnInit() {
  }

}
