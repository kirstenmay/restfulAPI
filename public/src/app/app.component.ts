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
  buttonClick: boolean;
  display: boolean;

  constructor(private _httpService: HttpService) {}
  ngOnInit(){
    this.oneTask = {title:""}
    this.tasks = [];
    this.buttonClick = false;
    this.display = false;
  }

  showTasks(){
    this.buttonClick = true;
    this.getTasksFromService();
  }
  showTask(id){
    console.log(id)
    console.log("show task is running")
    this.display = true;
    this.getOneTaskFromService(id);
  }
  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe((data: any) => {
      if(data.message == "success"){
        console.log('We got our data!', data.result);
        this.tasks = data.result;
      }
    });
  }
  getOneTaskFromService(id) {
    console.log("get one in app component running")
    let observable = this._httpService.getOneTask(id);
    observable.subscribe((data: any) => {
      console.log("We got something", data)
      if(data.message == "success"){
        console.log('We got one task', data.result);
        this.oneTask = data.result;
      }
    });
  }
}
