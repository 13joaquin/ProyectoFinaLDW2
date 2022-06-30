import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { cards } from '../cardtlist/cartd';
import { BehaviorSubject, Observable } from 'rxjs';
//const URL = '' + 'cards';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private _cards : cards[] = [];
  private _cardsSubjects : BehaviorSubject<cards[]> = new BehaviorSubject(this._cards);
  public cards : Observable<cards[]> = this._cardsSubjects.asObservable();
  
  constructor(private htt: HttpClient) {
    this.htt.get<cards[]>('https://tiendaangular-e50b2-default-rtdb.firebaseio.com/productos.json').subscribe(data => {
      this._cards.push(...data);
    })
   }
   create(card:cards):void{
     this.htt.post<cards>('https://tiendaangular-e50b2-default-rtdb.firebaseio.com/productos.json',card).subscribe({
       error: error => {
         console.error('Este es un error!',error);
       },
       next: data => {
         this._cards.push(data)
       }
     });
   }
}
