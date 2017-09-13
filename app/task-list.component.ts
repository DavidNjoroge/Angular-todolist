import { Component, Input } from '@angular/core'
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
  <h3 id='asdf'>To-Do tasks</h3>
  <div *ngFor="let currentTask of childTaskList">
    <h3>{{ currentTask.description }}</h3>
    <button class="btn btn-primary btn-sm" (click)="showDetails(currentTask)">Edit</button>

    </div>

  `
})
export class TaskListComponent {
  @Input() childTaskList: Task[]

}
