import { Injectable } from '@angular/core';
import { Employee, employeeDetails } from '../interface/employee.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { v4 as uuid } from 'uuid';


@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'https://testapp.touchworldtechnology.com/interview/test/v1/product/users?count=200000';


  private employeeSubject = new BehaviorSubject<employeeDetails[]>([
    {
      id: '1',
      employeeName: 'Muhammed Ajnas kp',
      contactNumber: 9633752203,
      email: "ajnas@gmail.com",
      address: "kozhinhi parambil"
    },
    {
      id: '2',
      employeeName: 'Muhammed Ajnas kp',
      contactNumber: 9633752203,
      email: "ajnas@gmail.com",
      address: "kozhinhi parambil"
    },

  ])
  employeeList$ = this.employeeSubject.asObservable()

  constructor(private http: HttpClient) { }

  getEmployeeList(): employeeDetails[] {
    return this.employeeSubject.getValue()
  }
  addEmployee(employee: Omit<employeeDetails, 'id'>) {
    const employees = this.getEmployeeList()
    const newEmployee: employeeDetails = { id: uuid(), ...employee }
    this.employeeSubject.next([...employees, newEmployee])
  }
  delteEmployee(id: string) {
    const employee = this.getEmployeeList().filter(employee => employee.id != id)
    this.employeeSubject.next(employee)
  }
  handleToLogout() {
    localStorage.removeItem('isLoggedIn')
  }
  getTableData(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.apiUrl);
  }
}
