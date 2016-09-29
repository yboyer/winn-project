import {MockBackend} from '@angular/http/testing';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {Http, BaseRequestOptions, Response} from '@angular/http';
import {ListComponent} from './list.js';
import {TestBed, async} from '@angular/core/testing';
import {TransportService} from '../../services/services.js';
import {Observable} from 'rxjs/Rx';
import {TransportObject} from '../../TransportObject.js';

describe('list component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      providers: [
        TransportService,
        MockBackend,
        BaseRequestOptions,
        {
          provide: Http, useFactory: (backend, defaultOptions) => new Http(backend, defaultOptions),
          deps: [MockBackend, BaseRequestOptions]
        }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  describe('rendering', () => {
    beforeEach(() => {
      ListComponent.prototype.ngOnInit = function ngOnInit() {
        const response = new Response({
          body: [new TransportObject(), new TransportObject()]
        });
        this.transports = Observable.of(response).map(res => res.json());
      };
    });

    it('should mock the list and render 2 transport elements', () => {
      const fixture = TestBed.createComponent(ListComponent);
      fixture.detectChanges();
      expect(fixture.nativeElement.querySelectorAll('.id').length).toBe(2);
    });
  });
});
