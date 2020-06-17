import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../poke-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {

  cursos: string[] = [];
  
  constructor(private pokeApiService: PokeApiService) {
    var servico = new PokeApiService();

    this.cursos = pokeApiService.getCursos();
   }

  ngOnInit(): void {
  }

}
