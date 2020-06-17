import { Component, OnInit } from '@angular/core';
import { MessageForm } from '../message-form';
import { Messsage } from '../message';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-message-form-component',
  templateUrl: './message-form-component.component.html',
  styleUrls: ['./message-form-component.component.css']
})
export class MessageFormComponentComponent {

model = new MessageForm(1, 'The Whistler', 'Hello, Los Chupakabras !');
submitted = false;
onSubmit() {
  this.submitted = true;
  let checkA = Math.floor((Math.random() * 10));
  let checkB = Math.floor((Math.random() * 10));
  let check = prompt('Проверка на спам, введите :' + checkA + '+' + checkB, '');
  if (check === (checkA + checkB).toString()) {
    let dateNow = new Date();
    let d = dateNow.toLocaleTimeString();
    let sms = this.model.name + ': ' + this.model.textMessage + ' ' + d;
    Messsage.create(sms);
    this.model.textMessage = '';
    const audio = new Audio('/assets/icqsound.mp3');
    audio.autoplay = true;
  } else {
    window.open('https://naurok.ua/course/math?utm_source=google&utm_medium=cpc&utm_campaign=9500927703&utm_network=g&utm_adposition=&utm_device=c&utm_matchtype=b&utm_target=&utm_group=97694390158&utm_term=%2B%D0%BA%D1%83%D1%80%D1%81%D1%8B%20%2B%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B8&gclid=CjwKCAjw26H3BRB2EiwAy32zhWdHutGE3q5RhugNJNPqrARmtpmj8pJA4kTpyhVyj7PcWC4DhWCB1BoCBgYQAvD_BwE');
  }
 }
}
