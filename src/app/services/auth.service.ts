import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    // Charger l'utilisateur depuis le localStorage s'il existe
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
      this.currentUserSubject.next(JSON.parse(savedUser));
    }
  }

  login(email: string, password: string): Observable<any> {
    // Simulation d'une connexion - remplacer par un appel API réel
    if (email === 'doctor@hospital.com' && password === 'password') {
      const user: User = {
        idUtilisateur: '1',
        nom: 'DIOP',
        prenom: 'Dr Bara',
        dateNaiss: new Date('1980-01-01'),
        adresse: 'Dakar, Sénégal',
        telephone: '221773456789',
        email: 'bara.diop@hospital.com',
        matricule: 'DOC001',
        motDePasse: '',
        sexe: 'M',
        statut: 'actif'
      };
      
      localStorage.setItem('currentUser', JSON.stringify(user));
      this.currentUserSubject.next(user);
      return of({ success: true, user });
    }
    
    return of({ success: false, message: 'Identifiants incorrects' });
  }

  register(userData: Partial<User>): Observable<any> {
    // Simulation d'inscription - remplacer par un appel API réel
    const newUser: User = {
      idUtilisateur: `USER_${Date.now()}`,
      nom: userData.nom || '',
      prenom: userData.prenom || '',
      dateNaiss: userData.dateNaiss || new Date(),
      adresse: userData.adresse || '',
      telephone: userData.telephone || '',
      email: userData.email || '',
      matricule: userData.matricule || '',
      motDePasse: userData.motDePasse || '',
      sexe: userData.sexe || 'M',
      statut: 'actif'
    };
    
    return of({ success: true, user: newUser });
  }

  logout(): void {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }

  isAuthenticated(): boolean {
    return this.currentUserSubject.value !== null;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}