import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { NavBarLeftComponent } from "./components/nav-bar-left/nav-bar-left.component";
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { UserSubjectService } from './stateSubjectService/users.subject.service';

@Component({
    standalone: true,
    selector: 'desafio-angular-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [RouterModule, HeaderComponent,  NavBarLeftComponent, HttpClientModule],
    providers: [UsersService, UserSubjectService]
})
export class AppComponent {
  title = 'desafio-angular';
}
