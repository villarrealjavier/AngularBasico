import { NgModule } from '@angular/core';
import { ListadoComponent } from './listado/listado.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';


@NgModule({
    declarations:[
        ListadoComponent
    ],
    exports:[
        ListadoComponent
    ],
    imports:[
        CommonModule
    ]
    
    
   
})
export class AlumnosModule{}