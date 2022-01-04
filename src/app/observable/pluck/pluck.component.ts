import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/internal/operators/map';
import { pluck, toArray } from 'rxjs/operators';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit {

  users = [
    { name: 'Subarna', skills: 'Angular', job: { title: 'Front end dev', exp: '10 yrs'} },
    { name: 'Bijaya', skills: 'HTML', job: { title: 'HTML end dev', exp: '11 yrs' }},
    { name: 'Khadka', skills: 'CSS', job: { title: 'CSS end dev', exp: '12 yrs' }},
    { name: 'Johnny', skills: 'React', job: { title: 'React end dev', exp: '13 yrs' }},
  ];
  data;
  data2;
  constructor() { }

  ngOnInit(): void {
    // Ex-01
    from(this.users).pipe(
      pluck('name'),
      toArray()
      ).subscribe(res => {
      console.log(res);
      this.data = res;
    });

    // Ex-02
    from(this.users).pipe(
      pluck('job', 'title'),
      toArray()
    ).subscribe(res => {
      this.data2 = res;
    });
  }

}
