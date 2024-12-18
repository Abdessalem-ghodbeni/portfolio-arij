import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FirsPresentationComponent } from './Components/firs-presentation/firs-presentation.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'potfolio-arij-cadeau-slouma';
}
