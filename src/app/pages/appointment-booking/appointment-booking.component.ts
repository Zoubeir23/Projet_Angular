import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppointmentService } from '../../services/appointment.service';
import { HospitalService } from '../../services/hospital.service';
import { Medecin } from '../../models/user.model';
import { MatSnackBar } from '@angular/material/snack-bar';

interface Doctor {
  id: number;
  nom: string;
  prenom: string;
  specialite: string;
  experience: number;
  langues: string[];
  description: string;
  photo: string;
}

@Component({
  selector: 'app-appointment-booking',
  templateUrl: './appointment-booking.component.html',
  styleUrls: ['./appointment-booking.component.scss']
})
export class AppointmentBookingComponent implements OnInit {
  bookingForm!: FormGroup;
  selectedDoctor: Doctor | null = null;
  availableTimeSlots: string[] = ['08:00', '09:00', '10:00', '11:00', '14:00', '15:00', '16:00', '17:00'];
  minDate = new Date();
  maxDate = new Date(new Date().getFullYear() + 1, 11, 31);
  
  doctors: Doctor[] = [
    {
      id: 1,
      nom: 'DIOP',
      prenom: 'Dr Bara',
      specialite: 'Dentiste',
      experience: 4,
      langues: ['Français', 'Wolof'],
      description: 'Le dentiste est un professionnel de la santé qui prend soin des dents et des gencives. Il traite les caries, effectue des nettoyages et conseille sur l\'hygiène bucco-dentaire pour maintenir une bouche en bonne santé.',
      photo: 'assets/images/doctor-bara.jpg'
    }
  ];

  constructor(
    private fb: FormBuilder,
    private appointmentService: AppointmentService,
    private hospitalService: HospitalService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.createForm();
    this.selectedDoctor = this.doctors[0]; // Sélectionner le premier médecin par défaut
  }

  createForm() {
    this.bookingForm = this.fb.group({
      dateRendezVous: ['', Validators.required],
      heureRendezVous: ['', Validators.required],
      motifRendezVous: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.bookingForm.valid && this.selectedDoctor) {
      const appointmentData = {
        ...this.bookingForm.value,
        medecin: this.selectedDoctor
      };
      
      console.log('Rendez-vous réservé:', appointmentData);
      
      this.snackBar.open('Rendez-vous réservé avec succès !', 'Fermer', {
        duration: 4000,
        panelClass: ['success-snackbar']
      });
      
      this.bookingForm.reset();
    } else {
      this.markFormGroupTouched();
    }
  }

  markFormGroupTouched() {
    Object.keys(this.bookingForm.controls).forEach(key => {
      const control = this.bookingForm.get(key);
      control?.markAsTouched();
    });
  }

  selectDoctor(doctor: Doctor) {
    this.selectedDoctor = doctor;
  }

  getErrorMessage(fieldName: string): string {
    const control = this.bookingForm.get(fieldName);
    
    if (control?.hasError('required')) {
      const labels: any = {
        'dateRendezVous': 'La date',
        'heureRendezVous': 'L\'heure',
        'motifRendezVous': 'Le motif'
      };
      return `${labels[fieldName]} est requis(e)`;
    }
    
    if (control?.hasError('minlength')) {
      return 'Le motif doit contenir au moins 10 caractères';
    }
    
    return '';
  }
}