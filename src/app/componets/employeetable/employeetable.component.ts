import { Component, OnInit } from '@angular/core';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import { CommonModule } from '@angular/common';
import { employeeDetails } from '../../interface/employee.interface';
import { MainService } from '../../services/main.service';
import { ButtonModule } from 'primeng/button';
import { Router } from '@angular/router';


@Component({
  selector: 'app-employeetable',
  standalone: true,
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, CommonModule, ButtonModule],
  templateUrl: './employeetable.component.html',
  styleUrl: './employeetable.component.scss'
})
export class EmployeetableComponent implements OnInit {

  employeeList: employeeDetails[] = []
  loading!: boolean;
  constructor(private mainServie: MainService, private router: Router) { }
  ngOnInit(): void {
    this.mainServie.employeeList$.subscribe((employees) => this.employeeList = employees)
    console.log(this.employeeList,'employeeList');
    this.loading = false;
    
  }
  AddEmployee() {
    this.router.navigate(['employee/addemployee'])
  }
  handleToDelete(id:string){
    this.mainServie.delteEmployee(id)
  }

}
