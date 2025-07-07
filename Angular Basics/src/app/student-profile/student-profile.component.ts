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
  // Two-way binding inputs
  name: string = '';
  branch: string = '';
  enrollment: string = '';
  email: string = '';

  // One-way binding
  welcomeMessage: string = 'Welcome to Student Profile Portal';

  submitted: boolean = false;

  // Store submitted data
  submittedData = {
    name: '',
    branch: '',
    enrollment: '',
    email: ''
  };

  submitForm() {
    // Copy data before clearing form
    this.submittedData = {
      name: this.name,
      branch: this.branch,
      enrollment: this.enrollment,
      email: this.email
    };

    this.submitted = true;

    // Clear inputs
    this.name = '';
    this.branch = '';
    this.enrollment = '';
    this.email = '';
  }
}
