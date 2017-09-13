import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task.component';
import { FormsModule } from '@angular/forms'

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, NewTaskComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
