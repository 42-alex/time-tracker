import { Pipe, PipeTransform } from '@angular/core';
import { AppConfig } from './app.config';
import * as moment from 'moment';
import 'moment-duration-format';

@Pipe({
  name: 'appDatedisplay'
})
export class DatedisplayPipe implements PipeTransform {
  transform(value: any, type: string = 'range') {
    if(typeof(value) !== 'undefined') {

      let result;

      switch (type) {
        case 'start':
          let todayDate = moment(AppConfig.todayDate).format("ddd, DD MMM");
          let taskDate = moment(+value.startDate).format("ddd, DD MMM");
          if (todayDate === taskDate) {
            result = 'Today';
          } else {
            result = moment(+value.startDate).format("ddd, DD MMM");
          }
          break;

        case 'range':
          let rangeStartDate = moment(+value.startDate).format("HH:mm");
          let rangeFinishDate = moment(+value.finishDate).format("HH:mm");
          result = `${rangeStartDate } - ${rangeFinishDate}`;
          break;

        case 'spent':
          let startDate = moment(+value.startDate);
          let finishDate = moment(+value.finishDate);
          let duration = moment.duration(finishDate.diff(startDate));
          result = (duration as any).format("hh:mm:ss", {trim: false});
      }

      return result;

    } else {
      return;
    }
  }
}
