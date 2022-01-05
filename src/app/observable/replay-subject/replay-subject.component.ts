import { Component, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-replay-subject',
  templateUrl: './replay-subject.component.html',
  styleUrls: ['./replay-subject.component.scss']
})
export class ReplaySubjectComponent implements OnInit {


  // List data
  user1List = [];
  user2List = [];
  user3List = [];

  // Subscribe modes
  subscribeMode2 = false;
  subscribeMode3 = false;

  // Subscriptions
  subscription2: Subscription;
  subscription3: Subscription;

  // Toggle properties
  methodInterval = false;
  intSubscription: Subscription;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtilityService.videoEmit.subscribe(res => {
      console.log(res);
      this.user1List.push(res);
    });
  }

  onVideoAdd(video) {
    this.designUtilityService.videoEmit.next(video);
  }

  user2Subscribe() {
    if (this.subscribeMode2) {
      this.subscription2.unsubscribe();
    } else {
      this.subscription2 = this.designUtilityService.videoEmit.subscribe(res => {
        this.user2List.push(res);
      });
    }
    this.subscribeMode2 = !this.subscribeMode2;
  }
  user3Subscribe() {
    if (this.subscribeMode3) {
      this.subscription3.unsubscribe();
    } else {
      this.subscription3 = this.designUtilityService.videoEmit.subscribe(res => {
        this.user3List.push(res);
      });
    }
    this.subscribeMode3 = !this.subscribeMode3;
  }

  toggleMethod() {
    const broadcastVideo = interval(1000);
    if (this.methodInterval) {
      this.intSubscription.unsubscribe();
    } else {
      this.intSubscription = broadcastVideo.subscribe(res => {
        this.designUtilityService.videoEmit.next('Video ' + res);
      });
    }
    this.methodInterval = !this.methodInterval;

  }

}
