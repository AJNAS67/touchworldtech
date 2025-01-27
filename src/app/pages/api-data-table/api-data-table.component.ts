import { Component, OnInit } from '@angular/core';
import { Employee } from '../../interface/employee.interface';
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
import { LoaderComponent } from '../../componets/loader/loader.component';
@Component({
  selector: 'app-api-data-table',
  standalone: true,
  imports: [TableModule, TagModule, IconFieldModule, InputTextModule, InputIconModule, MultiSelectModule, DropdownModule, CommonModule, ButtonModule, LoaderComponent],
  templateUrl: './api-data-table.component.html',
  styleUrl: './api-data-table.component.scss'
})
export class ApiDataTableComponent implements OnInit {
  tableDetais!: Employee[];
  loader: boolean = true
  constructor(private mainService: MainService) { }
  ngOnInit(): void {
    this.getTableData()
  }
  getTableData() {
    // this.mainService.getTableData().subscribe((res) => {
    //   this.tableDetais = res
    //   console.log(res);
    // },
    //   (error) => {
    //     console.error('Error fetching table data', error);
    //     // this.isLoading = false;
    //   }

    // )
    this.mainService.getTableData().subscribe({
      next: data => {
        console.log(data, 'data');
        this.tableDetais = data
        this.loader = false

      },
      error: err => { console.log(err?.message, 'error message'), this.loader = false }

    })

  }
}
