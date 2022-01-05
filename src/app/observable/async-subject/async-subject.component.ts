import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {

  asyncVideoEmit;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    this.designUtilityService.asyncVideoEmit.subscribe(res => {
      this.asyncVideoEmit = res;
    });
  }

  onVideoAdd(video) {
    this.designUtilityService.asyncVideoEmit.next(video);
  }

  onComplete() {
    this.designUtilityService.asyncVideoEmit.complete();
  }

}
