import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { 
    this.getTasks();
    this.getOneTask();
  }
  getTasks(){
    let tempObservable = this._http.get('/api/tasks');
    tempObservable.subscribe(data => console.log("Got our data, ", data));
  }
  getOneTask(){
    let temp = this._http.get('/api/tasks/5dc1e954baee4a4814db40d3');
    temp.subscribe(data => console.log("Got one task, ", data));
  }
}
