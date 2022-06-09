import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MemesPageComponent } from './memes-page/memes-page.component';
import { BusquedaComponent } from './busqueda/busqueda.component';
import { ResultadosComponent } from './resultados/resultados.component';



@NgModule({
  declarations: [
    MemesPageComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MemesPageComponent
  ]
})
export class MemesModule { }
