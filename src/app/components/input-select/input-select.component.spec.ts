import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputSelectComponent } from './input-select.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('InputSelectComponent', () => {
  let component: InputSelectComponent;
  let fixture: ComponentFixture<InputSelectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [InputSelectComponent, FormsModule, ReactiveFormsModule]
    });
    fixture = TestBed.createComponent(InputSelectComponent);
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
