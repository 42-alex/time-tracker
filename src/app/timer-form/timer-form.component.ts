import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import { AppConfig } from '../app.config';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.css']
})
export class TimerFormComponent {

  @ViewChild('timerFormRef') timerForm: NgForm;
  projectNames: { value: string, label: string }[];
  isTimerStarted: boolean = false;

  startDate: any;
  timerValue = 0;
  timerValueDisplay = '0';

  constructor() {
    this.projectNames = AppConfig.projectNames;
  }

  startTimer() {
    this.isTimerStarted = true;

    this.startDate = new Date();
    setInterval(() => {this.timerValueDisplay = this.getFormattedTime(this.timerValue++)},2)
  }
  stopTimer() {
    this.isTimerStarted = false;
  }
  getFormattedTime(seconds) {
    if (seconds < 60) {
      return `${seconds} sec`
    }

    let minutes = Math.floor(seconds/60);
    if (minutes < 60) {
      return `${minutes} min`
    } else {
      let hours = Math.floor(minutes/60);
      minutes -= hours * 60;
      return `${hours}h ${minutes} min`
    }
  }
  submitForm() {
    this.startTimer();
  }

}
