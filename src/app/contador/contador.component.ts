import { Component } from '@angular/core';


@Component({
    selector:'app-contador',
    templateUrl:`contador.component.html`,
   

})
export class ContadorComponent{
    title = 'Contador';
    contador: number = 10;
    base:number= 6;
  
    calculo(value:number){
      this.contador+=value;
  
    }
}