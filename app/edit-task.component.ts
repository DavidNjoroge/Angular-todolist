import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Task } from './task.model'
@Component({
  selector: 'edit-task',
  template: `
<div *ngIf="childSelectedTask">
<h1>Edit Task</h1>
<div>
    <label class="form-control-label" for="formGroupExampleInput">Enter Task Description:</label>
    <input [(ngModel)]="childSelectedTask.description"type="text" class="form-control" id="formGroupExampleInput" placeholder="">
  </div>
  <div>
  <label class="form-control-label" for="formGroupExampleInput">Task</label>
  <input [(ngModel)]="childSelectedTask.id" type="text" class="form-control" id="formGroupExampleInput" placeholder="">
<button (click)="finishedEditing()">Done</button>
    </div>


</div>




  `
})


export class EditTaskComponent {
  @Input() childSelectedTask: Task[]
  @Output() finishedEditingSender = new EventEmitter()
  finishedEditing() {
    this.finishedEditingSender.emit()
  }
}
