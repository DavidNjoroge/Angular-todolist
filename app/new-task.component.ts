import { Component } from '@angular/core'

@Component({
  selector: 'new-task',
  template: `<h3>{{newTask}}</h3>`
})

export class NewTaskComponent {
  newTask: string = 'i am here niegas(left)'

}
