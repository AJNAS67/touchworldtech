import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { EmployeetableComponent } from '../employeetable/employeetable.component';
import { SidebarComponent } from '../../../../componets/sidebar/sidebar.component';
import { HeaderComponent } from '../../../../componets/header/header.component';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [EmployeetableComponent, TableModule, SidebarComponent, HeaderComponent],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  isActive: boolean = false;
  toggleActiveClass() {
    console.log('isAcie');
    
    this.isActive = !this.isActive;
  }

}
