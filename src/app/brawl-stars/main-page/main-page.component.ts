import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor() { }

  nuevo = {
      name:'Sergio',
      health: 0 
    }
  
  heroes=[
    {
      name:'Shelly',
      health: 3600
    },
    {
      name:'Nita',
      health: 3800
    },
    {
      name:'Colt',
      health: 2800
    },
    {
      name:'PruebaRojo',
      health: 1000
    }
  ]
  salud():void{
    
  }

  ngOnInit(): void {
  }

 

}
