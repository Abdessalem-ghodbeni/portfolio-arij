import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recap-exp-professionnel',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './recap-exp-professionnel.component.html',
  styleUrl: './recap-exp-professionnel.component.scss',
})
export class RecapExpProfessionnelComponent {
  today: Date = new Date();
}
