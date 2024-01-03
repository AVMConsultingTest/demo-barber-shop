import { Component } from '@angular/core';

@Component({
  selector: 'app-gift-cards',
  templateUrl: './gift-cards.component.html',
  styleUrls: ['./gift-cards.component.scss']
})
export class GiftCardsComponent {
  public indexTab: number=1;
  public checkBalance : boolean= false;
}
