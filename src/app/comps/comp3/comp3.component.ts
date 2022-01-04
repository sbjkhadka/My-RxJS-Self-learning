import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DesignUtilityService } from 'src/app/services/design-utility.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.scss']
})
export class Comp3Component implements OnInit {

  userName;
  @ViewChild('uName') uName: ElementRef;
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
