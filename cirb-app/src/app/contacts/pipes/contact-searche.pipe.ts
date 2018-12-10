import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../../@models/contact';

@Pipe({
  name: 'contactSearche'
})
export class ContactSearchePipe implements PipeTransform {
  /**
   * filter a Set of Contact by name or lastname
   * @param collection @type {set(Contact)}
   * @param name @type {string}
   * @example
   * collection | contactSearche:'bill'
   */
  transform(collection: Set<Contact>, name?: string): any {
    if ( ! name) {
      return collection;
    }
    name = name.toLocaleLowerCase();
    const filtered = Array.from(collection).filter((item: Contact) => {
      if (item.lastname.toLocaleLowerCase().indexOf(name) > -1) { return true; }
      if (item.firstname.toLocaleLowerCase().indexOf(name) > -1) { return true; }
      return false;
    });
    return new Set(filtered);
  }

}
