import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { Task } from 'src/app/data/task';
import { TodoService } from '../services/todo.service';
import { Location, NgIf  } from '@angular/common';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent {
updateTask() {
throw new Error('Method not implemented.');
}
  task: Task = {
    id: 0,
    name: 'Develop training materials for new software rollout',
    description: 'Create instructional guides and videos to facilitate the transition to new software across the organization.'
  }
  constructor(public dialog: MatDialog, private todoService: TodoService, public location: Location) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '600px',
      data: {task: this.task, title: "Add new task"},
    });

    dialogRef.componentInstance.event.subscribe((newTask) => {
      console.log(newTask)
      this.todoService.addNewTask(newTask)
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }
}
