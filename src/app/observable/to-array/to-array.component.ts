import { Component, OnInit } from '@angular/core';
import { from, interval, of, Subscription } from 'rxjs';
import { take, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit {

  sourceSub: Subscription;
  users = [
    { name: 'Subarna', skill: 'Angular' },
    { name: 'Johny', skill: 'React' },
    { name: 'Kunwoo', skill: 'React' },
    { name: 'Ayhan', skill: 'Java' }
  ];
  constructor() { }

  ngOnInit(): void {
    // Ex-01
    const source = interval(1000);
    source.pipe(take(5), toArray())
    .subscribe(res => {
      console.log(res);
    });

    // Ex-02
    const source2 = from(this.users);
    source2.pipe(toArray())
    .subscribe(res => {
      console.log(res);
    });

    // Ex-02
    const source3 = of('Hello', 'Mr', 'X');
    source3.pipe(toArray())
    .subscribe(res => {
      console.log(res);
    });
  }

}
