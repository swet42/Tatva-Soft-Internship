import { Component } from '@angular/core';
import { StudentProfileComponent } from './student-profile/student-profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentProfileComponent],  // ✅ Import it here
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularApp';
}
