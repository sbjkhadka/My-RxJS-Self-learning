import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, timer } from 'rxjs';
import { take, takeLast, takeUntil } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit {

  randomNames = ['Subarna', 'Bijaya', 'Khadka', 'Hari', 'Khakta', 'Sushila'];
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    const  nameSource = from(this.randomNames);
    // Ex-01 Take
    nameSource.pipe(take(5))
    .subscribe(res => {
      this.designUtilityService.print(res, 'elContainer1');
    });

    // Ex-02 TakeLast
    nameSource.pipe(takeLast(5))
      .subscribe(res => {
        this.designUtilityService.print(res, 'elContainer2');
      });

    // Ex-02 TakeUntil
    const source = interval(1000);
    const condition1 = timer(6000);
    const condition2 = fromEvent(document, 'click');
    source.pipe(takeUntil(condition2))
      .subscribe(res => {
        this.designUtilityService.print(res, 'elContainer3');
      });
  }

}
