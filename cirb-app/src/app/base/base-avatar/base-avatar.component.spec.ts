import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseAvatarComponent } from './base-avatar.component';

describe('BaseAvatarComponent', () => {
  let component: BaseAvatarComponent;
  let fixture: ComponentFixture<BaseAvatarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseAvatarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseAvatarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
