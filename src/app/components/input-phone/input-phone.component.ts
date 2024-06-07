import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlagInputDirective } from 'src/assets/directive/flag.input.directive';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PhoneMaskDirective } from 'src/assets/directive/phone-mask.directive';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-input-phone',
  standalone: true,
  imports: [CommonModule, DropdownModule , InputTextModule, FormsModule, ReactiveFormsModule, FlagInputDirective, PhoneMaskDirective],
  
  templateUrl: './input-phone.component.html',
  styleUrls: ['./input-phone.component.scss']
})
export class InputPhoneComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() optional: boolean = false
}
