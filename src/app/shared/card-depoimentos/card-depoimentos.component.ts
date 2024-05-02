import { Component } from '@angular/core';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-card-depoimentos',
  standalone: true,
  imports: [ MatCard, MatCardContent ],
  templateUrl: './card-depoimentos.component.html',
  styleUrl: './card-depoimentos.component.css'
})
export class CardDepoimentosComponent {
  depoimento: string = `
  Recomendo fortemente a agência de viagens Jornada.
  Eles oferecem um serviço personalizado e de alta qualidade
  que excedeu minhas expectativas em minha última viagem.
  `
  autoria: string = 'Mariana Faustino'
}
