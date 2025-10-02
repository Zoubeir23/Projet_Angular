import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

interface MenuItem {
  label: string;
  icon: string;
  route: string;
  active?: boolean;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  menuItems: MenuItem[] = [
    {
      label: 'Dashboard',
      icon: 'fas fa-tachometer-alt',
      route: '/dashboard'
    },
    {
      label: 'Mes Patients',
      icon: 'fas fa-users',
      route: '/patients'
    },
    {
      label: 'Rendez-Vous',
      icon: 'fas fa-calendar-alt',
      route: '/appointments'
    }
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    // Marquer l'élément actif basé sur l'URL actuelle
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.updateActiveMenuItem(event.url);
      }
    });
    
    // Initialiser l'élément actif
    this.updateActiveMenuItem(this.router.url);
  }

  private updateActiveMenuItem(url: string): void {
    this.menuItems.forEach(item => {
      item.active = url.includes(item.route);
    });
  }

  navigateTo(route: string): void {
    this.router.navigate([route]);
  }
}