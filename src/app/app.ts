import { Component, signal } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { AuthService } from './services/auth';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit{
  titre : string = "ye5dem!";
  protected readonly title = signal('Evenement');

constructor(
  public authService: AuthService,
  private router: Router
) {}
  ngOnInit(): void {
  let isloggedin = localStorage.getItem('isloggedIn');
  let loggedUser = localStorage.getItem('loggedUser');

  if (isloggedin !== 'true' || !loggedUser) {
    this.router.navigate(['/login']);
  } else {
    this.authService.setLoggedUserFromLocalStorage(loggedUser);
  }
}

onLogout() {
  this.authService.logout();
}}
