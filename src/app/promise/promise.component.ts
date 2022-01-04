import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiTestingService } from '../services/api-testing.service';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss']
})
export class PromiseComponent implements OnInit {

  @ViewChild('result1') result10;
  @ViewChild('result2') result20;
  @ViewChild('result3') result30;
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black'
  };
  hp = {
    brand: 'HP',
    hardDisk: '1 TB',
    color: 'Silver'
  };
  notAvailable = {
    brand: 'Not Available',
    status: 'Failed'
  };
  buyLaptop: Promise<any>;
  buyLaptop2: Promise<any>;
  constructor(private apiTestingService: ApiTestingService) { }

  ngOnInit(): void {
    this.buyLaptop = new Promise((resolve, reject) => {
      if (this.DellAvailable()) {
        setTimeout(() => {
          resolve(this.dell);
        }, 3000);

      } else if (this.HpAvailable()) {
        setTimeout(() => {
          resolve(this.hp);
        }, 3000);

      } else {
        setTimeout(() => {
          reject(this.notAvailable);
        }, 3000);
      }
    });

    this.buyLaptop2 = new Promise((resolve, reject) => {
      this.apiTestingService.getTestPOSTData().subscribe(result => {
        resolve(result);
      }, err => {
        reject(err);
      });
    });
  }

  fetch1() {
    this.result10.nativeElement.innerHTML = 'Wait...';
    this.buyLaptop.then(res => {
      this.result10.nativeElement.innerHTML = JSON.stringify(res);
    }).catch(err => {
      this.result10.nativeElement.innerHTML = JSON.stringify(err);
    });
  }

  async fetch2() {
    this.result20.nativeElement.innerHTML = 'Wait...';
    const data = await this.buyLaptop;
    this.result20.nativeElement.innerHTML = JSON.stringify(data);
  }

  // promise technique
  // fetch3() {
  //   this.result30.nativeElement.innerHTML = 'Wait...';
  //   this.buyLaptop2.then(res => {
  //     this.result30.nativeElement.innerHTML = JSON.stringify(res);
  //   });
  // }

  // Async/ await technique
  async fetch3() {
    this.result30.nativeElement.innerHTML = 'Wait...';
    const res = await this.buyLaptop2;
    this.result30.nativeElement.innerHTML = JSON.stringify(res);
  }

  private DellAvailable() {
    return true;
  }

  private HpAvailable() {
    return true;
  }
}
