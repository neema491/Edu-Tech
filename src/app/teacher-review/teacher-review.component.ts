import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-teacher-review',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './teacher-review.component.html',
  styleUrl: './teacher-review.component.css'
})
export class TeacherReviewComponent {

}
