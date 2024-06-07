import { Observable } from 'rxjs';
import { getAllUserResponseDTO } from '../dtos/getAllUser';

export abstract class Api {
  abstract getAll(_page: number): Observable<getAllUserResponseDTO>;
}
