import { Component } from '@angular/core';
import {MatChipInputEvent} from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

@Component({
  selector: 'app-signup',
  standalone: true,
imports:[MatCheckboxModule,MatFormFieldModule,MatChipsModule,MatIconModule,MatCardModule,MatChipsModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'})
export class SignupComponent {

}
