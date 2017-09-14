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
<new-task></new-task>
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
  public masterTaskList: Task[] = [
    new Task("Create To-Do List app.", 0),
    new Task("Learn Kung Fu.", 1),
    new Task("Rewatch all the Lord of the Rings movies.", 2),
    new Task("Do the laundry.", 3)
  ];
  selectedTask: Task = null;
  showDetails(clickedTask: Task) {
    this.selectedTask = clickedTask;
  }
  finishedEditing() {
    this.selectedTask = null;
  }
}

export class Task {
  public done: boolean = false;
  constructor(public description: string, public id: number) { }
}
