import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject } from 'rxjs';
import { RendezVous, Planning, Creneau } from '../models/appointment.model';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  private appointmentsSubject = new BehaviorSubject<RendezVous[]>([]);
  public appointments$ = this.appointmentsSubject.asObservable();

  // Données de test
  private mockAppointments: RendezVous[] = [
    {
      id: '1',
      numeroRDV: 'RDV001',
      motif: 'Consultation dentaire',
      status: 'confirme',
      dateCreation: new Date('2024-09-15'),
      patientId: '1',
      medecinId: '1',
      creneauId: '1'
    },
    {
      id: '2',
      numeroRDV: 'RDV002',
      motif: 'Chirurgie dentaire',
      status: 'en_attente',
      dateCreation: new Date('2024-09-16'),
      patientId: '2',
      medecinId: '1',
      creneauId: '2'
    }
  ];

  private mockPlannings: Planning[] = [
    {
      idPlanning: '1',
      datePlanning: new Date('2024-09-15'),
      status: 'actif',
      medecinId: '1',
      creneaux: [
        {
          id: '1',
          codeCreneau: 'C001',
          heureDebut: '08:00',
          heureFin: '09:00',
          status: 'occupe',
          planningId: '1'
        },
        {
          id: '2',
          codeCreneau: 'C002',
          heureDebut: '09:00',
          heureFin: '10:00',
          status: 'libre',
          planningId: '1'
        }
      ]
    }
  ];

  constructor() {
    this.appointmentsSubject.next(this.mockAppointments);
  }

  getAppointments(): Observable<RendezVous[]> {
    return this.appointments$;
  }

  getAppointmentsByDoctor(doctorId: string): Observable<RendezVous[]> {
    const doctorAppointments = this.mockAppointments.filter(
      apt => apt.medecinId === doctorId
    );
    return of(doctorAppointments);
  }

  getAppointmentsByPatient(patientId: string): Observable<RendezVous[]> {
    const patientAppointments = this.mockAppointments.filter(
      apt => apt.patientId === patientId
    );
    return of(patientAppointments);
  }

  createAppointment(appointment: Partial<RendezVous>): Observable<RendezVous> {
    const timestamp = Date.now();
    const newAppointment: RendezVous = {
      ...appointment as RendezVous,
      id: timestamp.toString(),
      numeroRDV: `RDV${timestamp}`,
      dateCreation: new Date(),
      status: 'en_attente'
    };

    this.mockAppointments.push(newAppointment);
    this.appointmentsSubject.next(this.mockAppointments);
    
    return of(newAppointment);
  }

  updateAppointmentStatus(appointmentId: string, status: RendezVous['status']): Observable<RendezVous> {
    const appointment = this.mockAppointments.find(apt => apt.id === appointmentId);
    if (appointment) {
      appointment.status = status;
      this.appointmentsSubject.next(this.mockAppointments);
      return of(appointment);
    }
    throw new Error('Rendez-vous non trouvé');
  }

  getDoctorPlanning(doctorId: string, date: Date): Observable<Planning | null> {
    const planning = this.mockPlannings.find(
      p => p.medecinId === doctorId && 
           p.datePlanning.toDateString() === date.toDateString()
    );
    return of(planning || null);
  }

  getAvailableSlots(doctorId: string, date: Date): Observable<Creneau[]> {
    const planning = this.mockPlannings.find(
      p => p.medecinId === doctorId && 
           p.datePlanning.toDateString() === date.toDateString()
    );
    
    if (planning) {
      const availableSlots = planning.creneaux.filter(c => c.status === 'libre');
      return of(availableSlots);
    }
    
    return of([]);
  }
}