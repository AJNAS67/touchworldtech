import { Injectable } from '@angular/core';
import { employeeDetails } from './interface/employee.interface';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  employeeDetails: employeeDetails[] = [
    {
      employeeName: 'Muhammed Ajnas kp',
      contactNumber: 9633752203,
      email: "ajnas@gmail.com",
      address: "kozhinhi parambil"
    },
    {
      employeeName: 'Muhammed Ajnas kp',
      contactNumber: 9633752203,
      email: "ajnas@gmail.com",
      address: "kozhinhi parambil"
    },
    {
      employeeName: ' Ajnas kp',
      contactNumber: 9633752203,
      email: "ajnas@gmail.com",
      address: "kozhinhi parambil"
    },
    {
      employeeName: 'fayis',
      contactNumber: 88665522,
      email: "fayis@gmail.com",
      address: "fayis house"
    }
  ]

  constructor() { }
  gatEmployee() {
    return this.employeeDetails;
  }
}
