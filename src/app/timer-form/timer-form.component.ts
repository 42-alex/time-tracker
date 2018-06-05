import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TasksService } from "../tasks.service";
import { AppConfig } from '../app.config';
import * as moment from 'moment';

@Component({
  selector: 'app-timer-form',
  templateUrl: './timer-form.component.html',
  styleUrls: ['./timer-form.component.css']
})
export class TimerFormComponent implements OnInit {

  @ViewChild('timerFormRef') timerForm: NgForm;
  projectNames: {};
  isTimerStarted: boolean = false;
  timerInterval: any;
  timerValue = 1;
  timerValueDisplay = '0';
  unfinishedTask: any;

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.projectNames = AppConfig.projectNames;
    this.unfinishedTask = this.tasksService.getUnfinishedTask();

    if (this.unfinishedTask) {
      let startDate = moment(+this.unfinishedTask.startDate);
      let currentDate = moment(+new Date());
      this.timerValue = Math.floor(moment.duration(currentDate.diff(startDate)).as('seconds'));
      setTimeout(
        () => {
          this.continueTask({startDate: this.unfinishedTask.startDate, taskName: this.unfinishedTask.taskName, projectName: this.unfinishedTask.projectName})
        },
        0);
    }
  }

  startTimer(data) {
    if(this.timerForm.valid) {
      this.isTimerStarted = true;
      this.timerInterval = setInterval(() => {this.timerValueDisplay = this.getFormattedTime(this.timerValue++)},1000);
      this.tasksService.logStartTimer(data.startDate, data.taskName, data.projectName);
    }
  }

  stopTimer() {
    this.isTimerStarted = false;
    this.tasksService.logFinishTimer(+new Date());
    this.prepareForm();
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

  continueTask(data) {
    if(this.isTimerStarted) {
      this.stopTimer();
    }
    this.timerForm.form.patchValue({startDate: data.startDate, taskName: data.taskName, projectName: data.projectName});
    this.startTimer(data);
  }

  submitForm() {
    this.startTimer({startDate: +new Date(), taskName: this.timerForm.value.taskName, projectName: this.timerForm.value.projectName});
  }

  prepareForm() {
    clearInterval(this.timerInterval);
    this.timerForm.resetForm();
    this.timerValue= 1;
    this.timerValueDisplay = '0';
  }

}
