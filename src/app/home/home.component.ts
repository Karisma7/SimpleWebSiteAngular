import { Component } from '@angular/core';
import { ListCardComponent } from './../list-card/list-card.component';
import{Ombre} from'./../model/ombre.model.component';

@Component({
  selector: 'app-home',
  imports: [ListCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  ombre1! : Ombre;
  constructor(){
    this.ombre1 = new Ombre();
    this.ombre1.name = 'igris';
    this.ombre1.figureName = 'Commandant rouge-sang Domaine du monarque';
    this.ombre1.classe = 'classe S';
    this.ombre1.rang = 'Maréchal';
  }

}
