import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appInputFormat]'
})
export class InputFormatDirective {
  @Input('format') format: string = '';
  //@Input('appInputFormat') format: string = '';
  

  constructor(private el: ElementRef) { }
  @HostListener('focus') onFoucs(){
    console.log('On Focus');
    
  }
  
  @HostListener('blur') onBlur() {
    console.log('On Blur');
    let value: string = this.el.nativeElement.value; 

    if (this.format === 'uppercase')
      this.el.nativeElement.value = value.toUpperCase();
    else
      this.el.nativeElement.value = value.toLowerCase();
  }

 

}
