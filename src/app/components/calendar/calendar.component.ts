import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../../services/appointment.service';

@Component({ 
  selector: 'app-calendar', 
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  currentDate = new Date();
  currentMonth = this.currentDate.getMonth();
  currentYear = this.currentDate.getFullYear();
  
  monthNames = [
    'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
    'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
  ];
  
  dayNames = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
  
  daysInMonth: any[] = [];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit(): void {
    this.generateCalendar();
  }

  generateCalendar(): void {
    const firstDay = new Date(this.currentYear, this.currentMonth, 1);
    const lastDay = new Date(this.currentYear, this.currentMonth + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = (firstDay.getDay() + 6) % 7; // Ajuster pour commencer le lundi

    this.daysInMonth = [];

    // Jours vides du mois précédent
    for (let i = 0; i < startingDayOfWeek; i++) {
      this.daysInMonth.push({ day: '', isCurrentMonth: false });
    }

    // Jours du mois actuel
    for (let day = 1; day <= daysInMonth; day++) {
      this.daysInMonth.push({
        day: day,
        isCurrentMonth: true,
        isToday: this.isToday(day)
      });
    }
  }

  isToday(day: number): boolean {
    const today = new Date();
    return (
      day === today.getDate() &&
      this.currentMonth === today.getMonth() &&
      this.currentYear === today.getFullYear()
    );
  }

  previousMonth(): void {
    this.currentMonth--;
    if (this.currentMonth < 0) {
      this.currentMonth = 11;
      this.currentYear--;
    }
    this.generateCalendar();
  }

  nextMonth(): void {
    this.currentMonth++;
    if (this.currentMonth > 11) {
      this.currentMonth = 0;
      this.currentYear++;
    }
    this.generateCalendar();
  }

  getCurrentMonthYear(): string {
    return `${this.monthNames[this.currentMonth]} ${this.currentYear}`;
  }
}