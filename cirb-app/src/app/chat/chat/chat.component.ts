import { Component, OnInit } from '@angular/core';
import { MessageManagerService } from '../../services/message-manager.service';
import { Message } from '../../@models/message';
import { Contact } from '../../@models/contact';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  messages: Set<Message>;
  recipient: Contact;
  constructor(private messageService: MessageManagerService) {
    this.messageService.newRecipient.subscribe(data => this.recipient = data );
    this.messages = this.messageService.collection;
  }



}
