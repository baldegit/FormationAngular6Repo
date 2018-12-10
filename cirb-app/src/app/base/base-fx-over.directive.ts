import { Directive, Input, HostListener, OnInit } from '@angular/core';
import { BaseFxDirective } from './base-fx.directive';

@Directive({
  // selector: '[appBaseFx][appBaseFxOver]'
  selector: '[appBaseFxOver]',
  exportAs: 'FxOver'
})
export class BaseFxOverDirective extends BaseFxDirective implements OnInit {


  @Input() appBaseFxOver;

  @HostListener('mouseenter')
  onOver() {
    this.aply();
  }

  @HostListener('mouseleave')
  onout() {
    this.revert();
  }

  @HostListener('window:keypress')
  onOkey() {
    console.log('onkey');
  }

  constructor() {
    super();
  }

  ngOnInit(): void {
    super.ngOnInit();
    this.appBaseFx = this.appBaseFxOver;
  }

}
