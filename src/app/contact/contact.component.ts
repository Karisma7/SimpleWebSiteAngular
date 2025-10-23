import { Component } from '@angular/core';
import { Ombre } from '../model/ombre.model.component';
import { ListCardComponent } from './../list-card/list-card.component';

@Component({
  selector: 'app-contact',
  imports: [ListCardComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
   ombre1! : Ombre;
    constructor(){
      this.ombre1 = new Ombre();
      this.ombre1.name = 'igris';
      this.ombre1.figureName = 'Commandant rouge-sang Domaine du monarque';
      this.ombre1.classe = 'classe S';
      this.ombre1.rang = 'Maréchal';
    }
}
