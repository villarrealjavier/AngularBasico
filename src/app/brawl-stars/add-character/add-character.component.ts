import { Component, Input, OnInit } from '@angular/core';
import { Characters } from '../interfaces/character';

@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.css']
})
export class AddCharacterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  

  @Input() nuevo: Characters ={name:'', health: 0}
  @Input() heroes:Characters[] = []
  addHeroe():void{ 
    
    let nuevo2={
      name:this.nuevo.name,
      health: this.nuevo.health
    }

    this.heroes.push(nuevo2);
    this.nuevo.name='';
    this.nuevo.health=0;
   
  }
}
