import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  constructor() { }

  getCursos(){
    return ['Java', 'NodeJS', 'C#'];
  }
}
