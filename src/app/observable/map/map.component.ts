import { Component, OnInit } from '@angular/core';
import { from, interval, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  sub1: Subscription;
  sub2: Subscription;
  msg1;
  msg2;
  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    // Ex-01
    const broadCastVideo = interval(1000);
    this.sub1 = broadCastVideo.pipe(
      map(data => 'Video-' + data)
    )
    .subscribe(res => {
      this.msg1 = res;
    });

    setTimeout(() => {
      this.sub1.unsubscribe();
    }, 5000);

    // Ex-02
    this.sub2 = broadCastVideo.pipe(map(data => data * 10)).subscribe(res => {
      console.log(res);
      this.msg2 = res;
    });

    setTimeout(() => {
      this.sub2.unsubscribe();
    }, 10000);


    // Ex-03

    const members = from([
      { id: 1, name: 'Subarna' },
      { id: 2, name: 'Bijaya' },
      { id: 3, name: 'Khadka' },
      { id: 4, name: 'Hari' },
      { id: 5, name: 'Bhakta' },
      { id: 6, name: 'Khadka' },
      { id: 7, name: 'Sushila' },
      { id: 8, name: 'Khadka' },
    ]);

    members.pipe(map(data => data.name)).subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer');
    });
  }

}
