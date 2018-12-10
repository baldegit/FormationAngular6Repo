import { Directive, Input, HostBinding, OnInit, Attribute, Optional } from '@angular/core';

@Directive({
  selector: '[appBaseFx]',
  exportAs: 'Fx'
})
export class BaseFxDirective implements OnInit {

  @Input() appBaseFx = {name: '', factor: 1};

  // toujour fair ca
  @HostBinding('style.display') display = 'block';//'inline-block';
  @HostBinding('style.transform') transform;
  @HostBinding('style.transition') transition = 'transform .5s ease';
  // @HostBinding('attr.delay') delay;

  constructor(@Optional() @Attribute ('delay') private delay?: number) {

  }

  ngOnInit(): void {
    setTimeout(() => this.aply(), Number(this.delay));
    // this.aply();
  }

  public aply() {

    if (!this.appBaseFx.name) { return; }

    switch (this.appBaseFx.name) {
      case 'zoom':
        this.transform = `scale(${this.appBaseFx.factor})`;
        break;
      case 'rotate':
        this.transform = `rotate(${this.appBaseFx.factor}deg)`;
        break;
    }
  }

  public revert() {
    if (!this.appBaseFx.name) { return; }

    switch (this.appBaseFx.name) {
      case 'zoom':
        this.transform = `scale(1)`;
        break;
      case 'rotate':
        this.transform = `rotate(0deg)`;
        break;
    }
  }
}
