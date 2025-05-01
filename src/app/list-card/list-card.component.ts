import { Component, Input } from '@angular/core';
import{Ombre} from'./../model/ombre.model.component';

@Component({
  selector: 'app-list-card',
  imports: [],
  templateUrl: './list-card.component.html',
  styleUrl: './list-card.component.css'
})
export class ListCardComponent {

  @Input() ombre : Ombre = new Ombre();
  @Input() imageUrl: string = 'igris.jpg';

}
