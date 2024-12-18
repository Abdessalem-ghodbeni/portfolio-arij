import { Component } from '@angular/core';
import { FirsPresentationComponent } from '../../Components/firs-presentation/firs-presentation.component';
import { ParcoursAccademiqueComponent } from '../../Components/parcours-accademique/parcours-accademique.component';

@Component({
  selector: 'app-home',
  imports: [FirsPresentationComponent, ParcoursAccademiqueComponent],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
