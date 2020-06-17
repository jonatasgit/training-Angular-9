import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FirstComponent } from './first/first.component';
import { ModPokemonsModule } from './mod-pokemons/mod-pokemons.module';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent
  ],
  imports: [
    BrowserModule,
    ModPokemonsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
