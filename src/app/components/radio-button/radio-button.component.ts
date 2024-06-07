import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioButtonModule } from 'primeng/radiobutton';

@Component({
  selector: 'app-radio-button',
  standalone: true,
  imports: [CommonModule, RadioButtonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './radio-button.component.html',
  styleUrls: ['./radio-button.component.scss']
})
export class RadioButtonComponent {
  @Input() form!: FormGroup;
  @Input() controlName!: string;
  @Input() title: string = '';
  @Input() categorie: string = '';
}
