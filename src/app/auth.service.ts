import { Injectable } from '@angular/core';

interface User {
  username: string;
  password: string;
  id: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private loggedIn: boolean = false;

  constructor() {
    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }

  public user: User = {} as User;

  async login(username: string, password: string): Promise<boolean> {
    const users = await fetch('http://localhost:3000/eleves').then((r) => r.json());
    const user = users.find((u: User) => u.username === username && u.password === password);

    if (username === user?.username && password === user?.password) {
      this.loggedIn = true;
      this.user = user;
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
