import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  currentView: string = 'dashboard';
  currentMonth: string = 'Septembre 2024';

  // Données des statistiques
  stats = {
    patients: {
      total: 100,
      consulted: 52,
      percentage: 52
    },
    appointments: {
      total: 20,
      confirmed: 8,
      percentage: 40
    },
    cancelledAppointments: {
      total: 14,
      notConfirmed: 8,
      percentage: 60
    }
  };

  // Données des patients
  patients = [
    { id: 1, name: 'Marie Diop', age: 34, lastVisit: '2024-09-25', status: 'Consulté' },
    { id: 2, name: 'Ibrahima Sarr', age: 28, lastVisit: '2024-09-24', status: 'En attente' },
    { id: 3, name: 'Fatou Ndiaye', age: 45, lastVisit: '2024-09-23', status: 'Consulté' },
    { id: 4, name: 'Mamadou Ba', age: 52, lastVisit: '2024-09-22', status: 'Annulé' },
    { id: 5, name: 'Aissatou Fall', age: 38, lastVisit: '2024-09-21', status: 'Consulté' }
  ];

  // Données du calendrier (Septembre 2024)
  calendarDays = [
    { day: 1, hasAppointment: false },
    { day: 2, hasAppointment: true, appointmentType: 'consultation' },
    { day: 3, hasAppointment: false },
    { day: 4, hasAppointment: true, appointmentType: 'surgery' },
    { day: 5, hasAppointment: false },
    { day: 6, hasAppointment: false },
    { day: 7, hasAppointment: false },
    { day: 8, hasAppointment: true, appointmentType: 'checkup' },
    { day: 9, hasAppointment: false },
    { day: 10, hasAppointment: true, appointmentType: 'consultation' },
    { day: 11, hasAppointment: false },
    { day: 12, hasAppointment: false },
    { day: 13, hasAppointment: true, appointmentType: 'surgery' },
    { day: 14, hasAppointment: false },
    { day: 15, hasAppointment: true, appointmentType: 'consultation' },
    { day: 16, hasAppointment: false },
    { day: 17, hasAppointment: false },
    { day: 18, hasAppointment: true, appointmentType: 'checkup' },
    { day: 19, hasAppointment: false },
    { day: 20, hasAppointment: true, appointmentType: 'consultation' },
    { day: 21, hasAppointment: false },
    { day: 22, hasAppointment: false },
    { day: 23, hasAppointment: true, appointmentType: 'surgery' },
    { day: 24, hasAppointment: false },
    { day: 25, hasAppointment: true, appointmentType: 'consultation' },
    { day: 26, hasAppointment: false },
    { day: 27, hasAppointment: false },
    { day: 28, hasAppointment: true, appointmentType: 'checkup' },
    { day: 29, hasAppointment: false },
    { day: 30, hasAppointment: true, appointmentType: 'consultation' }
  ];
  
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log('Dashboard CH Abas Ndao initialisé');
  }

  setView(view: string): void {
    this.currentView = view;
  }

  navigateToAppointments(): void {
    this.router.navigate(['/appointment-list']);
  }

  navigateToPatients(): void {
    this.router.navigate(['/patients']);
  }

  // Méthodes pour les actions
  viewPatient(patientId: number): void {
    console.log('Voir patient:', patientId);
  }

  editPatient(patientId: number): void {
    console.log('Éditer patient:', patientId);
  }

  // Méthodes pour la navigation du calendrier
  previousMonth(): void {
    console.log('Mois précédent');
    // Logique pour changer de mois
    this.currentMonth = 'Août 2024';
  }

  nextMonth(): void {
    console.log('Mois suivant');
    // Logique pour changer de mois
    this.currentMonth = 'Octobre 2024';
  }
}
