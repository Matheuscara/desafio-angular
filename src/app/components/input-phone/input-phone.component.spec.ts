import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputPhoneComponent } from './input-phone.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { InputSelectComponent } from '../input-select/input-select.component';

describe('InputPhoneComponent', () => {
  let component: InputPhoneComponent;
  let fixture: ComponentFixture<InputPhoneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputSelectComponent, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(InputPhoneComponent);
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
