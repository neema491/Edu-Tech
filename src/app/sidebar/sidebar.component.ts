import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { faHome, faBook, faMoneyBill, faTrophy, faClipboard, faBus, faCalendar, faUser, } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  imports: [MatCardModule,MatIconModule,MatListModule, MatDividerModule],
})
export class SidebarComponent {
  faHome = faHome;
  faBook = faBook;
  faMoneyBill = faMoneyBill;
  faTrophy = faTrophy;
  faClipboard = faClipboard;
  faBus = faBus;
  faCalendar = faCalendar;
  faUser = faUser;
  avatarUrl: string = 'assets/avatar.jpg'; // Updated to point to the default avatar image

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.avatarUrl = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  }
}