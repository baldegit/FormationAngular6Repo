import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseTextComponent } from './base-text.component';

describe('BaseTextComponent', () => {
  let component: BaseTextComponent;
  let fixture: ComponentFixture<BaseTextComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseTextComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
