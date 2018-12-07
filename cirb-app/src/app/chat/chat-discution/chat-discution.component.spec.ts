import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatDiscutionComponent } from './chat-discution.component';

describe('ChatDiscutionComponent', () => {
  let component: ChatDiscutionComponent;
  let fixture: ComponentFixture<ChatDiscutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatDiscutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatDiscutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
