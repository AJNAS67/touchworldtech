import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  selectedIndex: number = 0;
  menuItems = [
    { label: 'Employee List', icon: 'pi pi-users',link:'employeeList' },
    { label: 'API Data Table', icon: 'pi pi-table',link:'api-data-table' },
  ];
  constructor(private _router:Router){}
  setActive(index: number,link:string): void {

    this.selectedIndex = index;
    this._router.navigate([`employee/${link}`])
  }

}
