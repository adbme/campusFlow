import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor() {
    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';  
  }

  login(username: string, password: string): boolean {
    if (username === 'admin' && password === 'admin') {
      this.loggedIn = true;
      localStorage.setItem('isLoggedIn', 'true');  
      return true;
    }
    return false;
  }

  logout(): void {
    this.loggedIn = false;
    localStorage.removeItem('isLoggedIn'); 
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
