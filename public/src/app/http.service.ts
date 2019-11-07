import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    // this.getTasks();
    // this.getOneTask();
  }
  getTasks(){
    return this._http.get('/api/tasks');
  }
  getOneTask(){
    return this._http.get('/api/tasks/5dc1e954baee4a4814db40d3');
  }
}
