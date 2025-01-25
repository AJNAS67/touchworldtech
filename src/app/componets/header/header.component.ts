import { Component, EventEmitter, Output } from '@angular/core';
import { IconFieldModule } from 'primeng/iconfield';
import { InputIconModule } from 'primeng/inputicon';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconFieldModule,InputIconModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  @Output() toggleActive = new EventEmitter<void>();
  onButtonClick() {
    console.log('clis');
    
    this.toggleActive.emit();
  }

}
