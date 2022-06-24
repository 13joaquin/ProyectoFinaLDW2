import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { cards } from '../cardtlist/cartd';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

   private _card : cards[] = [];
  private _cardSubjects : BehaviorSubject<cards[]> = new BehaviorSubject(this._card);
  public cards: Observable<cards[]> = this._cardSubjects.asObservable();
  constructor() {
    
   }

  addToCart(card:cards){
    let index = this._card.findIndex(b => b.name === card.name);
    if(index === -1)this._card.push(card);
    else this._card[index].quantity = card.quantity;
    if(card.quantity == 0){
      this._card.splice(index,1);
    }
  }
}
