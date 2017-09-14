import { Component, Input, Output, EventEmitter } from '@angular/core'
import { Task } from './task.model'
@Component({
  selector: 'new-task',
  template: `
<button type="button" class="btn btn-lg btn-primary" disabled>New Task</button>
<div class="form-group" id='form'>
  <label class="form-control-label" for="formGroupExampleInput" >Task</label>
  <input type="text" class="form-control" id="formGroupExampleInput" placeholder="new task" #newDescription>

  <label class="form-control-label" for="formGroupExampleInput" >Id</label>
  <input type="text" class="form-control" id="formGroupExampleInput" #newId>
  <button type="button" class="btn btn-primary btn-sm" (click)="addClicked(newDescription.value, newId.value)">Done</button>
</div>


  `
})

export class NewTaskComponent {
  @Output() newTaskSender = new EventEmitter()
  addClicked(des: string, id: number) {
    var newTaskToAdd: Task = new Task(des, id);
    this.newTaskSender.emit(newTaskToAdd);
  }

}
