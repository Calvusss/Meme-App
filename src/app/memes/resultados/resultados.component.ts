import { Component } from '@angular/core';
import { MemesService } from '../services/memes.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styles: [
  ]
})
export class ResultadosComponent {

  get resultados() {
    return this.memesService.resultados;
  };

  
  constructor(private memesService: MemesService) { }
}
