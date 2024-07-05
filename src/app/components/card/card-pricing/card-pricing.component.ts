import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrl: './card-pricing.component.css'
})
export class CardPricingComponent  implements OnInit{
  constructor(){

  }
  @Input() gameType:string = "";
  @Input() gamePrice:string = "";

  ngOnInit(): void {

  }
}
