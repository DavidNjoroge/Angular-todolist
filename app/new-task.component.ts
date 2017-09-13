import { Component } from '@angular/core'

@Component({
  selector: 'new-task',
  template: `
<button type="button" class="btn btn-lg btn-primary" disabled>New Task</button>

<div class="form-group" id='form'>
    <label class="form-control-label" for="formGroupExampleInput">Task</label>
    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="new task">
    <button type="button" class="btn btn-primary btn-sm">Done</button>
  </div>


  `
})

export class NewTaskComponent {
  newTask: string = 'i am here niegas(left)'

}
