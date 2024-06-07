import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-input-select',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, DropdownModule],
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {
  @Input() form!: FormGroup;
  @Input() label!: string;
  @Input() controlName!: string;
  @Input() optional: boolean = false
  @Input() options: any[] = [];
  @Input() placeholder: string = '';
}
