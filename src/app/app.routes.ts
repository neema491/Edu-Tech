import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClassesComponent } from './classes/classes.component';
import { PaymentInfoComponent } from './payment-info/payment-info.component';
import { ExamResultsComponent } from './exam-results/exam-results.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { TripsComponent } from './trips/trips.component';
import { EventsComponent } from './events/events.component';
import { LoginComponent} from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import path from 'path';
import { ProfileComponent } from './profile/profile.component';


export const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'classes', component: ClassesComponent },
  { path: 'payment-info', component: PaymentInfoComponent },
  { path: 'exam-results', component: ExamResultsComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'trips', component: TripsComponent },
  { path: 'events', component: EventsComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'Login', component: LoginComponent }, 
  { path: 'profile', component: ProfileComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
