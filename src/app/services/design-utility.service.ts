import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  videoEmit = new ReplaySubject<string>(3, 5000);
  exclusive = new Subject<boolean>();
  // userName = new Subject<string>();
  userName = new BehaviorSubject<string>('default');
  constructor() { }

  print(countval, containerId) {
    const el = document.createElement('li');
    el.innerText = countval;
    document.getElementById(containerId).appendChild(el);
  }
}
