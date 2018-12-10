import { Component, OnInit, Input } from '@angular/core';
import { Contact } from '../../@models/contact';

@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.css']
})
export class ChatHeaderComponent {
  @Input() user: Contact;

}
