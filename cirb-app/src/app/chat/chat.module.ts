import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatDiscutionComponent } from './chat-discution/chat-discution.component';
import { ChatDiscutionMessageComponent } from './chat-discution-message/chat-discution-message.component';
import { ChatEditorComponent } from './chat-editor/chat-editor.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ChatComponent, ChatHeaderComponent, ChatDiscutionComponent, ChatDiscutionMessageComponent, ChatEditorComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [ChatComponent]
})
export class ChatModule { }
