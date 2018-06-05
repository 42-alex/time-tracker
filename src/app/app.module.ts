import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { TimerFormComponent } from './timer-form/timer-form.component';
import { TasksHistoryComponent } from './tasks-history/tasks-history.component';
import { DatedisplayPipe } from "./datedisplay.pipe";
import { KeysPipe } from "./keys.pipe";
import { TasksService } from "./tasks.service";


@NgModule({
  declarations: [
    AppComponent,
    TimerFormComponent,
    TasksHistoryComponent,
    DatedisplayPipe,
    KeysPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
