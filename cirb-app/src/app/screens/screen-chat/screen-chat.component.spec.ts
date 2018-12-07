import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScreenChatComponent } from './screen-chat.component';

describe('ScreenChatComponent', () => {
  let component: ScreenChatComponent;
  let fixture: ComponentFixture<ScreenChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScreenChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScreenChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
