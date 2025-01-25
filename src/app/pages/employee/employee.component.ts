import { Component } from '@angular/core';
import { TableModule } from 'primeng/table';
import { EmployeetableComponent } from '../../componets/employeetable/employeetable.component';
import { SidebarComponent } from '../../componets/sidebar/sidebar.component';
import { HeaderComponent } from '../../componets/header/header.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-employee',
  standalone: true,
  imports: [EmployeetableComponent, TableModule, SidebarComponent, HeaderComponent,RouterOutlet],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.scss'
})
export class EmployeeComponent {
  isActive: boolean = false;
  toggleActiveClass() {
    this.isActive = !this.isActive;
  }

}
