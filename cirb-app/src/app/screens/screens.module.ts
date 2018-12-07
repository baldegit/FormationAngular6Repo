import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ScreenLoginComponent } from './screen-login/screen-login.component';
import { ScreenChatComponent } from './screen-chat/screen-chat.component';
import { ContactsModule } from '../contacts/contacts.module';
import { ChatModule } from '../chat/chat.module';

@NgModule({
  declarations: [ScreenLoginComponent, ScreenChatComponent],
  imports: [
    SharedModule,
    ContactsModule,
    ChatModule
  ],
  exports: [ScreenLoginComponent, ScreenChatComponent]
})
export class ScreensModule { }
