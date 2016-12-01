import { Component } from '@angular/core';
import { LogServiceService } from './log-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LogServiceService]
})
export class AppComponent {
  title = 'app works!';
}
