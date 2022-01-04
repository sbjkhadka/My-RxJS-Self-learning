import { Component, OnInit } from '@angular/core';
import { promise } from 'protractor';

@Component({
  selector: 'app-asyncawait',
  templateUrl: './asyncawait.component.html',
  styleUrls: ['./asyncawait.component.scss']
})
export class AsyncawaitComponent implements OnInit {
  constructor() { }
  promise: Promise<any>;
  ngOnInit(): void {
    this.promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('data received');
      }, 3000);
  });

    this.getData();
  }

  async getData() {
    const response = await this.promise;
    console.log(response);
  }

}
