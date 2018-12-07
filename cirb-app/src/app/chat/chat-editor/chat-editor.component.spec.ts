import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatEditorComponent } from './chat-editor.component';

describe('ChatEditorComponent', () => {
  let component: ChatEditorComponent;
  let fixture: ComponentFixture<ChatEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
