import { Component, OnInit } from '@angular/core';
import { cards } from './cartd';
import { CartService } from '../services/cart.service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-cardtlist',
  templateUrl: './cardtlist.component.html',
  styleUrls: ['./cardtlist.component.css']
})
export class CardtlistComponent implements OnInit {

  cards : cards[] = []
  constructor(private beersDataServices: DataService, private beersCartService: CartService) { }

  ngOnInit(): void {
    this.beersDataServices.cards.subscribe(cardds => this.cards = cardds);
  }
  upQuantity(cars : cards):void{
    if(cars.stock > cars.quantity){
      cars.quantity ++;
      this.beersCartService.addToCart(cars);
    }
  }
downQuatity(cad : cards):void{
  if(cad.quantity > 0){
    cad.quantity --;
    this.beersCartService.addToCart(cad);
  }
}
varifyBeerQuaantity(carr : cards):void{
  if(carr.stock < carr.quantity){
    alert("No se puede pedir más" );
    carr.quantity = carr.stock;
  }
  if(carr.quantity < 0){
    alert("No se puede pedir menor");
    carr.quantity = 0;
  }
}
}
