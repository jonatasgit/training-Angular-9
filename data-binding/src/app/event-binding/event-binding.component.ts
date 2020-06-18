import { Component, OnInit } from '@angular/core';
import { TranslationWidth } from '@angular/common';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent implements OnInit {

  botaoClicado(){
    alert('Clicou');
  }

  valorAtual: String ="";
  valorSalvo: String = "";
  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>event.target).value;
  }

  salvarValor(valor){
    this.valorSalvo = valor;
  }
  
  isMouseOver: boolean;
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
