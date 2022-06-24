import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cargada = false;
  InfoProd: any =[];
  InfoDet: any =[];

  constructor(private htt: HttpClient) {
    this.cargarProducto();
   }

  ngOnInit(): void {
  }
cargarProducto(){
     this.htt.get('https://tiendaangular-e50b2-default-rtdb.firebaseio.com/productos.json')
     .subscribe((resp) => {
       this.cargada = true;
       this.InfoProd = resp;
       console.log(resp);
     })
   }
}
