import { Component, ViewChild } from '@angular/core';
import { TimerFormComponent } from "./timer-form/timer-form.component";

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
          <app-timer-form></app-timer-form>
          <app-tasks-history (onContinueTask)="continueTask($event)"></app-tasks-history>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild(TimerFormComponent)
  timerComponent: TimerFormComponent;

  continueTask(data) {
    this.timerComponent.continueTask(data);
  }

}
