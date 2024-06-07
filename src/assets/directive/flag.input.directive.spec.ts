import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Component } from '@angular/core';
import { By } from '@angular/platform-browser';
import { FlagInputDirective } from './flag.input.directive';

@Component({
  template: `<input type="text" flagInput />`
})
class TestComponent {}

describe('FlagInputDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let inputEl: HTMLInputElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent],
      imports: [FlagInputDirective]
    }).compileComponents();

    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.directive(FlagInputDirective)).nativeElement;
  });

  it('should update flag when input value length is 3', async () => {
    const directive = fixture.debugElement.query(By.directive(FlagInputDirective)).injector.get(FlagInputDirective);
    spyOn(directive, 'getCountryCode').and.returnValue(Promise.resolve({ img: 'new-test-url' }));

    inputEl.value = '+12';
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    expect(directive.getCountryCode).toHaveBeenCalledWith('12');
    await directive.onInput('+12');
    fixture.detectChanges();

    expect(inputEl.style.backgroundImage).toBe('url("new-test-url")');
    expect(inputEl.style.backgroundRepeat).toBe('no-repeat');
    expect(inputEl.style.backgroundPosition).toBe('left center');
    expect(inputEl.style.backgroundSize).toBe('32px');
  });
});
