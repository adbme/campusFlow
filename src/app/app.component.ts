import { Component, OnInit} from '@angular/core';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  button1Visible: boolean = true;
  button2Visible: boolean = false;

  isSmallScreen = false;


  constructor(private authService: AuthService, private router: Router, private breakpointObserver: BreakpointObserver) {}
  
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
  
   toggleButton1() {
    this.button1Visible = !this.button1Visible;
    this.button2Visible = !this.button1Visible;
  }

  toggleButton2() {
    this.button2Visible = !this.button2Visible;
    this.button1Visible = !this.button2Visible;
  }
 
  ngOnInit() {
    this.breakpointObserver.observe([Breakpoints.Small, Breakpoints.Handset]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }
  
}
