import { Component, OnInit } from '@angular/core';
import { from, of } from 'rxjs';
import { map, mergeAll, mergeMap } from 'rxjs/operators';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-mergemap',
  templateUrl: './mergemap.component.html',
  styleUrls: ['./mergemap.component.scss']
})
export class MergemapComponent implements OnInit {

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit(): void {

    const source = from(['Tech', 'Comedy', 'News']);

    // Ex-01 | Map
    source.pipe(
      map(res => this.getData(res))
    ).subscribe(res => {
      this.designUtilityService.print(res, 'elContainer1');
    });

    // Ex-02 | Map + mergeAll
    source.pipe(
      map(res => this.getData(res)),
      mergeAll()
    ).subscribe(res => {
      this.designUtilityService.print(res, 'elContainer2');
    });

    // Ex-023| MergeMap
    source.pipe(
      mergeMap(r => this.getData(r))
    ).subscribe(res => {
      console.log(res);
      this.designUtilityService.print(res, 'elContainer3');
    });

  }

  getData(data) {
    return of(data + ' Video Uploaded');
  }

}
