import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioButtonComponent } from './radio-button.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

describe('RadioButtonComponent', () => {
  let component: RadioButtonComponent;
  let fixture: ComponentFixture<RadioButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RadioButtonComponent, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(RadioButtonComponent);
    component = fixture.componentInstance;
    component.form = new FormGroup({
      controlName: new FormControl('controlName'),
    });
    component.controlName = 'controlName';
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
