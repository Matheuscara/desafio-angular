import { PhoneMaskDirective } from './phone-mask.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';

@Component({
  template: `<input type="text" phoneMask />`
})
class TestComponent {}

describe('PhoneMaskDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: HTMLInputElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [PhoneMaskDirective]
    });

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(PhoneMaskDirective)).nativeElement;
  });

  it('should format the phone number correctly', () => {
    inputEl.value = '+1234567890123';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputEl.value).toBe('+12 (34) 5 6789-0123');
  });

  it('should truncate the phone number if longer than 13 digits', () => {
    inputEl.value = '+123456789012345';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputEl.value).toBe('+12 (34) 5 6789-0123');
  });

  it('should format partial phone numbers correctly', () => {
    inputEl.value = '+1';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputEl.value).toBe('+1');

    inputEl.value = '+123';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputEl.value).toBe('+12 (3');

    inputEl.value = '+1234';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputEl.value).toBe('+12 (34');

    inputEl.value = '+12345';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(inputEl.value).toBe('+12 (34) 5');
  });
});
