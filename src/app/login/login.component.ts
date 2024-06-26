import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string=""
  password: string=""

  constructor(private authService: AuthService, private router: Router) {}

  async login(): Promise<void> {
    if (await this.authService.login(this.username, this.password)) {
      this.router.navigate(['/planning']);
    } else {
      alert('user ou password incorrect!');
    }
  }

}
