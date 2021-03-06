import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task.component';
import { TaskListComponent } from './task-list.component';
import { FormsModule } from '@angular/forms'
import { EditTaskComponent } from "./edit-task.component";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NewTaskComponent, TaskListComponent, EditTaskComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
