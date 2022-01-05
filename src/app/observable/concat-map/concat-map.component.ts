import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { concatMap, delay, map, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Ex-01 | Map
    source.pipe(
      map(res => this.getData(res))
      ).subscribe(res => res.subscribe(res2 => {
        this.designUtilityService.print(res2, 'elContainer1');
      }));

    // Ex-02 | mergeMap
    source.pipe(
      mergeMap(r => this.getData(r))
    ).subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer2');
    });

    // Ex-023| concatMap
    source.pipe(
      concatMap(r => this.getData(r))
    ).subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer3');
    });
  }

  getData(data) {
    return of(data + ' Video Uploaded').pipe(delay(2000));
  }
}
