import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  constructor(private authService: AuthService, private router: Router) {}
  
  title = 'campusFlow';
  navItems = [
    { label: 'Documents et Liens', icon: 'description', link: '/documents-liens' },
    { label: 'Planning', icon: 'event', link: '/planning' },
    { label: 'Bulletin de note', icon: 'assignment', link: '/bulletin-de-note' }
  ];


  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
  
}
