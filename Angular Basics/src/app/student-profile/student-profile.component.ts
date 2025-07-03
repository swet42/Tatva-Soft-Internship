import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-student-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent {
  // Two-way binding values
  name: string = '';
  branch: string = '';
  enrollment: string = '';
  email: string = '';

  // One-way binding value
  welcomeMessage: string = 'Welcome to Student Profile Portal';

  submitted: boolean = false;

  submitForm() {
    this.submitted = true;
  }
}