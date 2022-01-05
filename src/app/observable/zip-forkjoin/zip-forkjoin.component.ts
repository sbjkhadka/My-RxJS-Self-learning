import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { forkJoin, fromEvent, zip } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Component({
  selector: 'app-zip-forkjoin',
  templateUrl: './zip-forkjoin.component.html',
  styleUrls: ['./zip-forkjoin.component.scss']
})
export class ZipForkjoinComponent implements AfterViewInit {

  nameSource = ['Subarna', 'Bijay', 'Khadka', 'Hari', 'Sushila', 'Susan'];
  colorSource = ['red', 'green', 'blue', 'yellow', 'violet', 'purple', 'orange'];

  // template references
  @ViewChild('name') name: ElementRef;
  @ViewChild('color') color: ElementRef;

  constructor() { }

  ngAfterViewInit(): void {
    const nameObs = fromEvent<any>(this.name.nativeElement, 'change')
    .pipe(map(event => event.target.value), take(2));

    const colorObs = fromEvent<any>(this.color.nativeElement, 'change')
      .pipe(map(event => event.target.value), take(3));

      // Ex-01 Zip
    zip(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer');
    });

    forkJoin(nameObs, colorObs).subscribe(([name, color]) => {
      this.createBox(name, color, 'elContainer2');
    });
  }

  createBox(name, color, containerId) {
    const el = document.createElement('span');
    el.innerText = name;
    el.style.background = color;
    el.style.color = 'white';
    el.classList.add('m-2');
    el.classList.add('p-2');
    el.classList.add('border');
    el.classList.add('rounded');
    document.getElementById(containerId).appendChild(el);
  }

}
