import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: 'input[phoneMask]',
  standalone: true,
})
export class PhoneMaskDirective {
  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event'])
  onInputChange(event: Event) {
    console.log(event)
    const input = this.el.nativeElement as HTMLInputElement;
    let value = input.value.replace(/\D/g, '');
    if (value.length > 13) {
      value = value.substring(0, 13);
    }
    
    const formattedValue = this.formatPhoneNumber(value);
    input.value = formattedValue;
  }

  formatPhoneNumber(value: string): string {
    if (value.length === 0) {
      return value;
    }
    if (value.length <= 2) {
      return `+${value}`;
    }
    if (value.length <= 4) {
      return `+${value.substring(0, 2)} (${value.substring(2)}`;
    }
    if (value.length <= 5) {
      return `+${value.substring(0, 2)} (${value.substring(2, 4)}) ${value.substring(4)}`;
    }
    if (value.length <= 9) {
      return `+${value.substring(0, 2)} (${value.substring(2, 4)}) ${value.substring(4, 5)} ${value.substring(5, 9)}`;
    }
    return `+${value.substring(0, 2)} (${value.substring(2, 4)}) ${value.substring(4, 5)} ${value.substring(5, 9)}-${value.substring(9, 13)}`;
  }
}
