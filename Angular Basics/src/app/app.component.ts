import { Component } from '@angular/core';
import { StudentProfileComponent } from './student-profile/student-profile.component';  // ✅ import it here

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentProfileComponent],  // ✅ must be standalone component
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularApp';
}
