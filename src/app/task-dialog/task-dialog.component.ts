// import { task } from './../../data/task';
import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { TodoService } from '../services/todo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NameWhiteSpace } from '../validator/nameWhiteSpace.validator';

@Component({
  selector: 'app-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.css']
})
export class TaskDialogComponent {
  public event: EventEmitter<any> = new EventEmitter();

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public todoService: TodoService
  ) {
  }

  form = new FormGroup({
    name: new FormControl(this.data.task.name || '', [Validators.required, NameWhiteSpace.noSpaceAllowed]),
    description: new FormControl(this.data.task.description || ''),
  });

  get formControls() {
    return this.form.controls;
  }

  // getErrorMessage() {
  //   if(this.form.controls.name.errors?.['required']) {
  //     return 'You must enter a value'
  //   }

  //   else return this.form.controls.name.errors?.['noSpaceAllowed'] ? 'Whitespace is not allowed' : '';
  // }

  onSubmit(): void {
    this.form.value.name = this.form.value.name.trim()
    this.form.value.description = this.form.value.description.trim()
    this.event.emit({ ...this.data.task, ...this.form.value });
    this.dialogRef.close();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
