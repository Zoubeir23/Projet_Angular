import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Patient, Medecin } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class HospitalService {
  // Données de test pour les patients
  private mockPatients: Patient[] = [
    {
      idUtilisateur: '1',
      codePatient: 'PAT001',
      nom: 'Ndiaye',
      prenom: 'Abdou Fatah',
      dateNaiss: new Date('2002-02-11'),
      sexe: 'M',
      adresse: 'Touba',
      telephone: '772341909',
      email: 'abdou.ndiaye@email.com',
      matricule: 'PAT001',
      motDePasse: '',
      statut: 'actif',
      consulterPlanningMedecin: () => {},
      listerSesRendezVous: () => {},
      annulerRendezVous: () => {},
      recevoirNotification: () => {}
    },
    {
      idUtilisateur: '2',
      codePatient: 'PAT002',
      nom: 'Gueye',
      prenom: 'Aminata',
      dateNaiss: new Date('2004-05-11'),
      sexe: 'F',
      adresse: 'Keur Massar',
      telephone: '789291019',
      email: 'aminata.gueye@email.com',
      matricule: 'PAT002',
      motDePasse: '',
      statut: 'actif',
      consulterPlanningMedecin: () => {},
      listerSesRendezVous: () => {},
      annulerRendezVous: () => {},
      recevoirNotification: () => {}
    },
    {
      idUtilisateur: '3',
      codePatient: 'PAT003',
      nom: 'Ly',
      prenom: 'Abdoulaye',
      dateNaiss: new Date('2001-04-21'),
      sexe: 'M',
      adresse: 'Keur Massar',
      telephone: '782991019',
      email: 'abdoulaye.ly@email.com',
      matricule: 'PAT003',
      motDePasse: '',
      statut: 'actif',
      consulterPlanningMedecin: () => {},
      listerSesRendezVous: () => {},
      annulerRendezVous: () => {},
      recevoirNotification: () => {}
    },
    {
      idUtilisateur: '4',
      codePatient: 'PAT004',
      nom: 'Diaw',
      prenom: 'Khadim',
      dateNaiss: new Date('2000-06-19'),
      sexe: 'M',
      adresse: 'Touba',
      telephone: '756278181',
      email: 'khadim.diaw@email.com',
      matricule: 'PAT004',
      motDePasse: '',
      statut: 'actif',
      consulterPlanningMedecin: () => {},
      listerSesRendezVous: () => {},
      annulerRendezVous: () => {},
      recevoirNotification: () => {}
    }
  ];

  // Données de test pour les médecins
  private mockDoctors: Medecin[] = [
    {
      idUtilisateur: '1',
      nom: 'DIOP',
      prenom: 'Dr Bara',
      dateNaiss: new Date('1980-01-01'),
      sexe: 'M',
      adresse: 'Dakar, Sénégal',
      telephone: '221773456789',
      email: 'bara.diop@hospital.com',
      matricule: 'DOC001',
      motDePasse: '',
      statut: 'actif',
      experience: 4,
      languesParles: ['Français', 'Wolof'],
      consulterSesRendezVous: () => {}
    }
  ];

  constructor() { }

  getPatients(): Observable<Patient[]> {
    return of(this.mockPatients);
  }

  getPatientById(id: string): Observable<Patient | undefined> {
    const patient = this.mockPatients.find(p => p.idUtilisateur === id);
    return of(patient);
  }

  getDoctors(): Observable<Medecin[]> {
    return of(this.mockDoctors);
  }

  getDoctorById(id: string): Observable<Medecin | undefined> {
    const doctor = this.mockDoctors.find(d => d.idUtilisateur === id);
    return of(doctor);
  }

  // Statistiques pour le dashboard
  getPatientStats(): Observable<any> {
    return of({
      total: this.mockPatients.length,
      consulted: Math.floor(this.mockPatients.length * 0.52), // 52% consultés
      percentage: 52
    });
  }

  getAppointmentStats(): Observable<any> {
    return of({
      total: 20,
      confirmed: 8, // 40% confirmés
      percentage: 40
    });
  }

  getCancelledAppointmentStats(): Observable<any> {
    return of({
      total: 14,
      cancelled: Math.floor(14 * 0.6), // 60% non confirmés
      percentage: 60
    });
  }
}