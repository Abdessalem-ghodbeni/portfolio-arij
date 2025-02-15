import { Component } from '@angular/core';
import { FirsPresentationComponent } from '../../Components/firs-presentation/firs-presentation.component';
import { ParcoursAccademiqueComponent } from '../../Components/parcours-accademique/parcours-accademique.component';
import { ExpProfessionnelComponent } from '../../Components/exp-professionnel/exp-professionnel.component';
import { RecapExpProfessionnelComponent } from '../../Components/recap-exp-professionnel/recap-exp-professionnel.component';
import { CompetenceComponent } from '../../Components/competence/competence.component';
import { StagesComponent } from '../../Components/stages/stages.component';
import { ProjetsComponent } from '../../Components/projets/projets.component';
import { FooterComponent } from '../../Components/footer/footer.component';

@Component({
  selector: 'app-home',
  imports: [
    FirsPresentationComponent,
    ParcoursAccademiqueComponent,
    ExpProfessionnelComponent,
    RecapExpProfessionnelComponent,
    CompetenceComponent,
    StagesComponent,
    ProjetsComponent,
    FooterComponent,
  ],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
