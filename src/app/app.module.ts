import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoListComponent } from './todo-list/todo-list.component';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatSnackBarModule } from '@angular/material/snack-bar'

import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import { NotifyComponent } from './notify/notify.component';
import { TrimModule } from './helper/trim.module'

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    TaskDialogComponent,
    NotifyComponent,
    TaskDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    TodoListComponent,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule,
    TrimModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
