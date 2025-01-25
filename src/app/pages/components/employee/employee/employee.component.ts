import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { EmployeetableComponent } from '../employeetable/employeetable.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [EmployeetableComponent,TableModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {

}
