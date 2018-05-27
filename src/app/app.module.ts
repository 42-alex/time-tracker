import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TimerFormComponent } from './timer-form/timer-form.component';
import { TasksHistoryComponent } from './tasks-history/tasks-history.component';


@NgModule({
  declarations: [
    AppComponent,
    TimerFormComponent,
    TasksHistoryComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
