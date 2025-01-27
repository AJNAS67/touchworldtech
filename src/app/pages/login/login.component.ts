import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  authError: boolean = false


  constructor(private _router: Router) { }
  ngOnInit(): void {
    this.loginForm = new FormGroup({
      userName: new FormControl(null, [Validators.required]),
      password: new FormControl(null, [Validators.required])
    })
  }
  handleToLogin() {
    console.log(this.loginForm.value);
    if (this.loginForm.value.userName == 'touchworld' && this.loginForm.value.password == 'touchworldTech') {
      localStorage.setItem('isLoggedIn', 'true')
      this.authError = false;
      this._router.navigate(['/'])
    }
    else {
      this.authError = true
    }
  }
}
