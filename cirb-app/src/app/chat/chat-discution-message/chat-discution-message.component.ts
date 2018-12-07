import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Message } from '../../@models/message';

@Component({
  selector: 'app-chat-discution-message',
  templateUrl: './chat-discution-message.component.html',
  styleUrls: ['./chat-discution-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDiscutionMessageComponent implements OnInit {

  message: Message = {
    text: 'Lorem ipsum ...',
    status: 'sent'
  };

  constructor() {
    // setInterval(() =>  this.message.text += '!', 1000);
  }

  ngOnInit() {
  }

}
