import { Component, OnInit } from '@angular/core';
import { cards } from '../cardtlist/cartd';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-card-ti-s',
  templateUrl: './card-ti-s.component.html',
  styleUrls: ['./card-ti-s.component.css']
})
export class CardTiSComponent implements OnInit {

  cardss : cards[] = []
  constructor(private beerCartService : CartService) { }

  ngOnInit(): void {
    this.beerCartService.cards.subscribe(data => this.cardss = data);
    
  }
total(){
  let sum=0;
  this.cardss.forEach(cards => {
    sum += cards.quantity * cards.precio
  });
  return sum;
}
}
