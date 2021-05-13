import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appBasico]'
})
export class BasicoDirective {

  constructor() { }

  @Input('appBasico') inputType: string;

  showMsg = false;
  pattern: RegExp;

  private regexMap = {
    integer: /^[0-9]*$/g,
    float: /^[+-]?([0-9]*[.])?[0-9]+$/g,
    words: /([A-z]\\s)*/g,
    point25: /^\-?[0-9]*(?:\\.25|\\.50|\\.75|)$/g,
    badBoys: /^[^{}*+£$%\\^-_]+$/g,
    fecha: /^[0-9/]*$/g,
    letras: /^[A-z ]*$/g,
    ce: /^[A-z 0-9]*$/g,
    coordenada: /^[0-9\.\-]*$/g,
    mixto: /^[A-z0-9]*$/g,
    moneda:/^[0-9]+(?:[.,][0-9]{1,2})?$/gm,
  };

  @HostListener('keypress', ['$event']) onInput(e) {
    this.pattern = this.regexMap[this.inputType];
    const inputChar = e.key;
    this.pattern.lastIndex = 0; // dont know why but had to add this
    if (this.pattern.test(inputChar)) {
    } else {
      e.preventDefault();
    }

    
  }

}
