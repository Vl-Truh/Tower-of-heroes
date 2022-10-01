import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
<<<<<<< HEAD

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
=======
>>>>>>> 40922c04cfc864fbdbe918b31470d581a736e703

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
<<<<<<< HEAD
    FormsModule,
    AppRoutingModule
=======
    AppRoutingModule,
    FormsModule
>>>>>>> 40922c04cfc864fbdbe918b31470d581a736e703
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
