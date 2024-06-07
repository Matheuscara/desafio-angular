import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputMultiSelectComponent } from './input-multi-select.component';
import { FormsModule, ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';

describe('InputMultiSelectComponent', () => {
  let component: InputMultiSelectComponent;
  let fixture: ComponentFixture<InputMultiSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputMultiSelectComponent, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(InputMultiSelectComponent);
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
