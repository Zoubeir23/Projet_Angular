import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';
import { RendezVous } from '../../models/appointment.model';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.scss']
})
export class AppointmentListComponent implements OnInit {
  currentDate = new Date();
  currentMonth = 'Septembre';
  currentYear = 2024;
  
  dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  timeSlots = ['8h00 - 9h00', '9h00 - 10h00', '10h00 - 11h00'];
  daysInWeek = Array(7).fill(null);
  
  appointments = [
    {
      time: '8h00 - 9h00',
      day: 'Lundi',
      type: 'Consultation',
      patient: 'Abdou Fatah Ndiaye',
      location: 'Touba'
    },
    {
      time: '9h00 - 10h00',
      day: 'Mercredi',
      type: 'Chirurgie Dentaire',
      patient: 'Aminata Gueye',
      location: 'Keur Massar'
    },
    {
      time: '10h00 - 11h00',
      day: 'Lundi',
      type: 'Bilan bucco-dentaire',
      patient: 'Khadim Diaw',
      location: 'Touba'
    }
  ];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.loadAppointments();
  }

  loadAppointments(): void {
    this.appointmentService.getAppointments().subscribe(appointments => {
      // Traiter les rendez-vous récupérés
    });
  }

  previousMonth(): void {
    // Logique pour le mois précédent
  }

  nextMonth(): void {
    // Logique pour le mois suivant
  }

  getAppointmentForSlot(timeSlot: string, dayIndex: number): any {
    const dayName = this.dayNames[dayIndex];
    return this.appointments.find(apt => apt.day === dayName && apt.time === timeSlot);
  }

  getCurrentMonthYear(): string {
    return `${this.currentMonth} ${this.currentYear}`;
  }
}