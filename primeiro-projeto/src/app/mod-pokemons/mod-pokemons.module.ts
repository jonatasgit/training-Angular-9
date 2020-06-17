import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';



@NgModule({
  declarations: [PokemonComponent, PokemonDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [PokemonComponent]
})
export class ModPokemonsModule { }
