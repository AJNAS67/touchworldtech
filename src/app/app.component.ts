import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeetableComponent } from './componets/employeetable/employeetable.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,EmployeetableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'benzy-info';
}
