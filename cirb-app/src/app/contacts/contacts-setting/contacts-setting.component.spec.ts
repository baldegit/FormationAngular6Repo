import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSettingComponent } from './contacts-setting.component';

describe('ContactsSettingComponent', () => {
  let component: ContactsSettingComponent;
  let fixture: ComponentFixture<ContactsSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
