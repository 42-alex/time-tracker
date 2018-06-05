import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { TasksService } from "../tasks.service";
import { AppConfig } from "../app.config";

@Component({
  selector: 'app-tasks-history',
  templateUrl: './tasks-history.component.html',
  styleUrls: ['./tasks-history.component.css']
})
export class TasksHistoryComponent implements OnInit {

	@Output() onContinueTask = new EventEmitter<{}>();
  projectNames = {};
  tasks = [];

  constructor(private taskService: TasksService) {}

	ngOnInit() {
		this.tasks = this.taskService.tasks;
    this.projectNames =  AppConfig.projectNames;
	}

	onPlayClick(taskName, projectName) {
    this.onContinueTask.emit({"startDate": +new Date(), "taskName": taskName, "projectName": projectName});
	}

}
