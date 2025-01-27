import { Component, Inject, OnInit } from '@angular/core';
import { EmailValidator, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { MainService } from '../../services/main.service';
@Component({
  selector: 'app-addemployee',
  standalone: true,
  imports: [InputTextModule, ReactiveFormsModule],
  templateUrl: './addemployee.component.html',
  styleUrl: './addemployee.component.scss'
})
export class AddemployeeComponent implements OnInit {
  employeeForm!: FormGroup
  constructor(private router: Router, private mainService: MainService) { }
  ngOnInit(): void {
    this.employeeForm = new FormGroup({
      employeeName: new FormControl(null, [Validators.required]),
      contactNumber: new FormControl(null, [Validators.required]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      address: new FormControl(null, [Validators.required])
    })
  }
  handleToSubmit() {
    this.mainService.addEmployee(this.employeeForm.value);
    this.employeeForm.reset()
    this.router.navigate(['/employee/employeeList'])

  }


}
