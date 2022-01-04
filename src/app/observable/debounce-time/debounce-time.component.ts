import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';

@Component({
  selector: 'app-debounce-time',
  templateUrl: './debounce-time.component.html',
  styleUrls: ['./debounce-time.component.scss']
})
export class DebounceTimeComponent implements AfterViewInit {

  @ViewChild('searchInput') myInput: ElementRef;
  requestedData;
  searching = false;

  @ViewChild('searchInput2') myInput2: ElementRef;
  requestedData2;
  searching2 = false;
  constructor() { }

  ngAfterViewInit(): void {
    // Ex-01 Debounce Time
    const searchTerm = fromEvent<any>(this.myInput.nativeElement, 'keyup')
    .pipe(
      map(event => event.target.value),
      debounceTime(2000)
    );

    searchTerm.subscribe(res => {
      this.requestedData = res;
      this.searching = true;
      // Do your API call here
      setTimeout(() => {
        this.requestedData = null;
        this.searching = false;
      }, 2000);
    });


    // Ex-01 distinctUntilChangedj
    const searchTerm2 = fromEvent<any>(this.myInput2.nativeElement, 'keyup')
      .pipe(
        map(event => event.target.value),
        debounceTime(2000),
        distinctUntilChanged()
      );

    searchTerm2.subscribe(res => {
      this.requestedData2 = res;
      this.searching2 = true;
      // Do your API call here
      setTimeout(() => {
        this.requestedData2 = null;
        this.searching2 = false;
      }, 2000);
    });
  }

}
