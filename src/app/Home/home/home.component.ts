import { Component } from '@angular/core';
import { FirsPresentationComponent } from '../../Components/firs-presentation/firs-presentation.component';

@Component({
  selector: 'app-home',
  imports: [FirsPresentationComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
