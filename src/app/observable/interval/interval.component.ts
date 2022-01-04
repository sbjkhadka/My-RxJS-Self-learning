import { Component, OnInit } from '@angular/core';
import { interval, Subscriber, Subscription, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {

  obsMsg;
  videoSubscription: Subscription;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // const broadcastVideos = interval(500);
    // Timer is same as interval except it starts after a certain delay timer(delay, interval)
    const broadcastVideos = timer(5000, 500);
    this.videoSubscription = broadcastVideos.subscribe(res => {
      this.obsMsg = 'Video - ' + res;
      this.designUtilityService.print(this.obsMsg, 'elContainer1');
      this.designUtilityService.print(this.obsMsg, 'elContainer2');
      this.designUtilityService.print(this.obsMsg, 'elContainer3');
      if (res >= 5) {
        this.videoSubscription.unsubscribe();
      }
    });
  }

}
