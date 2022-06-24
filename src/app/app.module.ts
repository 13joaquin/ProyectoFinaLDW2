import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedComponent } from './shared/shared.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { CardTiSComponent } from './card-ti-s/card-ti-s.component';
import { CardtlistComponent } from './cardtlist/cardtlist.component';

@NgModule({
  declarations: [
    AppComponent,
    SharedComponent,
    NavbarComponent,
    HomeComponent,
    CardTiSComponent,
    CardtlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
