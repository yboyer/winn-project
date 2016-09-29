import {Component} from '@angular/core';
import {MaterialDirective} from './material.js';
import {TestBed, async} from '@angular/core/testing';

@Component({
  selector: 'app-container',
  template: `
    <div class="mdl-textfield mdl-js-textfield" material>
      <input class="mdl-textfield__input" type="text">
      <label class="mdl-textfield__label"></label>
    </div>
  `
})
export class Container {}

describe('material directive', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        Container,
        MaterialDirective
      ]
    }).compileComponents();
  }));

  it('should materialize the textfield', () => {
    const fixture = TestBed.createComponent(Container);
    fixture.detectChanges();
    setTimeout(() => {
      expect(fixture.nativeElement.querySelector('.mdl-textfield').dataset.upgraded).toContain('MaterialTextfield');
    });
  });
});
