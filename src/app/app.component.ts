import { Component } from '@angular/core';
import {createContentChild} from '@angular/compiler/src/core';
import { Messsage } from './message';
import { Chat } from './export';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message = Chat.download();
  messages = [];

  loadChat() {
    setInterval(() => {
      this.messages = [];
      for (let key in this.message) {
        this.messages.push(this.message[key]);
      }
      let pp = this.messages[1];
      for (let keys in pp) {
        this.messages.push(pp[keys]);
      }
      this.messages.shift();
      this.messages.shift();
      this.message = Chat.download();
    }, 1000)
  };

  sms;
  x;
  y;
  d;
  user;
  chat = [];

  onNameChange() {
    this.user = document.getElementById('nameInput');
    this.user = this.user.value;
  }

  onClick() {
    let checkA = Math.floor((Math.random() * 10));
    let checkB = Math.floor((Math.random() * 10))
    let check = prompt('Проверка на спам, введите :' + checkA + '+' + checkB, '');
    if (check === (checkA + checkB).toString()) {
      this.y = document.getElementById('input');
      this.x = this.y.value;
      this.d = new Date();
      this.d = this.d.toLocaleTimeString();
      this.sms = (this.user || 'Прохожий') + ': ' + this.x + ' ' + this.d;
      Messsage.create(this.sms);
      this.y.value = '';
    } else {
      window.open('https://naurok.ua/course/math?utm_source=google&utm_medium=cpc&utm_campaign=9500927703&utm_network=g&utm_adposition=&utm_device=c&utm_matchtype=b&utm_target=&utm_group=97694390158&utm_term=%2B%D0%BA%D1%83%D1%80%D1%81%D1%8B%20%2B%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B8&gclid=CjwKCAjw26H3BRB2EiwAy32zhWdHutGE3q5RhugNJNPqrARmtpmj8pJA4kTpyhVyj7PcWC4DhWCB1BoCBgYQAvD_BwE');
      }
    }
  }
