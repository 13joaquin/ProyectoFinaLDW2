import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CardTiSComponent } from './card-ti-s/card-ti-s.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', pathMatch: 'full', redirectTo: 'home'},
  {path: 'CardTS', component: CardTiSComponent},
  {path: 'Carrito', component: CarritoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
