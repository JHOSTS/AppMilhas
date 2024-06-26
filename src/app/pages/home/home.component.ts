import { Component } from '@angular/core';
import { ContainerComponent } from '../../shared/container/container.component';
import { BannerComponent } from '../../shared/banner/banner.component';
import { CardBuscaComponent } from '../../shared/card-busca/card-busca.component';
import { CardDepoimentosComponent } from '../../shared/card-depoimentos/card-depoimentos.component';
import { FormBuscaComponent } from '../../shared/form-busca/form-busca.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ContainerComponent, BannerComponent, CardBuscaComponent, CardDepoimentosComponent, FormBuscaComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
