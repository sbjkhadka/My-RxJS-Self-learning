import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {

  @ViewChild('addBtn') addButton: ElementRef;

  constructor(private designUtilityService: DesignUtilityService) { }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
    let count = 0;
    fromEvent(this.addButton.nativeElement, 'click').subscribe(res => {
      const countVal = 'Video-' + count++;
      this.designUtilityService.print(countVal, 'elContainer');
      this.designUtilityService.print(countVal, 'elContainer2');
    });
  }
}
