import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { Messsage } from './message';
import { Chat } from './export';
import { MessageFormComponentComponent } from './message-form-component/message-form-component.component';
import { HttpClientModule } from '@angular/common/http';
import { MessageObject } from './messageObject';

@NgModule({
  declarations: [
    AppComponent,
    MessageFormComponentComponent
  ],
  imports: [
    BrowserModule, FormsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
