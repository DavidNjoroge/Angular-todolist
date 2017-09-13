import { Component } from '@angular/core'

@Component({
  selector: 'task-list',
  template: `
  <h3 id='asdf'>To-Do tasks</h3>
  <div *ngFor="let currentTask of tasks">
    <h3>{{ currentTask.description }}</h3>
    <button class="btn btn-primary btn-sm" (click)="showDetails(currentTask)">Edit</button>

    </div>
    <div *ngIf="selectedTask">
  <div>
        <label class="form-control-label" for="formGroupExampleInput">Enter Task Description:</label>
        <input [(ngModel)]="selectedTask.description"type="text" class="form-control" id="formGroupExampleInput" placeholder="">
      </div>
      <div>
      <label class="form-control-label" for="formGroupExampleInput">Task</label>
      <input [(ngModel)]="selectedTask.id" type="text" class="form-control" id="formGroupExampleInput" placeholder="">
  <button (click)="finishedEditing()">Done</button>
        </div>
  </div>
  `
})
export class TaskListComponent { }
