import {NO_ERRORS_SCHEMA} from '@angular/core';
import {HeaderComponent} from './header.js';
import {TestBed, async} from '@angular/core/testing';

describe('header component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [HeaderComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  it('should contains 2 links', () => {
    const fixture = TestBed.createComponent(HeaderComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('header a').length).toBe(2);
  });
});
