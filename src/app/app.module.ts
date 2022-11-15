import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { ContadorComponent } from './contador/contador.component';
import { lista } from './lista/lista.components';
import { AlumnosModule } from './alumnos/alumnos.module';
import { BrawlStarsModule } from './brawl-stars/brawl-stars.module';






@NgModule({
  declarations: [
    AppComponent,
    ContadorComponent,
    lista,


  ],
  imports: [
    BrowserModule,
    AlumnosModule,
    BrawlStarsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
