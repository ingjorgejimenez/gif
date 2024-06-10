import { Component, Input, OnInit } from '@angular/core'
import { Gif } from '../../interfaces/gifs'

@Component({
  selector: 'gifs-card',
  templateUrl: './card-gif.component.html',
})
export class CardGifComponent implements OnInit {
  @Input()
  gif!: Gif

  ngOnInit(): void {
    if (!this.gif) throw new Error('Gif is required')
  }
}
