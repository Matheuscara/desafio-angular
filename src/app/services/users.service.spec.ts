import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UsersService } from './users.service';
import { getAllUserResponseDTO } from './dtos/getAllUser';
import { userMock } from './models/user';

describe('UsersService', () => {
  let service: UsersService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [UsersService],
    });

    service = TestBed.inject(UsersService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve users from the API via GET', () => {
    const dummyUsersResponse: getAllUserResponseDTO = {
        results: [userMock],
        info: {
          seed: 'abc',
          results: 1,
          page: 1,
          version: '1.0',
        },
    }

    
    service.getAll(1).subscribe(users => {
      expect(users.results.length).toBe(1);
    });

    const req = httpMock.expectOne(`${service.url}/?page=1&results=20`);
    expect(req.request.method).toBe('GET');
    req.flush(dummyUsersResponse);
  });
});
