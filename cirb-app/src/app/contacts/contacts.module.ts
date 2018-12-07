import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsHeaderComponent } from './contacts-header/contacts-header.component';
import { ContactsSearchComponent } from './contacts-search/contacts-search.component';
import { ContactsListComponent } from './contacts-list/contacts-list.component';
import { ContactsSettingComponent } from './contacts-setting/contacts-setting.component';
import { ContactsComponent } from './contacts/contacts.component';
import { ContactsListItemComponent } from './contacts-list-item/contacts-list-item.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    ContactsHeaderComponent,
    ContactsSearchComponent, ContactsListComponent, ContactsSettingComponent, ContactsComponent, ContactsListItemComponent],
  imports: [
    SharedModule
  ],
  exports: [ContactsComponent]
})
export class ContactsModule { }
