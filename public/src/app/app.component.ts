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
  newTask: any;
  edit: boolean;
  edited: any;

  constructor(private _httpService: HttpService) {}
  ngOnInit(){
    this.oneTask = {title:""}
    this.tasks = [];
    this.buttonClick = false;
    this.display = false;
    this.newTask = {title: "", description: ""}
    this.edit = false;
    this.edited = {title: "", description: ""}
  }

  //HIDE ALL TASKS AND SHOW BUTTON
  hide(){
    this.buttonClick = false;
  }

  //SHOW FORM TO EDIT TASK
  showForm(id){
    this.edit = true;
    this.getOneTaskFromService(id);
  }

  //REMOVE SHOW ALL TASKS BUTTONS
  showTasks(){
    this.buttonClick = true;
    this.getTasksFromService();
  }

  //SHOW TASK CARD
  showTask(id){
    this.display = true;
    this.getOneTaskFromService(id);
  }

  //DISPLAY ALL TASKS AND SHOW BUTTONS TO DISPLAY TASK DETAILS
  getTasksFromService() {
    let observable = this._httpService.getTasks()
    observable.subscribe((data: any) => {
      if(data.message == "success"){
        console.log('We got our data!', data.result);
        this.tasks = data.result;
      }
    });
  }

  //DISPLAY ONLY ONE TASK AND ITS DETAILS
  getOneTaskFromService(id) {
    let observable = this._httpService.getOneTask(id);
    observable.subscribe((data: any) => {
      if(data.message == "success"){
        console.log('We got one task', data.result);
        this.oneTask = data.result;
        this.edited = data.result;
      }
    });
  }

  //NEW TASK FORM SUBMISSION
  onSubmit(){
    let observable = this._httpService.newTask(this.newTask)
    observable.subscribe(data => {
      console.log("We made a new object", data)
    })
    this.newTask = {title: "", description: ""}
    this.getTasksFromService();
  }

  //EDIT TASK FORM SUBMISSION
  editTask(){
    let observable = this._httpService.editTask(this.edited._id, this.edited)
    observable.subscribe(data => {
      console.log("We made an edit", data)
    })
    this.getTasksFromService()
    this.getOneTaskFromService(this.edited._id)
  }

  //REMOVE TASK
  deleteTask(id){
    let observable = this._httpService.removeTask(id)
    observable.subscribe(data => {
      console.log("Delete:", data)
    })
    this.display = false;
    this.edit = false;
    this.getTasksFromService();
  }
}
