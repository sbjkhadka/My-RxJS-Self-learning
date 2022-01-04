import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/internal/observable/from';
import { of } from 'rxjs/internal/observable/of';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent implements OnInit {

  obsMsg;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // Of example
    const obs1 = of('Subarna', 'Bijay', 'Khadka');
    obs1.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer');
    });

    const obs2 = of({firstName: 'Subarna', middleName: 'Bijay', lastName: 'Khadka'});
    obs2.subscribe(res => {
      this.obsMsg = res;
    });

    // from example
    // From Array
    const obs3 = from(['Hari', 'Bhakta', 'Khadka']);
    obs3.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer3');
    });

    // from promise
    const promise = new Promise((resolve) => {
      setTimeout(() => {
        resolve('Promise resolved');
      }, 3000);
    });
    const obs4 = from(promise);
    obs4.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer4');
    });

    // from string
    const obs5 = from('I am learning RxJS');
    obs5.subscribe(res => {
      this.designUtilityService.print(res, 'elContainer5');
    });
  }

}
