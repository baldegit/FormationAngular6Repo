import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsSearchComponent } from './contacts-search.component';

describe('ContactsSearchComponent', () => {
  let component: ContactsSearchComponent;
  let fixture: ComponentFixture<ContactsSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
