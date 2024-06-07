import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: 'input[flagInput]',
  standalone: true,
})
export class FlagInputDirective {
  constructor(private el: ElementRef) {
    this.initializeWithBr();
  }

  async initializeWithBr() {
    const flagUrlImage = await this.getCountryCode('55');

    this.el.nativeElement.style.backgroundImage = `url(${flagUrlImage.img})`;
    this.el.nativeElement.style.backgroundRepeat = 'no-repeat';
    this.el.nativeElement.style.backgroundPosition = 'left center';
    this.el.nativeElement.style.backgroundSize = '32px';
  }

  @HostListener('input', ['$event.target.value'])
  async onInput(value: string) {
    if (value.length == 3) {
      const flagUrlImage = await this.getCountryCode(value.slice(1, 3));
      this.el.nativeElement.style.backgroundImage = `url(${flagUrlImage.img})`;
      this.el.nativeElement.style.backgroundRepeat = 'no-repeat';
      this.el.nativeElement.style.backgroundPosition = 'left center';
      this.el.nativeElement.style.backgroundSize = '32px';
    }
  }

  getCountryCode(value: string): Promise<any> {
    return fetch('assets/directive/paises.json')
      .then((response) => {
        return response.json();
      })
      .then((data: any) => {
        try {
          return data[value];
        } catch (err) {
          return data['55'];
        }
      });
  }
}
