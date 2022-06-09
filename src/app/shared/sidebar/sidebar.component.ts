import { Component, Input } from '@angular/core';
import { MemesService } from '../../memes/services/memes.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial() {
    return this.memesService.historial;
  }

  constructor(private memesService: MemesService) { }

  buscar(busqueda: string) {
    this.memesService.buscarMemes(busqueda);
  }
}
