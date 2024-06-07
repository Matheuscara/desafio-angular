import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Api } from './apis/api';
import { getAllUserResponseDTO } from './dtos/getAllUser';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends Api {
  url: string;

  constructor(private http: HttpClient) {
    super();
    this.url = 'https://randomuser.me/api';
    
  }

  public override getAll(_page: number): Observable<getAllUserResponseDTO> {
    const url = `${this.url}/?page=${_page}&results=20`;
    return this.http.get<getAllUserResponseDTO>(url);
  }
}