import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../@models/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  @Input() contacts: Set<Contact>;

  constructor() { }

  ngOnInit() {
  }

}
