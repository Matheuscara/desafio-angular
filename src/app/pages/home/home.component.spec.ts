import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { userMock } from 'src/app/services/models/user';
import { signal } from '@angular/core';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, HttpClientModule],
      providers: [HttpClient],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form with default values and set up valueChanges subscriptions', () => {
    spyOn(component, 'onFilterInputChange');
    spyOn(component, 'onFilterInputSelectChange');

    component.form.controls['query'].setValue('test');
    expect(component.onFilterInputChange).toHaveBeenCalled();

    component.form.controls['status'].setValue('active');
    expect(component.onFilterInputSelectChange).toHaveBeenCalled();
  });

  it('should toggle modalOpen', () => {
    expect(component.modalOpen).toBeFalse();

    component.controlModal();

    expect(component.modalOpen).toBeTrue();
  });

  it('should return correct status based on title length', () => {
    expect(component.getStatus('test')).toBe('Ativo'); // length 4
    expect(component.getStatus('pending')).toBe('Pendente'); // length 7
    expect(component.getStatus('blockedTitle')).toBe('Bloqueado'); // length > 8
  });

  it('should update page and userByPage based on event', () => {
    const event = {
      page: 1,
      first: 10,
      rows: 20,
      pageCount: 5
    };
  
    component.pageChange(event);
  
    expect(component.userByPage).toBe(20);
    expect(component.page).toBe(2);
  });
  
  it('should return the correct page of data', () => {
    component.userByPage = 2;
    component.page = 1;
    component.userState.users = signal([userMock, userMock, userMock, userMock]);
  
    component.filteredData = [];
  
    let result = component.listPage();
    expect(result).toEqual([userMock, userMock,]);
  
    component.page = 2;
    result = component.listPage();
    expect(result).toEqual([userMock, userMock,]);
  });
  

});
