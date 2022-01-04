import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiTestingService {

  constructor(private http: HttpClient) { }

  getTestPOSTData() {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/posts`);
  }
}


