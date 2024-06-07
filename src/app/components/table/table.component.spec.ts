import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableComponent } from './table.component';
import { userMock } from 'src/app/services/models/user';

describe('TableComponent', () => {
  let component: TableComponent;
  let fixture: ComponentFixture<TableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TableComponent],
    });
    fixture = TestBed.createComponent(TableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should empty dateFiltred and emit pageChange event', () => {
    spyOn(component.pageChange, 'emit');

    component.dateFiltred = [
      {
        ...userMock,
        registered: { ...userMock.registered, date: '2023-01-01T00:00:00Z' },
      },
    ];

    const event = { page: 2, first: 10, rows: 10, pageCount: 5 };
    component.nextPage(event);

    expect(component.dateFiltred).toEqual([]);
    expect(component.pageChange.emit).toHaveBeenCalledWith(event);
  });

  it('should return correct status based on title length', () => {
    expect(component.getStatus('test')).toBe('Ativo'); // length 4
    expect(component.getStatus('pending')).toBe('Pendente'); // length 7
    expect(component.getStatus('blockedTitle')).toBe('Bloqueado'); // length > 8
  });
});
