import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDiscutionMessageComponent } from './chat-discution-message.component';

describe('ChatDiscutionMessageComponent', () => {
  let component: ChatDiscutionMessageComponent;
  let fixture: ComponentFixture<ChatDiscutionMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDiscutionMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDiscutionMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
