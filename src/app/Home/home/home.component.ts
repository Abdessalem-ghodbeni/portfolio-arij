import { Component } from '@angular/core';
import { FirsPresentationComponent } from '../../Components/firs-presentation/firs-presentation.component';
import { ParcoursAccademiqueComponent } from '../../Components/parcours-accademique/parcours-accademique.component';
import { ExpProfessionnelComponent } from '../../Components/exp-professionnel/exp-professionnel.component';

@Component({
  selector: 'app-home',
  imports: [
    FirsPresentationComponent,
    ParcoursAccademiqueComponent,
    ExpProfessionnelComponent,
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
