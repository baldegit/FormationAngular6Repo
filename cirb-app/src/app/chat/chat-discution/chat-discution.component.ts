import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { BaseFxDirective } from '../../base/base-fx.directive';
import { BaseFxOverDirective } from '../../base/base-fx-over.directive';

@Component({
  selector: 'app-chat-discution',
  templateUrl: './chat-discution.component.html',
  styleUrls: ['./chat-discution.component.css']
})
export class ChatDiscutionComponent implements OnInit {

  @ViewChild('elm') elm;
  @ViewChild('fx') fx;
  @ViewChild('comp') comp;

  @ViewChild(BaseFxDirective) bfx: BaseFxDirective;
  @ViewChild(BaseFxOverDirective) bcomp: BaseFxOverDirective;

  constructor(private me: ElementRef, private renderer: Renderer2) {
    this.loding();
  }

  ngOnInit() {
    console.group(" ------------------------------- ");
      console.log('Element HTML', this.elm);
      console.log('Directive', this.fx);
      console.log('Comonent', this.comp);
    console.groupEnd();
  }

  loding() {
    const title = this.renderer.createElement('h2');
    title.textContent = 'Hello BALDE';
    this.renderer.appendChild(this.me.nativeElement, title);
  }

}
