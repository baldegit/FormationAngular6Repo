import { Injectable } from '@angular/core';
import { Storage } from '../@models/storage';
import { Contact } from '../@models/contact';
import { Message } from '../@models/message';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { promise } from 'protractor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageStorageService implements Storage<Contact | Message> {

  constructor(private http: HttpClient, private endPoint: string) {  }

  create(param: Contact | Message): Observable<Contact | Message> {
    return this.http.post<Contact | Message>(this.endPoint, param);
  }

  read(id?: number): Observable<(Contact | Message)[]> {
    const URL = this.endPoint + (id ? `/${id} ` : '');
    return this.http.get<Array<Contact | Message>>(URL);
  }

  update(oldV: Contact | Message, newV: Contact | Message): Observable<Contact | Message> {
    const URL = this.endPoint + oldV.id;
    const data = Object.assign({}, oldV, newV);
    return this.http.put<Contact | Message>( URL, data);
  }
  delete(id: number): Observable<boolean> {
    const URL = this.endPoint + id;
    return this.http.delete<boolean>(this.endPoint);
  }
}
