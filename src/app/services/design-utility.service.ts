import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {

  constructor() { }

  print(countval, containerId) {
    const el = document.createElement('li');
    el.innerText = countval;
    document.getElementById(containerId).appendChild(el);
  }
}
