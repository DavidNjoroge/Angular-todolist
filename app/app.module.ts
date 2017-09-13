import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { NewTaskComponent } from './new-task.component';

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, NewTaskComponent],
  bootstrap: [AppComponent]
})

export class AppModule { }
