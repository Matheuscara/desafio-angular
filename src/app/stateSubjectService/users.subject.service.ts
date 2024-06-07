import {
  Injectable,
  Signal,
  computed,
  effect,
  inject,
  signal,
} from '@angular/core';
import { UsersService } from '../services/users.service';
import { lastValueFrom } from 'rxjs';
import { User } from '../services/models/user';
import { getAllUserResponseDTO } from '../services/dtos/getAllUser';

export interface UserState {
  initialized: Signal<boolean>;
  users: Signal<User[]>;
}

@Injectable({
  providedIn: 'root',
})
export class UserSubjectService implements UserState {
  private userService = inject(UsersService);

  private initialized$ = signal<boolean>(false);
  private users$ = signal<User[]>([]);

  initialized = computed(() => this.initialized$());
  users = computed(() => this.users$());

  init = effect(() => {
    !this.initialized() && this.loadInitAllUsers();
  });

  public async loadInitAllUsers(): Promise<void> {
    const page = 1;
    const response: getAllUserResponseDTO = await lastValueFrom(
      this.userService.getAll(page)
    );
    this.users$.update(() => response.results);
    this.initialized$.update(() => true);
  }

  public addUser(user: User): void {
   this.users$.update((users) => [...users, user]);
  }
}
