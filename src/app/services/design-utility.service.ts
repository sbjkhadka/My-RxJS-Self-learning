import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

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
