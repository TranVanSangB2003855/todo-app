import { Injectable } from '@angular/core';
import { Task, newTasks, inProgressTasks, doneTasks } from '../data/task';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  newTaskList: Task[] = [...newTasks];
  inProgressTaskList: Task[] = [...inProgressTasks];
  doneTaskList: Task[] = [...doneTasks];
  maxId: number = newTasks.length + inProgressTasks.length + doneTasks.length;
  lookupObj: { [key: string]: any } = {
    newTaskList: this.newTaskList,
    inProgressTaskList: this.inProgressTaskList,
    doneTaskList: this.doneTaskList
  }

  getNewTasks() {
    return this.newTaskList;
  }

  getInProgressTasks() {
    return this.inProgressTaskList;
  }

  getDoneTasks() {
    return this.doneTaskList;
  }

  addNewTask(data: Task) {
    this.newTaskList.push({
      ...data,
      id: ++this.maxId,
    })
  }

  updateTask(index: number, data: Task, currentStatus: string) {
    this.lookupObj[currentStatus][index] = { ...data }

    // for (let i = 0; i < this.lookupObj[currentStatus].length; ++i) {
    //   if (this.lookupObj[currentStatus][i].id === data.id) {
    //     this.lookupObj[currentStatus][i] = { ...data }
    //     console.log("updateTask", this.lookupObj[currentStatus][i])
    //     return
    //   }
    // }
  }

  deleteTask(index: number, currentStatus: string) {
    this.lookupObj[currentStatus].splice(index, 1)
    // console.log("deleteTask",this.lookupObj[currentStatus])
  }

  findTaskById(taskId: number) {
    const status = ["newTaskList", "inProgressTaskList", "doneTaskList"]

    for (let sta of status) {
      for (let i = 0; i < this.lookupObj[sta].length; ++i) {
        if (this.lookupObj[sta][i].id === taskId) {
          return {
            ...this.lookupObj[sta][i],
            status: sta,
            index: i
          }
        }
      }
    }

    return {
      id: 0, name: '', description: '', status: 'newTaskList'
    }

    // let task = this.newTaskList.find(t => t.id === taskId);
    // let status = (task) ? "newTaskList" : ""
    // if (!task) {
    //   task = this.inProgressTaskList.find(t => t.id === taskId);
    //   status = "inProgressTaskList";
    // }

    // if (!task) {
    //   task = this.doneTaskList.find(t => t.id === taskId);
    //   status = "doneTaskList";
    // }
    // if (!task) return { id: 0, name: '', description: '', status }
    // else return { ...task, status }
  }

  changeStatusTask(taskId: number, currentStatus: string, newStatus: string) {
    console.log(taskId, currentStatus, newStatus)
    for (let i = 0; i < this.lookupObj[currentStatus].length; ++i) {
      if (this.lookupObj[currentStatus][i].id === taskId) {
        this.lookupObj[newStatus].push({ ...this.lookupObj[currentStatus][i] })
        this.lookupObj[currentStatus].splice(i, 1)
        return
      }
    }
  }
}
