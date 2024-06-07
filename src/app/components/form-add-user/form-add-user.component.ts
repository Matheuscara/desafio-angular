import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputComponent } from '../input/input.component';
import { InputPhoneComponent } from '../input-phone/input-phone.component';
import { InputMultiSelectComponent } from '../input-multi-select/input-multi-select.component';
import { InputSelectComponent } from '../input-select/input-select.component';
import { RadioButtonComponent } from '../radio-button/radio-button.component';
import { UserSubjectService } from 'src/app/stateSubjectService/users.subject.service';
import { User, userMock } from 'src/app/services/models/user';

@Component({
  selector: 'app-form-add-user',
  standalone: true,
  templateUrl: './form-add-user.component.html',
  styleUrls: ['./form-add-user.component.scss'],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    InputComponent,
    InputPhoneComponent,
    InputMultiSelectComponent,
    InputSelectComponent,
    RadioButtonComponent,
  ],
})
export class FormAddUserComponent {
  readonly userState = inject(UserSubjectService);
  @Output() close = new EventEmitter();
  form: FormGroup;
  confirmarClose = false;

  typeUsers = [
    { name: 'Administrador', value: 'admin' },
    { name: 'Usuário', value: 'user' },
    { name: 'Convidado', value: 'guest' },
  ];
  idiomas = ['Português BR', 'Inglês EN', 'Espanhol ES'];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      nome: ['', [Validators.required, Validators.minLength(3)]],
      sobrenome: ['', [Validators.required, Validators.minLength(3)]],
      telefone: ['+55 ', []],
      email: ['', [Validators.required, Validators.email]],
      idioma: ['', [Validators.required]],
      perfilAcesso: [[], [Validators.required]],
      preferenciaNotificacao: ['', [Validators.required]],
    });
  }

  resetForm() {
    this.form.reset();
    this.confirmarClose = false;
  }

  closeModal() {
    if (!this.form.touched || this.confirmarClose) {
      this.close.emit();
      this.resetForm();
    } else if (!this.confirmarClose) {
      this.confirmarClose = true;
    }
  }

  enviarConvite() {
    this.userState.addUser(this.createUser());
    this.close.emit();
    this.resetForm();
  }

  createUser() {
    let user: User;
    // Mock user logic
    user = userMock;
    user.name.first = this.form.get('nome')?.value;
    user.name.last = this.form.get('sobrenome')?.value;
    user.phone = this.form.get('telefone')?.value;
    user.email = this.form.get('email')?.value;
    user.registered.date = new Date().toISOString();
    user.dob.date = new Date().toISOString();
    return user;
  }
}
