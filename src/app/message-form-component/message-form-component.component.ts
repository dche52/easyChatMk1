import { Component, OnInit } from '@angular/core';
import { Message } from '../message-form';
import { HttpService } from '../http.servise';

@Component({
  selector: 'app-message-form-component',
  templateUrl: './message-form-component.component.html',
  styleUrls: ['./message-form-component.component.css'],
  providers: [HttpService]
})

export class MessageFormComponentComponent {
constructor(private httpService: HttpService){}
model = new Message('Angry Bird', 'Who saw green piggy\'\s ??');
submitted = false;
onSubmit() {
  this.submitted = true;
  const checkA: number = Math.floor((Math.random() * 10));
  const checkB: number = Math.floor((Math.random() * 10));
  const check = prompt('Проверка на спам, введите :' + checkA + '+' + checkB, '');
  if (check === (checkA + checkB).toString()) {
    const dateNow: any = new Date();
    const dateLocal = dateNow.toLocaleTimeString();
    const sms: string = this.model.name + ': ' + this.model.textMessage + ' ' + dateLocal;
    this.httpService.postData(sms).subscribe(responseData => {console.log(responseData); } );
    this.model.textMessage = '';
    const audio = new Audio('/assets/icqsound.mp3');
    audio.autoplay = true;
  } else {
    window.open('https://naurok.ua/course/math?utm_source=google&utm_medium=cpc&utm_campaign=9500927703&utm_network=g&utm_adposition=&utm_device=c&utm_matchtype=b&utm_target=&utm_group=97694390158&utm_term=%2B%D0%BA%D1%83%D1%80%D1%81%D1%8B%20%2B%D0%BC%D0%B0%D1%82%D0%B5%D0%BC%D0%B0%D1%82%D0%B8%D0%BA%D0%B8&gclid=CjwKCAjw26H3BRB2EiwAy32zhWdHutGE3q5RhugNJNPqrARmtpmj8pJA4kTpyhVyj7PcWC4DhWCB1BoCBgYQAvD_BwE');
  }
 }
}
