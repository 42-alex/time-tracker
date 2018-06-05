export class TasksService {
  tasks = JSON.parse(localStorage.getItem('timerTasks'))
    || [{"startDate":1527916346944,"taskName":"Reading chapters 11-14","projectName":"reading_books","finishDate":1527920599618}];

  getUnfinishedTask() {
    return JSON.parse(localStorage.getItem('timerCurrentTask'));
  }

  logStartTimer(startDate, taskName, projectName) {
    localStorage.setItem(
      'timerCurrentTask',
      JSON.stringify({
        "startDate": startDate,
        "taskName": taskName,
        "projectName": projectName
      })
    );
  }

  logFinishTimer(finishDate) {
    let timerCurrentTask = JSON.parse(localStorage.getItem('timerCurrentTask'));
    timerCurrentTask["finishDate"] = finishDate;
    this.addNewTask(timerCurrentTask);
    localStorage.removeItem('timerCurrentTask');
  }

  addNewTask(task) {
    this.tasks.push(task);
    localStorage.setItem('timerTasks', JSON.stringify(this.tasks));
  }
}
