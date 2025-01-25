import { Injectable } from '@angular/core';
import { employeeDetails } from '../interface/employee.interface';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  private apiUrl = 'https://testapp.touchworldtechnology.com/interview/test/v1/product/users?count=20';

  employeeDetails: employeeDetails[] = [
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
    {
      id: '3',
      employeeName: ' Ajnas kp',
      contactNumber: 9633752203,
      email: "ajnas@gmail.com",
      address: "kozhinhi parambil"
    },
    {
      id: '4',
      employeeName: 'fayis',
      contactNumber: 88665522,
      email: "fayis@gmail.com",
      address: "fayis house"
    }
  ]
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
  gatEmployee() {
    return this.employeeDetails;
  }
  getEmployeeList() {
    return this.employeeSubject.getValue()
  }
  addEmployee() {

  }

  // getApiDetails(){
  //   let url='https://testapp.touchworldtechnology.com/interview/test/v1/product/users?count=20'

  // }

  fetchUsers(): Observable<any> {
    console.log('called');

    return this.http.get(this.apiUrl);
  }
}
