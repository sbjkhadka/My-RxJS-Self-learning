import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {

  techStatus;
  techStatus2;
  names;
  nameStatus;
  subs2: Subscription;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // Ex-01 Manual
    const cusObs1 = Observable.create(observer => {
      setTimeout(() => {
        observer.next('Angular');
      }, 1000);

      setTimeout(() => {
        observer.next('Typescript');
      }, 2000);

      setTimeout(() => {
        observer.next('HTML/CSS');
      }, 3000);

      setTimeout(() => {
        observer.next('JQuery');
        observer.error('error');
      }, 4000);

      setTimeout(() => {
        observer.next('Java');
        observer.complete();
      }, 5000);
    });
    cusObs1.subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer1');
    }, (err) => {
      this.techStatus = 'error';
    }, () => {
      this.techStatus = 'completed';
    });

    // Ex-02 Custom interval
    const Arr2 = ['Angular', 'Javascript', 'HTML', 'CSS', 'Typescript'];
    const cusObs2 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr2[count]);
        if (count >= 4) {
          observer.complete();
        }
        // if (count >= 3) {
        //   observer.error('Error');
        // }
        count++;
      }, 1000);
    });

    this.subs2 = cusObs2.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer2');
      console.log(res);
    }, (err) => {
      this.techStatus2 = 'error';
    }, () => {
      this.techStatus2 = 'completed';
    });

    // Ex-03 Random names
    const Arr3 = ['Subarna', 'Bijay', 'Khadka', 'Susan', 'Raut'];
    const cusObs3 = Observable.create(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(Arr3[count]);
        if (count >= 4) {
          observer.complete();
        }
        // if (count >= 3) {
        //   observer.error('Error');
        // }
        count++;
      }, 1000);
    });

    cusObs3.subscribe(res => {
      this.names = res;
    }, (err) => {
      this.nameStatus = 'error';
    }, () => {
      this.nameStatus = 'completed';
    });
  }

  ngOnDestroy(): void {
    this.subs2.unsubscribe();
  }


}
