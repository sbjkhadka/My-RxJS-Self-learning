import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, tap, toArray } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {

  source = interval(2000);
  myColor: string;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    let obsSubscription: Subscription;
    // Ex-01
    const Arr = ['Subarna', 'Bijaya', 'Khadka', 'Hari', 'Bhakta', 'Sushila', 'Susan'];
    obsSubscription = this.source.pipe(
      tap(res => {
        if (res >= Arr.length) {
          obsSubscription.unsubscribe();
        }}),
      map(res => Arr[res]))
    .subscribe(res => {
      this.designUtilityService.print(res, 'elContainer1');
    });

    // Ex-02
    let obsSubscription2: Subscription;
    const Colors = ['Red', 'Green', 'Blue', 'Orange', 'Yellow', 'Purple', 'Cyan'];
    obsSubscription2 = this.source.pipe(
      tap(res => {
        this.myColor = Colors[res];
        if (res >= Colors.length) {
          obsSubscription2.unsubscribe();
        }
      }),
      map(res => Colors[res]))
      .subscribe(res => {
        this.designUtilityService.print(res, 'elContainer2');
      });
  }

}
