import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MemesService } from '../services/memes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [
  ]
})
export class BusquedaComponent {

  @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  constructor(private memesService: MemesService) { }

  buscar() {
    this.memesService.buscarMemes(this.txtBuscar.nativeElement.value);
    this.txtBuscar.nativeElement.value = '';
  }
}
