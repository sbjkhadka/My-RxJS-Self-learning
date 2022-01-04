import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { delay, retry, retryWhen, scan, take } from 'rxjs/operators';
import { ApiTestingService } from 'src/app/services/api-testing.service';

@Component({
  selector: 'app-retry',
  templateUrl: './retry.component.html',
  styleUrls: ['./retry.component.scss']
})
export class RetryComponent implements OnInit {

  person;
  fetching = false;
  status = 'No Data';
  constructor(private apiTestingService: ApiTestingService) { }

  ngOnInit(): void {
  }

  fetchDetails() {
    this.fetching = true;
    this.apiTestingService.getUserData().pipe(
      // retry(2)
      retryWhen(err => err.pipe(
        delay(1000),
        scan((retryCount) => {
          if (retryCount >= 5) {
            throw err;
          } else {
            retryCount++;
            this.status = `Retrying attempt ${retryCount}`;
            return retryCount;
          }
        }, 0)
      ))
    ).subscribe(res => {
      console.log(res);
      this.person =  res[0];
      this.fetching = false;
      this.status = 'Data Fetched';
    }, err => {
      console.log(err);
      this.fetching = false;
      this.status = 'Problem fetching data';
    });
  }

}
