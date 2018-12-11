import { Injectable, Optional, EventEmitter, Inject } from '@angular/core';
import { Manager } from '../@models/manager';
import { Message, MessageStatust } from '../@models/message';
import { ContactManagerService } from './contact-manager.service';
import { MessageStorage } from './applications';
import { Contact } from '../@models/contact';
import { Storage } from '../@models/storage';

@Injectable({
  providedIn: 'root'
})
export class MessageManagerService implements Manager<Message> {

  collection: Set<Message> = new Set([
    {text: 'Hello', status: MessageStatust.SENT},
    {text: 'how are you', status: MessageStatust.SENT},
    {text: 'Im Ok', status: MessageStatust.REPLIES},
    {text: 'that s cool', status: MessageStatust.REPLIES},
  ]);

  newRecipient = new EventEmitter();

  constructor(@Optional() private contactManagerService: ContactManagerService, @Inject(MessageStorage) appStore: Storage <Contact>) {
    this.getEvent();
    appStore.read();
   }

  create(value: Message): Promise<Message> {
    throw new Error("Method not implemented.");
  }
  read(id: number): Promise<Message> {
    throw new Error("Method not implemented.");
  }
  update(target: Message, updates: any): Promise<Message> | Promise<Error> {
    throw new Error("Method not implemented.");
  }
  delete(target: Message): Promise<boolean> {
    throw new Error("Method not implemented.");
  }

  getEvent() {
    this.contactManagerService.recpientUser.subscribe(data => this.newRecipient.emit(data));
  }

}
