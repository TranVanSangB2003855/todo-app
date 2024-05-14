import { Task } from '../data/task';
import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { MatIconModule } from '@angular/material/icon';
import { TodoService } from '../services/todo.service';
import { MatDialog } from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
  standalone: true,
  imports: [CdkDropListGroup, CdkDropList, NgFor, NgIf, CdkDrag, MatIconModule, RouterModule],
})
export class TodoListComponent {

  constructor(private todoService: TodoService, public dialog: MatDialog){}

  newTaskList: Task[] =this.todoService.getNewTasks();
  inProgressTaskList: Task[] =this.todoService.getInProgressTasks();
  doneTaskList: Task[] =this.todoService.getDoneTasks();

  openDialog(index: number, task: Task, currentStatus: string): void {
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '600px',
      data: {task, title: "Edit task"},
    });

    dialogRef.componentInstance.event.subscribe((result) => {
      console.log(result, currentStatus)
      this.todoService.updateTask(index, result, currentStatus);
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    // });
  }

  deleteTask(index: number, currentStatus: string) {
    this.todoService.deleteTask(index, currentStatus);
  }

  drop(event: CdkDragDrop<Task[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

}
