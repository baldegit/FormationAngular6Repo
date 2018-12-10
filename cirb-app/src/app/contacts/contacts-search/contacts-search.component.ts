import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-contacts-search',
  templateUrl: './contacts-search.component.html',
  styleUrls: ['./contacts-search.component.css']
})
export class ContactsSearchComponent implements OnInit {

  @Output() searchChange = new EventEmitter();
  @Input() search = '';

  lastedit = '';
  edit = '';
  constructor() { }

  ngOnInit() { this.lastedit = window.localStorage.getItem('LAST_CONTACT_SEARCH') || ''; }

  onEditchCange(value: string) {

      this.edit = value;
      this.searchChange.emit(this.edit);
      if ( value) {
      this.onSaveLastEdit();
    }
  }

  onClearEdit() { this.edit = ''; }

  onSaveLastEdit() {
    this.lastedit = this.edit;
    window.localStorage.setItem('LAST_CONTACT_SEARCH', this.lastedit);
  }

  onClearLastEdit() {
    this.lastedit = '';
    window.localStorage.removeItem('LAST_CONTACT_SEARCH');
  }

  onSetLastEdit() { this.edit = this.lastedit; }

}
