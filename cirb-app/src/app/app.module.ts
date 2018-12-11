import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScreensModule } from './screens/screens.module';
import { ContactStorage, MessageStorage } from './services/applications';
import { MessageStorageService } from './services/message-storage.service';
import { HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { StorageInterceptorService } from './services/storage-interceptor.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ScreensModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: StorageInterceptorService, multi: true},
    { provide: 'ContactApi', useValue: 'http://localhost:5050/user'},
    { provide: 'MessageApi', useValue: 'http://localhost:5050/message'},
    { provide: ContactStorage, useClass: MessageStorageService, deps: [HttpClient, 'ContactApi'] },
    { provide: MessageStorage, useClass: MessageStorageService, deps: [HttpClient, 'MessageApi'] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
