import { Component, OnInit } from '@angular/core';
import { concat, interval, merge } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {
    const sourceTech = interval(3000).pipe(map(v => 'Tech Video #' + (v + 1)), take(3));
    const sourceComedy = interval(4000).pipe(map(v => 'Comedy Video #' + (v + 1)), take(3));
    const sourceNews = interval(3500).pipe(map(v => 'News Video #' + (v + 1)), take(3));

    const finalObs = merge(sourceTech, sourceComedy, sourceNews);

    finalObs.subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer');
    });
  }

}
