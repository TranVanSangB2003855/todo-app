import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { NgIf } from '@angular/common';

import { Task } from 'src/app/data/task'
import { TodoService } from '../services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NotifyComponent } from '../notify/notify.component';
import { NameWhiteSpace } from '../validator/nameWhiteSpace.validator';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task!: { id: number, name: string, description: string, status: string, index: number };
  // taskForm = {
  //   name: "",
  //   description: "",
  //   status: "newTaskList"
  // };
  taskForm = new FormGroup({
    name: new FormControl<string>(this.task?.name || '', [Validators.required, NameWhiteSpace.noSpaceAllowed]),
    description: new FormControl<string>(this.task?.description || ''),
    status: new FormControl<string>(this.task?.status || 'newTaskList', [Validators.required])
  });
  statusList = [
    { value: 'newTaskList', viewValue: 'Todo' },
    { value: 'inProgressTaskList', viewValue: 'In Progress' },
    { value: 'doneTaskList', viewValue: 'Done' }
  ];
  notFoundTask: boolean = true;

  constructor(private route: ActivatedRoute, private todoService: TodoService, private _snackBar: MatSnackBar) { }

  ngOnInit() {
    // First get the product id from the current route.
    const routeParams = this.route.snapshot.paramMap;
    const taskIdFromRoute = Number(routeParams.get('taskId'));

    // Find the product that correspond with the id provided in route.
    let result = this.todoService.findTaskById(taskIdFromRoute);
    if (result.id != 0) {
      this.notFoundTask = false
      this.task = { ...result }
      // this.taskForm.value.name = this.task.name
      // this.taskForm.value.description = this.task.description
      // this.taskForm.value.status = this.task.status
      this.taskForm.controls['name'].setValue(this.task.name)
      this.taskForm.controls['description'].setValue(this.task.description)
      this.taskForm.controls['status'].setValue(this.task.status)

    }
  }

  onSubmit(): void {
    let index = this.task.index;
    if (this.task.status !== this.taskForm.value.status) {
      this.todoService.changeStatusTask(this.task.id, this.task.status, this.taskForm.value.status || 'newTaskList');

      if (this.taskForm.value.status === 'newTaskList') {
        index = this.todoService.getNewTasks().length - 1;
      } else if (this.taskForm.value.status === 'inProgressTaskList') {
        index = this.todoService.getInProgressTasks().length - 1;
      } else if (this.taskForm.value.status === 'doneTaskList') {
        index = this.todoService.getDoneTasks().length - 1;
      }
    }

    // this.taskForm.value.name = this.taskForm.value.name?.toString().trim()
    // this.taskForm.value.description = this.taskForm.value.description?.toString().trim()
    this.taskForm.controls['name'].setValue(this.taskForm.value.name?.toString().trim() || '')
    this.taskForm.controls['description'].setValue(this.taskForm.value.description?.toString().trim() || '')
    const data = {
      ...this.task,
      name: this.taskForm.value.name || "",
      description: this.taskForm.value.description || "",
      status: this.taskForm.value.status || "newTaskForm",
    }

    if(this.task.status !== 'doneTaskList')
      this.todoService.updateTask(index, data, data.status);

    this.task = {
      ...this.task,
      ...data
    }
    // console.log(this.task)
    this.openSnackBar()
  }

  onReset(): void {
    this.taskForm.controls['name'].setValue(this.task.name)
    this.taskForm.controls['description'].setValue(this.task.description)
    this.taskForm.controls['status'].setValue(this.task.status)
  }

  openSnackBar() {
    this._snackBar.openFromComponent(NotifyComponent, {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }

}
