import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-messages',
  standalone: true,
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  imports: [CommonModule],
})
export class MessagesComponent { 
  messages = [
    { sender: 'Teacher 1', content: 'Please submit your assignment by tomorrow.', time: '10:00 AM' },
    { sender: 'Teacher 2', content: 'Exam results will be announced next week.', time: '12:00 PM' },
    { sender: 'Teacher 3', content: 'New lecture materials are available.', time: '3:00 PM' }
  ];
}
