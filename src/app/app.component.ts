import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
      <div class="container">
          <app-timer-form></app-timer-form>
          <app-tasks-history></app-tasks-history>
      </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}
