import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <h3 id='asdf'>To-Do tasks</h3>
  <div *ngFor="let currentTask of childTaskList">
    <h3>{{ currentTask.description }}</h3>
    <button class="btn btn-primary btn-sm" (click)="editButtonHasBeenClicked(currentTask)">Edit</button>

    </div>

  `
})
export class TaskListComponent {
  @Input() childTaskList: Task[]
  @Output() clickSender = new EventEmitter()
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit)
  }

}
