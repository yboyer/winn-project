import {NO_ERRORS_SCHEMA} from '@angular/core';
import {FormComponent} from './form.js';
import {FormsModule} from '@angular/forms';
import {TestBed, async} from '@angular/core/testing';
import {TransportObject} from '../../TransportObject.js';

describe('form component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormComponent],
      imports: [FormsModule],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  describe('methods', () => {
    it('should update the status', () => {
      const fixture = TestBed.createComponent(FormComponent);
      const instance = fixture.componentInstance;
      const element = fixture.nativeElement;
      instance.transport = new TransportObject();

      const status = 'statustest';
      instance.updateStatus(status);
      fixture.detectChanges();

      expect(instance.transport.status).toBe(status);
      expect(element.querySelector('#status_select').getAttribute('ng-reflect-model')).toBe(status);
    });
  });

  describe('rendering', () => {
    it('should render 5 statutes', () => {
      const fixture = TestBed.createComponent(FormComponent);
      fixture.componentInstance.transport = new TransportObject();
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelectorAll('.mdl-menu__item').length).toBe(5);
    });

    it('should render `Add a transport` as title', () => {
      const fixture = TestBed.createComponent(FormComponent);
      const title = 'Add a transport';
      const instance = fixture.componentInstance;
      instance.transport = new TransportObject();
      instance.title = title;
      fixture.detectChanges();

      expect(fixture.nativeElement.querySelector('.mdl-card__title-text').textContent).toBe(title);
    });
  });
});
