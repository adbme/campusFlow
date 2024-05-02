import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'campusFlow';
  navItems = [
    { label: 'Documents et Liens', icon: 'description', link: '/documents-liens' },
    { label: 'Planning', icon: 'event', link: '/planning' },
    { label: 'Bulletin de note', icon: 'assignment', link: '/bulletin-de-note' }
  ];

  
}
