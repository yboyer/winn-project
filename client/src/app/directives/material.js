/* global componentHandler */
import {Directive, ElementRef} from '@angular/core';

@Directive({
  selector: '[material]'
})
export class MaterialDirective {
  /**
   * @param {ElementRef} el DOM element by Angular
   */
  constructor(el: ElementRef) {
    setTimeout(() => componentHandler.upgradeElement(el.nativeElement));
  }
}
