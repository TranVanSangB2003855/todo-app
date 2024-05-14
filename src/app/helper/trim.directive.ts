import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appTrim]'
})
export class TrimDirective {

  constructor(private element: ElementRef) { }

  @HostListener('blur') onBlur() {
    const value = this.element.nativeElement.value;
    this.element.nativeElement.value = value.trim();
    this.element.nativeElement.formControl
    console.log("HostListener", "_"+this.element.nativeElement.value+"_",this.element)
  }

}
