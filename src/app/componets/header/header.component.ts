import { Component, EventEmitter, Output } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
import { MainService } from '../../services/main.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconFieldModule, InputIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  constructor(private mainSerive: MainService, private _router: Router) { }
  @Output() toggleActive = new EventEmitter<void>();
  onButtonClick() {
    this.toggleActive.emit();
  }
  logout() {
    this.mainSerive.handleToLogout();
    this._router.navigate(['login'])


  }

}
