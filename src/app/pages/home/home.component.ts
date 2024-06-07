import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSubjectService } from '../../stateSubjectService/users.subject.service';
import { TableComponent } from '../../components/table/table.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { FormAddUserComponent } from 'src/app/components/form-add-user/form-add-user.component';
import { User } from 'src/app/services/models/user';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { InputSelectComponent } from 'src/app/components/input-select/input-select.component';

@Component({
  selector: 'desafio-angular-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [
    FormsModule,
    CommonModule,
    TableComponent,
    MatProgressSpinnerModule,
    ModalComponent,
    FormAddUserComponent,
    InputSelectComponent,
    ReactiveFormsModule,
  ],
})
export class HomeComponent {
  readonly userState = inject(UserSubjectService);
  form: FormGroup;
  modalOpen = false;
  filteredData: User[] = [];
  dateFilter: string = '';
  userByPage = 7;
  page = 1;
  tableHeader: string[] = [
    'Usuário',
    'Status',
    'Data de criação',
    'Último acesso',
    '',
  ];

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      query: [''],
      status: [''],
    });

    this.form.controls['query'].valueChanges.subscribe(() => {
      this.onFilterInputChange();
    });

    this.form.controls['status'].valueChanges.subscribe(() => {
      this.onFilterInputSelectChange();
    });
  }

  listPage() {
    const data =
      this.filteredData.length > 0 ? this.filteredData : this.userState.users();
    if (this.page === 1) {
      return data.slice(0, this.userByPage);
    } else {
      return data.slice(
        this.userByPage * this.page - this.userByPage,
        this.userByPage * this.page
      );
    }
  }

  pageChange(event: {
    page: number;
    first: number;
    rows: number;
    pageCount: number;
  }) {
    event.page = event.page + 1;
    this.userByPage = event.rows;
    this.page = event.page;
  }

  getStatus(title: string) {
    //Mock status logic
    if (title.length >= 4 && title.length <= 5) {
      return 'Ativo';
    } else if (title.length >= 6 && title.length <= 8) {
      return 'Pendente';
    } else {
      return 'Bloqueado';
    }
  }

  onFilterInputSelectChange(): void {
    if (!this.form.controls['status'].value) {
      this.filteredData = [];
      return;
    }

    this.filteredData = this.userState
      .users()
      .filter((user) =>
        this.getStatus(user.name.first).includes(
          this.form.controls['status'].value
        )
      );
  }

  onFilterInputChange(): void {
    if (!this.form.controls['query'].value) {
      this.filteredData = [];
      return;
    }
    
    this.filteredData = this.userState
      .users()
      .filter((user) =>
        (user.name.title + user.name.first + user.name.last + user.email)
          .toLowerCase()
          .includes(this.form.controls['query'].value.toLowerCase())
      );
  }

  controlModal() {
    this.modalOpen = !this.modalOpen;
  }
}
