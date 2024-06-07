import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormAddUserComponent } from './form-add-user.component';
import { HttpClientModule } from '@angular/common/http';
import { userMock } from 'src/app/services/models/user';

describe('FormAddUserComponent', () => {
  let component: FormAddUserComponent;
  let fixture: ComponentFixture<FormAddUserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [FormAddUserComponent, HttpClientModule],
    });
    fixture = TestBed.createComponent(FormAddUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should reset the form and set confirmarClose to false', () => {
    spyOn(component.form, 'reset');

    component.resetForm();

    expect(component.form.reset).toHaveBeenCalled();
    expect(component.confirmarClose).toBeFalse();
  });

  it('should emit close and reset form if form is not touched or confirmarClose is true', () => {
    spyOn(component.close, 'emit');
    spyOn(component, 'resetForm');

    component.confirmarClose = false;

    component.closeModal();

    expect(component.close.emit).toHaveBeenCalled();
    expect(component.resetForm).toHaveBeenCalled();

    component.form.controls['nome'].setValue('teste');
    component.confirmarClose = true;

    component.closeModal();

    expect(component.close.emit).toHaveBeenCalledTimes(2);
    expect(component.resetForm).toHaveBeenCalledTimes(2);
  });

  it('should set confirmarClose to true if form is touched and confirmarClose is false', () => {
    component.confirmarClose = false;

    component.closeModal();

    expect(component.confirmarClose).toBeFalse();
  });

  it('should enviarConvite has add user table', () => {
    spyOn(component.userState, 'addUser');
    spyOn(component.close, 'emit');
    spyOn(component, 'resetForm');

    component.enviarConvite();

    expect(component.userState.addUser).toHaveBeenCalled();
    expect(component.close.emit).toHaveBeenCalled();
    expect(component.resetForm).toHaveBeenCalled();
  });

  it('should createUser return user object', () => {
    const res = component.createUser();

    expect(res).toEqual({
      ...userMock,
      name: {
        ...userMock.name,
        first: '',
        last: '',
      },
      phone: '+55 ',
      email: '',
      registered: {
        ...userMock.registered,
        date: res.registered.date,
      },
      dob: {
        ...userMock.dob,
        date: new Date().toISOString(),
      },
    });
  });
});
