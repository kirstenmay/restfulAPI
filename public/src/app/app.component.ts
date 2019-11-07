import { Component, OnInit } from '@angular/core';
import {HttpService} from './http.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MEAN';
  tasks: any;
  oneTask: any;

  constructor(private _httpService: HttpService) {}
  ngOnInit(){
    this.oneTask = {title:""}
    this.tasks = [];
    this.getTasksFromService();
    this.getOneTaskFromService();
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe(data => {
      console.log('We got our data!', data);
      this.tasks = data;
      console.log(this.tasks);
    });
  }
  getOneTaskFromService() {
    let observable = this._httpService.getOneTask()
    observable.subscribe(data => {
      console.log('We got one task', data);
      this.oneTask = data;
    });
  }
}
