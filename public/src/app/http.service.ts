import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
  }
  getTasks(){
    return this._http.get('/api/tasks');
  }
  getOneTask(id){
    return this._http.get(`api/tasks/${id}`)
  }
  // editTask(id, toEdit){
  //   return this._http.put(`api/tasks/${id}/edit`, toEdit);
  // }
  // removeTask(id){
  //   return this._http.delete(`/api/tasks/${id}/delete`);
  // }
  // newTask(newTask){
  //   return this._http.post(`/api/tasks/new`, newTask);
  // }
}

//ID TO USE: 5dc1e954baee4a4814db40d3
