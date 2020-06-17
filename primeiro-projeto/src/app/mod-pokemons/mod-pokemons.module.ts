import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetailComponent } from './pokemon/pokemon-detail/pokemon-detail.component';
import { PokeApiService } from './poke-api.service';



@NgModule({
  declarations: [PokemonComponent, PokemonDetailComponent],
  imports: [
    CommonModule
  ],
  exports: [PokemonComponent],
  providers: [PokeApiService]
})
export class ModPokemonsModule { }
