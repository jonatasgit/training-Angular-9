import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = "http://alou.com";
  imageUrl: string = "http://lorempixel.com/400/200/sports/1/";

  dadosEntreComponentes: string = "Passando dados entre comp";
  getValor(){
    return 1;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
