import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { MessagesComponent } from '../messages/messages.component';
import { BalanceComponent } from '../balance/balance.component';
import { GradesComponent } from '../grades/grades.component';
import { ClassesComponent } from '../classes/classes.component';
import { CalendarComponent } from '../calendar/calendar.component';
import { MyAssignmentsComponent } from '../my-assignments/my-assignments.component';
import { NoticeBoardComponent } from '../notice-board/notice-board.component';
import { TeacherReviewComponent } from '../teacher-review/teacher-review.component';
import { MyClassesComponent } from "../my-classes/my-classes.component";
@Component({
    selector: 'app-dashboard',
    standalone: true,
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.css',
    imports: [SidebarComponent, MessagesComponent, BalanceComponent, GradesComponent, ClassesComponent, CalendarComponent, MyAssignmentsComponent, NoticeBoardComponent, TeacherReviewComponent, CommonModule, MyClassesComponent,ClassesComponent]
})
export class DashboardComponent {

}
