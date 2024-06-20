import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatChipsModule } from '@angular/material/chips';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { ChangeDetectionStrategy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatChipsModule,
    MatIconModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatDividerModule
  ],
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileComponent {
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  currentCareer: string = '';
  careers: string[] = ['Tech'];
  allCareers: string[] = ['Art', 'Tech', 'AutoCars', 'Medicine', 'Teaching'];
  filteredCareers: string[] = this.allCareers;

  constructor(private announcer: LiveAnnouncer) {}

  add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    if (value) {
      this.careers.push(value);
    }

    event.chipInput!.clear();
    this.currentCareer = '';
  }

  remove(career: string): void {
    const index = this.careers.indexOf(career);

    if (index >= 0) {
      this.careers.splice(index, 1);
      this.announcer.announce(`Removed ${career}`);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.careers.push(event.option.viewValue);
    this.currentCareer = '';
  }

  filterCareers(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.allCareers.filter(career => career.toLowerCase().includes(filterValue));
  }
}
