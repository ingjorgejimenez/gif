import { Component } from '@angular/core'
import { GifsService } from '../../services/services.service'
import { Gif } from '../../interfaces/gifs'

@Component({
  selector: 'gifs-home-page',
  templateUrl: './home-page.component.html',
})
export class HomePageComponent {
  constructor(private gitService: GifsService) {}

  get gifs(): Gif[] {
    return this.gitService.gifList
  }
}
