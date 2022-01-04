import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { filter, take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  dataArr = [
    { id: 1, name: 'Subarna', gender: 'Male'},
    { id: 2, name: 'Susan', gender: 'Female' },
    { id: 3, name: 'Hari', gender: 'Male' },
    { id: 4, name: 'Chudamani', gender: 'Male' },
    { id: 5, name: 'Sharaddha', gender: 'Female' },
    { id: 6, name: 'Anima', gender: 'Female' },
    { id: 7, name: 'Ashim', gender: 'Male' },
    { id: 8, name: 'Sushila', gender: 'Female' },
    { id: 9, name: 'Prashiddhi', gender: 'Female' },
    { id: 10, name: 'Samita', gender: 'Female' },
    { id: 11, name: 'Ganesh', gender: 'Male' },
    { id: 12, name: 'Nir', gender: 'Male' },
  ];
  data;
  data2;
  data3;
  constructor() { }

  ngOnInit(): void {
    const source = from(this.dataArr);

    // Ex-01 Filter by length
    source.pipe(
      filter(member => member.name.length > 6),
      toArray()
      ).subscribe(res => {
      this.data = res;
    });


    // Ex-02 Filter by gender
    source.pipe(
      filter(member => member.gender.toLowerCase() === 'male'),
      toArray()
    ).subscribe(res => {
      this.data2 = res;
    });

    // Ex-03 Filter by number of items
    source.pipe(
      filter(member => member.id <= 6),
      toArray()
    ).subscribe(res => {
      this.data3 = res;
    });

    // better way of doing is to use take operator
    // source.pipe(
    //   take(6),
    //   toArray()
    // ).subscribe(res => {
    //   this.data3 = res;
    // });
  }

}
