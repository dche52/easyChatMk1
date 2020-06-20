import {Component, OnInit} from '@angular/core';
import { MessageObject } from './messageObject';
import { HttpService } from './http.servise';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [HttpService]
})
export class AppComponent implements OnInit {
  messages = [];
  constructor(private httpService: HttpService){}
  ngOnInit() {setInterval( () => {
      this.httpService.getData().subscribe( (data: MessageObject) => {
        let messagesObject = data;
        let temporaryMessagesStorage = [];
        for (let key in messagesObject) {
          temporaryMessagesStorage.push(messagesObject[key]);
        }
        if (temporaryMessagesStorage.length > this.messages.length) {
          this.messages = temporaryMessagesStorage;
        }
        else {return; }
      } ); }, 1000); }
  }
