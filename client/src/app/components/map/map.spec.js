import {MapComponent} from './map.js';
import {TestBed, async} from '@angular/core/testing';

describe('map component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MapComponent]
    }).compileComponents();
  }));

  // Inculding https://maps.googleapis.com/maps/api/js?sensor=false to karma
  // returns a CORS error... so.. no test

  it('should create an \'app-map\' element', () => {
    const fixture = TestBed.createComponent(MapComponent);
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('app-map')).toBeDefined();
  });
});
