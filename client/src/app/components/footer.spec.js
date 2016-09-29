import {FooterComponent} from './footer.js';
import {TestBed, async} from '@angular/core/testing';

describe('footer component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FooterComponent]
    }).compileComponents();
  }));

  it('should contains a link to GiHub', () => {
    const fixture = TestBed.createComponent(FooterComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('footer a').href).toContain('github');
  });
});
