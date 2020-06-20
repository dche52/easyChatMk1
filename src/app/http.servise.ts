import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class HttpService{

  constructor(private http: HttpClient){ }

  getData(){
    return this.http.get('https://easychatmk1.firebaseio.com/messages.json');
  }

  postData(data: string){
    const body = JSON.stringify(data);
    return this.http.post('https://easychatmk1.firebaseio.com/messages.json', body);
  }
}
