import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.scss']
})
export class Comp1Component implements OnInit {

  @ViewChild('uName') uName: ElementRef;
  userName;
  constructor(private designUtilityService: DesignUtilityService) {
    this.designUtilityService.userName.subscribe(res => {
      this.userName = res;
    });
   }

  ngOnInit(): void {
  }

  onChange() {
    console.log(this.uName.nativeElement.value);
    this.designUtilityService.userName.next(this.uName.nativeElement.value);
  }

}
