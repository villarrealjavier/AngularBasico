import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  constructor( ) { }

  alumnos:string[] =['Javier', 'Pilar', 'Sergio','Vicente'];
  aprobados: string[]=[];
  jugarListas() :void{
    
    this.aprobados.push(this.alumnos[this.alumnos.length-1]);
    this.alumnos.splice(this.alumnos.length-1);
  }
  ngOnInit(): void {
  }

}
