import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
  <div class='jumbotron'>
  <h1>To do app Angular</h1>
  </div>
  </div>
  <div class='container'>
<div class='row'>
<div class='col-md-6'>
<new-task
(newTaskSender)="addTask($event)"
></new-task>
<edit-task
  [childSelectedTask]="selectedTask"
  (finishedEditingSender)='finishedEditing()'
></edit-task>
</div>
<div class='col-md-6'>
<task-list
[childTaskList]="masterTaskList"
(clickSender)='showDetails($event)'
></task-list>
</div>

</div>

  </div>
  `
})

export class AppComponent {
  public masterTaskList: Task[] = [];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
  addTask(newTaskFromChid: Task) {
    this.masterTaskList.push(newTaskFromChid)
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) { }
}
