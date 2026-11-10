
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { AuthService } from '../services/auth';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styles: ``,
})
export class Login {

  user = new User();
  erreur = 0;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLoggedin() {
    console.log(this.user);

    let isValidUser = this.authService.SignIn(this.user);

    if (isValidUser) {
      this.router.navigate(['/event']);
    } else {
      this.erreur = 1;
    }
  }
}
