import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { User } from 'src/app/services/models/user';
import { formatDate } from 'src/assets/utils/formatData';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule, PaginatorModule],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent {
  @Input() loading: boolean = false;
  @Input() tableHeader: string[] = [];
  @Input() data: User[] = [];
  @Input() totalData: number = 0;
  @Output() pageChange = new EventEmitter<any>();
  dateFiltred: User[] = [];
  filterControlRows = [
    {
      name: 'Data de criação',
      activate: false,
    },
    {
      name: 'Último acesso',
      activate: false,
    },
  ];

  filterBiggerDateRegistrate() {
    this.dateFiltred = this.data.sort((a, b) => {
      const dateA = new Date(a.registered.date);
      const dateB = new Date(b.registered.date);
      return this.filterControlRows[0].activate
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

    this.filterControlRows[1].activate = false;
    this.filterControlRows[0].activate = !this.filterControlRows[0].activate;
  }

  filterBiggerDateLastAccess() {
    this.dateFiltred = this.data.sort((a, b) => {
      const dateA = new Date(a.dob.date);
      const dateB = new Date(b.dob.date);
      return this.filterControlRows[1].activate
        ? dateB.getTime() - dateA.getTime()
        : dateA.getTime() - dateB.getTime();
    });

    this.filterControlRows[0].activate = false;
    this.filterControlRows[1].activate = !this.filterControlRows[1].activate;
  }

  nextPage($event: any) {
    this.dateFiltred = [];
    this.pageChange.emit($event);
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

  formatData = formatDate;
}
