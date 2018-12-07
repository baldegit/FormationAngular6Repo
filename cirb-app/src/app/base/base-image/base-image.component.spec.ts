import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseImageComponent } from './base-image.component';

describe('BaseImageComponent', () => {
  let component: BaseImageComponent;
  let fixture: ComponentFixture<BaseImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
