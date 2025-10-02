import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  template: `<div class="profile"><h1>Mon Profil</h1><p>Page en construction...</p></div>`,
  styles: ['.profile { padding: 2rem; }']
})
export class ProfileComponent implements OnInit {
  constructor() { }
  ngOnInit(): void { }
}