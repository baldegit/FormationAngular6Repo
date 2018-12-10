import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { Message, MessageStatust } from '../../@models/message';
import { MessageManagerService } from '../../services/message-manager.service';

@Component({
  selector: 'app-chat-discution-message',
  templateUrl: './chat-discution-message.component.html',
  styleUrls: ['./chat-discution-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatDiscutionMessageComponent implements OnInit {

  @Input() message: Message;

  constructor( ) {
    // setInterval(() =>  this.message.text += '!', 1000);
  }

  ngOnInit() {}

}

