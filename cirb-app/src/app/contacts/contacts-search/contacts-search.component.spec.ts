import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';

import { ContactsSearchComponent } from './contacts-search.component';
import { By } from '@angular/platform-browser';

fdescribe('ContactsSearchComponent', () => {
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

  it('should have properties : edit and last edit', () => {
    expect(component.edit === '').toBeTruthy();
    expect(component.lastedit === '').toBeTruthy();
  });

  it('should create', () => {
    expect(component.search.constructor === EventEmitter).toBeTruthy();
  });

  it('should have input html', () => {
    const input = fixture.debugElement.query(By.css('input'));
    expect(input).toBeTruthy();
  });

});
