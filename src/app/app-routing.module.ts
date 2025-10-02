import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppointmentBookingComponent } from './pages/appointment-booking/appointment-booking.component';
import { AppointmentListComponent } from './pages/appointment-list/appointment-list.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { DoctorScheduleComponent } from './pages/doctor-schedule/doctor-schedule.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'auth/login', component: LoginComponent },
  { path: 'auth/register', component: RegisterComponent },
  { path: 'connexion', redirectTo: 'auth/login' },
  { path: 'inscription', redirectTo: 'auth/register' },
  { 
    path: 'dashboard', 
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'appointments', 
    component: AppointmentBookingComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'patients', 
    component: AppointmentListComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'profile', 
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  { 
    path: 'schedule', 
    component: DoctorScheduleComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }