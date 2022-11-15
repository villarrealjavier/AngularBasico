import { Component } from '@angular/core';
@Component({
    selector: 'app-lista',
    templateUrl: 'lista.component.html',
    styleUrls: ['lista.component.css']

})
export class lista{
    alumnos=[
        {Nombre:'Javier', apellido:'Villarreal'},
        {Nombre:'Vicente', apellido:'Villarreal'},
        {Nombre:'Sergio', apellido:'Romero'},
        {Nombre:'Pilar', apellido:'Guzman'}

    ];
}